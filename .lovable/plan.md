

# Logo Header + Animated Solutions Tabs

Two focused changes on top of the previously approved (still-pending) work.

## 1. Cosmotech logo in the header

- Save the uploaded logo to `src/assets/logo-cosmotech.png` and import it as an ES6 module.
- In `src/components/SiteHeader.tsx`, replace the "COSMOTECH" wordmark text with an `<img>` of the logo (height ~32px on mobile, ~36px on desktop, `w-auto`, `alt="Cosmotech Philippines"`). Keeps the existing `<Link to="/">` wrapper so it still navigates home.
- Use the same logo in `src/components/SiteFooter.tsx` brand column for consistency (replacing the text wordmark there too, height ~28px).
- The logo is yellow on transparent — works on both the light header background and dark footer with no treatment needed.

## 2. Slide-up animation when switching product tabs in `SuiteTabs`

When a tab is clicked, the content panel (left copy + right product mock) animates in from below with a fade, instead of swapping instantly.

- Add a keyframe `slide-up-fade` to `src/styles.css`:
  ```text
  from: opacity 0, translateY(24px)
  to:   opacity 1, translateY(0)
  duration: 400ms ease-out
  ```
  Plus a `.animate-slide-up-fade` utility class.
- In `src/components/SuiteTabs.tsx`, key the content panel by the active product slug (`<div key={active} className="animate-slide-up-fade">…`) so React remounts it on tab change, retriggering the animation cleanly every time.
- Apply `overflow-hidden` to the outer rounded card so the incoming content doesn't visually bleed during the upward slide.
- Respect reduced motion: wrap the keyframe in `@media (prefers-reduced-motion: no-preference)` so users with reduced-motion settings get an instant swap.

## Carrying over from prior approved work (still to be implemented in the next default-mode pass)

- Brass `#f7c200` on the 3 primary CTAs (See Our Solutions, Talk to Our Experts, Talk to Our Team)
- Remove all italics + drop the Instrument Serif font import
- Rebuild `SuiteTabs` with all 7 products, logo pills inside uniform rounded buttons, horizontal scroll on mobile (with edge fade + hidden scrollbar)
- Save the 5 uploaded product logos; Docutrakr + Horion fall back to text labels until uploaded
- New `LogoWall` component used in `TrustBar`, Home projects teaser, `/about`, and `/projects`, wired with the 4 agency logos (GSIS, ERC, PPA, LTO) and 2 client logos (HSBC, Landbank)

## Still needed from you (non-blocking — not required to ship this round)

- Docutrakr + Horion product logos (light + dark) and Horion description copy
- Remaining agency logos: BOC, DPWH, NTC, PDIC, DENR, Freeport Bataan, Land Management Bureau
- Any additional private client logos

