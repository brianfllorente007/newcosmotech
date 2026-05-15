## Edits to `src/routes/integrahris-government.tsx`

### 1. Hero Section — trim
Keep only:
- Eyebrow: "IntegraHRIS Government Edition"
- H1: "Government HRIS Software for Philippine Agencies"
- Subhead paragraph: "The complete HR system for Philippine government agencies, built for every stage of the employee lifecycle — from recruitment and onboarding to payroll, leave, and retirement."
- CTA buttons (Request a Demo, View System Modules)

Remove the three-paragraph block currently in the hero ("Managing people…", "IntegraHRIS Government Edition handles…", "No manual workarounds…").

### 2. New "The Challenge" Section
Insert a new section between Hero and the Benefits grid containing the three paragraphs removed from the hero, styled as a focused intro band on `bg-card`/border treatment with a max-width prose column. Last line ("No manual workarounds. No spreadsheet patchwork.") rendered emphasized.

### 3. Executive Dashboard — interactive split layout
Replace the current 3-column grid with a two-column layout inspired by the attached reference:

- Left column: section heading + a vertical list of the 5 dashboard categories (General Employee Data, Payroll Data, Timekeeping & Leave Data, Medical Data, Recruitment Data). Each item is a button row with icon + title. The active item shows an accent left-border and bold text; inactive items are muted. Clicking expands an inline dropdown beneath the title revealing the bullet list of metrics for that category (smooth height transition).
- Right column: a sticky card showing the corresponding dashboard mockup image. Image swaps with a fade transition when the active category changes.
- State managed via `useState<string>` for active category id; only one open at a time; first item open by default.
- Mobile (<md): stack vertically — image card appears above each expanded panel, or single image above the list that updates on selection.

### 4. Placeholder images
Add 5 placeholder images to `src/assets/dashboard/`:
- `general-employee.webp`
- `payroll.webp`
- `timekeeping.webp`
- `medical.webp`
- `recruitment.webp`

Generate simple branded mockup placeholders (light card with chart shapes) so the layout is visible; user swaps later. Import each via ES6 and map to its dashboard entry.

### Sections kept as-is
- Why IntegraHRIS (Benefits grid)
- System Modules grid
- CtaBand

## Technical notes
- Continue using existing `Container`, `SectionHeading`, `Eyebrow`, `useReveal`, design tokens (`cobalt`, `bone`, `border`, `muted-foreground`).
- No new dependencies; use plain `useState` + Tailwind transitions for the accordion/image swap.
- Keep `head()` metadata and JSON-LD unchanged.
