# Bill Banayein — Product flow (locked v1)

**Placement:** One feature on home — **not** default app flow. Browse / cart / order remain for urgent buys.

**Persona:** Urban mistri/plumber · 10th–12th pass · not tech-savvy · on-site · Kannada + English.

---

## Flow

```
Login
  → Home
  → Bill Banayein

  → Select job type

  → Input mode:
      · Prebuilt template
      · Voice recording
          - Sample recording shown first (“aisa bolein”)
          - Live bill builds on screen while recording

  → Edit materials + qty (+ brand optional) + add items later

  → Select site name

  → AI prices (master + fetch new) → contractor review

  → Split: Fixxly | Dealer

  → Markup

  → Preview client PDF (contractor brand only — no Fixxly)

  → Share to client

  → [One-click Order Fixxly part]
  → [WhatsApp dealer list — SKUs + qty, no prices]
```

---

## UX rules

- One primary action per screen
- Photos + numbers > long text
- Kannada + English UI toggle; voice STT both
- Client never sees Fixxly
- Markup mandatory before client share
- Fixxly price = exact; non-Fixxly = estimate (contractor sees; client sees sell price only)

---

## Outputs

| Output | Content |
|--------|---------|
| Client PDF | Contractor letterhead, sell prices, total |
| Fixxly order | In-stock lines only |
| Dealer WhatsApp | Site, spec, qty — no rates |
