

## Mobile responsiveness + hero seam fixes

### 1. Hero seam (the "line" at top before scroll)

**Cause:** `SiteHeader` is `sticky` with a transparent background on home, but the hero uses `-mt-20 md:-mt-24` to slide under it. The video `<video>` is `absolute inset-0` covering the section box — but the section's `gradient-hero` only paints the section's own area. The header sits above the section in DOM flow; when transparent, you see through to the page background (`--bone`) for the 80–96px header strip until the negative margin kicks the section up. On some browsers/zooms this leaves a 1px sub-pixel seam, and the bone strip flashes during the SSR → mount transition (because `transparent` is gated on `mounted`).

**Fix in `src/routes/index.tsx`:**
- Wrap the hero in a parent that paints the same dark gradient behind the header area, OR simpler: move `gradient-hero` and the `<video>` to cover from y=0 down to the section bottom by extending the video and gradient up under the header.
- Concretely: keep `-mt-20 md:-mt-24`, but also add `before:absolute before:inset-0 before:-z-10 before:bg-ink` so any sub-pixel gap and the SSR-pre-mount frame paint ink, not bone.
- Also set `body { background-color: var(--ink) }` only when on home is overkill — instead, paint the html root with ink behind the hero by adding a dark backdrop wrapper around the section.

**Fix in `src/components/SiteHeader.tsx`:**
- Remove the `mounted` gate for the home transparent state — render transparent immediately on the home route on first paint (it's safe; only the bg color differs and SSR knows the route). This eliminates the "white header peek" flash before hydration.

### 2. Global horizontal scroll lock

Add to `src/styles.css` `@layer base`:
```css
html, body { overflow-x: hidden; }
```
This stops any oversized child (video, marquee, or wide image) from causing the whole page to scroll sideways. The product-tabs strip keeps its own internal `overflow-x-auto` and remains unaffected.

### 3. "Our Solutions" tabs — left padding on mobile

In `src/components/SuiteTabs.tsx`, the tab strip uses `-mx-5 sm:mx-0` then `px-5 pb-2 sm:px-0`. With the parent `Container` already at `px-5`, the negative margin pulls the strip flush to the viewport edge — correct intent — but the first tab snaps to `x=0` because `snap-mandatory` + the scroll-padding default is 0. Fix:
- Add `scroll-px-5` to the scroller and keep `px-5` so the first tab visually sits 20px from the left edge even when scrolled to start.
- Change the strip from `-mx-5 sm:mx-0` to keep edge-fade behavior but ensure initial scrollLeft shows the first tab with padding (set `scrollLeft = 0` is fine once `scroll-padding-inline-start: 1.25rem` is in place).

### 4. "Our Solutions" panel — content cut off + image not scaled

Inside each panel in `SuiteTabs.tsx`:
- The media panel uses `lg:-mr-10 lg:-my-10` plus `-m-6 sm:-m-10` on mobile to bleed to card edges. On mobile this is fine, but the image uses `object-left-top` and a fixed `aspect-[16/10]` that crops important UI. Change mobile aspect to `aspect-[4/3]` and `object-contain` with a white background so nothing is cut off; keep `object-cover object-left-top` only at `lg:` and up.
- The card itself uses `p-6 sm:p-10` but with `-m-6` the media bleeds correctly. Verify the text column has `min-w-0` so long words wrap (add `min-w-0`).
- Tab buttons: `w-44` (176px) is fine, but ensure logos have `max-w-[140px]` and `px-3` on mobile so IntegraHRIS logo isn't cropped.

### 5. "Selected work" → "About" gap too big

Both sections use `py-24` (96px top + 96px bottom = 192px between). On mobile that's excessive. Standardize all home sections:
- Replace every `py-24` with `py-16 sm:py-20 md:py-24`.
- Apply across: solutions, digital transformation, projects, about teaser sections in `src/routes/index.tsx`.

### 6. Mobile responsiveness sweep (rest of home)

- **Hero `<h1>`:** `text-4xl` at 390px is OK; add `break-words` and reduce to `text-[2rem]` on `<360px` via `max-[360px]:text-[2rem]`.
- **Hero subhead/buttons:** already stack with `flex-col sm:flex-row` — good.
- **Hero image:** `mt-8` and `w-full max-w-5xl` is fine; add `px-2` for breathing room.
- **TrustBar headline:** `text-lg` with `tracking-[0.22em]` will overflow narrow phones. Change to `text-sm sm:text-base md:text-lg` and `tracking-[0.18em]`.
- **Projects grid:** `gap-4 sm:grid-cols-2` — fine. ProjectCard padding `p-6` is fine.
- **About teaser:** `gap-12 lg:gap-20` on mobile creates a big jump between heading and body — change to `gap-6 lg:gap-20`.
- **CTA band & Footer:** quick verify only; trim padding if needed.

### 7. Files to edit

- `src/routes/index.tsx` — hero ink backdrop, section padding scale (`py-16 sm:py-20 md:py-24`), about gap.
- `src/styles.css` — global `overflow-x: hidden` on html/body.
- `src/components/SiteHeader.tsx` — drop `mounted` gate on home transparency.
- `src/components/SuiteTabs.tsx` — `scroll-px-5`, mobile media `aspect-[4/3] object-contain`, `min-w-0` on text col, logo `max-w-[140px]`.
- `src/components/TrustBar.tsx` — responsive headline sizing.

### Out of scope

- Redesigning the product cards or hero layout.
- Replacing the hero video.
- Changing the tab interaction pattern (kept as horizontal scroller per your request).

