## 1. Product copy + 2 new products (`src/lib/site.ts`)

Update each product's `short` and `description` to the new copy (verbatim). Keep `tagline`, `features`, `deployedAt`, logos, and screenshots untouched.

Mapping:
- **IntegraHRIS Government** (`integrahris-government`) → "Complete HR and payroll management for government agencies; plantilla, payroll, leave, performance management, and PRIME-HRM compliance."
- **IntegraHRIS 365** (`integrahris`) → "Cloud-ready HRIS for enterprises. Scalable HR, payroll, and workforce management for today's fast-moving organizations."
- **Docutrakr** → "Document tracking with full visibility and traceability across departments, approvals, and document workflows."
- **QMaster** → "Intelligent queue management and customer flow — real-time monitoring, analytics, kiosk integration, and digital ticketing."
- **URateMe** → "Real-time citizen and customer feedback satisfaction ratings, service quality scores, and actionable insights at the point of service."
- **HelpDesk** → "Streamline support requests with a centralized ticketing platform that improves response time and service efficiency."
- **Horion** — keep existing copy (unchanged).

Add 2 new products as placeholders (no logo image, no screenshot — `SuiteTabs` already falls back to a text label + `DocMock`):
- `health-wellness` — name "Health & Wellness", tagline "Employee health and wellness, end to end.", short/description = "Employee health and wellness management, medical records, consultation logs, leave-for-health tracking, and wellness programs.", features: 4–5 bullets derived from the copy (medical records, consultation logs, leave-for-health tracking, wellness programs, reporting).
- `cosmotech-gpms` — name "CosmotechGPMS", tagline "Government procurement, transparent end to end.", short/description = "Government Procurement Management System for full procurement transparency and accountability.", features: 4–5 bullets (procurement planning, bidding workflow, audit trail, vendor management, transparency reporting).

Final order in `PRODUCTS` array (8 items): IntegraHRIS 365, IntegraHRIS Government, QMaster, HelpDesk, Docutrakr, URateMe, Health & Wellness, CosmotechGPMS, Horion (= 9 total to keep Horion).

## 2. SuiteTabs → 2 rows × 4 columns on desktop (`src/components/SuiteTabs.tsx`)

Currently the tab strip is a single horizontally-scrollable row. Change it so:
- **Mobile (`<sm`)**: keep the horizontal snap scroller as-is (per earlier explicit request).
- **`sm:` and up**: switch to a CSS grid `sm:grid sm:grid-cols-4 sm:gap-3 sm:overflow-visible sm:px-0` so 9 items wrap into rows of 4 (= 4/4/1 with Horion). With 8 visible products + Horion that's effectively 2 full rows + 1; acceptable.
- Drop the right-edge fade gradient on `sm:` and up.
- Tab buttons: remove fixed `w-44 shrink-0 snap-start` on `sm:` and up; use `sm:w-auto` so they fill grid cells.

Keep cross-fade panel logic untouched.

## 3. FAQ section on home (`src/components/FaqSection.tsx` + `src/routes/index.tsx`)

New component `FaqSection` using existing shadcn `Accordion` (`@/components/ui/accordion`):
- Wrapped in `<section className="py-16 sm:py-20 md:py-24">` + `<Container>`.
- `SectionHeading` with eyebrow "FAQ", title "Questions, answered.", centered.
- `Accordion type="single" collapsible` with the 4 Q&As verbatim.
- Constrain to `max-w-3xl mx-auto`.

Render in `src/routes/index.tsx` inside a `<div className="reveal">` placed **immediately above `<CtaBand />`** (after the Why Cosmotech block).

## Out of scope
- No new routes, no logo assets for the 2 placeholders (text fallback only), no copy changes outside the listed products, no styling changes to product detail pages.
