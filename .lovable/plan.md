

## Optimize "Our Solutions" Section

### Problem

The product screenshots in `src/assets/products/` total **4.3 MB** of PNGs (one is 1.3 MB). All 6 are eagerly imported in `src/lib/site.ts`, bundled into the JS, and the active tab's screenshot blocks first paint of the section. Switching tabs then waits on uncached, oversized images.

The 10 product logo PNGs (231 KB total) are smaller but also eagerly imported and contribute to bundle bloat.

### Fix

**1. Convert all product screenshots to WebP and resize**
- Resize each to max 1600px wide (currently up to ~3000px)
- Encode as WebP at quality ~82
- Expected size: ~60–120 KB each (down from 475 KB–1.3 MB) — roughly **95% reduction**, total <800 KB
- Replace originals; update imports in `src/lib/site.ts`

**2. Convert product logos to WebP**
- Same pipeline at quality ~85, preserving transparency
- Expected: ~3–8 KB each, total <50 KB (down from 231 KB)

**3. Lazy-load the inactive screenshots in `SuiteTabs.tsx`**
- Add `loading="lazy"` and `decoding="async"` to the `<img>` in the media panel
- Add `fetchpriority="high"` only to the first/active screenshot on initial render so the visible one loads fast
- Add explicit `width`/`height` attributes to prevent layout shift

**4. Preload only the first product's screenshot**
- In `src/routes/index.tsx`, add a `<link rel="preload" as="image">` (via the route's `head()` `links`) for the default active product's WebP so it starts downloading in parallel with the JS bundle

### Files Changed

- `src/assets/products/*.png` → replaced with `.webp` (6 files)
- `src/assets/logos/products/*.png` → replaced with `.webp` (10 files)
- `src/lib/site.ts` — update import paths to `.webp`
- `src/components/SuiteTabs.tsx` — add `loading`, `decoding`, `fetchpriority`, `width`, `height` on `<img>`
- `src/routes/index.tsx` — add preload link for the default active product screenshot in `head()`

### Out of Scope

- Header/hero changes (unrelated)
- Cache-Control headers (platform-controlled, addressed in a previous turn)
- The `ProductCard` images on `/solutions` will benefit automatically from the WebP conversion since they share the same source files

### Expected Impact

- Section JS+image payload drops from ~4.5 MB to ~800 KB (~82% smaller)
- Tab switches feel instant (each image now ~80 KB and lazy-loaded only when needed)
- LCP for the section improves substantially on first scroll-into-view

