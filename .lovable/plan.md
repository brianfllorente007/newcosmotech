

# Final Consolidated Build — with Whole-Box Slide-Up

All previously approved changes, plus the animation refinement: the entire Solutions card (border, background, and content) slides up as one unit on tab switch — not just the inner content.

## 1. Brand: Cosmotech logo + yellow accent
- Save uploaded logo to `src/assets/logo-cosmotech.png`.
- `SiteHeader.tsx`: replace "COSMOTECH" wordmark with `<img>` (h-8 mobile, h-9 desktop, `alt="Cosmotech Philippines"`), keep `<Link to="/">` wrapper.
- `SiteFooter.tsx`: same logo in brand column (h-7).
- `src/styles.css`: set `--brass: #f7c200` with `--brass-foreground: var(--ink)`.
- Apply `bg-brass text-ink hover:brightness-95` to: "See Our Solutions" (hero), "Talk to Our Experts" (digital transformation), "Talk to Our Team" (CtaBand). Header CTA stays neutral dark.

## 2. Remove all italics
- Strip every `italic` and `font-display` class across `src/routes/*` and `src/components/*`.
- Remove Instrument Serif `<link>` from `__root.tsx`.
- Remove `.font-display` rule from `styles.css`.

## 3. Solutions section — 7 products with logo tabs
Update `src/lib/site.ts` to 7 products with `logoLight` + `logoDark` imports:
1. IntegraHRIS 365 ✓
2. IntegraHRIS Government ✓
3. QMaster ✓
4. HelpDesk ✓
5. Docutrakr — text fallback
6. URateMe ✓
7. Horion Interactive Display — text fallback + placeholder copy

Save uploaded logos to `src/assets/logos/products/`.

Rebuild `SuiteTabs.tsx`:
- Each tab = uniform pill (`h-12 w-32`, rounded-full, border).
- Inactive: light pill, dark logo centered (`object-contain max-h-6`).
- Active: dark pill, light logo centered.
- Missing logo → product name as text inside same pill.
- `aria-label` + visually-hidden text on every tab.
- Mobile/tablet: `flex overflow-x-auto snap-x` with right-edge gradient fade; `.scrollbar-hide` utility added to `styles.css`. Single row on `lg+`.

## 4. Whole-box slide-up animation on tab switch
- Add `slide-up-fade` keyframe + `.animate-slide-up-fade` utility to `styles.css` (opacity 0→1, translateY 24px→0, 400ms ease-out), wrapped in `@media (prefers-reduced-motion: no-preference)`.
- **Apply the animation to the entire outer card** (the `rounded-3xl border bg-card` wrapper), keyed by active product slug — so the border, background panel, and all inner content slide up together as one cohesive box every time a tab changes.
- The tab strip itself stays fixed above the animating card.

## 5. Logo wall (agencies + clients)
- Save to `src/assets/logos/agencies/` (gsis, erc, ppa, lto) and `src/assets/logos/clients/` (hsbc, landbank).
- New `src/components/LogoWall.tsx`: responsive grid (3→4→6 cols), `h-16` cells, `object-contain`, subtle grid borders, full color, soft hover lift.
- `TrustBar.tsx`: replace text wordmarks with `<LogoWall>` of 4 agencies (keep stats row above).
- `index.tsx`: add "Trusted by leading enterprises" section with client `<LogoWall>` above the Projects teaser.
- Drop the same walls into `about.tsx` and `projects.tsx` near the bottom.

## Pending uploads (non-blocking)
- Docutrakr + Horion product logos (light + dark) and Horion description copy
- More agency logos: BOC, DPWH, NTC, PDIC, DENR, Freeport Bataan, Land Management Bureau
- Additional private client logos

