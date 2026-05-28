import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Briefcase, MapPin, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { SITE } from "@/lib/site";
import { getJob, JOBS } from "@/lib/jobs";

export const Route = createFileRoute("/careers/$slug")({
  loader: ({ params }) => {
    const job = getJob(params.slug);
    if (!job) throw notFound();
    return { job };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.job
      ? `${loaderData.job.title} — Careers — Cosmotech Philippines`
      : "Careers — Cosmotech Philippines";
    const description = loaderData?.job?.intro ?? "Open roles at Cosmotech Philippines.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => (
    <section className="py-24">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">Role not found</h1>
        <p className="mt-3 text-muted-foreground">
          This position may no longer be open.{" "}
          <Link to="/careers" className="text-cobalt underline-offset-4 hover:underline">
            See all open roles
          </Link>
          .
        </p>
      </Container>
    </section>
  ),
  errorComponent: ({ error }) => (
    <section className="py-24">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
      </Container>
    </section>
  ),
  component: JobDetailPage,
});

function JobDetailPage() {
  const { job } = Route.useLoaderData();

  return (
    <>
      <section className="border-b border-border bg-bone py-16 sm:py-20">
        <Container>
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All open roles
          </Link>
          <div className="mt-6 max-w-4xl">
            <Eyebrow>Open role</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {job.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5">
                <Briefcase className="h-3.5 w-3.5 text-cobalt" />
                {job.type}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5">
                <MapPin className="h-3.5 w-3.5 text-cobalt" />
                {job.location}
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-background py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div className="min-w-0">
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {job.summary.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-12">
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                  Primary Responsibilities
                </h2>
                <ul className="mt-5 space-y-3">
                  {job.responsibilities.map((r: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt"
                      />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                  Qualifications
                </h2>
                <ul className="mt-5 space-y-3">
                  {job.qualifications.map((q: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass"
                      />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-border bg-card p-7">
                <h3 className="text-lg font-semibold tracking-tight">Apply for this role</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Send your CV and a short note about why you'd be a great fit.
                </p>
                <a
                  href={`mailto:${SITE.email}?subject=Application: ${encodeURIComponent(job.title)}`}
                  className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-full bg-cobalt px-5 text-sm font-medium text-bone transition-all hover:brightness-110"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email {SITE.email}
                </a>
                <div className="mt-6 border-t border-border pt-5 text-xs text-muted-foreground">
                  <div className="font-medium uppercase tracking-[0.14em] text-foreground">
                    Office
                  </div>
                  <p className="mt-2 leading-relaxed">{SITE.address}</p>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              Other open roles
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {JOBS.filter((j) => j.slug !== job.slug).map((j) => (
                <li key={j.slug}>
                  <Link
                    to="/careers/$slug"
                    params={{ slug: j.slug }}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-cobalt/40"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-foreground sm:text-base">
                        {j.title}
                      </div>
                      <div className="mt-0.5 truncate text-xs text-muted-foreground">
                        {j.type} · {j.location}
                      </div>
                    </div>
                    <ArrowLeft className="h-4 w-4 shrink-0 rotate-180 text-muted-foreground transition-colors group-hover:text-cobalt" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
