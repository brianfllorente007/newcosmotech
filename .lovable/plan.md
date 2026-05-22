## Attach screenshots + refine Docutrakr "What's inside" interactions

The "What's inside" → Modules and Capabilities section on `/docutrakr` currently renders a `<Placeholder />` in the sticky right panel and uses an IntersectionObserver tuned to viewport center. I'll wire the uploaded screenshots in, calm the scroll behavior, add click-to-expand, and add a peek of the next image for a scrolling-stack feel.

### 1. Wire screenshots to modules

Copy the 8 uploads into `src/assets/docutrakr/modules/` (kebab-case), import them in `src/routes/docutrakr.tsx`, and add an `image` field to each `MODULES` entry:

| Module (in order) | Uploaded image |
|---|---|
| Document Receiving and Processing | `Document_Receiving_and_Processing.png` |
| Workflow Management — Configurable Per Document Type | `Workflow_Management.png` |
| Notifications — Email and In-App | `Notifications.png` |
| Dashboard and Analytics — Real-Time | `Dashboard_Management.png` |
| System Security — 2FA, Audit Trail, and Policy | `System_Security.png` |
| Configurable Reference Tables | `Configurable_Reference_Tables.png` |
| Report Management — Excel, CSV, PDF | `Report_Management.png` |
| Filing and Archival | `Filing_and_Archival.png` |

### 2. Calmer scroll behavior (match Integra fix)

Replace the IntersectionObserver in `ModulesShowcase` with a `scroll` listener that only switches the active module when a heading's top crosses an "anchor line" at roughly 40% of viewport height (same approach now used on Integra). This prevents the jump-to-next-feature behavior when the user is just scrolling to read expanded content.

### 3. Click to expand

Make each module heading a `<button>` that calls `setActive(i)` on click (and also scrolls the heading into view smoothly so the right panel updates predictably). Hover/focus styles on the heading; cursor-pointer; keyboard-accessible. Scroll still works independently.

### 4. "Peek" of the next image — scrolling stack effect

Replace the single sticky `<Placeholder />` with a stacked image panel:

- The active module's screenshot fills the main rounded card (border, `overflow-hidden`, `aspect-[3/2]`, `animate-fade-in` keyed on `current.title`).
- The next module's screenshot is rendered behind it, offset down and to the right (~12px) and slightly scaled-down (~96%), with reduced opacity (~60%) and a soft shadow, peeking out from the bottom-right corner of the active card. This signals "more coming" and creates a card-stack scrolling effect as users move through the list.
- On the last module, no peek is rendered.
- The small icon chip stays above the stack.

Layered with `relative` + absolutely positioned peek, no extra layout shift. Hidden on small screens (`lg:` only) since the panel itself is already lg-sticky.

### Files touched
- `src/assets/docutrakr/modules/*.png` (new — 8 files)
- `src/routes/docutrakr.tsx` (imports, MODULES data, ModulesShowcase scroll handler, button heading, stacked image panel)

`Placeholder` helper stays in the file (unused, harmless) in case it's reused later.