import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/site";
import { FeatureCheckList } from "./FeatureCheckList";
import { DocMock } from "./ProductMock";
import { cn } from "@/lib/utils";

const PRODUCT_HREF: Record<string, string> = {
  integrahris: "/integrahris-365",
  "integrahris-government": "/integrahris-government",
  qmaster: "/qmaster",
  helpdesk: "/helpdesk",
  docutrakr: "/docutrakr",
  urateme: "/urateme",
  "integra-asset": "/integra",
  "cosmotech-gpms": "/gpms",
};
const productHref = (slug: string) => PRODUCT_HREF[slug] ?? "/solutions";


export function SuiteTabs() {
  const [active, setActive] = useState<string>(PRODUCTS[0].slug);

  return (
    <div className="mt-12">
      {/* Tabs strip — horizontally scrollable on mobile, 4-col grid on sm+ */}
      <div className="relative -mx-5 sm:mx-0">
        <div className="scrollbar-hide flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-px-5 px-5 pb-2 sm:grid sm:grid-cols-4 sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0">
          {PRODUCTS.map((p) => {
            const isActive = active === p.slug;
            return (
              <button
                key={p.slug}
                onClick={() => setActive(p.slug)}
                aria-label={p.name}
                aria-pressed={isActive}
                className={cn(
                  "flex h-16 w-44 shrink-0 snap-start items-center justify-center rounded-full border px-3 transition-colors sm:w-auto sm:shrink sm:px-4",
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-foreground/75 hover:text-foreground",
                )}
              >
                {p.logoLight && p.logoDark ? (
                  <span className="relative inline-flex h-10 w-[140px] items-center justify-center">
                    <img
                      src={p.logoDark}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 m-auto max-h-10 w-auto max-w-[140px] object-contain transition-opacity duration-150"
                      style={{ opacity: isActive ? 0 : 1 }}
                    />
                    <img
                      src={p.logoLight}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 m-auto max-h-10 w-auto max-w-[140px] object-contain transition-opacity duration-150"
                      style={{ opacity: isActive ? 1 : 0 }}
                    />
                    <span className="sr-only">{p.name}</span>
                  </span>
                ) : (
                  <span className="text-xs font-medium">{p.name}</span>
                )}
              </button>
            );
          })}
        </div>
        {/* Right-edge fade on mobile */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-background to-transparent sm:hidden"
        />
      </div>

      {/* Stacked panels — all pre-mounted, cross-fade between them */}
      <div className="mt-8 grid">
        {PRODUCTS.map((p, index) => {
          const isActive = active === p.slug;
          return (
            <div
              key={p.slug}
              aria-hidden={!isActive}
              className={cn(
              "[grid-area:1/1] grid gap-10 overflow-hidden rounded-3xl border border-border bg-white p-6 sm:p-10 lg:gap-0",
              p.screenshot ? "lg:grid-cols-5" : "lg:grid-cols-1",
              "transition-opacity duration-300",
                isActive ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              <div className={cn("flex min-w-0 flex-col", p.screenshot ? "lg:col-span-3 lg:pr-10" : "lg:col-span-1")}>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-cobalt">
                  {p.name}
                </p>
                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{p.tagline}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <FeatureCheckList items={p.features.slice(0, 4)} />
                <Link
                  to={productHref(p.slug) as string}
                  tabIndex={isActive ? 0 : -1}
                  className="mt-8 inline-flex items-center gap-2 self-start text-sm font-medium text-cobalt hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {p.screenshot && (
                <div className="relative -m-6 sm:-m-10 lg:m-0 lg:col-span-2 lg:-mr-10 lg:-my-10">
                  <div className="relative h-full min-h-[240px] overflow-hidden bg-white aspect-[4/3] lg:aspect-auto">
                    <img
                      src={p.screenshot}
                      alt=""
                      aria-hidden="true"
                      width={1600}
                      height={1000}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-contain object-center bg-white lg:object-cover lg:object-left-top"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
