

## New Page: `/solutions/integrahris-365`

A dedicated marketing page for IntegraHRIS 365. Copy comes from the brief; design follows the Inspo layout adapted to the existing Cosmotech palette and components.

### Route file

**`src/routes/solutions.integrahris-365.tsx`** — auto-registered by TanStack Router. Includes `head()` with title, description, og:title, og:description.

### Page Sections

1. **Hero** (bone bg, two-column on desktop)
   - Left: Eyebrow "IntegraHRIS 365" → H1 "The Downloadable HRIS and Payroll Software for the Philippines" → subhead → brass "See Pricing" (anchors `#pricing`) + outlined "Download Brochure" (→ `/contact`) → small ISO chip labeled `[PLACEHOLDER: ISO certification badge]`.
   - Right: rounded-3xl dashed placeholder `[PLACEHOLDER: Hero product dashboard screenshot — 1600x1000]`.

2. **Trust Strip** — "Trusted by Over 28 Philippine Organizations" + intro line naming PPA, DFA, BSP, BIR. Grid of 10 dashed logo tiles labeled `[Logo: Client 1]`…`[Logo: Client 10]`.

3. **Three Feature Cards** (mirrors Inspo's three-card band)
   - Built for Philippine compliance · You own your data · Transferable licensing.
   - Each card: icon (lucide), bold title, one-line body, rounded-3xl on `bg-card`.

4. **What is IntegraHRIS 365** — split: left H2 + body copy from brief; right `[PLACEHOLDER: 201 file / dashboard mock — 1200x900]`.

5. **Why Choose IntegraHRIS 365** — 6 small cards (3x2 desktop / 2x3 tablet / 1col mobile) with check icon: compliance, ownership, licensing, scale, migration, 201 file.

6. **Setup Without the Hassle** — split:
   - Left: H2 + "Install in Minutes" body.
   - Right: vertical numbered stack (1–4): Data Migration → Setup → DTR → Payroll Processing. Above the stack on desktop: floating `[PLACEHOLDER: Setup wizard screenshot — 1000x600]`.

7. **Features and Modules** — vertical accordion (existing `@/components/ui/accordion`) with 8 items (HR Dashboard, Employee Record, Leave, Timekeeping, Payroll, Reports, Loan, Security). Open item shows: bullet list (left) + `[PLACEHOLDER: <module> screenshot — 1200x800]` (right). First item open by default.

8. **Pricing** (`#pricing`) — H2 + intro emphasizing 5-year 50% savings + free ESS.
   - Desktop: table (Plan / Employees / Annual Price / Concurrent Processors). "Small+" row highlighted with cobalt outline + brass "Most Popular for SMEs" badge.
   - Mobile: stacked cards, same highlight on Small+.
   - Helper lines: ">4,000 employees → contact us" link to `/contact`; "Government org? → IntegraHRIS Government" link to `/solutions/integrahris-government` (existing slug route).
   - CTAs: brass "Get Started" + outlined "Contact Sales", both → `/contact`.

9. **FAQ** — H2 + accordion with all 13 Q&As. Inline `<script type="application/ld+json">` with `FAQPage` schema for SEO.

10. **Final CTA Band** — custom band matching brief copy: "Ready to See IntegraHRIS 365 in Action?" + brass "Download Brochure" + outlined "Contact Us". Uses the same gradient treatment as the global `CtaBand` for visual consistency.

### Design system

- Bone base, white feature cards, ink text, cobalt accents/links/badges, brass primary CTAs and "Most Popular" badge. No new colors.
- Soft section bands use `bg-cobalt/5` to echo the Inspo's pastel sections without breaking the palette.
- Typography: existing Inter + Instrument Serif scale (`text-4xl … md:text-6xl` for H1, `text-3xl … md:text-4xl` for H2).
- Cards: `rounded-3xl border bg-card` to match `ProductCard`.
- Spacing: `py-20 sm:py-24` per section.
- Reveal: `useReveal()` once at top + `.reveal` on each section's inner.

### Placeholder convention

Every missing asset is a `rounded-3xl border-2 border-dashed border-border bg-muted` block with centered two-line label:
```
[PLACEHOLDER: <description>]
Drop final asset here · suggested size: WxH
```
Used for: hero screenshot, ISO badge chip, 10 logo tiles, "what is" mock, setup wizard mock, 8 module screenshots.

### Navigation entry point

**`src/routes/solutions.$slug.tsx`** — when `product.slug === "integrahris"`, add a small inline link in the hero CTA row: "View the full IntegraHRIS 365 page →" → `/solutions/integrahris-365`. Keeps the global nav untouched.

### Files

- **NEW** `src/routes/solutions.integrahris-365.tsx`
- **EDIT** `src/routes/solutions.$slug.tsx` (one conditional link)

### Out of Scope

- Real assets (screenshots, logos, ISO badge, brochure PDF) — all marked as labeled placeholders.
- `SoftwareApplication` / `Offer` JSON-LD (only `FAQPage` now).
- Building `/solutions/integrahris-government` as its own route — link points to the existing slug page.
- Header nav changes.

