## Plan: Attach Hero & Trusted-by logos on IntegraHRIS Government page

**File:** `src/routes/integrahris-government.tsx`

### 1. Hero image
- Copy `user-uploads://Hero_HRISGovt.png` → `src/assets/integrahris-government/hero.png`
- Import it at the top of the route file
- Replace the hero placeholder `<div data-image-slot="hero">` (lines 369–386) with an `<img>` filling the same 4:3 container (`h-full w-full object-cover rounded-3xl`), keeping the border/wrapper for consistent framing

### 2. Trusted by Government Offices logos
- Copy the 5 uploaded logos into `src/assets/integrahris-government/`:
  1. `user-uploads://1200px-Philippine_Ports_Authority_PPA.svg-1.png` → `logo-1.png` (Philippine Ports Authority)
  2. `user-uploads://BOC.webp` → `logo-2.webp` (Bureau of Customs)
  3. `user-uploads://dfa.png` → `logo-3.png` (Department of Foreign Affairs)
  4. `user-uploads://Freeport_Area_of_Bataan_logo.png` → `logo-4.png` (FAB)
  5. `user-uploads://pdealogo.png` → `logo-5.png` (PDEA)
- Import all 5 and build a `LOGOS` array `[{src, alt}]`
- Replace the `[1,2,3,4,5].map(...)` placeholder block (lines 452–467) with one that renders each logo as an `<img>` inside its existing card

### Uniform sizing approach
To make wildly different logo aspect ratios (square seals, wide wordmarks) read consistently:
- Keep the card at `h-20` and switch background from dashed-border placeholder to a clean `bg-bone` card with subtle border
- Inside each card: `<img className="max-h-12 max-w-[80%] w-auto object-contain" />` — caps height so tall seals (DFA, PDEA, BOC) and wide marks (FAB, PPA) all sit at the same visual weight with consistent padding
- Add `loading="lazy"` and descriptive `alt` text per agency

No copy changes, no other sections touched.