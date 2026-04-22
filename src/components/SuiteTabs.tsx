import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/site";
import { FeatureCheckList } from "./FeatureCheckList";
import { HrisMock, QueueMock, HelpdeskMock, DocMock } from "./ProductMock";
import { cn } from "@/lib/utils";

function mockFor(slug: string) {
  switch (slug) {
    case "qmaster":
      return <QueueMock />;
    case "helpdesk":
      return <HelpdeskMock />;
    case "docutrakr":
      return <DocMock />;
    case "urateme":
      return <HelpdeskMock />;
    case "horion":
      return <DocMock />;
    case "integrahris-government":
      return <HrisMock />;
    default:
      return <HrisMock />;
  }
}

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
                  "flex h-12 w-32 shrink-0 snap-start items-center justify-center rounded-full border px-3 transition-colors",
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
                      className="max-h-6 w-auto max-w-[100px] object-contain"
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

      {/* Animated content card */}
      <div
        key={active}
        className="animate-slide-up-fade mt-8 grid gap-10 overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-2"
      >
        <div className="flex flex-col">
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
        <div className="flex items-center justify-center">{mockFor(product.slug)}</div>
      </div>
    </div>
  );
}
