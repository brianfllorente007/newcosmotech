

## Make "Our Solutions" Tab Switching Instant

### Problem

Even after the WebP conversion, switching tabs still feels slow because:

1. The active screenshot `<img>` re-mounts every time `active` changes (the parent `<div key={active}>` forces React to unmount/remount the entire card, including the image element).
2. Inactive screenshots are `loading="lazy"` and never rendered, so the browser only starts fetching them on click — first switch to each tab waits on a network request.
3. The `animate-slide-up-fade` runs on the whole card, so even the text/layout re-animates on every switch.

### Fix: Pre-mount all panels, stack them, cross-fade

Render **all 7 product panels at once**, stacked absolutely on top of each other inside a positioned container. Toggle visibility with `opacity` + `pointer-events` (and `aria-hidden` for a11y). Every image is in the DOM from first paint, so the browser fetches them in parallel during idle time and tab switches become a pure CSS opacity transition — zero network, zero re-render, zero layout work.

### Implementation

**`src/components/SuiteTabs.tsx`** — rewrite the content area:

- Keep the tab strip as-is (no changes to tab buttons).
- Replace the single `<div key={active}>` card with a `relative` container that holds one absolutely-positioned panel per product.
- Each panel: `absolute inset-0 transition-opacity duration-300`, `opacity-100 pointer-events-auto` when active, else `opacity-0 pointer-events-none` + `aria-hidden="true"`.
- The container itself needs a defined height — use a `grid` with all panels in the same cell (`grid` + `[grid-area:1/1]` on each panel), which auto-sizes to the tallest panel without absolute positioning math. This is cleaner than `position: absolute` and avoids height-collapse bugs.
- Image loading strategy:
  - First product: `loading="eager"`, `fetchPriority="high"` (LCP candidate).
  - All others: `loading="eager"` too — but mark `fetchPriority="low"` so they download after the hero image without competing with it. They're tiny WebPs (~30–100 KB each, ~400 KB total), so eager-loading the full set is cheap and makes every tab switch instant.
- Remove the `key={active}` re-mount and the `animate-slide-up-fade` (no longer needed since nothing re-mounts).
- Optional polish: fade text content too by wrapping each panel's text column in the same opacity transition (already handled since the whole panel fades).

**No changes needed to:**
- `src/lib/site.ts` (assets already WebP)
- `src/routes/index.tsx` (preload link still valid for the first image)
- Any other component

### Technical Details

```tsx
// Grid-stack pattern — all panels share one grid cell
<div className="mt-8 grid">
  {PRODUCTS.map((p) => {
    const isActive = active === p.slug;
    return (
      <div
        key={p.slug}
        aria-hidden={!isActive}
        className={cn(
          "[grid-area:1/1] grid gap-10 overflow-hidden rounded-3xl border bg-white p-6 sm:p-10 lg:grid-cols-5 lg:gap-0",
          "transition-opacity duration-300",
          isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {/* text column + media column, same as today */}
      </div>
    );
  })}
</div>
```

Image attributes per panel:
```tsx
<img
  src={p.screenshot}
  loading="eager"
  decoding="async"
  fetchPriority={index === 0 ? "high" : "low"}
  width={1600}
  height={1000}
  // ...
/>
```

### Expected Impact

- First tab switch latency: **~300 ms network wait → 0 ms** (image already decoded in memory).
- Every subsequent switch: pure GPU opacity transition, no React reconciliation of the active panel's children.
- Initial page weight: unchanged in practice (all 6 screenshots already cached after the first ~1 s of idle decoding; total ~400 KB WebP).
- LCP unaffected — the first product image keeps `fetchPriority="high"`; the rest are `low` so they queue behind it.

### Out of Scope

- Further image compression (already optimized in previous turn).
- Tab strip styling.
- Routing or SSR changes.

