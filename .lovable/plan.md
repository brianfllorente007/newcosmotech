## Plan

Replace the placeholder in the Vision & Mission section on `/about` with the uploaded Cosmotech reception photo.

### Steps
1. Upload `About_Cosmotech.png` to Lovable Assets CDN via `lovable-assets create`, writing `src/assets/about-cosmotech.png.asset.json`.
2. Edit `src/routes/about.tsx`:
   - Import the asset pointer JSON.
   - Replace the placeholder `<div>` (aspect-[4/3] muted block) with an `<img>` using the asset URL, keeping `aspect-[4/3] w-full rounded-3xl shadow-lg object-cover` and alt text "Cosmotech office reception".

No layout or copy changes — only swap the placeholder for the real image.
