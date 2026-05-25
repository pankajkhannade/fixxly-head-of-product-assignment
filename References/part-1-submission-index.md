# Part 1 — Submission index

Quick map from **assignment ask** → **your file** → **status**.

---

## PDF exports

Pre-built PDFs in [`pdfs/`](pdfs/):

| PDF | Source |
|-----|--------|
| **`pdfs/parts-1-and-3-submission.pdf`** | **Full written submission** — Part 1 + Part 3 (send this) |
| `pdfs/part-1-complete-bundle.pdf` | Part 1 only (same as executive) |
| `pdfs/part-3-business-case.pdf` | Part 3 only |
| `pdfs/part-1-executive-submission.pdf` | Part 1 executive doc + 3 UX screens |
| `pdfs/part-1-ranked-reasons-v4.pdf` | Deep dive — 5 reasons (appendix) |
| `pdfs/part-1-feature-one-pager.pdf` | Full feature spec (appendix) |
| `pdfs/part-1-ux-sketch-3-screens.pdf` | Detailed wireframes (appendix) |
| `pdfs/bill-banayein-flow.pdf` | Locked v1 flow |
| `pdfs/appendix-market-context-one-page.pdf` | Market appendix |
| `pdfs/assignment-details.pdf` | Original brief |

Regenerate: `python3 References/scripts/md_to_pdf.py`

---

## Assignment Part 1 checklist

| # | What Fixxly asked for | File | Status |
|---|------------------------|------|--------|
| **1.1** | 5 ranked reasons (first principles, no talking to team) | [`part-1-ranked-reasons-v4.md`](part-1-ranked-reasons-v4.md) | ✅ Ready |
| **1.2** | AI feature one-pager (not wireframe) | [`part-1-feature-one-pager.md`](part-1-feature-one-pager.md) | ✅ Ready |
| **1.2a** | What does the AI do? | One-pager § "What the AI does" | ✅ |
| **1.2b** | What data does it need? | One-pager § "Data architecture" | ✅ |
| **1.2c** | Model / approach and why | One-pager § "Model / approach — hybrid" | ✅ |
| **1.2d** | Success at 30 days | One-pager § "Success at 30 days" | ✅ |
| **1.3** | UX sketch — **3 screens max** | [`part-1-ux-sketch-3-screens.md`](part-1-ux-sketch-3-screens.md) | ✅ Spec ready · **Figma/photos optional** |

---

## Supporting docs (append to PDF if useful)

| File | Use in submission |
|------|-------------------|
| [`bill-banayein-flow.md`](bill-banayein-flow.md) | Locked product flow (reference) |
| [`appendix-market-context-one-page.md`](appendix-market-context-one-page.md) | Market context appendix |
| [`market-research-fixxly-contractors.md`](market-research-fixxly-contractors.md) | Deep research (optional appendix) |
| [`assignment-details.md`](assignment-details.md) | Original brief |

---

## One-paragraph summary for PDF cover (Part 1)

**Retention diagnosis:** ~40% of Week-1 contractors don’t reorder within 14 days primarily because **order 2+ still goes to the hardware dealer** (#1) and the app is a **shop, not a job-start workflow** (#3)—not because contractors never need materials again. **Bill Banayein** attacks this by letting the contractor **voice or template a full client material bill**, see an honest **Fixxly vs dealer split**, add **markup**, and share a **white-label PDF** before the dealer gets the list—then one-click order Fixxly lines. Success at 30 days: **≥1.5 bills/contractor/week**, **≥45% bill→Fixxly order**, **≥50% bills shared with client**.

---

## Assignment Part 3 checklist

| # | What Fixxly asked for | File / location | Status |
|---|------------------------|-----------------|--------|
| **3.1** | Metrics table (Current vs 90 days) | [`part-3-business-case.md`](part-3-business-case.md) | ✅ |
| **3.2** | Assumptions stated clearly | Part 3 § Assumptions | ✅ |
| **3.3** | 3 sentences — why this feature first | Part 3 § Why Bill Banayein | ✅ |
| **3.4** | Cover paragraph (*one thing I'd change*) | [`submission-cover.md`](submission-cover.md) | ✅ |

### Part 3 table (final numbers)

| Metric | Current | With Bill Banayein (90 days) |
|--------|---------|------------------------------|
| Week-2 retention % | **60%** | **74%** |
| Orders / contractor / month | **9** | **15** |
| Monthly GMV per store (₹) | **₹36 lakh** | **₹90 lakh** |
| CAC payback period | **~0.7 mo** | **~0.4 mo** |

*Reconciled:* 300 MAC × 15 orders = 4,500/mo = 150 OPD · GMV = 4,500 × ₹2,000 = ₹90L ✓

---

## Full submission checklist (Parts 1 + 3 PDF)

| # | What Fixxly asked for | File | Status |
|---|------------------------|------|--------|
| Cover | *One thing I'd change* paragraph | `submission-cover.md` → merged PDF page 1 | ✅ |
| Part 1 | 5 reasons + AI feature + 3 UX screens | `part-1-executive-submission.md` | ✅ |
| Part 3 | Business case table + 3 sentences | `part-3-business-case.md` | ✅ |
| **Send** | PDF Parts 1 + 3 | **`pdfs/parts-1-and-3-submission.pdf`** | ✅ Regenerate after edits |
| Part 2 | Prototype link (separate) | *You add link in email* | ⏳ Pending |

Suggested email filename: `Fixxly – Head of Product – Pankaj Khannade – Parts 1 and 3.pdf`

---

## What you still need to do (minimal)

1. **Part 2 link:** Add Colab / GitHub / Replit URL in submission email (and optionally replace placeholder in `submission-cover.md`)
2. **Regenerate PDF** after any last edit: `python3 References/scripts/md_to_pdf.py`

---

## The 5 reasons (at a glance — for slides)

1. **Next run goes to hardware dealer** (WhatsApp, credit, spec, one message)  
2. **14-day metric blends job types** — overstates churn for daily-site contractors  
3. **App is a shop, not job workflow** — no client bill / hisaab  
4. **Next basket not findable / not stocked** — silent search exit  
5. **Tail:** bad delivery, cohort noise, no purchase in window  

**Hero feature:** Bill Banayein → attacks **#1 + #3** (+ honest split for **#4**)
