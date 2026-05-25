# Fixxly Assignment

Head of Product assignment workspace: strategy docs + two runnable app prototypes.

---

## Business context (for reference)

- Fixxly delivers **building materials to contractors in ~30 minutes**
- **3 dark stores** live: Koramangala, Whitefield, HSR
- Each store ~**60 OPD** today → target **150 OPD within 90 days**
- Current real product: contractors **browse → add to cart → order** (basic Android app)
- Retention problem: **40% of Week-1 contractors don't reorder within 14 days**
- Hero retention feature (Part 1): **Bill Banayein** — client material bill via voice/template → Fixxly vs dealer split → markup → share PDF

---

## Folder structure (Path 1)

Two **sibling** apps — same parent folder, different purposes. Do not merge codebases.

```
Cursor coding/
├── Fixxly/                              ← v3 PROTOTYPE (legacy)
│   ├── src/screens/BillBanayein.tsx     ← Bill Banayein flow
│   ├── src/lib/audio/                   ← PCM capture, WAV
│   ├── src/lib/ai/                      ← Sarvam STT, MiniMax parse
│   ├── .env.local                       ← API keys (gitignored)
│   ├── vite.config.ts                   ← port 5180, Sarvam/MiniMax proxies
│   └── README.md
│
└── Fixxly Assignment/                   ← THIS WORKSPACE (interview pack)
    ├── README.md                        ← you are here
    ├── References/                      ← Part 1, 3 written docs
    │   ├── assignment-details.md
    │   ├── part-1-ranked-reasons-v4.md
    │   ├── part-1-feature-one-pager.md
    │   ├── bill-banayein-flow.md
    │   └── market-research-fixxly-contractors.md
    └── fixxly-app/                      ← MVP (new, clean)
        ├── src/screens/                 ← login, home, browse, cart, checkout, orders
        ├── src/data/catalog.ts          ← 24 SKUs
        └── README.md
```

**Cursor workspace:** open `Fixxly Assignment/` for new work. Old prototype path:

`/Users/pankaj.khannade/Documents/Cursor coding/Fixxly`

---

## Apps at a glance

| | **MVP** (`fixxly-app/`) | **v3 prototype** (`../Fixxly/`) |
|--|-------------------------|----------------------------------|
| **Port** | **5190** | **5180** |
| **Purpose** | What Fixxly has **today** | What we're **building next** |
| **Flows** | Browse → Cart → Order | Above + Bill Banayein, co-pilot, jobs, ops, customer invoice |
| **Voice / AI** | None | Sarvam STT + MiniMax parse (flaky) |
| **Stability** | Demo-safe | Voice has known issues; guided demo works |
| **API keys** | Not needed | `.env.local`: `VITE_SARVAM_API_KEY`, `VITE_MINIMAX_API_KEY` |
| **Assignment use** | Baseline product demo | Part 1 UX + Part 2 AI prototype |

**Demo login (both):** phone `9876543210` · OTP `123456`

---

## Run commands

### MVP (new) — port 5190

```bash
cd "/Users/pankaj.khannade/Documents/Cursor coding/Fixxly Assignment/fixxly-app"
npm install          # first time only
npm run dev
```

- Local: **http://localhost:5190**
- Phone (LAN): **http://192.168.1.4:5190** (your IP may differ)

### v3 prototype (legacy) — port 5180

```bash
cd "/Users/pankaj.khannade/Documents/Cursor coding/Fixxly"
npm install          # first time only
cp .env.example .env.local   # optional: MiniMax + Sarvam keys for voice
npm run dev
```

- Local: **http://localhost:5180**
- Phone (LAN): **http://192.168.1.4:5180**

> **Do not use port 5173** for Fixxly — another project (ManifestNow) may occupy it.

### Run both at once

Use two terminals — one per app. Ports are fixed and won't clash.

---

## Which app for which assignment part?

| Assignment part | Use |
|-----------------|-----|
| **Baseline product** (“browse, cart, order”) | `fixxly-app/` |
| **Part 1 — retention diagnosis** | `References/part-1-ranked-reasons-v4.md` |
| **Part 1 — Bill Banayein one-pager** | `References/part-1-feature-one-pager.md` |
| **Part 1 — UX (3 screens)** | Design in Figma + prototype in `../Fixxly/` |
| **Part 2 — AI co-pilot / material parsing** | `../Fixxly/` (Bill Banayein + co-pilot) |
| **Part 3 — business case** | `References/` (written) |

---

## Bill Banayein — locked flow (v1)

From `References/bill-banayein-flow.md`. **Not** the default app path — one entry on home alongside browse/cart/order.

**Persona:** Urban mistri/plumber · 10th–12th pass · on-site · Kannada + English.

```
Login → Home → Bill Banayein
  → Select job type
  → Input: prebuilt template OR voice (sample first → live bill on screen)
  → Edit materials + qty (+ brand optional)
  → Select site
  → AI prices → contractor review
  → Split: Fixxly | Dealer
  → Markup (mandatory before client share)
  → Preview client PDF (contractor brand only — NO Fixxly)
  → Share to client
  → [One-click Order Fixxly part]
  → [WhatsApp dealer list — SKUs + qty, no prices]
```

**UX rules:** one primary action per screen · photos + numbers > long text · client never sees Fixxly · markup mandatory before share.

---

## v3 prototype — key files (voice / AI)

| File | Role |
|------|------|
| `src/screens/BillBanayein.tsx` | Bill Banayein wizard UI |
| `src/lib/audio/pcmCapture.ts` | Web Audio → 16 kHz PCM |
| `src/lib/audio/pcmWav.ts` | PCM → WAV for Sarvam REST |
| `src/lib/ai/sarvam.ts` | Sarvam REST STT |
| `src/lib/ai/sarvamStream.ts` | WebSocket client (broken in testing) |
| `vite.config.ts` | Proxies `/api/sarvam`, `/api/minimax` |

**Voice stack evolution (lessons):**

1. Browser SpeechRecognition + Sarvam → Chrome OOM on long dictation
2. Segment recording + Sarvam-only → auth/empty transcript issues
3. Sarvam WebSocket streaming → connected but no transcripts (subprotocol auth)
4. **Final approach:** PCM capture → rolling Sarvam REST every ~3.5s → parse on pause → skip redundant final STT → 12s timeout

**What works reliably:** **Try sample (demo)** / guided TTS path. Live mic on laptop/mobile was unreliable.

**Mobile note:** iOS may block mic on HTTP LAN — use localhost or HTTPS for voice testing.

---

## MVP — what's built

| Screen | What it does |
|--------|----------------|
| Login | Phone + OTP |
| Home | 30-min delivery, categories, search, popular SKUs |
| Browse | Catalogue + category filters (Plumbing, Electrical, Hardware, Paint) |
| Product | Detail, stock, add to cart |
| Cart | Qty controls, free delivery |
| Checkout | Job site picker, confirm (pay on delivery) |
| Orders | History + confirmation |

24 SKUs · no backend · session memory only.

**Stack:** React 19 · Vite 6 · TypeScript · Tailwind CSS 4 · Lucide icons

---

## Mental model

```
┌─────────────────────────────────────────────────────────┐
│  MVP (fixxly-app)          │  Prototype v3 (Fixxly/)    │
│  "What Fixxly has today"   │  "What we're building next"│
│  Browse → Cart → Order     │  + Bill Banayein           │
│  Stable, demo-safe         │  + Voice (known issues)    │
│  Port 5190                 │  Port 5180                 │
└─────────────────────────────────────────────────────────┘
         │                              │
         └────────── References/ ───────┘
              (Part 1 retention story ties them together)
```

**Interview framing:** MVP = current product baseline. v3 = retention feature prototype — be honest that live voice is experimental; guided demo works.

---

## What NOT to do (yet)

| Avoid | Why |
|-------|-----|
| Merge Bill Banayein into `fixxly-app` now | Reintroduces Sarvam/OOM issues into clean MVP |
| One app with feature flags | UX diverged too much |
| Delete `../Fixxly/` | Only copy of Bill Banayein + voice work |
| Same port for both apps | Port conflicts (5173 = ManifestNow) |

**Later:** extract shared catalog/types into a package when MVP design is locked.

---

## References (strategy docs)

| File | Contents |
|------|----------|
| `References/assignment-details.md` | Full brief (Parts 1–3) |
| `References/part-1-ranked-reasons-v4.md` | Retention diagnosis — 5 ranked reasons |
| `References/part-1-feature-one-pager.md` | Bill Banayein feature spec + AI architecture |
| `References/bill-banayein-flow.md` | Locked v1 product flow |
| `References/market-research-fixxly-contractors.md` | TAM, contractor economics |
| `References/appendix-market-context-one-page.md` | Market context summary |

---

## Git (optional — freeze old prototype)

The v3 app is a **separate git repo** at `../Fixxly/` (may have uncommitted changes). When ready to snapshot:

```bash
cd "/Users/pankaj.khannade/Documents/Cursor coding/Fixxly"
git checkout -b archive/v3-voice-prototype
git add -A
git commit -m "Archive v3 prototype: Bill Banayein + voice pipeline"
git tag v3-voice-prototype-may25
```

`fixxly-app/` can get its own `git init` when you push Part 2 to GitHub.

---

## Quick troubleshooting

| Problem | Fix |
|---------|-----|
| Wrong app loads on 5173 | Use **5180** (v3) or **5190** (MVP) |
| Voice stuck on "transcribing…" | Use **Try sample (demo)**; check Sarvam key in `.env.local` |
| Chrome Aw Snap on voice | Don't use browser STT + MediaRecorder in parallel |
| Phone can't load app | Use `--host` (already in `npm run dev`) + same Wi‑Fi + correct IP |
| Mic blocked on iPhone | HTTP LAN blocked — test voice on laptop first |

---

## Design brief — Claude Design / Figma

Copy the section below into Claude Design or hand to a designer. Covers Phase 1 (MVP) + Phase 2 (Bill Banayein roadmap).

### 1. Project overview

**Product:** Fixxly — a mobile app for building-material contractors in Bangalore.

**What Fixxly does:** Delivers plumbing, electrical, hardware, and paint SKUs from dark stores to the contractor's **job site in ~30 minutes**.

**Business context:**
- 3 dark stores live (Koramangala, Whitefield, HSR)
- ~60 orders per store per day today
- Target: **150 OPD per store within 90 days**
- Current app capability: **browse → add to cart → place order**. Nothing else.

**Design goal:** Design a **mobile-first Android contractor app** that feels fast, trustworthy, and usable on-site at 7:45 AM — by someone who is not tech-savvy, may have dusty/wet hands, and reads Hindi/Kannada better than long English paragraphs.

**Design in two phases:**
- **Phase 1 (MVP — design first):** Core commerce flow — login, home, browse, product, cart, checkout, orders
- **Phase 2 (roadmap — show as secondary entry, not default flow):** **Bill Banayein** — AI-powered client material bill (voice + template → markup → share PDF → order Fixxly lines)

---

### 2. Primary persona

| Attribute | Detail |
|-----------|--------|
| **Name (example)** | Raju Kumar, 34 |
| **Trade** | Plumber / mistri |
| **Education** | 10th–12th pass |
| **Tech comfort** | Uses WhatsApp and PhonePe daily; unfamiliar with complex apps |
| **Language** | Kannada + Hindi + English mix; prefers **short labels + local language** |
| **Context** | On construction site, workers waiting, ordering between 7–9 AM |
| **Motivation** | Get materials fast so labour doesn't sit idle; sometimes buys on behalf of homeowner |
| **Pain** | Small screen, glare, one hand free, can't read long text, doesn't trust apps that feel "corporate" |

**Mental model:** "Dealer on WhatsApp, but faster." Not Amazon. Not Swiggy consumer UI.

---

### 3. Design principles (non-negotiable)

1. **One primary action per screen** — never two competing CTAs
2. **Photos + numbers > paragraphs** — product emoji/icon, big price, big qty stepper
3. **Thumb zone first** — primary buttons bottom-third of screen, min 48px tap targets
4. **Speed is the brand** — "30 min delivery" visible on home, cart, checkout, order confirmation
5. **Bilingual by default** — every key label: English + Hindi (or Kannada); e.g. "Plumbing / प्लंबिंग"
6. **Low literacy safe** — no jargon; use trade terms contractors already say ("PVC 4 inch elbow", not "Schedule 40 fitting")
7. **Trust through clarity** — stock status, delivery time, site address, order ID always visible
8. **Contractor world, not consumer world** — no gamification, no coupons carousel, no lifestyle imagery

---

### 4. Platform & constraints

| Spec | Value |
|------|-------|
| **Platform** | Android phone (primary), 360–412px width |
| **Orientation** | Portrait only |
| **Safe areas** | Respect notch + bottom gesture bar |
| **Density** | Comfortable, not cramped — contractors tap with gloves/dust |
| **Offline** | Not required for MVP; show friendly error if no network |
| **Auth** | Phone number + 4–6 digit OTP |
| **Payment** | Pay on delivery (Cash / UPI at site) — no in-app payment UI for MVP |

---

### 5. Brand & visual direction

**Personality:** Reliable tradesman partner — not flashy startup, not bank app.

**Suggested palette** (from working prototype — refine, don't reinvent):

| Role | Color | Hex |
|------|-------|-----|
| Primary / headers | Deep navy | `#1A2744` |
| Primary CTA | Orange | `#F97316` |
| CTA pressed | Dark orange | `#EA580C` |
| Background | Warm off-white | `#FAF8F5` |
| Success / in stock | Green | `#16A34A` |
| Error / OOS | Red | `#EF4444` |
| Body text | Gray 900 / 500 | — |

**Typography:** Clean sans-serif (DM Sans, Inter, or similar).
- Headings: Semi-bold, 18–24px
- Body: Regular, 14–16px
- Prices: Bold, 16–20px
- Hindi/Kannada: Same family, never smaller than 12px

**Iconography:** Simple line icons (cart, clock, map pin, truck). Product categories can use emoji-style icons in tiles (🚿 ⚡ 🔩 🎨).

**Shape language:** Rounded corners 12–16px on cards; pill chips for filters; full-width bottom CTAs.

**Imagery:** Product tiles use **category emoji or simple product illustration** — not stock photos of smiling families.

---

### 6. Information architecture

#### Phase 1 — MVP screens (design all of these)

```
Login (phone → OTP)
  ↓
Home
  ├── Search
  ├── Categories (4 tiles)
  ├── Popular products
  └── Floating "View cart" when cart has items

Bottom nav (always visible except checkout/product detail):
  Home | Browse | Cart | Orders

Browse
  ├── Category filter chips (All, Plumbing, Electrical, Hardware, Paint)
  ├── Search bar
  └── Product list

Product detail
  ├── Image/emoji, name (En + Hi), price, unit
  ├── Stock badge
  ├── Delivery promise
  └── Add to cart / qty stepper

Cart
  ├── Line items with qty + remove
  ├── Subtotal, FREE delivery
  └── "Place order" CTA

Checkout
  ├── 30-min delivery banner
  ├── Job site selector (radio list, 3 saved sites)
  ├── Contractor info
  ├── Order summary
  └── "Confirm & place order"

Order confirmation
  ├── Success state (green)
  ├── ETA ~30 min
  ├── Site address
  ├── Item list + total
  └── "Continue shopping"

Orders list
  └── Past orders with status, total, site, tap → detail
```

#### Phase 2 — Bill Banayein (design as one home tile + full sub-flow, not replacing browse)

Entry: prominent but secondary card on Home — **"Bill Banayein / बिल बनाएं"** — "Client material estimate in 3 min"

Sub-flow (8–10 screens max):
1. Select job type (Bathroom, PVC repair, Electrical, Custom)
2. Input mode: **Template** vs **Voice**
3. Voice: sample recording ("aisa bolein") → record → **live bill builds on screen**
4. Edit bill (lines, qty, optional brand)
5. Select site
6. AI pricing review — Fixxly lines (exact price + stock) vs Dealer lines (estimate)
7. Split view: "Fixxly se" | "Dealer se"
8. Markup screen (% or per-line — **required before share**)
9. Client PDF preview — **contractor letterhead only, NO Fixxly branding**
10. Share to client (WhatsApp) + actions: "Order Fixxly part" | "WhatsApp dealer list (no prices)"

---

### 7. Screen-by-screen requirements

#### 7.1 Login
- Fixxly logo + tagline: "Building materials in 30 minutes / 30 मिनट में साइट पर"
- Phone input (large numeric keyboard)
- OTP step (6 boxes or single field)
- Demo hint for reviewers: phone `9876543210`, OTP `123456`
- No email, no social login

#### 7.2 Home
- Greeting: "Namaste, Raju Kumar" + trade (Plumber)
- **30-min delivery badge** (top-right, always visible)
- Search bar: placeholder "Search PVC, valve, wire…"
- **Dark store strip:** 3 pills — "Koramangala 58 OPD · Whitefield 62 · HSR 61" (optional for MVP)
- Green info banner: "Order before 6 PM for same-day delivery"
- **4 category tiles** (2×2 grid): Plumbing, Electrical, Hardware, Paint — emoji + En + Hi label
- "Popular picks" — 3–4 product cards with inline Add / qty stepper
- **Phase 2 tile:** Bill Banayein card (voice icon, "3 min client bill")
- Sticky bottom nav + optional floating "View cart · N items"

#### 7.3 Browse
- Sticky search + horizontal category chips
- Product cards: brand, name (2 lines), price, unit, Add button OR qty stepper
- Out-of-stock: grayed card, red "Out of stock" — no Add button

#### 7.4 Product detail
- Large product visual (emoji/illustration on white card)
- Name EN + HI, brand, price (with MRP strikethrough if discounted)
- Specs table: Brand, Availability, Delivery (~30 min)
- Bottom sticky: Add to cart OR qty stepper + "Go to cart"

#### 7.5 Cart
- Empty state: cart icon, "Your cart is empty", CTA "Browse catalogue"
- Line items: thumbnail, name, line total, unit price, qty stepper, delete
- Summary: Subtotal, Delivery = **FREE · 30 min** (green)
- Primary CTA: "Place order · ₹XXX"

#### 7.6 Checkout
- Back to cart
- Delivery promise card (truck icon)
- **Job site picker** — 3 radio options with EN + HI address
- "Ordering as" — name + phone
- Itemized summary + total
- Footer note: "Pay on delivery · Cash or UPI"
- Primary CTA: "Confirm & place order · ₹XXX"

#### 7.7 Order confirmation
- Green success header: "Order placed!" + "Arriving in ~30 minutes"
- Progress bar (simple, pulsing — not a live map for MVP)
- Deliver-to site
- Item list + "Total paid on delivery"
- Secondary: "Continue shopping"

#### 7.8 Orders
- List of cards: Order ID, total, site (truncated), status chip, ETA
- Statuses: Confirmed → Packing → Out for delivery → Delivered
- Tap → order detail (reuse confirmation layout)

---

### 8. Key components to design as a system

| Component | Notes |
|-----------|-------|
| **App header** | Navy bar, white text, optional back chevron |
| **Bottom nav** | 4 tabs, cart badge with count, active = orange |
| **Product card** | White card, shadow-sm, Add vs stepper states |
| **Qty stepper** | Minus / number / Plus, orange plus button |
| **Category tile** | 2×2 grid, emoji left, labels right |
| **Filter chip** | Pill, selected = navy fill |
| **Primary button** | Full width, orange, 52px height |
| **Secondary button** | White/outline, navy text |
| **Site radio row** | Selected = orange border + light orange bg |
| **Stock badge** | Green "In stock" / Red "Out of stock" |
| **Price display** | Bold ₹ amount, optional strikethrough MRP |
| **Empty state** | Icon + 2 lines copy + one CTA |
| **Bill Banayein mic button** | Large circular record button, pulsing ring when active |

---

### 9. Sample content (use realistic Indian trade SKUs)

**Categories:** Plumbing, Electrical, Hardware, Paint

**Sample products (use in mocks):**
- PVC Pipe 4" (3m) — Supreme — ₹285/piece
- PVC Elbow 4" 90° — ₹42/piece
- PVC Solvent Cement 500ml — ₹165/tin
- Ball Valve 1" Brass — ₹245/piece
- Angle Cock Chrome — Jaquar — ₹420/piece
- House Wire 1.5 sq mm (90m) — Polycab — ₹1,850/coil
- LED Bulb 9W — Philips — ₹89/piece

**Job sites:**
- Koramangala 4th Block, Whitefield
- HSR Layout Sector 2
- Marathahalli Bridge site

**Contractor:** Raju Kumar · Plumber · +91 98765 43210

---

### 10. Competitive reference (do NOT copy — differentiate)

| App | Feel | Fixxly should NOT look like |
|-----|------|----------------------------|
| Swiggy / Zepto | Consumer grocery, purple/orange playful | Too casual, too many offers |
| Amazon | Dense catalog, reviews, ads | Too complex |
| HomeRun | Broad B2B catalog | Fixxly is **faster (30 min)** + **trade workflow** |

**Fixxly should feel like:** WhatsApp simplicity + UPI trust + a knowledgeable hardware shop counter — on your phone.

---

### 11. Out of scope (do not design)

- Consumer/homeowner app
- Live GPS map tracking (simple ETA text is enough)
- In-app payments / wallet
- Ratings & reviews
- Chat support (MVP)
- Admin / dark-store ops dashboard
- Marketing onboarding carousel (max 1 login screen)

---

### 12. Deliverables requested from designer

1. **Mobile design system** — colors, type, buttons, cards, nav (1 page)
2. **Phase 1 — 8 core screens** at 390×844 (Android):
   - Login (phone + OTP as 2 variants or steps)
   - Home
   - Browse (Plumbing filtered)
   - Product detail
   - Cart (filled)
   - Checkout
   - Order confirmation
   - Orders list
3. **Phase 2 — Bill Banayein** — 4 key screens:
   - Home with Bill Banayein entry tile
   - Voice input with live bill building
   - Fixxly vs Dealer split view
   - Client PDF preview (contractor letterhead, no Fixxly logo)
4. **Component states:** Add button → qty stepper; empty cart; out-of-stock product
5. **Light mode only** for MVP

---

### 13. Success criteria for the design

A contractor on site should be able to:
- Log in in **under 15 seconds**
- Find "PVC elbow 4 inch" in **under 20 seconds** (search or Plumbing category)
- Add 3 items and place order in **under 60 seconds**
- Read every critical label without scrolling past English-only walls of text
- Trust that materials will arrive in ~30 minutes (delivery promise never hidden)

---

### 14. One-line creative direction

> **"The hardware shop counter in your pocket — fast enough that workers don't sit idle."**

---

*Last updated: May 2026 · Path 1 structure (sibling folders, fixed ports)*
