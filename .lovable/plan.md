## Goal

Bring the three remaining product pages with a "Modules" section in line with the refined docutrakr showcase:

- `src/routes/urateme.tsx`
- `src/routes/helpdesk.tsx`
- `src/routes/qmaster.tsx`

And refine the image-swap timing on docutrakr (and the new pages) so the next image is **fully in place the moment a feature section finishes expanding**, whether triggered by scroll or by click.

## What changes on the three pages

Replace each page's existing `ModulesShowcase` (IntersectionObserver list + sticky right-column image) with the docutrakr pattern:

1. **Tall scroll wrapper** — `height: MODULES.length * STEP_VH vh` driving a sticky inner panel.
2. **Sticky inner panel** pinned below the nav (`lg:sticky lg:top-28 lg:h-[calc(100vh-7rem)] lg:flex lg:items-center`) so the active feature is centered in the visible area, not jammed under the header.
3. **Scroll progress → active index** by computing `scaled = progress * MODULES.length`, plus click-to-jump that smooth-scrolls to that step.
4. **Left column** — feature list with click handlers, dimmed inactive titles, accordion-style body+checklist (same markup pattern as docutrakr).
5. **Right column** — pinned image stack: current image full-opacity, next image absolutely positioned in the same box and translated down with a soft mask fade on its bottom edge.
6. **Image preload block** — hidden `<img>` for every module's image so swaps are instant.
7. **Drop the `reveal` wrapper** around the section heading + showcase so nothing is briefly blank.
8. **Tighten section padding** (`py-12 sm:py-16`, `mt-6` on the wrapper) so the gap to the prior copy isn't oversized.

### Per-page image source

None of the three pages currently has per-module screenshots:

- `urateme.tsx` and `helpdesk.tsx` already use `<Placeholder>` per active module.
- `qmaster.tsx` uses one static image (`modulesImage`).

For all three, the showcase will render the existing `<Placeholder>` component (one per module, labeled from `module.title`) as the "image" — same component already in those files. The current `modulesImage` import on qmaster can be removed. When real screenshots exist later, swap `<Placeholder>` for `<img src={m.image} />` in one place. The peek/slide/mask mechanics work identically on Placeholders.

## Refined image-swap timing (applies to docutrakr too)

**Current behavior:** next image's translateY is tied directly to per-step scroll progress (`stepProgress` 0→1 across the whole step), so it only fully covers the current image at the very end of the step.

**New behavior:** the next image fully covers the current one as soon as the feature section finishes expanding (~500ms), then holds until the next index transition.

Implementation:

- Keep `active` as the source of truth (driven by both scroll progress and clicks).
- Replace scroll-tied `stepProgress` with a **CSS transition on the next image's transform**: `transition: transform 500ms ease-out` matching the expand animation.
- The next image's transform is binary per active index: `translateY(100%)` while it's the upcoming module, `translateY(0)` the moment `active` advances (which is exactly when the previous "next" becomes the new "current"). Since we render `current` and `current+1`, the new "next" enters at `translateY(100%)` and stays there until the next advance.
- Result: scroll past the activation threshold OR click a title → active updates → text expands and the new image slides up into position in the same ~500ms window.

This removes the dependency on per-frame scroll math for the image position, so the image animation is consistent regardless of how the user navigates.

## Technical notes

- Shared structure is copy-paste from `docutrakr.tsx` `ModulesShowcase` (lines ~282–447), adapted per page:
  - Module data already exists in each page (`MODULES` array with `icon`, `title`, `body`, `items`).
  - Replace per-module `image` reads with `<Placeholder label={...} size="1200x800" className="aspect-[3/2]" />`.
  - Drop preload `<img>` block on pages without real images (Placeholders need no preloading).
- Remove existing IntersectionObserver effect, `itemRefs`, and the old grid in each page's `ModulesShowcase`.
- On qmaster, remove `import modulesImage from "..."` if no other usage remains.
- Keep each page's surrounding section (`<section>` wrapper, `SectionHeading`, intro copy) — only the wrapper `reveal` class is removed and padding is tightened.
- No changes to routing, data, or other sections of these pages.

## Out of scope

- No new screenshot assets are created. Real per-module images can be wired in later by swapping `<Placeholder>` → `<img src={m.image} />`.
- No copy changes.
- No changes to `integra.tsx`, `services.tsx`, `gpms.tsx`, or the `integrahris-*` pages — they don't use the `ModulesShowcase` pattern.
