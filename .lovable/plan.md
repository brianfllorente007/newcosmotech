## Goal

Replace the current `/blog/integrahris-transforming-hr` page with a proper **article reading page** — clearly distinct from the `/blog` listing, focused on typography and long-form content.

## What's wrong today

The page I created reuses the same visual patterns as `/blog` (bone hero band, same image treatment, CtaBand), so at a glance it looks like another variant of the listing. It needs its own layout.

## New layout

Single-column, centered, article-first:

1. **Slim top bar**
   - `← Back to Blog` link only. No eyebrow, no bone band.

2. **Article header (centered, max-w-3xl)**
   - Tag pills
   - Large H1 title
   - Meta row: author avatar + name · date · read time

3. **Full-bleed cover image**
   - Wide 21/9 image inside a rounded container, edge-to-edge within the container width.

4. **Article body (max-w-2xl, centered)**
   - Real prose styling: larger body text, generous line-height, styled `h2`, `blockquote`, `ul`, `a`, `strong`.
   - Lead paragraph slightly larger than the rest.
   - Content is the IntegraHRIS article already drafted.

5. **Share / tag footer**
   - Tags repeated + a simple "Share" row (copy link, LinkedIn, X) — icon buttons only, no logic wiring needed beyond `href`/`navigator.clipboard`.

6. **Author card** (kept, refined spacing)

7. **"Continue reading" section**
   - 2 related post cards pulled from the same `POSTS` shape used on `/blog`, so duplicating the file for another article gives an instant related-posts strip.

8. **CtaBand** stays at the bottom (site-wide pattern).

## Branding

Keep existing tokens: `bone`, `cobalt`, `brass`, `border`, `muted-foreground`, rounded-3xl, brass/cobalt tag pills. No new colors or fonts.

## File changes

- **Edit** `src/routes/blog.integrahris-transforming-hr.tsx` — replace with the new layout above. Slug, route path, and `head()` metadata stay the same so the existing `Read Article` link keeps working.
- No changes to `/blog`, `site.ts`, or other routes.

## Duplication story (for the user)

To add another post: copy the file, rename it to `blog.<new-slug>.tsx`, update `createFileRoute("/blog/<new-slug>")`, then edit the `POST` object and the body JSX. Everything else is reusable.
