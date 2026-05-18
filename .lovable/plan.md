## Update product screenshots in SuiteTabs

### Replace 6 product screenshots
Copy the 6 uploaded images into `src/assets/screenshots/` (overwriting current files imported in `src/lib/site.ts`):

- `user-uploads://IntegraHRIS365-3.png` → IntegraHRIS 365
- `user-uploads://IntegraHRISGovt-3.png` → IntegraHRIS Government
- `user-uploads://QMaster-3.png` → QMaster
- `user-uploads://Helpdesk-3.png` → Helpdesk
- `user-uploads://Docutrakr-3.png` → Docutrakr
- `user-uploads://URateMe-3.png` → URateMe

I'll first read `src/lib/site.ts` to get the exact import paths, then `code--copy` each upload onto those paths so no import changes are needed.

### Remove placeholder for Health & Wellness and Cosmotech GPMS
Currently `SuiteTabs.tsx` falls back to a `<DocMock />` placeholder when a product has no `screenshot`. For these two products (which have no real screenshot yet), I'll update `SuiteTabs.tsx` so that when `screenshot` is missing, the media panel renders nothing and the text column expands to full width (no empty box, no mock).

### Files touched
- `src/assets/screenshots/*.png` (overwrite existing 6 files)
- `src/components/SuiteTabs.tsx` (conditional layout when no screenshot)

No changes to `src/lib/site.ts` needed.