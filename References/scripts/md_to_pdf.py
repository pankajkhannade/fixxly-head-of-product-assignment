#!/usr/bin/env python3
"""Convert Fixxly Assignment markdown references to PDF via Chrome headless."""

from __future__ import annotations

import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

import markdown
from markdown.extensions.tables import TableExtension
from markdown.extensions.fenced_code import FencedCodeExtension

ROOT = Path(__file__).resolve().parent.parent
PDF_DIR = ROOT / "pdfs"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# Individual exports (appendix / working docs)
FILES = [
    "submission-cover.md",
    "part-1-executive-submission.md",
    "part-3-business-case.md",
    "part-1-submission-index.md",
    "part-1-ranked-reasons-v4.md",
    "part-1-feature-one-pager.md",
    "part-1-ux-sketch-3-screens.md",
    "bill-banayein-flow.md",
    "appendix-market-context-one-page.md",
    "assignment-details.md",
]

BUNDLE_SOURCE = "part-1-executive-submission.pdf"

CSS = """
@page { margin: 16mm 14mm; size: A4; }
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 10.5pt;
  line-height: 1.5;
  color: #1a1a1a;
  max-width: 100%;
}
h1 {
  font-size: 22pt;
  color: #1a2744;
  border-bottom: 3px solid #f97316;
  padding-bottom: 8px;
  margin-top: 0;
  line-height: 1.2;
}
h2 {
  font-size: 13pt;
  color: #1a2744;
  margin-top: 1.6em;
  page-break-after: avoid;
  border-left: 4px solid #f97316;
  padding-left: 10px;
}
h3 { font-size: 11pt; color: #333; margin-top: 1.1em; page-break-after: avoid; }
h4 { font-size: 10.5pt; color: #444; }
p, li { orphans: 3; widows: 3; }
table {
  border-collapse: collapse;
  width: 100%;
  margin: 0.8em 0 1.2em;
  font-size: 9.5pt;
  page-break-inside: avoid;
}
th, td { border: 1px solid #d0d0d0; padding: 7px 9px; text-align: left; vertical-align: top; }
th { background: #1a2744; color: #fff; font-weight: 600; }
tr:nth-child(even) td { background: #f9f9fb; }
code {
  font-family: "SF Mono", Menlo, Monaco, monospace;
  font-size: 8.5pt;
  background: #f0f0f0;
  padding: 1px 4px;
  border-radius: 3px;
}
pre {
  font-family: "SF Mono", Menlo, Monaco, monospace;
  font-size: 7pt;
  line-height: 1.3;
  background: #f5f7fa;
  border: 1px solid #c8d0dc;
  border-left: 4px solid #1a2744;
  border-radius: 4px;
  padding: 12px 14px;
  white-space: pre;
  overflow-x: auto;
  page-break-inside: avoid;
  margin: 1em 0;
}
pre code { background: none; padding: 0; font-size: inherit; }
blockquote {
  border-left: 4px solid #f97316;
  margin: 1.2em 0;
  padding: 0.6em 1em;
  color: #333;
  background: #fff8f3;
  font-size: 11pt;
  font-weight: 500;
  page-break-inside: avoid;
}
hr { border: none; border-top: 2px solid #e8e8e8; margin: 1.8em 0; }
ul, ol { padding-left: 1.3em; margin: 0.4em 0; }
li { margin: 0.2em 0; }
a { color: #1a2744; }
strong { color: #111; }
em { color: #555; }
body > p:first-of-type em { color: #666; font-size: 10pt; }
img {
  display: block;
  max-width: 42%;
  margin: 0.8em auto 1em;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  page-break-inside: avoid;
}
p img + em, img + p { text-align: left; }
figure { margin: 1em 0; page-break-inside: avoid; }
"""


def _rewrite_images(html: str, md_dir: Path) -> str:
    """Resolve relative img src to file:// URIs for Chrome PDF."""

    def repl(match: re.Match[str]) -> str:
        before, src, after = match.group(1), match.group(2), match.group(3)
        if src.startswith(("http://", "https://", "data:", "file:")):
            return match.group(0)
        resolved = (md_dir / src).resolve()
        if resolved.exists():
            return f'{before}{resolved.as_uri()}{after}'
        return match.group(0)

    return re.sub(r'(<img[^>]+src=")([^"]+)(")', repl, html)


def md_to_html(md_path: Path) -> str:
    text = md_path.read_text(encoding="utf-8")
    body = markdown.markdown(
        text,
        extensions=[TableExtension(), FencedCodeExtension(), "nl2br"],
    )
    body = _rewrite_images(body, md_path.parent)
    title = md_path.stem.replace("-", " ").title()
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>{title}</title>
  <style>{CSS}</style>
</head>
<body>{body}</body>
</html>"""


def html_to_pdf(html: str, pdf_path: Path) -> None:
    with tempfile.NamedTemporaryFile(suffix=".html", delete=False, mode="w", encoding="utf-8") as f:
        f.write(html)
        html_path = Path(f.name)
    try:
        pdf_path.parent.mkdir(parents=True, exist_ok=True)
        cmd = [
            CHROME,
            "--headless=new",
            "--disable-gpu",
            "--no-pdf-header-footer",
            f"--print-to-pdf={pdf_path.resolve()}",
            html_path.resolve().as_uri(),
        ]
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
        if result.returncode != 0 or not pdf_path.exists():
            raise RuntimeError(result.stderr or result.stdout or "Chrome PDF failed")
    finally:
        html_path.unlink(missing_ok=True)


def main() -> int:
    PDF_DIR.mkdir(parents=True, exist_ok=True)
    ok, fail = [], []
    for name in FILES:
        md_path = ROOT / name
        if not md_path.exists():
            fail.append(f"{name} (missing)")
            continue
        pdf_path = PDF_DIR / (md_path.stem + ".pdf")
        try:
            html_to_pdf(md_to_html(md_path), pdf_path)
            ok.append(pdf_path.name)
            print(f"✓ {pdf_path.name}")
        except Exception as e:
            fail.append(f"{name}: {e}")
            print(f"✗ {name}: {e}", file=sys.stderr)

    bundle = PDF_DIR / "part-1-complete-bundle.pdf"
    source = PDF_DIR / BUNDLE_SOURCE
    if source.exists():
        shutil.copy2(source, bundle)
        print(f"✓ {bundle.name} (Part 1 only)")

    try:
        from pypdf import PdfWriter

        combined = PDF_DIR / "parts-1-and-3-submission.pdf"
        w = PdfWriter()
        merge_names = [
            "submission-cover.pdf",
            "part-1-executive-submission.pdf",
            "part-3-business-case.pdf",
        ]
        merged = [PDF_DIR / n for n in merge_names if (PDF_DIR / n).exists()]
        for p in merged:
            w.append(str(p))
        if len(merged) >= 2:
            w.write(str(combined))
            print(f"✓ {combined.name} (Parts 1 + 3 — send to Fixxly)")
    except ImportError:
        pass

    print(f"\n{len(ok)} PDFs → {PDF_DIR}")
    if fail:
        print("Failed:", ", ".join(fail), file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
