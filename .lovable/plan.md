## Scope

Copy-only edits. No layout or visual design changes.

## 1. Solutions dropdown (header)

`src/components/SiteHeader.tsx` — Remove the "View all solutions →" Link (and its preceding divider) from the desktop `SOLUTIONS_DROPDOWN` panel. Mobile menu already lists each solution; no change needed there.

## 2. Homepage — Our Solutions section intro

`src/routes/index.tsx` (line 131) — Replace the `intro` prop of `SectionHeading` with:

> From HR and payroll systems to queue management and document tracking, our solutions are purpose-built for how Philippine organizations operate, aligned with government compliance, local regulations, and real-world operational requirements.

## 3. Product copy (drives both home `SuiteTabs` and product detail pages)

`src/lib/site.ts` — For each product below, update `tagline`, `short`, and `description`. The homepage `SuiteTabs` uses `name` (eyebrow), `tagline` (heading), and `description` (paragraph). Product detail routes pull from the same record, so this single edit propagates.

Mapping (tagline = first line of NEW; description = paragraph; `short` mirrors description for meta usage):

- **integrahris (IntegraHRIS 365)** — tagline: "Scalable HR and payroll for private companies." description: "Scalable HR, payroll, and workforce management software designed for private companies streamlining employee management, payroll processing, attendance, and HR operations in one centralized platform."
- **integrahris-government** — tagline: "End-to-End HRIS for Philippine Government Agencies" description: "CSC-aligned HR and payroll management system for government agencies covering plantilla, recruitment, payroll, leave management, performance evaluation, and PRIME-HRM compliance."
- **qmaster** — tagline: "Modern queue management for public service." description: "Modern queue management and customer flow system with real-time monitoring, analytics, digital ticketing, SMS notifications, and kiosk integration for faster and more efficient public service."
- **helpdesk** — tagline: "Centralized Support Ticketing and Service Management" description: "Streamline issue resolution, service requests, and technical support through an automated helpdesk platform that improves response time, accountability, and operational efficiency."
- **docutrakr** — tagline: "Real-Time Document Tracking and Workflow Management" description: "Track, monitor, and retrieve documents with complete visibility across departments using QR-based tracking, workflow automation, notifications, and centralized document monitoring."
- **urateme** — tagline: "Real-Time Customer Feedback and Satisfaction Monitoring" description: "Capture customer and citizen feedback through digital surveys and AI-driven insights to monitor service quality, satisfaction ratings, and operational performance in real time."
- **integra-asset** — tagline kept as "Asset Management System for Philippine Government Agencies"; description: "Web-based asset lifecycle management system aligned with government processes and COA requirements—covering inventory monitoring, asset accountability, transfers, reporting, and audit-ready documentation."
- **cosmotech-gpms** — tagline: "Government Procurement Management System" description: "Digitize and streamline government procurement processes with a centralized platform designed to improve transparency, accountability, workflow efficiency, and compliance monitoring from requisition to procurement completion."

## 4. Individual solutions pages

Some product detail routes (`src/routes/integra.tsx`, `gpms.tsx`, `integrahris-365.tsx`, `integrahris-government.tsx`, `qmaster.tsx`, `helpdesk.tsx`, `docutrakr.tsx`, `urateme.tsx`) have hard-coded hero paragraphs that duplicate the old `short`/`description`. For each route, swap the matching old paragraph to the corresponding NEW description above. Custom marketing prose unrelated to the listed OLD lines is left untouched.

## Out of scope

No changes to images, layout, animations, features lists, deployed-at lists, header/footer styling, or routing.
