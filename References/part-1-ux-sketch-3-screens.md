# Part 1.3 — UX sketch: Bill Banayein (3 screens)

**Fixxly Head of Product · Part 1 retention feature**  
*Pairs with:* `part-1-ranked-reasons-v4.md` · `part-1-feature-one-pager.md` · `bill-banayein-flow.md`

**Feature:** Bill Banayein — contractor builds a **client material bill** by voice or template, sees **Fixxly vs dealer split**, adds markup, shares **white-label PDF**.

**Design for:** Raju Kumar, plumber, 10th pass, on-site **7:45 AM**, dusty hands, low literacy, **Kannada + English**, workers waiting nearby.

**Not in scope for these 3 screens:** login, home entry tile, site picker, dealer WhatsApp — implied before/after.

---

## Why only 3 screens

The assignment caps UX at **3 screens**. These map to the **highest-friction moments** in the flow:

| Screen | Job-to-be-done | Why it matters at 7:45 AM |
|--------|----------------|---------------------------|
| **1. Bol ke banao** | Start bill without typing SKUs | Voice + template beats catalog search on site |
| **2. Hisaab + split** | Trust the numbers; see what Fixxly can deliver | Dealer wins today because contractor gets one full quote |
| **3. Client ko bhejo** | Share bill under contractor brand; act on Fixxly lines | Retention = owning the client money conversation |

---

## Global UX rules (all 3 screens)

| Rule | Implementation |
|------|----------------|
| One primary action | One orange button per screen; secondary = text link or grey |
| Bilingual labels | English line + Hindi/Kannada below (never English-only walls) |
| Numbers > text | Prices, qty, totals in **20px+ bold**; labels in 14px |
| Thumb zone | Primary CTA fixed bottom, min **52px** height, full width |
| Trust | “30 min” only on Fixxly lines; “estimate” tag on dealer/reference prices |
| No Fixxly on client output | Screen 3 PDF preview shows **Raju Kumar Plumbing** header only |

**Palette (match MVP):** Navy `#1A2744` header · Orange `#F97316` CTA · Green Fixxly · Grey dealer · Cream background

---

## Flow (3 screens)

```
[Home → Bill Banayein]     (entry — not sketched)
        ↓
┌───────────────────┐
│ SCREEN 1          │  Job type + Template OR Voice + LIVE bill strip
│ Bol ke banao      │
└─────────┬─────────┘
          │  "Aage badho →"  (bill has ≥1 line)
          ↓
┌───────────────────┐
│ SCREEN 2          │  Edit qty · Fixxly green / Dealer grey · Markup
│ Hisaab + split    │
└─────────┬─────────┘
          │  "Client ko dikhayein →"
          ↓
┌───────────────────┐
│ SCREEN 3          │  PDF preview · Share · Order Fixxly · WhatsApp dealer
│ Client ko bhejo   │
└───────────────────┘
```

---

## Screen 1 — Bol ke banao *(Speak & build)*

**Purpose:** Contractor picks job type and creates the first draft of the bill **without searching the catalogue**.

**Primary CTA:** `Aage badho →` / `आगे बढ़ो` (enabled when ≥1 line in live bill)

### Wireframe

```
┌─────────────────────────────────────┐
│ ←  Bill Banayein                    │  navy header
│     बिल बनाएं                       │
├─────────────────────────────────────┤
│ Kaun sa kaam? / Which job?          │
│                                     │
│ ┌─────────┐ ┌─────────┐             │
│ │ 🚽      │ │ 🔧      │             │
│ │ Bathroom│ │ PVC     │             │  large tiles
│ │ बाथरूम  │ │ repair  │             │  2×2 grid
│ └─────────┘ └─────────┘             │
│ ┌─────────┐ ┌─────────┐             │
│ │ ⚡      │ │ ✏️      │             │
│ │Electrical│ │ Custom  │             │
│ └─────────┘ └─────────┘             │
│                                     │
│ ─── Kaise batayein? / How to add? ──│
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ 🎙️  BOLO / SPEAK          [●]  │ │  voice — default
│ │     "Aisa bolein" ▶ sample      │ │  play sample first
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ 📋  Template se / From template │ │  secondary path
│ └─────────────────────────────────┘ │
│                                     │
│ ╔═════════════════════════════════╗ │
│ ║ LIVE BILL / बिल बन रहा है       ║ │  sticky strip
│ ║ ● Recording… 0:12               ║ │
│ ║ ┌─────────────────────────────┐ ║ │
│ ║ │ PVC elbow 4"    ×6    [✎]  │ ║ │  lines appear
│ ║ │ Solvent 500ml   ×1    [✎]  ║ │  as AI parses
│ ║ │ + line add karein           │ ║ │
│ ║ └─────────────────────────────┘ ║ │
│ ╚═════════════════════════════════╝ │
├─────────────────────────────────────┤
│      [ Aage badho → / आगे बढ़ो ]    │  orange, full width
└─────────────────────────────────────┘
```

### Key interactions

| Element | Behaviour |
|---------|-----------|
| **Sample play** | Before first record: 8s audio — *"Bathroom fitting… 6 elbow 4 inch, 1 solvent, 2 angle cock…"* |
| **Record button** | Large red circle 64px; pulsing ring while active |
| **Live bill strip** | Updates every ~2–3s from partial STT + parse; contractor sees app “listening” |
| **Edit [✎]** | Inline qty stepper (+/−); no keyboard for item name on this screen |
| **Template path** | Pre-fills lines for selected job type; same live strip, no mic |

### Copy (on-screen)

- Header: **Bill Banayein** / **बिल बनाएं**
- Sample hint: **Pehle sample sunein — phir boliye** / *Listen first, then speak*
- Empty bill: **Abhi kuch nahi — bolo ya template chunein**

### Low-literacy choices

- Job types = **emoji + 1 word**, not paragraphs  
- Voice is **first** option (template second)  
- Bill lines show **trade names** contractors say, not SKU codes  
- No keyboard on screen 1

---

## Screen 2 — Hisaab + split *(Review & split)*

**Purpose:** Contractor **trusts and edits** the bill, sees **Fixxly vs dealer**, sets **markup** (required before client share).

**Primary CTA:** `Client ko dikhayein →` / `क्लाइंट को दिखाएं`

### Wireframe

```
┌─────────────────────────────────────┐
│ ←  Hisaab dekho                     │
│     हिसाब देखो · Bathroom           │
├─────────────────────────────────────┤
│  ┌─────────────────────────────────┐│
│  │ FIXXLY SE · 30 min    3 items  ││  green band
│  │ ● PVC elbow 4"  ×6    ₹252     ││
│  │ ● Solvent 500ml ×1    ₹165     ││
│  │ ● Teflon tape   ×1    ₹85      ││
│  │              Subtotal  ₹502     ││
│  └─────────────────────────────────┘│
│  ┌─────────────────────────────────┐│
│  │ DEALER SE · estimate    2 items  ││  grey band
│  │ ○ Angle cock    ×2    ₹840 ~   ││  ~ = estimate
│  │ ○ Shower arm    ×1    ₹310 ~   ││
│  │              Subtotal  ₹1150 ~  ││
│  └─────────────────────────────────┘│
│                                     │
│  Markup / मार्जिन (client price)    │
│  ┌───┬───┬───┬───┬───┐              │
│  │ 0%│ 8%│12%│15%│ ✎ │              │  chip select
│  └───┴───┴───┴───┴───┘              │  12% default
│                                     │
│  ┌─────────────────────────────────┐│
│  │ Aapka fayda / Your margin       ││
│  │ Cost ₹1,652  →  Client ₹1,850  ││
│  │ Margin ₹198                     ││  big numbers
│  └─────────────────────────────────┘│
│                                     │
│  ℹ️ Client ko sirf aapka naam dikhega│
│     Fixxly nahi dikhega             │
├─────────────────────────────────────┤
│   [ Client ko dikhayein → ]         │
└─────────────────────────────────────┘
```

### Key interactions

| Element | Behaviour |
|---------|-----------|
| **Fixxly block** | Green left border; tap line → qty edit; **Order now** badge on section |
| **Dealer block** | Grey; **estimate** tag on every line; tap to confirm or remove |
| **Markup chips** | 0 / 8 / 12 / 15 % + custom; **must select** before CTA enables |
| **Margin summary** | Shows contractor **cost vs client total** — never shown to client |
| **Drag between sections** | Optional v2; v1: long-press → “Fixxly pe bhejo” if in stock |

### Copy

- Fixxly header: **Fixxly se — 30 min mein** / *From Fixxly — 30 minutes*
- Dealer header: **Dealer se — dukaan se lena** / *From dealer — pick up locally*
- Dealer prices: **≈ est. · confirm karein** / *approximate · please confirm*

### Low-literacy choices

- **Colour split** (green vs grey) beats reading “fulfilment channel”  
- Markup as **chips**, not percentage input field  
- Margin in **₹** (fayda) — contractors think in rupees earned  
- Max **5–7 lines visible** per section; scroll for more

---

## Screen 3 — Client ko bhejo *(Share & act)*

**Purpose:** Preview **white-label PDF**, share with client, then **order Fixxly part** or **WhatsApp dealer list** (no prices to dealer).

**Primary CTA:** `WhatsApp pe bhejo` / `व्हाट्सऐप पर भेजें`  
**Secondary:** `Fixxly order karein` (Fixxly lines only)

### Wireframe

```
┌─────────────────────────────────────┐
│ ←  Client bill                     │
│     क्लाइंट बिल                     │
├─────────────────────────────────────┤
│  ┌─────────────────────────────────┐│
│  │  [RK]  RAJU KUMAR PLUMBING      ││  contractor
│  │        राजू कुमार प्लंबिंग       ││  letterhead
│  │        📞 98765 43210           ││  NO Fixxly logo
│  │  ─────────────────────────────  ││
│  │  Site: HSR Layout Sector 2      ││
│  │  Date: 25 May 2026              ││
│  │                                 ││
│  │  Material hisaab                ││
│  │  PVC elbow 4"    6    ₹420     ││  sell prices
│  │  Solvent 500ml   1    ₹185     ││  (with markup)
│  │  Angle cock      2    ₹960     ││
│  │  Shower arm      1    ₹350     ││
│  │  ─────────────────────────────  ││
│  │  Total material    ₹1,915       ││  bold
│  │  (Labour alag)                  ││
│  └─────────────────────────────────┘│
│         ↕ scroll preview              │
│                                     │
│  ┌─────────────────────────────────┐│
│  │ 📱 WhatsApp pe bhejo            ││  orange primary
│  └─────────────────────────────────┘│
│  ┌─────────────────────────────────┐│
│  │ 🚚 Fixxly order (3 item · ₹502) ││  green secondary
│  └─────────────────────────────────┘│
│  ┌─────────────────────────────────┐│
│  │ 💬 Dealer ko list (bina rate)   ││  outline tertiary
│  └─────────────────────────────────┘│
│                                     │
│  PDF save · Print                   │  text links
└─────────────────────────────────────┘
```

### Key interactions

| Action | Result |
|--------|--------|
| **WhatsApp pe bhejo** | Opens share sheet with PDF/image + pre-filled message to client |
| **Fixxly order** | Adds green-section lines to cart → checkout (30 min delivery) |
| **Dealer ko list** | WhatsApp to saved dealer: site + item spec + qty — **no rates** |
| **PDF save / Print** | System print dialog; contractor can save PDF locally |

### Copy

- PDF title: **Material hisaab** / **सामान का हिसाब**
- Footer on PDF: *Labour alag hoga* / *Labour charged separately*
- Dealer WhatsApp preview: *"HSR Sector 2 — 2 angle cock chrome, 1 shower arm SS"*

### Low-literacy choices

- PDF looks like **handwritten estimate pad** — familiar format  
- **Three actions stacked** with icons + 1 line each (not a menu)  
- Fixxly button shows **item count + ₹** so contractor knows what they’re ordering  
- Client PDF = **sell prices only**; no cost, no Fixxly, no dealer split

---

## Screen specs (for Figma)

| Spec | Value |
|------|-------|
| Frame | Android 390 × 844 |
| Header height | 56px + safe area |
| Bottom CTA | 52px + 16px padding + safe area |
| Job tile | 160 × 88px min |
| Record button | 64px circle |
| Type scale | Label 12 · Body 14 · Price 18 · Total 22 |
| Touch target | Min 48 × 48px |

---

## Annotations for reviewer (assignment criteria)

| Assignment ask | How these 3 screens answer it |
|----------------|-------------------------------|
| Low literacy | Emoji job tiles, voice-first, ₹ margin not %, colour-coded split |
| On-site | Voice + live bill; no SKU search; big tap targets |
| 7:45 AM | Sample-before-record; template fallback; one CTA per screen |
| Attacks #1 reason | Intercepts dealer at **client quote** — full bill before dealer WhatsApp |
| AI visible but not chatty | Live bill strip = AI parsing feedback; not a chat bubble UI |

---

## Figma recreation checklist

- [ ] Screen 1: 4 job tiles, voice card with sample button, live bill strip with 2 sample lines
- [ ] Screen 2: Green Fixxly block (3 items), grey dealer block (2 items), markup chips at 12%
- [ ] Screen 3: PDF mock with Raju Kumar header (no Fixxly), 3 action buttons
- [ ] Component: Primary button orange, header navy, qty stepper
- [ ] Optional: EN \| हिं toggle on header (one mock per language is enough)

---

## Alternative: paper sketch tip

If sketching on paper at 7:45 AM theme:

1. Draw **phone outline** with thick bottom button on each page  
2. Use **green highlighter** for Fixxly section, **grey pencil** for dealer  
3. Write **Hindi under every English label**  
4. Photograph 3 pages → paste into submission PDF  

---

*Submission bundle: Part 1.1 `part-1-ranked-reasons-v4.md` · Part 1.2 `part-1-feature-one-pager.md` · Part 1.3 this file (+ Figma link or photos when ready)*
