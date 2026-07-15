import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const Route = createFileRoute("/blog/integrahris-transforming-hr")({
  head: () => ({
    meta: [
      { title: "IntegraHRIS: Transforming HR Operations — Cosmotech Philippines" },
      {
        name: "description",
        content:
          "How IntegraHRIS helps Philippine government agencies and enterprises modernize attendance, leaves, and payroll with scalable HR software and hands-on support.",
      },
      {
        property: "og:title",
        content: "IntegraHRIS: Transforming HR Operations Across the Philippines",
      },
      {
        property: "og:description",
        content:
          "Scalable HR software paired with hands-on implementation, training, and support for Philippine organizations.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPostPage,
});

const POST = {
  title: "IntegraHRIS: Transforming HR Operations Across the Philippines",
  tags: ["Product", "Insight"],
  date: "15 Jul 2026",
  readTime: "6 min read",
  author: "Cosmotech Team",
  image:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
};

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

function BlogPostPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-bone py-16 sm:py-20">
        <Container>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mt-8 max-w-3xl">
            <Eyebrow>Article</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              {POST.title}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <div className="flex flex-wrap gap-2">
                {POST.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4 text-cobalt" /> {POST.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-cobalt" /> {POST.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-cobalt" /> {POST.readTime}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Hero image */}
      <section className="bg-bone pb-16 sm:pb-20">
        <Container>
          <div className="overflow-hidden rounded-3xl bg-muted shadow-lg">
            <img
              src={POST.image}
              alt={POST.title}
              className="aspect-[21/9] w-full object-cover"
              loading="eager"
            />
          </div>
        </Container>
      </section>

      {/* Article body */}
      <section className="bg-background py-16 sm:py-20">
        <Container>
          <article className="mx-auto max-w-3xl">
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p className="text-lg font-medium text-foreground sm:text-xl">
                Our commitment to delivering value extends beyond product features.
                We build long-term partnerships with Philippine government agencies
                and enterprises by pairing scalable HR software with hands-on
                implementation, training, and support.
              </p>

              <p>
                Many HR teams struggle to accurately track attendance, leaves, and
                payroll across multiple offices — resulting in compliance risks and
                time lost to manual reconciliation. IntegraHRIS was built to close
                that gap with a single system of record that reflects how Philippine
                organizations actually operate.
              </p>

              <h2 className="pt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Built for Philippine workplaces
              </h2>
              <p>
                From Civil Service Commission rules to BIR-compliant payroll,
                IntegraHRIS encodes the local realities that generic global systems
                miss. Multi-branch attendance, complex leave credits, and government
                mandated contributions are all handled out of the box.
              </p>

              <h2 className="pt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Implementation, not just installation
              </h2>
              <p>
                Software alone doesn't transform HR. Our teams work on-site with
                agency HR and IT groups — cleaning up master data, configuring
                policies, and training end users — so the system goes live with real
                adoption, not shelfware.
              </p>

              <blockquote className="my-8 border-l-4 border-cobalt bg-bone px-6 py-5 text-lg italic text-foreground">
                "The best HR system is the one your people actually use. Everything
                we build is measured against that standard."
              </blockquote>

              <h2 className="pt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                What's next
              </h2>
              <p>
                We're continuing to invest in modules that reduce manual work —
                document tracking with Docutrakr, queue management with QMaster, and
                AI-assisted workflows that plug directly into IntegraHRIS. The goal
                is the same: give Philippine organizations software that works the
                way they work.
              </p>
            </div>

            {/* Author card */}
            <div className="mt-14 flex items-center gap-4 rounded-3xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cobalt/10 text-sm font-semibold uppercase text-cobalt">
                {POST.author
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">{POST.author}</p>
                <p className="text-muted-foreground">
                  Writing on HRIS, workflow automation, and digital transformation
                  for Philippine organizations.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-cobalt"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all articles
              </Link>
            </div>
          </article>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
