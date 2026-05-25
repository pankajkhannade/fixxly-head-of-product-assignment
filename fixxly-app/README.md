# Fixxly Contractor App (MVP)

Basic contractor app: **browse → cart → order**.  
Fixxly delivers building materials to job sites in **30 minutes** from 3 dark stores (~60 OPD each, target 150 OPD in 90 days).

**Sibling prototype:** Bill Banayein + voice lives in `../../Fixxly/` on port **5180**. See [`../README.md`](../README.md) for the full workspace map.

## Run locally

```bash
cd fixxly-app
npm install
npm run dev
```

Open **http://localhost:5190** (or your LAN IP for phone testing).

## Demo login

| Field  | Value        |
|--------|--------------|
| Phone  | `9876543210` |
| OTP    | `123456`     |

## What's included

- **Home** — 30-min delivery promise, category shortcuts, search, popular SKUs
- **Browse** — Full catalogue with category filters (Plumbing, Electrical, Hardware, Paint)
- **Product detail** — Price, stock, add to cart
- **Cart** — Quantity controls, free 30-min delivery
- **Checkout** — Pick job site, confirm order (pay on delivery)
- **Orders** — Order history and confirmation screen

24 SKUs across 4 categories. No backend — cart and orders live in memory for the session.

## Stack

React 19 · Vite 6 · TypeScript · Tailwind CSS 4 · Lucide icons

## Next steps (not built yet)

- Bill Banayein / AI co-pilot (Part 2 assignment)
- Repeat last order, job kits
- Real auth, inventory API, order tracking
