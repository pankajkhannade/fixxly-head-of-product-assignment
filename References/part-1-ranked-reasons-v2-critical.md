# Part 1 — Ranked reasons (v2, critical rethink)

**Purpose:** Challenge v1 list. Separate *won’t reorder*, *can’t reorder*, *didn’t need yet*. Avoid ranking what sounds best for an AI feature.

---

## Critical mistakes in v1

1. **#1 was solution-shaped** — “no job memory” ≈ argument for “next phase kit” before proving dealers win on *habit + friction*, not only *context*.
2. **Underweighted supply** — at ~60 OPD / thin dark store, order-2 basket may **not be buyable** on Fixxly. Looks like churn; is assortment.
3. **Underweighted incumbent channel** — repeat is often one WhatsApp to dealer; app must *win a ritual*, not add a nudge.
4. **Merged different failures** — trust break, catalog miss, and timing all inflate one “40%” number.
5. **Instamart bias** — retention = triggers + habit. Here B2B = relationship + spec + credit + “bhaiya same as last time.”

---

## Reframe: three buckets behind “40%”

| Bucket | Meaning | Product lever |
|--------|---------|---------------|
| **Didn’t need yet** | Job gap >14d or site idle | Measure D21/D30; don’t over-build |
| **Can’t on Fixxly** | SKU missing, OOS, wrong spec language | Catalog, search, availability |
| **Won’t on Fixxly** | Dealer default, trust break, price | Channel, ops, economics |

**HoP job:** estimate % in each bucket before picking one feature.

---

## Revised top 5 (what I’d bet today)

### #1 — Repeat already has a lower-friction owner: dealer / WhatsApp / call (channel habit, not “forgetting the app”)

**Claim:** Most contractors who need materials again in 14 days **do reorder** — just not on Fixxly. Second purchase goes to existing supplier: voice note, call, “same as last time + one elbow.”

**Mechanism:**  
Order 1 is often **trial under urgency** (workers waiting, promo, curiosity). Order 2 is **planned repeat** where cognitive cost matters. Dealer channel bundles: spec advice, credit, returns, accountability, delivery to known gate. Fixxly offers: search SKUs you may not name correctly, no human blame, unclear returns. **Absence of push notification is not the main gap** — presence of a **zero-change ritual** is.

**Why higher than v1 #1:** Explains 40% without assuming contractors forgot Fixxly exists. Explains why “basic app” is enough for trial but not for share-of-wallet.

**Bet strength:** **High** (structural B2B trade behavior).

**Validate:** Qual 8 contractors: “Order 2 for last site — how?” Log: reorder attempt → search fail → exit vs never open app.

---

### #2 — Order-2 basket isn’t reliably available in Fixxly’s catalog (assortment + spec gap)

**Claim:** Week-1 basket skews to what dark store stocks for speed (fittings, cement, small urgent lots). Days 3–14 need **phase-2 SKUs** (adhesives, waterproofing, brand-specific, long lengths) that aren’t listed, OOS, or not findable.

**Mechanism:**  
Contractor opens app once for order 2, searches, fails, closes. **Silent churn.** At 60 OPD, assortment is still a hypothesis per store — not a polished long tail. Instamart retention assumes “item exists”; materials retention requires **job-complete availability**.

**Why higher than v1:** Early-stage dark store; “40%” may be **unfilled demand**, not dislike.

**Bet strength:** **High–medium** (store-dependent; need data).

**Validate:** Non-repeater search logs (queries, zero results). Compare order-1 vs order-2 category mix for repeaters. Store: % phase-2 lines in stock.

---

### #3 — First Fixxly experience failed the “site test” (OTIF, completeness, damage)

**Claim:** Subset of 40% is **hard churn**: late delivery, short qty, wrong SKU, damaged — contractor will not risk phase-2 on Fixxly.

**Mechanism:**  
30-minute promise on multi-SKU bulky pick is hard at low OPD. **One public failure** (workers idle) > ten OK deliveries. This is **won’t** with emotional lock-in.

**Why not #1:** Plausible but **concentrated** — if OTIF strong, this drops in rank. Without ops data, don’t over-bet.

**Bet strength:** **Medium–high** if OTIF <90%; else **medium**.

**Validate:** OTIF repeat vs non-repeat. Tickets 48h. Qual: “What happened last delivery?”

---

### #4 — Week-1 cohort is polluted: trialists, one-off jobs, wrong users (metric overstates fixable churn)

**Claim:** Not all Week-1 orderers are **target repeat contractors**. Promo hunters, single repair, homeowner proxy, founder friends — **no second order in 14d is expected**.

**Mechanism:**  
At 60 OPD you optimize acquisition aggressively. Cohort mixes **habitual trade buyers** with **non-habitual**. Product “fixes” move a metric that includes **unaddressable** users.

**Why it matters:** Prevents false confidence. Shapes **segmented** retention target (e.g. multi-SKU first order + self-reported “ongoing site”).

**Bet strength:** **Medium** — always some noise; unknown how much of 40%.

**Validate:** D21/D30 reorder. Segment: 3+ SKU + 2+ categories in order 1. Promo code cohorts.

---

### #5 — No material need in 14 days (project timing, not churn)

**Claim:** Bathroom/plumbing gap, paused site, subcontractor supplies next phase — **demand absent**, app irrelevant.

**Mechanism:**  
14-day window wrong for remodel cycle. **Didn’t need yet** bucket.

**Bet strength:** **Medium** for tail; **low** as primary explanation of full 40%.

**Validate:** D21/D30 lift. Qual: next material date.

---

## What happened to v1’s “no job memory / proactive app”?

**Demoted to mechanism under #1 and #2**, not standalone #1:

- Dealer is **proactive + contextual**; app is **generic + pull-only**.
- Job-aware nudge **only works after** catalog covers order-2 and OTIF is “good enough.”
- Many contractors **know** what they need — problem is **where to buy**, not **what to buy**.

**Still important for product** — but as **intervention design** if #1–2 validated, not as proven root cause.

**Incomplete first kit (v1 #2):** Split across **#2** (couldn’t buy full kit) and **#3** (delivery incomplete/wrong).

---

## Comparison table (v1 vs v2)

| v1 rank | v2 rank | Change |
|---------|---------|--------|
| Job memory / passive app | Mechanism inside #1 | Demoted — was feature-shaped |
| Incomplete first kit | #2 + #3 | Split assortment vs trust |
| Delivery trust break | #3 | Conditional on OTIF |
| Dealer habit | **#1** | Promoted |
| 14-day timing | #5 | Same |
| — | **#4 cohort pollution** | New |

---

## Bet paragraph (revised, honest)

> I would bet **#1 and #2 together explain most of the addressable gap**, with #3 as a store-level amplifier.
>
> **#1:** Fixxly likely wins **trial** (urgent, fast) but not **repeat share** because dealer/WhatsApp is lower friction and higher trust for “same site, next list.” **#2:** Early dark stores may not stock or surface order-2 lines — contractors try once, fail silently, leave.
>
> **#3** matters where ops is still brittle at 60 OPD. **#4–5** mean we should segment Week-1 cohort and extend to D21/D30 before declaring product failure.
>
> **Implication for feature choice:** “Smart nudge” alone loses to dealer if catalog and OTIF aren’t parity. Intervention must **win the repeat ritual** — proactive job context **plus** guaranteed phase kit in stock **plus** one-tap reorder — not push notifications on a thin catalog.

---

## For submission: how to pick ONE bet (assignment tension)

Founders want a **ranked list + conviction**. Options:

| Strategy | Pros | Cons |
|----------|------|------|
| **A. Bet revised #1** | Shows B2B/channel fluency | Harder AI story |
| **B. Bet #1+#2 composite** | Nuanced HoP | Needs crisp wording |
| **C. Bet #2** | Ops/supply credibility | Less “product magic” |
| **D. Keep job-memory #1** | Clean Part 1.2 feature | Weaker if founders push on dealer |

**Recommended for you (Instamart + supply chain depth):** **B** in writing, **feature attacks #1 via ritual + #2 via kit stocked** (hybrid one-pager next).

---

## 7-day discovery plan (if you had the job)

1. **Dealer ritual** — 8 interviews, order 2 journey  
2. **Silent catalog churn** — search fail → no order within 24h  
3. **OTIF by cohort** — repeat vs non-repeat  
4. **Cohort hygiene** — D14 vs D21 vs D30 by segment  
5. **Store walk** — phase-2 SKU on shelf vs order-2 demand  

---

## Open questions for you (to sharpen rank)

1. Do you know **catalog size / category** per store?  
2. Any signal on **delivery SLA** or complaints?  
3. Is Week-1 acquisition **promo-heavy**?  
4. Your gut: more “**never open app again**” or “**opened, didn’t find**”?
