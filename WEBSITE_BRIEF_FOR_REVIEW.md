# Pacific Psychological Associates — Website brief for external critique

Use this document to give another reviewer (e.g. ChatGPT) **context about what the site is and how it is built**, without needing access to the running app. You can attach this file or paste its contents.

---

## 1. What this is

- **Product:** A **marketing / informational website** for **Pacific Psychological Associates** (abbreviated **PPA** in the logo).
- **Practice type:** Private outpatient **neuropsychological assessment** and **psychotherapy** for adults.
- **Geography:** Office in **El Segundo, California**, positioned for **greater Los Angeles** (copy and SEO use “Los Angeles” plus local office detail).
- **Not:** A patient portal, scheduling system, telehealth app, or EMR—unless you later integrate third-party tools.

Primary positioning lines live in code as `heroHeadline`, `heroSubheadline`, and `tagline` in `lib/site.ts`.

---

## 2. Primary goals (design and content intent)

1. **Trust** — Read as a serious private practice suitable for referrals and self-referrals.
2. **Clarity** — Visitors can distinguish **neuropsychological assessment** from **therapy** and find the right path.
3. **Referrals** — Physicians, schools, attorneys, therapists, and families understand when assessment may help.
4. **Conversion** — “Schedule consultation” and contact form drive **non-urgent** inquiries (not crisis care).
5. **Accessibility** — Semantic HTML, heading hierarchy, visible focus, skip link, contrast-conscious palette (intent: WCAG 2.2 AA–oriented).
6. **Ethics / marketing restraint** — No client testimonials; copy avoids guaranteed outcomes or “life-changing” claims; contact form discourages detailed clinical disclosure in the browser.

---

## 3. Information architecture (navigation)

**Primary navigation** (order matters), from `lib/nav.ts`:

| Label       | Path          |
|------------|---------------|
| Home       | `/`           |
| Assessment | `/assessment` |
| Therapy    | `/therapy`    |
| About      | `/about`      |
| Fees       | `/fees`       |
| Contact    | `/contact`    |

**Calls to action**

- **Desktop:** Persistent **“Schedule consultation”** button → `/contact` (same as Contact; label emphasizes intent). Implemented in `components/SiteHeader.tsx`.
- **Mobile:** Visible **Contact** button + **Menu** (hamburger) opening a drawer with full links + schedule CTA.

Footer includes the same destinations plus **Privacy** and office contact.

---

## 4. Route map (what each URL does)

| Route | Purpose |
|-------|--------|
| `/` | Homepage: hero (LA + evidence-informed framing), trust strip, two service overview cards (assessment vs therapy), assessment and therapy preview sections, **two** process blocks (assessment steps vs therapy steps), about preview (lead clinician block), referral section, location/contact strip. |
| `/assessment` | Full narrative on neuropsychological evaluation, when it helps, domains/concerns, process, referral language, CTA to contact. |
| `/therapy` | Therapy scope, focus areas, limits/scope, process, CTA to contact. |
| `/about` | Lead clinician profile (from `data/about.json`) + full team structure (`data/team.json` via `TeamSection`). Section anchor `id="clinical-team"` for deep links. |
| `/fees` | How fees are discussed at a high level + **insurance list** for therapy (from `data/insurance.json`). |
| `/contact` | Office sidebar + optional embedded vendor form + minimal inquiry form. |
| `/privacy` | Privacy, emergency (911), accessibility statement, disclaimers. |

**Redirects (legacy or alternate URLs)**

| Old path   | Behavior |
|-----------|----------|
| `/insurance` | Redirects to `/fees` |
| `/team`      | Redirects to `/about#clinical-team` |
| `/services`  | Redirects to `/#services-overview` |

---

## 5. Content sources (what to edit without touching layout code)

| File | Contents |
|------|----------|
| `lib/site.ts` | Practice name, region labels, hero strings, tagline, footer blurb, phone, email, address, hours. |
| `data/about.json` | Lead clinician: name, photo alt text, credentials, intro, approach, specialties (placeholders until approved). |
| `data/team.json` | Team roster by category (director, psychologists, externs). |
| `data/insurance.json` | Therapy payer list, intro, disclaimer, last-updated string. |

Most marketing copy on **Assessment**, **Therapy**, **Home**, etc. is in the corresponding `app/**/page.tsx` files unless pulled from JSON.

---

## 6. Contact and intake (technical behavior)

- **Built-in form** (`components/ContactForm.tsx`): Name, email, phone, **preferred service** (select), **short message**; honeypot field for bots; privacy reminder not to paste sensitive clinical detail; emergency line to 911.
- **Server handler** (`app/actions/contact.ts`): Validates input; if `CONTACT_WEBHOOK_URL` is set, POSTs JSON; else optional **Resend** email if `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `CONTACT_EMAIL_FROM` are set; otherwise returns a message that the form is not configured.
- **Optional embed:** If `NEXT_PUBLIC_USE_EMBEDDED_INTAKE=true` and `NEXT_PUBLIC_INTAKE_IFRAME_SRC` is set, `components/EmbeddedIntake.tsx` shows a vendor iframe above the native form (intended for HIPAA-aligned providers with BAA). See `.env.example`.

---

## 7. Design and UX intent

- **Aesthetic:** Calm, **clinical private practice**—warm off-white backgrounds, charcoal/near-black headings, muted **blue-gray** and **sage** accents, rounded cards, subtle shadows—not a spa, startup, or hospital portal look.
- **Hero:** Flat, light surface (no loud full-bleed gradients on the home hero).
- **Typography:** Google fonts via Next.js: **Source Serif 4** (headings) + **Source Sans 3** (body/UI) in `app/layout.tsx`.
- **Accessibility patterns:** Skip link to `#main-content`; sticky header with mobile overlay menu; focus-visible outlines; semantic landmarks (`header`, `main`, `footer`, `nav`).

Styling is centralized in `app/globals.css` (no Tailwind in this repo).

---

## 8. Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Global CSS (`app/globals.css`), CSS variables for colors/spacing
- **Hosting:** Typical deployment is static-friendly server routes for the contact action (e.g. Vercel); not prescribed in repo.

---

## 9. Footer and legal copy (intent)

Footer includes:

- Practice blurb and navigation mirror.
- Contact block (address, phone, email, maps link).
- **Legal strip:** Website is informational only; does not establish a provider–patient relationship; emergencies → **911** / ER.
- Link to **Privacy** page for expanded notice.

Exact wording is in `components/SiteFooter.tsx` and `app/privacy/page.tsx`.

---

## 10. Suggested prompts you can paste to ChatGPT after this brief

Copy any of these after pasting this brief (or the live site URL if public):

1. “Given this brief, evaluate whether **assessment vs therapy** is differentiated clearly for a stressed first-time visitor. What would you change in **information architecture** or headings?”
2. “Critique the **referral-facing** language for physicians and schools: is it credible, non-overpromising, and clear on limits?”
3. “List **trust gaps** (credentials, process, fees, who does testing vs therapy) and suggest **minimal** copy or layout fixes.”
4. “Review for **ethical marketing** in healthcare: testimonials, guarantees, superlatives, or implied outcomes—flag any risky phrasing.”
5. “Suggest **SEO** improvements for local Los Angeles neuropsychology and therapy without keyword stuffing.”
6. “From an **accessibility** perspective (WCAG 2.2 AA), what should we verify on the contact form, mobile menu, and heading order?”
7. “Identify all **placeholder** content (addresses, phone, bios) the practice must replace before launch.”

---

## Optional: what to attach alongside this file

- A **screenshot PDF** or exported HTML of key pages, **or**
- The **live URL** once deployed, **or**
- Specific page files from `app/` if the reviewer should comment on exact wording.

---

*Document generated to support external critique; it does not constitute legal or clinical advice.*
