import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Cosmotech Philippines" },
      {
        name: "description",
        content:
          "Insights, stories, and updates from Cosmotech Philippines on HRIS, queue management, document tracking, and digital transformation for Philippine organizations.",
      },
      { property: "og:title", content: "Blog — Cosmotech Philippines" },
      {
        property: "og:description",
        content:
          "Insights and updates from Cosmotech Philippines on digital transformation, HRIS, and workflow automation.",
      },
    ],
    links: [{ rel: "canonical", href: "https://cosmotech.heybrianl.com/blog" }],
  }),
  component: BlogPage,
});

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  author: string;
  image: string;
};

const FEATURED: Post = {
  slug: "integrahris-transforming-hr",
  title: "IntegraHRIS: Transforming HR Operations Across the Philippines",
  excerpt:
    "Our commitment to delivering value extends beyond product features. We build long-term partnerships with Philippine government agencies and enterprises by pairing scalable HR software with hands-on implementation, training, and support.\n\nMany HR teams struggle to accurately track attendance, leaves, and payroll across multiple offices — resulting in compliance risks and time lost to manual reconciliation.",
  tags: ["Product", "Insight"],
  date: "15 Jul 2026",
  author: "Cosmotech Team",
  image:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
};

const POSTS: Post[] = [
  {
    slug: "qmaster-reducing-wait-times",
    title: "How QMaster Reduces Wait Times at Government Frontlines",
    excerpt:
      "A look at how intelligent queue management is reshaping citizen service delivery across GSIS branches nationwide.",
    tags: ["Case Study", "Government"],
    date: "08 Jul 2026",
    author: "Cosmotech Team",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "docutrakr-paperless-workflow",
    title: "Docutrakr: The Path to a Truly Paperless Workflow",
    excerpt:
      "QR-based document tracking gives agencies real-time visibility, accountability, and audit trails from receipt to release.",
    tags: ["Product", "Workflow"],
    date: "01 Jul 2026",
    author: "Cosmotech Team",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "ai-in-philippine-government",
    title: "AI in Philippine Government: Where to Start",
    excerpt:
      "Practical entry points for agencies exploring AI — from document classification to citizen-facing chat assistants.",
    tags: ["Insight", "AI"],
    date: "24 Jun 2026",
    author: "Cosmotech Team",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
];

const TAG_STYLES: Record<string, string> = {
  Product: "bg-brass/15 text-brass",
  Insight: "bg-cobalt/10 text-cobalt",
  "Case Study": "bg-brass/15 text-brass",
  Government: "bg-cobalt/10 text-cobalt",
  Workflow: "bg-cobalt/10 text-cobalt",
  AI: "bg-brass/15 text-brass",
};

function Tag({ label }: { label: string }) {
  const style = TAG_STYLES[label] ?? "bg-muted text-foreground";
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${style}`}
    >
      {label}
    </span>
  );
}

function BlogPage() {
  return (
    <>
      <section className="border-b border-border bg-bone py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Blog</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Stories, insights, and updates from Cosmotech.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Notes on HRIS, queue management, document tracking, and the digital
              transformation of Philippine workplaces.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured post */}
      <section className="bg-bone py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="overflow-hidden rounded-3xl bg-muted shadow-lg">
              <img
                src={FEATURED.image}
                alt={FEATURED.title}
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                {FEATURED.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
                <span className="text-sm text-muted-foreground">{FEATURED.date}</span>
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {FEATURED.title}
              </h2>
              {FEATURED.excerpt.split("\n\n").map((p, i) => (
                <p
                  key={i}
                  className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
                >
                  {p}
                </p>
              ))}
              <Link
                to="/blog/integrahris-transforming-hr"
                className="mt-8 inline-flex items-center gap-1.5 border-b border-foreground/40 pb-1 text-sm font-medium text-foreground transition-colors hover:border-foreground"
              >
                Read Article <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Post grid */}
      <section className="py-16 sm:py-20 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {POSTS.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <Tag key={t} label={t} />
                    ))}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-snug text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cobalt/10 text-xs font-semibold uppercase text-cobalt">
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div className="text-xs leading-tight">
                      <p className="font-medium text-foreground">{post.author}</p>
                      <p className="text-muted-foreground">Updated on : {post.date}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
