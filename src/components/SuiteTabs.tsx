import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/site";
import { FeatureCheckList } from "./FeatureCheckList";
import { HrisMock, QueueMock, HelpdeskMock, DocMock } from "./ProductMock";
import { cn } from "@/lib/utils";

const TABS = [
  { slug: "integrahris", label: "IntegraHRIS", mock: <HrisMock /> },
  { slug: "qmaster", label: "QMaster", mock: <QueueMock /> },
  { slug: "helpdesk", label: "HelpDesk", mock: <HelpdeskMock /> },
  { slug: "docutrakr", label: "Docutrakr", mock: <DocMock /> },
] as const;

export function SuiteTabs() {
  const [active, setActive] = useState<(typeof TABS)[number]["slug"]>("integrahris");
  const product = PRODUCTS.find((p) => p.slug === active)!;
  const mock = TABS.find((t) => t.slug === active)!.mock;

  return (
    <div className="mt-12">
      <div className="flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.slug}
            onClick={() => setActive(t.slug)}
            className={cn(
              "h-9 rounded-full border px-4 text-sm transition-colors",
              active === t.slug
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background text-foreground/75 hover:text-foreground",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-10 rounded-3xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-2">
        <div className="flex flex-col">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cobalt">
            {product.name}
          </p>
          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
            <span className="font-display italic">{product.tagline}</span>
          </h3>
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
        <div className="flex items-center justify-center">{mock}</div>
      </div>
    </div>
  );
}
