# Part 1 — Top 5 reasons (v3, validated)

**Metric:** 40% of Week-1 contractors do not place a second order within 14 days.

**Context used:** Pre-launch Fixxly · Bangalore · [HomeRun](https://home-run.co/) as live comparator · Urban **mistri/plumber** · **~50–65%** contractors mostly **new site / urgent jobs daily** · Materials often **paid by homeowner**, contractor procures · Repeat competitor = **hardware shop / dealer / wholesaler** (not grocery kirana) · Hero feature = **Bill Banayein** (client material bill + split fulfilment).

**Validation method:** Each reason tested against (a) market research, (b) three buckets — *won’t / can’t / didn’t need*, (c) fit to largest contractor archetype, (d) v1/v2 critique.

---

## Summary: what changed from v2

| v2 rank | v3 | Verdict |
|---------|-----|---------|
| #1 Dealer channel | **#1** (sharpened) | **Confirmed** — add hardware dealer, daily new-site behavior |
| #2 Catalog / phase-2 SKU | **#4** (reframed) | **Confirmed** — urgent SKU miss, not only “next phase” |
| #3 OTIF trust break | **Inside #5** | **Plausible but unranked top** — no launch data |
| #4 Cohort noise | **Inside #5** | **Confirmed** as partial explainer |
| #5 Timing / no need 14d | **Inside #2 + #5** | **Confirmed** — amplified by daily-job mix |
| — | **#2 Metric + job mix** | **New** — explains 40% with largest segment |
| — | **#3 No urgent reorder UX** | **New** — product gap for Archetype A |
| v1 “no job memory” | **Dropped from top 5** | **Invalidated** for majority segment — phase logic applies to ~15–25% of trips only |

---

## The five reasons (ranked)

### #1 — Next material run still goes to the hardware dealer (channel habit + lower friction)

**Claim:** Contractors who need materials again within 14 days usually **do buy again** — from their **building-materials dealer / hardware shop / wholesaler** via call or WhatsApp, not from Fixxly.

**Mechanism:**

- Order 1 on Fixxly is often **urgent trial** (workers waiting, 30-min promise, promo).
- Order 2+ is **another urgent list** — same site or **new site** — where dealer wins on: **spec help**, **udhaar**, returns, “send same CPVC + one elbow”, **human accountability** if wrong.
- Contractor is often **procurement agent**; homeowner pays. Incentive = **no embarrassment on site**, not loyalty to an app.
- Fixxly’s basic **browse → search → cart** is higher friction than a **voice note to dealer** who already knows them.

**Why #1:** Structural trade behavior; matches v2; consistent with EY/industry notes on fragmented dealer-led distribution; explains scale of 40% without assuming users forgot the app exists.

**Bet strength:** **Very high**

**Validate in 7 days:** Interviews (n=15): “Last 3 material buys — where?” Expect dealer ≥60% on repeat. Log: D7/D14 **any** order vs dealer proxy (survey).

**Attacks #1 (Bill Banayein):** Intercept **client hisaab** before dealer WhatsApp; order Fixxly in-stock lines from same bill.

---

### #2 — “No second order in 14 days” mixes up job churn, platform churn, and the wrong cohort

**Claim:** A large share of Week-1 users are **daily-job contractors** (new address, new list). For them, **not ordering on Fixxly again in 14 days ≠ not buying materials again** — often **≠ same job continuing**.

**Mechanism:**

- **~65–85%** of material **trips** are urgent / ≤1 day jobs (research model); **~50–65%** of urban contractors skew that way.
- Second material need may be **day 2 at a different flat** — dealer again, or Fixxly trial not yet **habit for every urgent run**.
- **14-day repeat** is the right metric for **multi-day bathroom/kitchen** (~15–25% of trips) but **over-penalizes** Archetype A in one blended number.
- Pre-launch **Week-1 cohort** may include promo trials, one-off repairs, non-repeat personas → inflates “40% churn.”

**Why #2 (not lower):** Without this, founders over-build **phase features** for users who need **per-trip default**, not “Agla phase.” Directly validates your pivot.

**Bet strength:** **High** (logic + segment math); **medium** on % of the 40% (needs data).

**Validate in 7 days:** Segment Week-1 users: orders/week, distinct delivery addresses, self-reported “mostly repair vs reno.” Track **D7 reorder** and **orders/contractor/14d** alongside D14. Compare D14 vs D30.

**Product implication:** Report retention **by cohort**; north-star for launch = **orders per active contractor per week**, not D14 alone.

---

### #3 — Basic app has no “urgent repeat” loop — high friction after a successful first order

**Claim:** Even contractors who liked Fixxly delivery **won’t reopen** for the next urgent need because the app is a **SKU catalog**, not a **one-tap reorder tool**.

**Mechanism:**

- Assignment: only **browse, cart, order** — no prominent **repeat last order**, job-agnostic **favourites**, **Hindi/brand aliases**, voice, or **“staples for today”**.
- At **7:45am on a new site**, contractor must **search** (“sada pipe 1 inch”) — fails literacy/SKU naming → leaves. Dealer accepts **fuzzy voice**.
- **HomeRun** also browse-first (2000+ SKUs, 60–120 min) — Fixxly’s edge is **30 min**, which only matters if **second open → order in &lt;60 seconds**.
- This is the **actionable product gap** for the largest segment — distinct from #1 (dealer) but **enables** #1 if unfixed.

**Why #3:** v2 assumed passive app / phase memory; research shows many know **what** to buy — failure is **speed of re-buy** on app. Directly tied to **urgent repeat** hero feature.

**Bet strength:** **High** for Archetype A; **medium** as sole explanation for all 40%.

**Validate in 7 days:** Usability test: time-to-reorder same 5 SKU basket vs WhatsApp to dealer. Analytics (post-launch): % using search vs reorder path; session length on 2nd open.

**Attacks #3:** AI-assisted **one-tap urgent kit** from last order + stock gate (not phase graph).

---

### #4 — Second basket’s SKUs aren’t on the dark store or aren’t findable (silent “can’t” churn)

**Claim:** Non-repeaters often **open the app once** for order 2, fail to find or trust availability, and buy from dealer — **looks like disinterest**, is **assortment + discovery** failure.

**Mechanism:**

- At **~60 OPD**, dark store carries **fast movers** for first urgent trip; next trip may need **different fitting/brand** not stocked.
- Contractor doesn’t know catalogue names — **zero-result search** → exit (no blocked checkout message).
- [HomeRun](https://home-run.co/) spans civil, electrical, plumbing, hardware (**2000+ SKUs**) — Fixxly can’t win on breadth; must win on **in-stock urgent set** + honest “not with us — dealer?”
- v2 #2 still holds; **reframed:** not only “phase-2 bathroom” SKUs — **any** urgent line on the **next** trip.

**Why #4 (not #2):** Still major but **downranked** — dealer wins **before** search if habit is strong (#1); catalog hurts when they **try** Fixxly again.

**Bet strength:** **High–medium** (store-specific).

**Validate in 7 days:** Search logs: zero results → no order in 24h. Mystery shop vs HomeRun on top 20 urgent SKUs. Store: OTIF on “staple 50” list.

**Attacks #4:** Stock-gated reorder only shows **available** lines; expand **staple SKU** pack per store.

---

### #5 — Tail: trust break, non-ICP Week-1 users, or no second purchase in window (smaller buckets)

**Claim:** The remainder of the 40% is split across **(a)** bad first delivery experience, **(b)** users who were never going to repeat, **(c)** no material purchase needed in 14 days.

| Sub-reason | Mechanism | Bet |
|------------|-----------|-----|
| **5a Trust / OTIF** | Late, short, wrong, damaged on first order → won’t risk workers waiting again | **Medium** pre-launch (no ops data); **high** if OTIF &lt;90% at launch |
| **5b Cohort noise** | Promo, one-off repair, non-contractor trials | **Medium** |
| **5c No demand in window** | Multi-day gap, idle site, materials supplied by others | **Medium** for tail; **low** as driver of full 40% |

**Why #5 bundled:** Each is real but **smaller or unmeasured** at pre-launch; HoP shouldn’t bet the company on OTIF before instrumenting.

**Validate in 7 days:** OTIF by user; promo code cohort D14; D21/D30 reorder lift; qual on next material date.

---

## Validation matrix (all five)

| # | Reason | Bucket | Fits largest segment? | Supported by research? | Drives urgent repeat? |
|---|--------|--------|------------------------|----------------------|------------------------|
| 1 | Dealer default | **Won’t** | **Yes** | **Yes** | **Yes** — friction + trust parity |
| 2 | Metric / job mix | **Measurement + won’t** | **Yes** | **Yes** | **Yes** — right KPIs |
| 3 | No reorder UX | **Won’t** (product) | **Yes** | **Yes** | **Primary attack** |
| 4 | SKU miss / search | **Can’t** | **Yes** | **Yes** | **Yes** — stock-gated reorder |
| 5 | Trust / noise / timing | Mixed | Partial | Partial | Partial |

---

## What I’d bet — submission paragraph

> **I’d bet #1 + #3 together explain most fixable gap for Fixxly’s real ICP** — the urban mistri doing urgent, often **new-site** jobs: the **hardware dealer** still owns the next material run, and the **basic app doesn’t make re-ordering faster than WhatsApp**.
>
> **#2** means we should **not** over-interpret 40% as “failed bathroom phase” — a big slice is **wrong metric + daily job mix**; success = **more orders per contractor per week**, segmented D14 for multi-day jobs only.
>
> **#4** determines whether urgent repeat **converts** when they try us again — **staple SKU depth + in-stock truth** at 60 OPD, not HomeRun-scale catalog.
>
> **#5** matters but is tail until we have OTIF and cohort data.
>
> **Week 1 as HoP:** ship **Bill Banayein** (client bill + split fulfilment + markup + voice) before phase kit or catalog arms race — every new job starts on Fixxly; dealer gets honest remainder at launch.

---

## Explicitly deprioritized (not in top 5)

| Hypothesis | Why deprioritized |
|------------|-------------------|
| No job memory / passive app for **next phase** | Top problem for **minority** trip share; wrong hero for launch |
| Loyalty / discounts only | Doesn’t beat dealer on friction or credit |
| HomeRun steals users | Different job (breadth vs 30-min); same dealer habit applies |
| Contractor doesn’t know what to buy | Expert knows; channel + speed fail |
| Price only | Matters on quote to client; usually **after** channel choice |

---

## Link to Part 1.2 feature (Bill Banayein)

| Reason | Feature response |
|--------|------------------|
| #1 Dealer | Full bill on Fixxly first; Fixxly order + dealer WhatsApp (no prices) |
| #2 Metric mix | Bills/week + Fixxly lines per bill; segment D14 |
| #3 Friction | Bill workflow vs browse-only catalog; voice + live bill |
| #4 Catalog | Honest split; reference master for off-catalog lines |
| #5 Trust | OTIF on Fixxly orders; estimates clearly labelled |

---

## Sources

See appendix: `appendix-market-context-one-page.md` · Full notes: `market-research-fixxly-contractors.md`
