import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Link2, Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/Container";
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

const RELATED = [
  {
    slug: "qmaster-reducing-wait-times",
    title: "How QMaster Reduces Wait Times at Government Frontlines",
    excerpt:
      "A look at how intelligent queue management is reshaping citizen service delivery across GSIS branches nationwide.",
    tags: ["Case Study", "Government"],
    date: "08 Jul 2026",
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
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
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

function BlogPostPage() {
  const shareUrl = "https://cosmotech.heybrianl.com/blog/integrahris-transforming-hr";

  const copyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      void navigator.clipboard.writeText(shareUrl);
    }
  };

  return (
    <article>
      {/* Slim top bar */}
      <div className="border-b border-border bg-background">
        <Container className="py-5">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Container>
      </div>

      {/* Article header */}
      <header className="bg-background pt-16 sm:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex flex-wrap justify-center gap-2">
              {POST.tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {POST.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cobalt/10 text-[10px] font-semibold uppercase text-cobalt">
                  {POST.author
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <span className="font-medium text-foreground">{POST.author}</span>
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-cobalt" /> {POST.date}
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-cobalt" /> {POST.readTime}
              </span>
            </div>
          </div>
        </Container>
      </header>

      {/* Cover image */}
      <div className="bg-background py-10 sm:py-14">
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
      </div>

      {/* Body */}
      <section className="bg-background pb-16 sm:pb-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="space-y-6 text-[17px] leading-[1.8] text-foreground/85 sm:text-lg">
              <p className="text-xl font-medium leading-[1.6] text-foreground sm:text-2xl">
                Our commitment to delivering value extends beyond product features. We
                build long-term partnerships with Philippine government agencies and
                enterprises by pairing scalable HR software with hands-on
                implementation, training, and support.
              </p>

              <p>
                Many HR teams struggle to accurately track attendance, leaves, and
                payroll across multiple offices — resulting in compliance risks and
                time lost to manual reconciliation. IntegraHRIS was built to close
                that gap with a single system of record that reflects how Philippine
                organizations actually operate.
              </p>

              <h2 className="pt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Built for Philippine workplaces
              </h2>
              <p>
                From Civil Service Commission rules to BIR-compliant payroll,
                IntegraHRIS encodes the local realities that generic global systems
                miss. Multi-branch attendance, complex leave credits, and
                government-mandated contributions are all handled out of the box.
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-cobalt">
                <li>Biometric and mobile attendance across branches</li>
                <li>Automated leave crediting with agency-specific policies</li>
                <li>Payroll aligned with BIR, SSS, PhilHealth, and Pag-IBIG</li>
                <li>Role-based approvals mapped to real org charts</li>
              </ul>

              <h2 className="pt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Implementation, not just installation
              </h2>
              <p>
                Software alone doesn't transform HR. Our teams work on-site with
                agency HR and IT groups — cleaning up master data, configuring
                policies, and training end users — so the system goes live with real
                adoption, not shelfware.
              </p>

              <blockquote className="my-8 rounded-2xl border-l-4 border-cobalt bg-bone px-6 py-6 text-lg italic text-foreground sm:text-xl">
                "The best HR system is the one your people actually use. Everything
                we build is measured against that standard."
              </blockquote>

              <h2 className="pt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                What's next
              </h2>
              <p>
                We're continuing to invest in modules that reduce manual work —
                document tracking with <strong className="text-foreground">Docutrakr</strong>,
                queue management with <strong className="text-foreground">QMaster</strong>,
                and AI-assisted workflows that plug directly into IntegraHRIS. The
                goal is the same: give Philippine organizations software that works
                the way they work.
              </p>
            </div>

            {/* Tags + share */}
            <div className="mt-14 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {POST.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Share
                </span>
                <button
                  type="button"
                  onClick={copyLink}
                  aria-label="Copy link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-cobalt hover:text-cobalt"
                >
                  <Link2 className="h-4 w-4" />
                </button>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-cobalt hover:text-cobalt"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(POST.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-cobalt hover:text-cobalt"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Author card */}
            <div className="mt-10 flex items-center gap-4 rounded-3xl border border-border bg-card p-6">
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
          </div>
        </Container>
      </section>

      {/* Continue reading */}
      <section className="border-t border-border bg-bone py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Continue reading
              </h2>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-cobalt"
              >
                All articles <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {RELATED.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((t) => (
                        <Tag key={t} label={t} />
                      ))}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </article>
  );
}
