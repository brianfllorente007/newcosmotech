## Update `/urateme` copy + hero image

Rewrite the page copy in `src/routes/urateme.tsx` to follow the attached `URateMe_WebCopy.md` more closely (tone, headings, structure), and replace the hero `[PLACEHOLDER: URateMe branch dashboard mock]` with the uploaded photo `URateMe_Hero.png`.

### 1. Hero image

- Copy `user-uploads://URateMe_Hero.png` → `src/assets/urateme/urateme-hero.png`.
- Import it in `urateme.tsx` and replace the hero `<Placeholder label="URateMe branch dashboard mock" ... />` with an `<img>` rendered inside a rounded card (`rounded-3xl overflow-hidden border border-border bg-card aspect-[16/10]`), `object-cover`, alt: "Customer using a URateMe Port Customer Satisfaction Survey kiosk powered by Cosmotech".

### 2. Copy rewrite (sections, in order)

Map each existing section to the matching MD section. Keep the existing components (`Container`, `Eyebrow`, `SectionHeading`, `Placeholder`, `ModulesShowcase`, `Accordion`, gradient CTA) and the page structure — only swap text and a couple of list payloads.

| Page section | Pull from MD |
|---|---|
| Hero eyebrow | `URateMe` (keep) |
| Hero H1 | `Hear your clients. Improve your business.` |
| Hero subhead | `Never miss what your customers are thinking. URateMe is a Feedback Management System that gives you a direct line to customers and the tools to act on what they say.` (built from MD tagline + opening) |
| Hero CTAs | `Request a Demo`, `Talk to Sales` (drop "Download Brochure" — not in MD) |
| Section after hero — "The Problem" | New section using MD §"The Problem": eyebrow `The Problem`, heading `Feedback that doesn't get captured doesn't get fixed`, body verbatim from MD §The Problem. Single column, centered, no cards. |
| Three feature cards | Rebuild from MD §"What It Does" bullets. Pick the three highest-signal ones: <br>• Point-of-service capture — "Collects complaints, praises, and suggestions directly from clients."<br>• Real-time branch monitoring — "Monitors service delivery and flags defective processes as they happen."<br>• Consolidated multi-branch view — "Consolidates data from all branches and transmits it through a company VPN." |
| "What is" / About section | Eyebrow `What it does`, heading `A direct line to your customers — and the operating standard to back it up.`, body from MD §"What It Does" opening paragraph. Bullets replaced by the remaining 4 MD bullets not used in cards above (tracks branch + employee performance, generates daily/weekly/monthly/yearly reports, etc.). Keep the right-side `Placeholder` (mock) as-is for now. |
| Benefits grid | Rebuild `BENEFIT_CARDS` to match MD §"Benefits" 1:1 (7 items): Direct Customer Engagement, Improved Customer Service, Improved Customer Loyalty, Standard Treatment, Branch Performance Profile, Employee Performance Profile, Client Demographics. Use the MD descriptions verbatim. Section heading: `Benefits`. |
| General features | Replace `GENERAL_FEATURES` with MD §"Features and Functionalities" (5 items, verbatim). Heading: `Features and functionalities`. Intro paragraph adapted from MD §"Setup and Deployment" (single- or multi-branch, VPN transmission). |
| Modules / "What's inside" | Keep the existing 6-module `ModulesShowcase` structure but trim the body/items copy to echo MD vocabulary (complaints / praises / suggestions, "standard treatment", "graphical and tabular presentation", "VPN"). Module titles stay; the dashboards module gets a new "Reports" sub-bullet list from MD §"Reports" (Standard, Demographic, Employee Rating Per Branch, Employee Performance). |
| New "Reports" callout (optional, small) | Skip a dedicated section — fold the report types into the Dashboards module's `items` so the page doesn't grow another full section. |
| FAQ | Keep existing 8 Q&As — they already align with the MD. Lightly adjust 1–2 answers to use the MD's exact phrasing where it conflicts (e.g. "complaints, praises, and suggestions" instead of "complaints, compliments, and suggestions"). |
| Final CTA | Heading: `Ready to see what your customers are actually thinking?` (from MD §"Get Started"). Subhead: `Contact Cosmotech to set up URateMe for your business.` Buttons: `Request a Demo`, `Talk to Sales`. |

### 3. Terminology cleanup

- Replace all instances of `compliments` with `praises` (MD uses "praises").
- Replace `Integra` mentions if any appear in body copy with `Cosmotech` for brand consistency on this site. (The MD says "by Integra" — confirm in step below.)

### Open question before implementing

The MD says "URateMe (by Integra)". The current page is on the Cosmotech site and the existing CTA copy says "with our team". Should the page:
- (a) Keep Cosmotech branding throughout and drop the "by Integra" attribution, or
- (b) Add a small "by Integra" line under the H1 (e.g. as a tag under the eyebrow)?

I'll default to (a) unless you say otherwise.

### Files touched

- `src/assets/urateme/urateme-hero.png` (new — copied from upload)
- `src/routes/urateme.tsx` (hero image import + JSX swap; rewrite of `FEATURE_CARDS`, `BENEFIT_CARDS`, `GENERAL_FEATURES`, `MODULES[dashboards].items`, FAQ tweaks, hero/about/CTA strings; add new "Problem" section)

No new components, no routing changes, no behavior changes to `ModulesShowcase`.
