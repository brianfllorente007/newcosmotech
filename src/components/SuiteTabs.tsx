import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/site";
import { FeatureCheckList } from "./FeatureCheckList";
import { DocMock } from "./ProductMock";
import { cn } from "@/lib/utils";

export function SuiteTabs() {
  const [active, setActive] = useState<string>(PRODUCTS[0].slug);
  const product = PRODUCTS.find((p) => p.slug === active)!;

  return (
    <div className="mt-12">
      {/* Tabs strip — horizontally scrollable on small screens */}
      <div className="relative -mx-5 sm:mx-0">
        <div className="scrollbar-hide flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-2 sm:px-0">
          {PRODUCTS.map((p) => {
            const isActive = active === p.slug;
            return (
              <button
                key={p.slug}
                onClick={() => setActive(p.slug)}
                aria-label={p.name}
                aria-pressed={isActive}
                className={cn(
                  "flex h-16 w-44 shrink-0 snap-start items-center justify-center rounded-full border px-4 transition-colors",
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-foreground/75 hover:text-foreground",
                )}
              >
                {p.logoLight && p.logoDark ? (
                  <>
                    <img
                      src={isActive ? p.logoLight : p.logoDark}
                      alt=""
                      aria-hidden="true"
                      className="max-h-10 w-auto max-w-[150px] object-contain"
                    />
                    <span className="sr-only">{p.name}</span>
                  </>
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

      {/* Animated content card — 60/40 split on lg */}
      <div
        key={active}
        className="animate-slide-up-fade mt-8 grid gap-10 overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-5 lg:gap-0 bg-white"
      >
        <div className="flex flex-col lg:col-span-3 lg:pr-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cobalt">
            {product.name}
          </p>
          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{product.tagline}</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            {product.description}
          </p>
          <FeatureCheckList items={product.features.slice(0, 4)} />
          <Link
            to="/solutions/$slug"
            params={{ slug: product.slug }}
            className="mt-8 inline-flex items-center gap-2 self-start text-sm font-medium text-cobalt hover:gap-3 transition-all"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Media panel — full-bleed to card edges (40%) */}
        <div className="relative -m-6 sm:-m-10 lg:m-0 lg:col-span-2 lg:-mr-10 lg:-my-10">
          {product.screenshot ? (
            <div className="relative h-full min-h-[280px] overflow-hidden bg-muted/30 aspect-[16/10] lg:aspect-auto">
              <img
                src={product.screenshot}
                alt=""
                aria-hidden="true"
                width={1600}
                height={1000}
                loading={active === PRODUCTS[0].slug ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={active === PRODUCTS[0].slug ? "high" : "auto"}
                className="absolute inset-0 h-full w-full object-cover object-left-top bg-white"
              />
            </div>
          ) : (
            <div className="flex h-full min-h-[280px] items-center justify-center bg-muted/30 p-6">
              <DocMock />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
