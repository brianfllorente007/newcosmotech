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
    default:
      return <HrisMock />;
  }
}

export function SuiteTabs() {
  const [active, setActive] = useState<string>(PRODUCTS[0].slug);
  const product = PRODUCTS.find((p) => p.slug === active)!;

  return (
    <div className="mt-12">
      {/* Scrollable tab strip */}
      <div className="relative -mx-4 sm:mx-0">
        <div className="scrollbar-hide flex gap-2 overflow-x-auto px-4 pb-2 sm:flex-wrap sm:overflow-x-visible sm:pb-0">
          {PRODUCTS.map((p) => {
            const isActive = active === p.slug;
            return (
              <button
                key={p.slug}
                onClick={() => setActive(p.slug)}
                aria-label={p.name}
                aria-pressed={isActive}
                className={cn(
                  "flex h-12 w-32 shrink-0 items-center justify-center rounded-full border px-4 transition-all",
                  isActive
                    ? "border-foreground bg-foreground"
                    : "border-border bg-background hover:border-foreground/40",
                )}
              >
                {p.logoLight && p.logoDark ? (
                  <>
                    <img
                      src={isActive ? p.logoLight : p.logoDark}
                      alt=""
                      className="max-h-6 w-auto object-contain"
                    />
                    <span className="sr-only">{p.name}</span>
                  </>
                ) : (
                  <span
                    className={cn(
                      "text-xs font-semibold",
                      isActive ? "text-background" : "text-foreground/75",
                    )}
                  >
                    {p.name}
                  </span>
                )}
              </button>
            );
          })}
        </div>
        {/* Right-edge fade on mobile */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent sm:hidden" />
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card">
        <div
          key={active}
          className="animate-slide-up-fade grid gap-10 p-6 sm:p-10 lg:grid-cols-2"
        >
          <div className="flex flex-col">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cobalt">
              {product.name}
            </p>
            <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
              {product.tagline}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            <FeatureCheckList items={product.features.slice(0, 4)} />
            <Link
              to="/solutions/$slug"
              params={{ slug: product.slug }}
              className="mt-8 inline-flex items-center gap-2 self-start text-sm font-medium text-cobalt transition-all hover:gap-3"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex items-center justify-center">{mockFor(product.slug)}</div>
        </div>
      </div>
    </div>
  );
}
