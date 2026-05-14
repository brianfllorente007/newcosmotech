## Copy + UI updates

### 1. Home Hero (`src/routes/index.tsx`)
- Add an overline above the H1: `PIONEERING INTELLIGENT AUTOMATION` (uppercase, tracked, brass/bone-muted, matching existing Eyebrow styling).
- Replace H1 with: **"Leveraging AI to Automate, Optimize, and Elevate Operations"** (drop the highlighted span split).
- Replace subhead with: *"From manual processes to intelligent automation, empowering your organizations to accelerate efficiency, reduce operational friction, and deliver smarter services at scale."*
- Keep existing CTAs and hero image untouched.

### 2. "Why Cosmotech?" — new shared section
Create a new component `src/components/WhyCosmotech.tsx` rendering:
- Eyebrow: `Why Cosmotech?`
- Heading: *"For over three decades, we have been the trusted technology engine behind the Philippines' most critical organizations."*
- A responsive grid (1 col mobile / 2 col sm / 3 col lg) of 6 feature cards:
  1. **31+ Years of Trusted IT Leadership** — Reliable and scalable solutions for government and enterprise.
  2. **Certified & Experienced IT Experts** — Licensed team in software, integration, and consulting.
  3. **End-to-End Digital Delivery** — Complete services from design to continuous support.
  4. **AI-Powered Custom System Solutions** — Tailored systems aligned with your specific requirements.
  5. **Integrated Hardware & Software** — Seamless integration for optimal system performance.
  6. **ISO-Certified and DPA Compliant** — ISO 9001:2015 certified since 2017 and full compliance with the Data Privacy Act of 2012 (RA 10173).
- Each card: subtle border, brass icon (lucide), title, body text — consistent with the site's editorial/brass-on-bone aesthetic.

Use it in two places:
- **Home (`src/routes/index.tsx`)** — replace the current "About" teaser section (the two-paragraph block) with `<WhyCosmotech />`.
- **About page (`src/routes/about.tsx`)** — insert `<WhyCosmotech />` after the page hero, before the "How we work / What we do" grid.

### 3. CtaBand — add "Request a Proposal" button (global)
In `src/components/CtaBand.tsx`:
- Wrap the existing "Talk to our team" link in a flex row with a new secondary button labeled **"Request a Proposal"**.
- Per user, the new button is a visual placeholder: render as a `<button type="button">` with no destination yet.
- Style it as a ghost/outline variant on the dark gradient (border `bone/30`, text `bone`, hover `bg-bone/10`) — secondary to the primary brass CTA.
- Stack vertically on mobile, inline on `sm:` and up.

### Out of scope
- No route changes, no new pages, no business logic.
- No copy changes outside the three areas above.
- Hero video, logos, project cards untouched.
