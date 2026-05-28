## Goal

Replace the small uppercase product-name "eyebrow" text at the top of each solution page's hero with the matching dark product logo image, matching the treatment already applied on the Docutrakr page.

## Pages and swaps

| Page | Current eyebrow text | Logo to use |
|---|---|---|
| `src/routes/urateme.tsx` | "URateMe" | `@/assets/logos/products/urateme-dark.webp` |
| `src/routes/qmaster.tsx` | "QMaster" | `@/assets/logos/products/qmaster-dark.webp` |
| `src/routes/helpdesk.tsx` | "HelpDesk" | `@/assets/logos/products/helpdesk-dark.webp` |
| `src/routes/integra.tsx` | "Integra" | `@/assets/logos/products/integra-asset-dark.png` |
| `src/routes/integrahris-365.tsx` | "IntegraHRIS 365" | `@/assets/logos/products/integrahris365-dark.webp` |
| `src/routes/integrahris-government.tsx` | "IntegraHRIS Government Edition" | `@/assets/logos/products/integrahris-govt-dark.webp` |
| `src/routes/gpms.tsx` | "GPMS" | `@/assets/logos/products/gpms-dark.png` |

Docutrakr is already done and is the reference style.

## Implementation details

For each page above:

1. Add a logo import next to the existing `SectionHeading` import, e.g.:
   ```ts
   import productLogo from "@/assets/logos/products/<file>";
   ```
2. Replace the hero `<Eyebrow>ProductName</Eyebrow>` line with:
   ```tsx
   <img src={productLogo} alt="<Product Name>" className="mb-6 h-9 w-auto sm:h-11" />
   ```
3. Only the hero eyebrow (the one directly above the main `<h1>`) is swapped. Other eyebrows on the page like "The Problem", "What it does", "General Features", "Modules", "FAQ", "About the product", "Setup" stay as text.
4. For `integrahris-365.tsx`, preserve the centered alignment (its hero eyebrow uses `className="justify-center"`); the `<img>` will sit in the same centered flex container so no extra class is needed.

## Out of scope

- No copy, layout, or section-structure changes beyond the eyebrow swap.
- No changes to the headline, subhead, CTAs, or hero screenshot.
- No changes to non-hero eyebrows.
