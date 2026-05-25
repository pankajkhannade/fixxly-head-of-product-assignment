# Appendix — Market context & contractor economics (one page)

*For Fixxly Head of Product assignment · Part 1 · Pre-launch · Bangalore · Competitor: [HomeRun](https://home-run.co/)*

---

## 1. Market size (India → Fixxly)

| Layer | Indicative size | Note |
|-------|-----------------|------|
| **TAM** — construction materials | ~**$27B** (2024), ~7.5% CAGR | National materials market |
| **TAM** — infra + real estate construction spend | ~**$265–285B** (2023) | Industrial B2B subset |
| **SAM** — urgent trade materials, metro (e.g. Bangalore) | Order-of-magnitude **₹ thousands of Cr GMV**; capturable share low early | Speed + small baskets to mistri/plumber |
| **SOM** — Fixxly (assignment) | **3 stores × ~60 OPD** → ~180 orders/day (~**₹13 Cr/yr** GMV at ₹2k AOV); target **150 OPD/store** | Growth = repeat × OPD, not national TAM |

*Sources: industry reports (MRFR, Arisinfra B2B), assignment context.*

---

## 2. Who is the contractor & who pays?

- **Buyer on app:** plumber / mistri / small civil contractor (urban, hired-work crews).
- **Payer of materials:** often the **homeowner or builder** (material + labour quote); contractor **procures on behalf**.
- **Not core ICP v1:** large developers / project procurement (B2B credit platforms: Infra.Market, 1Supply, Buildigo).

**Workforce context:** ~**10.3 lakh** informal construction establishments (~**3.8L urban**); ~**4.2M** plumbers incl. informal (~90% without formal training). Fixxly serves **urban trade buyers**, not the full construction long tail.

---

## 3. Job types — why “urgent repeat” > “next phase” for launch

**No national stat** splits jobs by duration; model below uses plumbing/repair proxies and renovation cost data.

| Job type | Typical duration | ~Share of **material trips** | ~Share of **material ₹** | Best retention mechanic |
|----------|------------------|------------------------------|---------------------------|-------------------------|
| Emergency repair (leak, choke, tap) | Hours | **45–55%** | 15–25% | **Urgent repeat** — speed, stock, reorder |
| Small install (WC, geyser, etc.) | ~1 day | 20–30% | 15–20% | Same |
| Phased reno (bath, kitchen) | 3–30 days | 15–25% | 35–45% | Job-phase kit (later cohort) |
| Large multi-trade project | Weeks+ | 5–10% | 25–40% | Dealers / B2B |

**Contractor mix (urban):** **~50–65%** mostly **new site / new job daily**; **~10–20%** mostly multi-day sites. **Largest segment by headcount and trips = daily urgent work** → Part 1 feature pivot to **urgent repeat**, not phase-only.

**Metric caveat:** “No 2nd order in 14 days” blends (i) different site next time, (ii) dealer repeat, (iii) catalog miss, (iv) no need yet — segment **multi-SKU / same-site** for phase features; use **orders per contractor per week** for urgent cohort.

---

## 4. Channel — hardware dealers, not grocery kiranas

| Channel | Role in materials |
|---------|-------------------|
| **Hardware shop / building-materials dealer / wholesaler** | Default for repeat: spec advice, **udhaar**, returns, WhatsApp order (“same as last time + 1 elbow”). **Primary competitor for Fixxly repeat.** |

| **Quick-commerce (HomeRun)** | **2000+ SKUs**, 60–120 min, 105+ Bangalore pincodes — browse-first “store to site.” |
| **Fixxly** | **30 min**, thin dark-store, contractor app — win **urgent trip + trust**, not catalog breadth. |

---

## 5. Competitor snapshot — HomeRun

- **Promise:** 60–120 min delivery; 8am–8pm; pay on delivery; no minimum order ([HomeRun](https://home-run.co/), [FAQ](https://home-run.co/pages/faq)).
- **Assortment:** Cement, ply, electrical, plumbing, hardware, paint — long tail.
- **Fixxly wedge:** Faster (**30 min**) + **trade-first reorder** on in-stock staples; don’t compete on SKU count at 60 OPD.

---

## 6. Ranked retention hypotheses (v2, abbreviated)

1. **Repeat ritual owned by hardware dealer** (WhatsApp / call / credit) — Fixxly wins trial, not share of wallet.  
2. **Order-2 SKU not on dark store** — silent churn (search → exit).  
3. **First delivery trust break** (OTIF / damage) — subset, ops-dependent.  
4. **Week-1 cohort noise** (promo / one-off / non-contractor).  
5. **No material need in 14d** — timing, not churn.

**Part 1 bet:** **#1 + #2** for addressable gap; **urgent repeat** attacks #1 for largest cohort; stock truth attacks #2.

---

## 7. Implications for Part 1 submission

| Decision | Rationale |
|----------|-----------|
| **Hero feature → Bill Banayein** | New job → client bill → Fixxly lines + dealer split |
| **Table stakes** | Browse / cart / urgent order (default home) |
| **Agla Phase / reorder** | Later cohort |
| **Pre-launch validation** | 15 interviews: payer, sites/week, order-2 channel; HomeRun mystery shop for SKU gaps |
| **30-day metrics** | Orders/contractor/week, reorder &lt;7d, search-no-order, OTIF — not D14 alone |

---

## Sources (web)

[HomeRun](https://home-run.co/) · [HomeRun FAQ](https://home-run.co/pages/faq) · [MRFR India construction materials](https://www.marketresearchfuture.com/reports/india-construction-materials-market-48189) · [Arisinfra industry PDF](https://public-arisinfra-prod.s3.ap-south-1.amazonaws.com/Investor%20Section%20Base%20Folder/100%20Offer%20Documents/150%20Industry%20Report.pdf) · [MOSPI informal construction / ET](https://economictimes.indiatimes.com/news/economy/indicators/unincorporated-construction-gva-at-rs-7-98-lakh-10-27-lakh-units-engaged/articleshow/130176284.cms) · [Plumber workforce TOI/IPSC](https://timesofindia.indiatimes.com/business/india-business/skilled-worker-shortage-poses-challenge-to-governments-major-png-expansion-drive/articleshow/131276949.cms) · [Plumbing costs 2026](https://buildingandinteriors.com/plumbing-cost-in-india-2026-price-breakdown-services-material-rates/) · [Home remodeling India](https://deepmarketinsights.com/vista/insights/home-remodeling-market/india) · [Bangalore Q-commerce density](https://www.moneycontrol.com/news/business/startup/bengaluru-emerges-as-india-s-most-saturated-quick-commerce-hub-with-3x-average-dark-store-density-icici-securities-13923215.html) · [EY building products](https://www.ey.com/content/dam/ey-unified-site/ey-com/en-in/insights/advanced-manufacturing/documents/ey-the-ascending-trajectory-unveiling-the-swift-growth-of-the-building-products-market-in-india.pdf)

*Full working notes: `References/market-research-fixxly-contractors.md`*
