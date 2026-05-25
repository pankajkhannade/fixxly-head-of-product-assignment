# Part 1 — Ranked reasons (draft, co-built)

**Metric:** 40% of Week-1 contractors do not place a second order within 14 days (~60% Week-2 retention).

**Funnel anchor:** Second order fails when the contractor has (or will soon have) the next material need, but does not choose Fixxly again inside the 14-day window.

---

## Reason 1 (strongest bet): App has no memory of the job — repeat need happens off-app

**Claim:** After the first order, Fixxly is a SKU catalog in the contractor’s pocket, not a **job partner**. When the next phase starts (e.g. tiles done → plumbing), the contractor does not get a timely, job-specific reason to reopen the app.

**Mechanism:**  
Contractor work is **phase-based**. Week-1 order often solves “what I need today on site.” Days 3–14 are when the **next phase** starts. Today the app is passive: no job object, no “what’s next,” no proactive nudge. The mental model for “what do I need for plumbing?” still lives with the **dealer on WhatsApp** or the **runner at the market** — one message, bundled advice + supply. Fixxly won the **first urgent basket**; it does not win the **second planned basket** because nothing in-product recalls the job context at the moment of need.

**Bet strength:** **High** — fits a “basic browse → cart → order” app, fits B2B materials, fits 14-day window, fits 40% magnitude (large share of Week-1 users are mid-project, not one-shot).

**Validate in 7 days (on the job):**
- Cohort: Week-1 non-repeaters vs repeaters — % with multi-category first baskets (proxy: multi-phase job).
- Qual: 5 contractors — “Who do you ask what to buy for the next step?” (expect dealer/peer, not app).
- Product: % users who open app days 2–14 without ordering (intent without conversion).

---

## Reason 2: First order was not “complete enough” for the job — trust shifts back to dealer for the critical second run

**Claim:** Many first orders are **reactive partial lists** (what was missing this morning), not a **phase-complete kit**. When something is wrong or missing on site, the **second trip** goes to the channel that **bundles correction + advice** — usually the dealer, not Fixxly.

**Mechanism:**  
In quick commerce, a bad first delivery hurts repeat, but substitution and refill are mature. In materials, **wrong spec / missing fitting / short qty** stops work and burns the lead contractor in front of the client. If first Fixxly order required a follow-up run to the market, the contractor labels Fixxly as “fast but incomplete” and uses it only for emergencies. The second order — higher stakes, more SKUs — goes to the dealer who says “take this CPVC, not that.”

**Bet strength:** **High** — especially at 60 OPD with a thin catalog and no job-level BOM in v1.

**Validate in 7 days:**
- Ops: first-order **fill rate**, **substitution rate**, **partial delivery**, **support tickets** in 48h post-delivery — repeaters vs non-repeaters.
- Basket: **SKU count / category coverage** vs job type (bathroom vs patch repair).
- Qual: “Did first order cover everything for that day’s work?”

---

## Reason 3: First delivery experience broke the 30-minute promise for heavy / bulky job materials

**Claim:** Week-1 trial works when urgency is high; **Week-2 does not happen** if the first delivery was late, incomplete, or damaged — because the contractor will not risk a time-boxed job phase on an unproven channel.

**Mechanism:**  
Fixxly’s wedge is **30 minutes**. That is credible for small urgent lots; harder for cement bags, long lengths, fragile bathware, multi-SKU picks. Dark store at ~60 OPD is still learning **pick path, rider capacity, site access**. One failed “need it before workers arrive” moment → permanent downgrade to dealer delivery (slower but trusted).

**Bet strength:** **Medium–high** — ops-heavy; may be concentrated in certain stores/SKUs rather than all 40%.

**Validate in 7 days:**
- SLA: % orders delivered within promised window — repeat vs non-repeat cohorts.
- Store-level: retention vs **OTIF** (on-time in-full).
- Qual: “What happened last time materials arrived?”

---

## Reason 4: Repeat purchasing is owned by the dealer relationship (credit, returns, habit) — Fixxly only won the trial order

**Claim:** Week-1 order is often a **trial** (promo, urgency, experiment). **Repeat** flows through an existing dealer relationship: udhaar, return of excess, “send the same as last time,” price negotiation.

**Mechanism:**  
Contractors are B2B buyers, not consumers. Switching cost for **first** order is low (app install). Switching cost for **ongoing** supply is high — ledger, trust, someone to blame. Without credit parity or human account management, Fixxly competes on speed alone; speed matters most on day 1, less on day 10 when the job is planned.

**Bet strength:** **Medium** — real in trade, but may be **correlated with #1–2** (dealer wins because they’re proactive + complete, not only credit).

**Validate in 7 days:**
- Payment mix on order 1 vs 2 (COD vs credit).
- Qual: “For the same site, where did materials 2 and 3 come from?”
- Geo/store: retention vs % contractor profiles with “primary dealer” field.

---

## Reason 5: No real second-order need inside 14 days (metric noise + project timing)

**Claim:** A meaningful slice of “non-repeaters” are not churned — they are **between phases**, on **paused sites**, or were **one-off repair** jobs where 14 days is the wrong window.

**Mechanism:**  
Bathroom remodel may need plumbing at day 12 and waterproofing at day 25. Patch repair may need nothing for 30 days. Aggregating all Week-1 users into “14-day repeat” **overstates churn** for project-based buyers. Product cannot force demand that does not exist; misreading this drives wrong features (discounts vs phase timing).

**Bet strength:** **Medium** — explains tail of cohort; unlikely to be the **primary** driver of 40% alone.

**Validate in 7 days:**
- Extend window: **D21 / D30 reorder rate** for Week-1 cohort — if lift is large, timing not churn.
- Basket taxonomy: repair vs remodel proxies.
- Qual: “When is the next material need on that site?”

---

## What I’d bet — and why

**I’d bet #1 first, with #2 close behind.**

Most Week-1 contractors on Fixxly are mid-job, not browsing for fun. The first order captures **today’s urgency**; the second order is **tomorrow’s phase** — different SKUs, different mental load, different moment of truth. A passive catalog does not **remember the site, the job type, or the phase**, and does not **show up when the contractor is about to start plumbing**. Dealers and WhatsApp win not because they are faster, but because they are **contextual and proactive**.

#2 matters when the first order was incomplete or wrong — that **confirms** the dealer default on the second run. #3–4 determine **how fast** you earn the right to be the proactive channel (#1). #5 reminds you to measure **D21 reorder** and job type before declaring product failure.

**If I were HoP in week 1:** I’d ship **job-aware “next phase” reactivation** before loyalty, before widening catalog, and before a second city — because it attacks the moment the second order is decided, uses data you already have (order history + catalog + profile), and connects directly to orders per contractor and 150 OPD.

---

## Notes for Part 1.2 / 1.3 (next co-build)

- Feature one-pager should **directly attack Reason #1** (with hooks to #2 via kit completeness).
- 30-day metrics: D14 reorder, % Week-1 users shown next-phase prompt, % accepting suggested kit, guardrail OTIF.
