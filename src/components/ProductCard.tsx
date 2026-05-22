import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/site";

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

export function ProductCard({ product }: { product: Product }) {
  const href = PRODUCT_HREF[product.slug] ?? "/solutions";
  return (
    <Link
      to={href as string}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(15,23,42,0.25)]"
    >
      <div className="flex items-start justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-cobalt">
          {product.name}
        </p>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
        {product.tagline}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.short}</p>
    </Link>
  );
}
