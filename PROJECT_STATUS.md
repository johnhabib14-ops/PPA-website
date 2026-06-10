# Pacific Psychological Associates — Project Status (current state)

A snapshot of where the website project stands right now, written so another reviewer (e.g. ChatGPT) can critique it without access to the running app.

---

## What it is

A marketing / informational website for **Pacific Psychological Associates (PPA)** — a private adult **neuropsychological assessment** and **psychotherapy** practice in El Segundo, CA, positioned for greater Los Angeles. It is *not* a patient portal, scheduler, telehealth app, or EMR.

---

## Tech stack & build state

- **Next.js 15** (App Router) + **React 19** + **TypeScript**.
- Styling is **plain global CSS** (`app/globals.css`) with CSS variables — no Tailwind.
- Fonts: Source Serif 4 (headings) + Source Sans 3 (body) via `next/font`.
- Repo has a **single commit** ("first commit") on `main`, tracking `origin/main`. No CI, tests, or deployment config committed yet.
- `node_modules` and a stale `.next` build are present locally; the dev server script targets `127.0.0.1`.

---

## Pages built (all exist as real routes)

- `/` home (hero, trust strip, assessment-vs-therapy cards, two process blocks, lead-clinician preview, referral + location strips)
- `/assessment`, `/therapy` (full service narratives)
- `/about` (lead clinician + team section, anchor `#clinical-team`)
- `/fees` (fee framing + insurance list)
- `/contact` (office sidebar, optional vendor iframe, native form)
- `/privacy` (legal / emergency / accessibility)
- Redirects: `/insurance → /fees`, `/team → /about#clinical-team`, `/services → /#services-overview`

---

## Contact / intake behavior (implemented, not configured)

- `ContactForm.tsx` + server action `app/actions/contact.ts`: validates input, honeypot anti-spam, then **webhook** (`CONTACT_WEBHOOK_URL`) → else **Resend** email → else "not configured" message.
- Optional embedded vendor intake iframe behind env flags.
- **No env values are set** — so the form currently has no working destination.

---

## Biggest gap: content is almost entirely placeholder

This is the main thing standing between the project and launch:

- **Practice info** (`lib/site.ts`): fake phone `(310) 555-0100`, `office@...example` email, "123 Example Street" address, placeholder hours.
- **Lead clinician** (`data/about.json`): "Clinical Director Name, PhD, ABPP-CN", placeholder bio/intro.
- **Team** (`data/team.json`): all five entries are placeholders ("Head Doctor Name", "Staff Psychologist Name", externs with no detail).
- **Insurance** (`data/insurance.json`): a plausible but unverified payer list, last updated 2026-05-12.
- Marketing copy on the service pages is written but not yet client-approved.

---

## Stated design / ethics intent

Calm clinical aesthetic (off-white, charcoal, blue-gray / sage), WCAG 2.2 AA–oriented (skip link, focus-visible, semantic landmarks, mobile drawer menu), and deliberate marketing restraint (no testimonials, no guaranteed outcomes, form discourages sensitive clinical disclosure).

---

## Loose ends / things to flag

- A `WEBSITE_BRIEF_FOR_REVIEW.md` already exists describing the site for reviewers.
- The git repo root appears to be the **home directory** (`/Users/Gucci`), not the project folder — so `git status` shows the entire home directory as untracked. Repo hygiene needs attention.
- An unrelated folder, **"Mom of abducted children Research"**, sits inside the project and contains its own `app/page.tsx` and `app/layout.tsx` — likely doesn't belong here.
- No analytics, sitemap / robots, structured data (LocalBusiness schema), or favicon / OG metadata confirmed yet.

---

## Summary

**The site is structurally complete** — all routes, navigation, layout, accessibility scaffolding, and the contact pipeline are built. **It is not launch-ready** because every piece of real-world content (names, bios, address, phone, email, insurance, approved copy) is still placeholder, the contact form has no configured destination, and the repo / folder structure needs cleanup.

---

*Document generated to support external critique; it does not constitute legal or clinical advice.*
