# Part 1.2 — Feature one-pager: **Bill Banayein**

**One AI-powered feature** for Part 1 retention.  
*Not the default app flow — one entry among browse / cart / order; retention wedge for **new jobs**.*

---

## Which reason this attacks

| Rank | Reason | Role |
|------|--------|------|
| **#1** | Next material run goes to **hardware dealer** (WhatsApp / credit / spec) | **Biggest structural bet** — intercept at **client hisaab** before dealer gets full list |
| **#2** | **14-day metric** mixes new-site jobs vs platform churn | **New job → new bill** each time; measure bills/week + Fixxly lines per bill |
| **#3** | App = passive **SKU catalog**, no business workflow | **Primary product attack** — bill creation, not browse |
| **#4** | Next basket **not on Fixxly** / silent search exit | **Honest split** + reference master prices for full job |

*#5 (trust, cohort noise) = OTIF on Fixxly orders + segmented metrics.*

---

## Problem (one paragraph)

Week-1 contractors **do** need materials again — usually on a **new job**, client often **pays for materials**, and the **hardware dealer** gets one WhatsApp: *full list + price + udhaar*. Fixxly wins the **first urgent order**; it loses **order 2+** because the app is only a shop, not where the contractor **builds the client bill**. **Bill Banayein** makes Fixxly the place every job starts: **full material estimate → markup → share with client (contractor brand only) → order Fixxly lines → WhatsApp dealer the rest.**

---

## One-liner

> **Contractor creates a client material bill in 3 minutes — voice or template — sees Fixxly vs dealer split, adds markup, shares PDF. Customer never sees Fixxly.**

---

## Persona & UX principles

| Constraint | Design response |
|------------|-----------------|
| **10th / 12th pass**, not tech-savvy | One step per screen; big tiles; photos > text; max 2 actions per screen |
| **On-site, 7:45am**, dusty hands | Voice-first option; live bill while speaking; thumb-sized CTAs |
| **Multilingual (Bangalore)** | Contractor UI: **Kannada + English** (toggle); voice STT in both; client PDF matches contractor choice |
| **Low trust in apps** | Sample voice demo before first record; live bill builds **while** they speak (instant feedback) |
| **Makes money on markup** | **Markup required at launch** — client never sees Fixxly cost or reference cost |

**Customer rule:** End client sees **only contractor name / phone / logo** on PDF — **never Fixxly**.

---

## End-to-end flow (v1)

```
Login → Home (browse / cart / order remain default)
  → Bill Banayein  [feature entry — not default path]

  → Select job type

  → Choose input mode:
       A) Prebuilt template (lines + qty pre-filled)
       B) Voice recording
            · Play sample recording (“aisa bolein”)
            · Record → LIVE bill updates on screen as AI parses
            · Contractor sees lines appear in real time → drives adoption

  → Edit bill: materials + qty (+ brand optional) + add lines later

  → Select site name

  → AI prices:
       · Fixxly lines → live store price + stock flag
       · Other lines → master reference price (multi-source crawl, cross-verified)
       · Unknown item → fetch online → append master → tag “estimate”
       · Brand given → that brand SKU; no brand → national default + “ya iss class ka”

  → Contractor review (cost vs sell — contractor only)

  → Split view:
       · Fixxly se — order now (30 min)
       · Dealer se — local hardware (no Fixxly stock)

  → Markup (% on total and/or per section; per-line override)

  → Preview client PDF (contractor letterhead only)

  → Share to client (WhatsApp / image / PDF)

  → [One-click Order Fixxly part]
  → [WhatsApp dealer list — SKUs + qty + site, NO prices]
```

---

## What the AI does

**Bill Banayein is not open-ended chat.** AI orchestrates **bill assembly + pricing + split**:

```
Job type + (template | voice stream)
        ↓
[1] Parse materials + qty + brand     ← STT + NLU (streaming for live bill)
        ↓
[2] Map lines → master catalogue      ← retrieval + aliases (Kn / En / trade)
        ↓
[3] Price each line                   ← Fixxly live | master median | web fetch new SKU
        ↓
[4] Cross-verify reference prices     ← multi-source crawl; outlier drop; source hierarchy
        ↓
[5] Overlay Fixxly stock @ store      ← split: fulfil vs dealer
        ↓
[6] Apply contractor markup           ← rules + UI
        ↓
[7] Generate client PDF               ← white-label; sell prices only
        ↓
[8] Dealer WhatsApp payload           ← spec + qty only, no rates
```

**Live voice bill:** Partial transcripts update draft lines every ~2–3s so contractor **sees the app “listening”** before they finish.

---

## Data architecture

### Two catalogues

| Catalogue | Contents | Pricing |
|-----------|----------|---------|
| **Fixxly fulfilment** | In-stock @ dark store | Live, exact |
| **Reference master** | Trade SKUs (incl. not stocked) | Multi-source **estimate**; clearly tagged in UI |

**Reference price hierarchy (pilot — full crawl):**  
Manufacturer MRP → authorised e-commerce → competitor public listings ([HomeRun](https://home-run.co/) etc.) → local store samples → median + outlier rejection → store in master with `source`, `updated_at`.

**Unknown SKU at quote time:** Web search → normalize → append master → show contractor **“Nayi line — confirm keemat”** before client share.

*Assignment baseline:* order history, SKU catalogue, contractor profile — **extended** with reference master, inventory, contractor branding (name, phone, logo).

| Data | Use | Launch |
|------|-----|--------|
| Order history | Templates, frequent lines | Yes |
| Fixxly SKU + inventory | Split + order | Yes |
| Reference master | Full-job pricing | Yes — pilot crawl |
| Contractor profile | PDF letterhead, language, markup default | Yes |
| Site name list | Reuse prior sites | Nice-to-have |

---

## Model / approach — hybrid (and why)

| Step | Approach | Why |
|------|----------|-----|
| Voice → lines | **Streaming STT + constrained NLU** | Live bill; Kannada + English + Hindi|
| Job → template | **Rules** | Auditable BOM seeds |
| Line → SKU | **Retrieval** (master + aliases) | No invented SKUs |
| Reference price | **Crawl + median + rules** | Cross-verify; tag as **estimate** |
| New SKU fetch | **Search + extract + human confirm** | Expand master; avoid silent wrong price |
| Fixxly split | **Hard inventory rule** | LLM cannot mark OOS as Fixxly |
| Client PDF copy | **Templates** (+ optional LLM for item labels) | Consistent, cheap |
| Markup | **Rules + UI** | Business-critical |

**Why not pure LLM:** Hallucinated SKUs/prices → contractor loses face with client.  
**Why not pure rules:** Voice and messy trade names need NLU + retrieval.

---

## Client vs contractor vs dealer outputs

| Audience | Sees | Does not see |
|----------|------|--------------|
| **Client** | Contractor-branded PDF; item, qty, **sell rate**, total; optional labour line | Fixxly, cost prices, dealer list |
| **Contractor** | Full bill; cost vs sell; Fixxly / dealer tags; margin ₹ | — |
| **Dealer (WhatsApp)** | Site, SKU spec, qty | **Any prices** (avoids leaking reference rates) |

**Accepted at launch:** Dealer may receive full shopping list — tackle bundle / credit competition later.

---

## Why this moves retention (not BAU reorder)

| BAU “order again” | Bill Banayein |
|-------------------|---------------|
| Same basket replay | **New job → new bill** every time |
| Competes with dealer on tap speed | Competes at **client money conversation** |
| Needs same site | Works **new site daily** |
| Consumer pattern | **Contractor business** tool + partial fulfilment |

**North star:** **Bills per contractor per week** → **Fixxly order rate per bill** (in-stock lines).

---

## Success at 30 days (pilot: 1 store)

| Metric | Target |
|--------|--------|
| **Bills created / active contractor / week** | ≥1.5 (vs holdout ~0.3 browse-only) |
| **Bill → Fixxly order (any in-stock line)** | ≥45% within 7d |
| **Bill → client share** | ≥50% of completed bills |
| **Orders / contractor / week** | **+30%** vs holdout |
| **Voice path adoption** (of bills) | ≥25% after sample demo |
| **Time to first shareable PDF** | **&lt;5 min** median |
| **Pricing dispute / “galat hisaab”** | &lt;8% of shared bills |

**Segmented:** D14 reorder for users who created ≥1 bill in days 1–14.

---

## 30-day rollout

| Week | Ship |
|------|------|
| **W1** | 3 job types; template path; split; markup; white-label PDF; Fixxly one-click order |
| **W2** | Voice + **sample recording** + **live bill**; Kannada STT |
| **W3** | Master crawl + cross-verify; unknown-SKU fetch |
| **W4** | Metrics; dealer WhatsApp format polish |

---

## Risks & mitigations

| Risk | Mitigation |
|------|-------------|
| Dealer gets full list (Risk 1) | Accepted launch; **order Fixxly first** in flow; revisit credit/bundle later |
| Wrong reference price | Estimate label; multi-source median; contractor confirm gate |
| Voice fails / noise on site | Template fallback always visible; edit every line |
| Customer sees Fixxly | White-label PDF only; QA checklist |
| Scope creep on crawl | Job-type scoped SKU universe first; expand weekly |

---

## Founder sentence

**Bill Banayein puts Fixxly at the start of every job — full client hisaab, honest Fixxly vs dealer split, contractor keeps the margin — so order 2 is natural, not a forgotten reorder button.**

---

## Part 1.3 UX (3 screens)

Full wireframes, copy, and Figma checklist: **`part-1-ux-sketch-3-screens.md`**

| Screen | Name | Purpose |
|--------|------|---------|
| 1 | **Bol ke banao** | Job type + voice/template + **live bill strip** while recording |
| 2 | **Hisaab + split** | Edit lines · Fixxly green / dealer grey · markup chips · margin ₹ |
| 3 | **Client ko bhejo** | White-label PDF preview · WhatsApp share · Order Fixxly · Dealer list |
