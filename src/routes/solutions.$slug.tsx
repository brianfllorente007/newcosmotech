import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { FeatureCheckList } from "@/components/FeatureCheckList";
import { CtaBand } from "@/components/CtaBand";
import {
  HrisMock,
  QueueMock,
  HelpdeskMock,
  DocMock,
} from "@/components/ProductMock";
import { PRODUCTS } from "@/lib/site";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Product — Cosmotech Philippines" }] };
    return {
      meta: [
        { title: `${p.name} — Cosmotech Philippines` },
        { name: "description", content: p.short },
        { property: "og:title", content: `${p.name} — Cosmotech Philippines` },
        { property: "og:description", content: p.short },
      ],
    };
  },
  notFoundComponent: () => (
    <Container className="py-32 text-center">
      <h1 className="text-3xl font-semibold">Product not found</h1>
      <Link to="/solutions" className="mt-4 inline-block text-cobalt hover:underline">
        Back to solutions →
      </Link>
    </Container>
  ),
  component: ProductDetail,
});

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

function ProductDetail() {
  const { product } = Route.useLoaderData();

  return (
    <>
      <section className="border-b border-border bg-bone py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <Eyebrow>{product.name}</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                {product.tagline}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {product.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
                >
                  Talk to our team <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  All solutions
                </Link>
              </div>
              {product.slug === "integrahris" && (
                <Link
                  to="/integrahris-365"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cobalt hover:underline"
                >
                  View the full IntegraHRIS 365 page <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
            <div className="lg:pl-8">{mockFor(product.slug)}</div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                What's inside
              </h2>
              <FeatureCheckList items={product.features} />
            </div>
            {product.deployedAt && product.deployedAt.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Deployed at
                </h2>
                <ul className="mt-6 space-y-3">
                  {product.deployedAt.map((d) => (
                    <li
                      key={d}
                      className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
