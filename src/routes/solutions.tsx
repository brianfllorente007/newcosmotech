import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { CtaBand } from "@/components/CtaBand";
import { PRODUCTS } from "@/lib/site";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Cosmotech Philippines" },
      {
        name: "description",
        content:
          "HR, payroll, queue management, helpdesk, and document tracking software built for Philippine workplaces.",
      },
      { property: "og:title", content: "Solutions — Cosmotech Philippines" },
      {
        property: "og:description",
        content:
          "Six products purpose-built for Philippine government agencies and private companies.",
      },
    ],
  }),
  component: SolutionsIndex,
});

function SolutionsIndex() {
  return (
    <>
      <section className="border-b border-border bg-bone py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our solutions"
            title="Software built for Philippine workplaces"
            intro="From HR and payroll to customer queues and document tracking, our products are built for the way Philippine organizations actually operate — government compliance, local regulations, and all."
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
