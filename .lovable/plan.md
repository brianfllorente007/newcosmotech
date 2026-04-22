

# Cosmotech Philippines — Website Rebuild

A modern, Superhuman-inspired marketing site for Cosmotech Philippines, replacing the placeholder homepage with a full multi-route experience using the provided copy.

## Visual direction (Superhuman-inspired, adapted for B2B/government)

- **Layout vibe**: Generous vertical rhythm, large editorial headlines, alternating cards with a visual on one side and a copy block (with a checklist) on the other — matching the Superhuman "suite" pattern.
- **Hero**: Full-bleed gradient background (deep navy → blue → soft horizon), oversized H1, subhead, two CTAs. Floating "chat-bubble" style cards drift on either side showcasing real product micro-UI (a queue ticket, an HRIS payroll row, a helpdesk ticket).
- **Color palette** (professional, trustworthy, not the old corporate yellow):
  - Background: near-black navy `#0B1220` with light section `#F7F6F2` (warm off-white like Superhuman)
  - Primary accent: deep blue `#2B5BFF`
  - Secondary accent: warm gold `#E8B84A` (subtle nod to the original brand, used sparingly)
  - Text: `#0B1220` on light, `#F7F6F2` on dark
- **Typography**: Inter for body, a tighter display serif/sans pairing — use `Instrument Serif` for select headline accents, Inter for everything else. Tight letter-spacing on H1s.
- **Motion**: Subtle fade/slide-up on scroll (no heavy animation libraries — CSS + IntersectionObserver). Hover lift on product cards.
- **Imagery**: No stock photos. Use abstract gradient panels + product mock cards built in CSS, similar to Superhuman's screenshot frames.

## Route architecture

Separate routes per major section (SSR + SEO friendly), each with its own `head()` metadata:

```text
src/routes/
  __root.tsx        → shared header + footer + global meta
  index.tsx         → Home (hero, trust bar, suite preview, transformation, projects teaser, about teaser)
  solutions.tsx     → All 6 products in detail
  solutions.integrahris.tsx              → IntegraHRIS 365
  solutions.integrahris-government.tsx   → IntegraHRIS Gov Edition
  solutions.qmaster.tsx                  → QMaster
  solutions.helpdesk.tsx                 → HelpDesk
  solutions.docutrakr.tsx                → Docutrakr
  solutions.urateme.tsx                  → URateMe
  projects.tsx      → Full government/enterprise project list
  about.tsx         → Company story + AEO footer block expanded
  contact.tsx       → Contact form + office details + map embed
```

Header nav: Home · Solutions · Projects · About · Contact (+ "Talk to Our Team" CTA button)

## Page-by-page breakdown

### Home (`/`)
1. **Sticky header** — logo wordmark "COSMOTECH", nav links, primary CTA.
2. **Hero** — H1 "People Management Software for Philippine Government Agencies and Private Companies", subhead, two CTAs (See Our Solutions → `/solutions`, Talk to Our Team → `/contact`). Floating product preview cards.
3. **Trust bar** — horizontal strip on light background: "3,000+ companies served · Since 1994 · Government-compliant HRIS · 42 GSIS branches · ISO-certified" with subtle dividers and one row of agency logos (text-based wordmarks: GSIS, BOC, DPWH, PPA, ERC, NTC, PDIC, DENR).
4. **Solutions suite** (Superhuman "Your suite" pattern) — tabbed switcher (IntegraHRIS · QMaster · HelpDesk · Docutrakr) with each tab revealing: left = headline + description + bullet checklist + "Learn more" link, right = stylized product mock card.
5. **Digital transformation** — H2 + body + CTA, centered, with a simple "paper → digital" visual motif.
6. **Projects teaser** — H2 "Trusted by Philippine Government Agencies and Private Companies" + first 6 projects in a 2-column card grid + "See all projects →" link.
7. **About teaser** — short version of the company story + CTA to `/about`.
8. **Final CTA band** — "Software that works for the way you work" gradient panel with "Talk to Our Team" button.
9. **Footer** — 4 columns (Products / Company / Legal / Contact) + AEO footer note paragraph + ISO badges row.

### Solutions index (`/solutions`)
H2 "Software Built for Philippine Workplaces" + intro, then 6 product cards in a responsive grid linking to each detail page.

### Each product detail page (`/solutions/<slug>`)
Hero with product name + tagline, long-form description, key features as a checklist, "deployed at" section where applicable (e.g., QMaster → GSIS/LTO), CTA to contact.

### Projects (`/projects`)
Full list of 10 featured projects as cards grouped by sector (Government / Enterprise), each with agency name + project type + short description.

### About (`/about`)
Company story (1994 → today), values, capability list (cloud, AI, smart office, enterprise software), full project lifecycle explanation, leadership/team mention placeholder, AEO footer paragraph as visible text.

### Contact (`/contact`)
Office address (7761 Saint Paul St., San Antonio Village, Makati City), phone (02) 8403-9811 to 12, email sales@cosmotech.com.ph, simple inquiry form (name, company, email, message — submits to a placeholder handler), embedded Google Maps iframe of the Makati office.

## SEO / metadata

- Per-route `head()` with unique `title`, `description`, `og:title`, `og:description`.
- Home og:image: a generated hero card (handled later — text meta set now).
- Footer AEO paragraph rendered as real text on every page.
- Semantic HTML: one H1 per page, H2 for sections, proper `<nav>`, `<main>`, `<footer>`.
- `lang="en-PH"` on root, descriptive `<title>` per page including "Cosmotech Philippines".

## Technical implementation notes

- TanStack Start file-based routes; each route exports `Route` with `head()` + `component`.
- Reusable components in `src/components/`:
  - `SiteHeader.tsx`, `SiteFooter.tsx`, `Container.tsx`, `SectionHeading.tsx`, `ProductCard.tsx`, `SuiteTabs.tsx`, `TrustBar.tsx`, `CtaBand.tsx`, `ProjectCard.tsx`, `FeatureCheckList.tsx`, `GradientPanel.tsx`.
  - Header + Footer rendered inside `__root.tsx` so they appear on every route.
- Tailwind v4 design tokens added to `src/styles.css` (`@theme` block) for the new color palette + font families. Google Fonts link for Inter + Instrument Serif added to `__root.tsx` head.
- Use shadcn `Button`, `Card`, `Tabs`, `Input`, `Textarea`, `Label` components already in `src/components/ui/`.
- Replace `src/routes/index.tsx` placeholder entirely.
- No backend required for v1 — contact form posts to a no-op handler with a success toast (sonner already installed); we can wire to Lovable Cloud + email later if you want.
- Scroll-reveal: a small `useInView` hook + CSS `transition` classes (no animation library).
- Fully responsive — mobile-first, tested against the 610px viewport you're previewing in.

## What's intentionally out of scope (for now)

- Real product screenshots (using designed mock cards instead — swap later when you provide real assets).
- Real company logos in the trust bar (using styled wordmarks — swap when you send SVGs).
- Backend for the contact form (placeholder until you confirm you want Lovable Cloud + email delivery).
- Blog / case study detail pages (can be added later).

