## Plan: Add product logos for Cosmotech GPMS and Health & Wellness

The `SuiteTabs` component already renders a product's `logoLight` (for the active dark tab) and `logoDark` (for the inactive light tab) when both are present, and falls back to the product name otherwise. GPMS and Health & Wellness in `src/lib/site.ts` currently have no logo fields, so their tabs show plain text. Adding the assets + fields wires them in automatically.

### Files to add
Copy uploaded images into `src/assets/logos/products/`:
- `user-uploads://GPMS_logo_Dark.png` → `gpms-dark.png` (shown on light/inactive tab)
- `user-uploads://GPMS_logo-white.png` → `gpms-light.png` (shown on dark/active tab)
- `user-uploads://HnW_Dark.png` → `health-wellness-dark.png`
- `user-uploads://HnW_White.png` → `health-wellness-light.png`

### Code change
In `src/lib/site.ts`:
1. Add four imports alongside the existing product-logo imports.
2. Add `logoLight` / `logoDark` to the `health-wellness` product entry.
3. Add `logoLight` / `logoDark` to the `cosmotech-gpms` product entry.

No changes to `SuiteTabs.tsx` — existing rendering logic handles it (max-h-10, contained, light/dark crossfade on active state).

### Notes
- Naming follows existing convention (`{slug}-light.png` / `{slug}-dark.png`).
- PNG kept (not converted to webp) to preserve transparency and match the Docutrakr precedent which is also `.png`.
- No copy or layout changes requested, so nothing else is touched.