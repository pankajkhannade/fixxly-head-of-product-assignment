# Part 1 — Why 40% of Week-1 contractors don’t reorder within 14 days

**Fixxly Head of Product · Retention diagnosis**

---

## The number we’re explaining

**40% of contractors who order in Week 1 do not place a second order within 14 days** (~60% Week-2 retention).

This note lists the **five most likely reasons**, ranked by what I would bet on **without speaking to the team** — using first principles, public market context, and how urban trade contractors actually buy building materials in India.

---

## How I’m thinking about the problem

Second-order failure is rarely one story. It usually falls into three buckets:

| Bucket | Plain meaning | Example |
|--------|---------------|---------|
| **Won’t** | They needed materials but chose another channel | Hardware dealer on WhatsApp |
| **Can’t** | They tried Fixxly but couldn’t complete the basket | SKU missing, search failed |
| **Didn’t need yet** | No material purchase in that 14-day window | Job gap, different timing |

Fixxly’s app today is **browse → cart → order**. That wins **first urgent trial** (workers waiting, 30-minute delivery). It does not yet win **how contractors run the next job** — especially when the **client asks for a material estimate**, or the **hardware dealer** gets one WhatsApp for the full list.

**Important context (stated assumptions):**

- Urban **mistri / plumber / small contractor** in a metro like Bangalore  
- Materials are often **paid by the homeowner**; the contractor **buys on their behalf**  
- Repeat competition is the **hardware shop / building-materials dealer / wholesaler**  
- A large share of work is **new site / new job daily**, not one long renovation on the same address  
- Live competitor reference: [HomeRun](https://home-run.co/) (broad catalogue, 60–120 min) — Fixxly’s wedge is **30 min + trade workflow**, not SKU count at ~60 OPD  

---

## Ranked reasons (strongest bet first)

### 1. The next material run still goes to the hardware dealer

**What I believe:** Contractors who need materials again within 14 days **often do buy again** — but from their **local hardware dealer** (call or WhatsApp), not from Fixxly.

**Why this happens**

- **Order 1** on Fixxly is frequently an **urgent trial**: workers waiting, speed matters, promo or curiosity.  
- **Order 2+** is usually a **new list** — same site or **new address** — where the dealer wins on a bundle Fixxly doesn’t offer today:  
  - Spec advice (“ye CPVC lo, wo nahi”)  
  - **Udhaar / credit**  
  - Returns and accountability if something is wrong on site  
  - One message: *“same as last time + 2 elbow”*  
- The contractor is often a **procurement agent** for the client. The incentive is **no embarrassment in front of the client**, not loyalty to an app.  
- A **voice note to a known dealer** is lower friction than **searching SKUs** in a basic catalog app.

**Bet strength:** **Very high** — this is structural B2B trade behaviour, not a UI polish issue alone.

**What I’d validate in the first week on the job:** Ask 15 contractors: *“For your last three jobs, where did materials for order 2 come from?”* Track whether non-repeaters **opened the app but didn’t order** vs **never reopened**.

---

### 2. The 14-day metric blends different jobs — and overstates “churn” for many contractors

**What I believe:** A meaningful part of the 40% is **not** “contractors who rejected Fixxly” — it’s **contractors whose next material need doesn’t show up as a second Fixxly order in 14 days**, even though they’re still active.

**Why this happens**

- Many urban contractors run **several small jobs per week**, often at **different sites**.  
- Their next material need may be **tomorrow at a new flat** — they may buy from the dealer, or simply not need Fixxly again inside the window.  
- **14-day repeat** is a sensible metric for **multi-day renovation** work; it is a **blunt metric** for **daily repair / install** work (the larger trip share by count).  
- Early Week-1 cohorts may also include **one-off trials**, promos, or non-core users — inflating non-repeat.

**Bet strength:** **High** on logic; **medium** on how much of the full 40% this explains (needs cohort data).

**What I’d validate:** Compare **D14 vs D21/D30** reorder; segment by **orders per week**, **distinct delivery addresses**, and job type (repair vs install vs reno). Report retention **by segment**, not one blended number.

**Implication:** North-star for product should include **orders per active contractor per week**, not D14 alone.

---

### 3. The app is a shop, not where the contractor runs the job (no client bill / business workflow)

**What I believe:** Even contractors satisfied with first delivery **don’t reopen Fixxly** for the next job because the product stops at **checkout** — it doesn’t help with the step that often **precedes** buying: **building a material estimate for the client**.

**Why this happens**

- On many jobs the client asks: *“Material kitna lagega?”* Today that conversation happens with the **dealer** or in the contractor’s head — then one WhatsApp for supply.  
- Fixxly offers **browse and cart**; it does not offer **hisaab → markup → share with client → split what Fixxly fulfils vs what the dealer supplies**.  
- At **7:45am on site**, a catalog app asks the contractor to **search and spell SKUs** — dealers accept **fuzzy voice and trade language**.  
- This gap is **different from “reorder last order”** (which assumes the same basket). Most new jobs need a **new bill**, not a replay.

**Bet strength:** **High** for fixable product gap; **medium** as the sole cause of the entire 40%.

**What I’d validate:** Shadow 10 jobs: *When does the client hear a material number? Who prepares it? Where is the order placed?* Time **first open → material decision** on Fixxly vs dealer.

**Product direction this points to:** A **bill-creation workflow** (not default browse) that owns **job start** — detailed in Part 1.2.

---

### 4. The next basket isn’t fully available or findable on Fixxly (silent exit)

**What I believe:** Some non-repeaters **open the app once** for order 2, fail to find what they need, and leave — which looks like disinterest but is **assortment and discovery failure**.

**Why this happens**

- At ~**60 OPD per store**, the dark store is optimised for **fast movers**, not every line on a full job.  
- Contractors often don’t know catalogue names — **zero-result search** → exit, no order.  
- Competitors like HomeRun carry **thousands of SKUs** across civil, electrical, plumbing, and hardware. Fixxly cannot win an **arms race on breadth** early; it must win on **honest fulfilment** for what it stocks.  
- This applies to **any** next trip — not only “phase 2 of a bathroom.”

**Bet strength:** **High–medium** (likely varies by store and category).

**What I’d validate:** Search logs (query → no order within 24h); mystery-shop **top urgent SKUs** vs HomeRun; repeat vs non-repeat by **fill rate** on first order.

**Product direction:** **Split view** — fulfil in-stock lines on Fixxly; be explicit about dealer lines (see Part 1.2).

---

### 5. Smaller tail: trust break, cohort noise, or no purchase in the window

**What I believe:** The remainder of the 40% splits across three smaller buckets:

| Sub-reason | What happens | Bet strength |
|------------|--------------|--------------|
| **Bad first delivery** | Late, short, wrong, or damaged → won’t risk workers waiting again | **Medium** until OTIF data exists; **high** if OTIF is weak |
| **Non-core Week-1 users** | Promo, one-off, non-contractor trials | **Medium** |
| **No material need in 14 days** | Job paused, long gap between phases, materials sourced by others | **Medium** as tail; **low** as primary driver of full 40% |

**What I’d validate:** OTIF and support tickets **repeat vs non-repeat**; D21/D30 lift; promo cohorts.

---

## What I’d bet — summary

**Primary bet:** **#1 + #3** explain most of the **addressable** gap.

- **#1:** Fixxly wins **trial**; the **hardware dealer** still owns **repeat** via habit, credit, spec, and one-message ordering.  
- **#3:** The app doesn’t yet sit at **job start** (client material bill) — only at **urgent checkout**.  

**Secondary bet:** **#2** means we should **not** over-read 40% as “failed renovation retention” without segmenting daily-job contractors. **#4** decides whether contractors **convert when they try again**. **#5** matters but needs ops and cohort data.

**What I would not bet first:** Generic loyalty/discounts, “reorder last order” as the hero strategy, or phase-only features for a contractor base that is mostly **new site / new job**.

---

## What this implies for product (preview — detail in Part 1.2)

The retention feature should **intercept the dealer at job start**: help the contractor build a **full client material estimate**, add **markup**, share under **contractor’s brand**, then **order Fixxly lines** and **send the remainder to the dealer** — honestly, without pretending the dark store stocks everything.

*(Feature one-pager: `part-1-feature-one-pager.md` · UX sketch: `part-1-ux-sketch-3-screens.md` · Index: `part-1-submission-index.md`)*

---

## Hypotheses considered but not ranked in top five

| Hypothesis | Why deprioritised |
|------------|-------------------|
| Contractors “forget” the app / need push nudges only | Repeat often goes to dealer while app is unused — channel, not notification |
| Next-phase / “Agla phase” kit for renovations | Valid for **minority** of trips (~15–25%); wrong hero for largest daily-job segment |
| HomeRun taking users | Competes on breadth; same dealer habit applies; Fixxly wedge is speed + trade workflow |
| Price alone | Usually secondary to dealer relationship and client quote workflow |

---

*Next sections: Part 1.2 `part-1-feature-one-pager.md` · Part 1.3 `part-1-ux-sketch-3-screens.md` · Index `part-1-submission-index.md` · Appendix `appendix-market-context-one-page.md`*
