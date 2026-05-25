# Assignment Details

Hi Pankaj

As discussed, please find below the problem statement along with the instruction for Assignment round at Fixxly.

Time limit for sharing the solution is the late evening of Sunday, 24th May.

______________*________________

## FIXXLY — HEAD OF PRODUCT ASSIGNMENT

**Context:** Fixxly delivers building materials to contractors in 30 minutes. We have 3 dark stores live. Each store is hitting ~60 OPD (orders per day). Our target is 150 OPD within 90 days. We have a basic Android app — contractors can browse, add to cart, and order. That's it.

Your 48-hour brief has 3 parts. Please Do all three.

---

## PART 1 — Fix the Retention Problem (the core product challenge)

Our data shows: **40% of contractors who order in Week 1 don't place a second order within 14 days.**

**What we want from you:**

1. List the **5 most likely reasons** this is happening — without talking to us. Use first principles. Rank them by what you'd bet on.
2. Design **one AI-powered feature** that directly attacks the biggest reason on your list. Not a wireframe yet — a crisp one-pager:
   - What does the AI do?
   - What data does it need? (assume we have order history, SKU catalogue, and basic contractor profile)
   - What model/approach would you use and why? (LLM, classification, rule-based hybrid — justify the choice)
   - What does success look like at 30 days?
3. **Sketch the UX** for that feature — 3 screens maximum, drawn in Figma, on paper, or any tool. Design for a contractor who may have low literacy, is on-site, and is ordering at 7:45am.

---

## PART 2 — The AI Order Co-Pilot (the AI-native challenge)

A contractor is mid-job and types (or voice-inputs) into the Fixxly app: *"I need stuff for a bathroom — tiles are already there."*

**What we want from you:**

Build a simple working prototype of the AI layer behind this. You can use any LLM API (GPT-4, Claude, Gemini — your choice). It should:

- Parse the intent
- Suggest a logical bill of materials (plumbing, fixtures, adhesive, grout, waterproofing — whatever makes sense)
- Filter to only what Fixxly would stock (use a made-up but realistic SKU list of 20 items)
- Return a response that a semi-literate contractor can act on

This does not need to be deployed. A Colab notebook, a script, or a simple HTML page is fine. We want to see:

- Your prompt design
- How you handle ambiguity in the input
- How you'd make this better with a week more of work

**Time-box this to 4 hours maximum. Ship something that runs.**

---

## PART 3 — The Business Case (the unit economics challenge)

You've built the retention feature from Part 1. Make a case for prioritising it.

Fill in this table using your own assumptions (state them clearly):

| Metric | Current | With Your Feature (90 days) |
|--------|---------|-------------------------------|
| Week-2 retention % | 60% | ? |
| Orders/contractor/month | ? | ? |
| Monthly GMV per store (₹) | ? | ? |
| CAC payback period | ? | ? |

Then answer in **3 sentences**: Why this feature before anything else?

---

## Submission Instructions

Send us:

- A **PDF or Notion doc** covering Parts 1 and 3
- A **link to your Part 2 prototype** (Colab / GitHub / Replit — anything that runs)
- **One paragraph at the top:** *"The one thing I'd change about this assignment if I were setting it."*
