

# Hero, Trust Bar, and Solutions Refinements

Three coordinated changes. Asset uploads happen during build; below is the design and code intent.

## 1. Hero Section — new media + tighter layout

**Assets**
- Replace `src/assets/hero-bg.mp4` with `user-uploads://Hero_Image_Video.mp4`.
- Replace `src/assets/hero-image.png` with `user-uploads://Hero-Image-Final.png`.

**Layout (`src/routes/index.tsx`)**
- Reduce vertical breathing room between CTAs and the bottom image:
  - Hero `<Container>` top padding: `pt-20 sm:pt-28` → `pt-16 sm:pt-20`.
  - Image top margin: `mt-12 sm:mt-16` → `mt-8 sm:mt-10`.
- Keep `pb-0` so the new image still sits flush at the section bottom.
- Keep video full-bleed, no overlay, `object-cover`. No other hero structural changes.

## 2. Trust Bar — new headline, bigger logos, 2 rows, randomized swap animation

**Headline (`TrustBar.tsx`)**
- Change "Trusted by Philippine Government Agencies" → **"Trusted by 3000+ companies nationwide"**. Keep the eyebrow + stats row above unchanged.

**Logo treatment**
- Drop the bordered `LogoWall` card here — render logos directly on the section background. No card, no grid borders, no rounded container.
- Two fixed rows. On desktop, 9 visible slots per row (18 logos shown across 2 rows when full set is uploaded). On tablet, 6 per row; on mobile, 4 per row. Logos centered with generous spacing.
- Bigger sizing: cell `h-20 sm:h-24`, image `max-h-14 sm:max-h-16 w-auto object-contain`. Soft hover lift retained.
- Currently we only have 6 client logos (`gsis, erc, ppa, lto, hsbc, landbank`). The component will accept any count and just cycle through what's available — once the remaining 12 are uploaded, no code change needed.

**Randomized swap animation (new `RotatingLogoGrid.tsx`)**
- Each visible slot independently swaps between logos from the pool on a randomized interval (3.5–6s per slot, staggered initial delays so swaps never sync up).
- Swap transition: outgoing logo fades out + scales 1 → 0.92 (200ms), incoming logo fades in + scales 0.95 → 1 (250ms). Implemented with two stacked `<img>` layers per slot and CSS opacity/transform transitions — no layout shift.
- Each slot picks its next logo at random from the pool, excluding logos currently visible in other slots (so duplicates don't appear simultaneously when pool > slot count).
- Respects `prefers-reduced-motion`: animation disabled, logos stay static.
- Pauses while the section is offscreen via `IntersectionObserver` to save CPU.

## 3. Solutions Suite — real product screenshots, 60/40 split

**Assets** (save to `src/assets/products/`)
- `integrahris365.png` ← `user-uploads://IntegraHRIS365.png`
- `integrahris-govt.png` ← `user-uploads://IntegraHRISGovt.png`
- `qmaster.png` ← `user-uploads://QMaster.png`
- `helpdesk.png` ← `user-uploads://Helpdesk.png`
- `docutrakr.png` ← `user-uploads://Docutrakr.png`
- `urateme.png` ← `user-uploads://URateMe.png`
- Horion: no image yet → keep existing `DocMock` fallback for that one product only.

**Wiring (`src/lib/site.ts`)**
- Add `screenshot?: string` field to each product, importing the corresponding PNG above.

**Card layout (`SuiteTabs.tsx`)**
- Replace the current `lg:grid-cols-2` (50/50) with a 60/40 split: `lg:grid-cols-5`, text column spans `lg:col-span-3`, media column spans `lg:col-span-2`.
- Remove the `ProductMock` switch and inner `flex items-center justify-center` wrapper.
- Media column becomes a flush, full-bleed panel:
  - Negative margin to bleed into the card's padding on the right and bottom: `-m-6 sm:-m-10 lg:ml-0` so the image touches the card edges with no gaps.
  - `relative overflow-hidden bg-muted/30` wrapper, `aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px]`.
  - `<img src={product.screenshot} alt="" className="absolute inset-0 h-full w-full object-cover object-left-top" />` — `object-cover` ensures the image fills the entire 40% area with zero gaps; `object-left-top` keeps the dashboard's primary content visible when cropped.
- Mobile/tablet (`<lg`): media stacks below text, full width, `aspect-[16/10]`, same flush bleed to the card edges.
- Horion (no screenshot) keeps the existing centered `DocMock` inside the same 40% panel, padded normally instead of bleeding.
- Whole-card slide-up animation on tab change is preserved (still keyed by active slug).

## Files touched

- `src/assets/hero-bg.mp4` (replace)
- `src/assets/hero-image.png` (replace)
- `src/assets/products/*.png` (6 new)
- `src/routes/index.tsx` (hero spacing only)
- `src/components/TrustBar.tsx` (headline, swap to new grid)
- `src/components/RotatingLogoGrid.tsx` (new)
- `src/lib/site.ts` (add `screenshot` per product)
- `src/components/SuiteTabs.tsx` (60/40 split, real images, flush media panel)

