import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/site";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/solutions/$slug"
      params={{ slug: product.slug }}
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
