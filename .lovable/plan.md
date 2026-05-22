## Fix Docutrakr "Modules and Capabilities" scroll section

Three targeted changes to `ModulesShowcase` in `src/routes/docutrakr.tsx` (and the section wrapper). No new components, no behavior beyond what's described.

### 1. Show the section immediately (no blank-in)

The `reveal` wrapper around `<ModulesShowcase />` (line 622) starts hidden until its top hits the IntersectionObserver threshold. Because the showcase wrapper is ~540vh tall, the bottom never triggers in time and the pinned area can sit blank as you scroll in.

- Remove the `reveal` class from the wrapper `<div>` containing `SectionHeading` + `ModulesShowcase`, OR move `reveal` to wrap only `SectionHeading`. Net result: content is visible right away when you scroll to it.

### 2. Tighten gap + stop content hiding under nav

The nav header is `h-24 md:h-28` and the sticky module panel uses `lg:top-0 lg:h-screen lg:items-center lg:py-8`. So the panel pins flush with the viewport top (behind the nav), and `items-center` centers content in a full 100vh — which both (a) hides the top under the sticky header, and (b) leaves a large gap between the section intro and the first feature row on tall viewports.

- Reduce section padding: change `py-20 sm:py-24` on the `MODULES` section to `py-12 sm:py-16`.
- Reduce the `mt-10` on the showcase wrapper to `mt-6`.
- Update the sticky panel from `lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:py-8` to `lg:sticky lg:top-28 lg:flex lg:h-[calc(100vh-7rem)] lg:items-center lg:py-4`. This pins below the nav and centers the row in the remaining viewport, so the feature list and image always sit comfortably in the middle of what the user can see.

### 3. Next-feature image stacks below, not behind

Today the peek image is absolutely positioned at `inset-0` behind the current one (translate-x/y + scale). User wants:
- Next photo sits **below** the current photo (in normal vertical flow / stacked positioning, not behind).
- As you scroll to the next module, the current photo scrolls up and the next slides into its place.
- The visible bottom edge of the next photo should be softly faded out (mask) so it doesn't look cut off — only a hint is showing.

Implementation in the right-column image area:

- Replace the current `relative` image container with a fixed-aspect viewport (e.g. `aspect-[3/2] relative overflow-hidden rounded-3xl`).
- Inside, render a vertical track `flex flex-col` that contains BOTH the current image and the next image stacked top-to-bottom, each constrained to the same aspect/height as the viewport.
- Translate the track upward when transitioning. Simplest approach that fits the existing index-based state: keep current image as the top child and next image as the second child, both `h-full w-full shrink-0`. The track itself is `h-[200%]` (two slots). Animate `transform: translateY(...)` with a transition. When `active` changes, we briefly run a translate from 0 → -50% then snap back to 0 with the new `current`/`next` pair. (Alternative simpler version: skip the slide animation and just keep the stacked layout + fade — see fallback below.)
- Apply a CSS mask to the next image only, fading its bottom ~40% to transparent, so the peeking portion fades out smoothly:
  ```
  maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)'
  WebkitMaskImage: same
  ```
- The peeking next image is partially visible by offsetting the viewport: render the viewport tall enough that ~12–16% of the next image shows below the current. Concretely: the outer wrapper is `aspect-[3/2]` for current, plus an additional `pb-[12%]` extension below where the faded next-image preview lives. Or, simpler: keep a single `aspect-[3/2]` viewport and let the next image be `absolute left-0 right-0 top-[88%]` with the mask — so a thin faded strip is visible directly under the current image and not behind it.

I'll go with the simpler "absolute below" layout (last bullet) to keep the diff minimal:
- Current image: `aspect-[3/2] rounded-3xl overflow-hidden` as today.
- Next image: separate sibling positioned `absolute left-0 right-0 top-full` (immediately below), `h-[40%] overflow-hidden rounded-b-3xl`, with the gradient mask on the `<img>` so its bottom fades out. No `translate-y-3 translate-x-3 scale-[0.96] opacity-60` behind-the-card trick anymore.
- Wrap both in a `relative` container so the absolute next-image anchors correctly.

Net effect: as `active` changes, the current photo swaps in place (existing `animate-fade-in` stays), and below it you always see a soft faded preview of the upcoming module's photo — exactly like it's queued up next, not hidden behind.

### Files

- `src/routes/docutrakr.tsx` — edits to the `MODULES` `<section>` wrapper (line ~620), the `reveal` wrapper, and the `ModulesShowcase` JSX (lines ~331–421).

### Out of scope

- No change to the module data, icons, or copy.
- No change to mobile (`< lg`) layout — it already stacks naturally.
- No new dependencies.