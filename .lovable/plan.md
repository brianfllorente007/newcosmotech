

# Hero Section Update

Two focused changes to `src/routes/index.tsx`.

## 1. Replace hero background video

- Save `user-uploads://Hero_Image_Background.mp4` to `src/assets/hero-bg.mp4` (overwrites the existing one).
- Remove the dark gradient overlay `<div>` that sits over the video.
- Remove `opacity-40` from the `<video>` so it plays at full brightness.
- Keep the `gradient-hero` class on the `<section>` as a fallback color while the video loads, but the video itself will be fully opaque on top.
- Keep `autoPlay loop muted playsInline` and `object-cover` so it fills any viewport responsively.
- Text legibility: since the overlay is removed per your instruction, headline/body stay as-is (`text-bone`). If contrast becomes an issue we can revisit, but no overlay is added now.

## 2. Replace mock UI cluster with hero image, flush to bottom

- Save `user-uploads://Hero_Image_1.png` to `src/assets/hero-image.png` and import it.
- Remove both mock blocks: the desktop `QueueMock`/`HelpdeskMock`/`HrisMock` cluster and the mobile single `HrisMock`. Drop the unused `ProductMock` imports.
- To make the image sit flush at the bottom of the section:
  - Remove the bottom padding on the hero `<Container>` (`pb-24 sm:pb-32` → `pb-0`); keep top padding for the headline breathing room.
  - Render the image directly after the CTA buttons inside the centered text container, in its own wrapper:
    - `<img src={heroImage} alt="IntegraHRIS Government dashboard preview" className="mt-12 sm:mt-16 mx-auto block w-full max-w-5xl h-auto" />`
  - The image has its own transparent padding at the top (whitespace above the dashboard) so it visually flows from the text into the artwork; bottom edge of the PNG meets the bottom edge of the section because section/container padding-bottom is zero.
- Responsive: `w-full max-w-5xl` scales it down on tablet/mobile and caps it on desktop. `h-auto` preserves aspect ratio. No horizontal overflow because the section is `overflow-hidden`.

## Files touched

- `src/assets/hero-bg.mp4` (replace)
- `src/assets/hero-image.png` (new)
- `src/routes/index.tsx` (hero section only — nothing else changes)

