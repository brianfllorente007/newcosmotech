import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, MapPin, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { SITE } from "@/lib/site";
import { JOBS } from "@/lib/jobs";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Cosmotech Philippines" },
      {
        name: "description",
        content:
          "Join Cosmotech Philippines. Explore open roles in sales, IT, backend development, and QA automation at our Makati office.",
      },
      { property: "og:title", content: "Careers — Cosmotech Philippines" },
      {
        property: "og:description",
        content:
          "Open roles in sales, IT, backend development, and QA automation. Work onsite in Makati with a team building software for Philippine enterprise and government.",
      },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <section className="border-b border-border bg-bone py-20 sm:py-28">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>Careers</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Build software that runs the Philippines' workplaces.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We're a Makati-based team of engineers, QA specialists, and account managers
              building people management, queueing, helpdesk, and document tracking systems used
              by leading enterprises and Philippine government agencies. Join us onsite and grow
              your career alongside professionals who ship real, production-grade software.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5">
                <MapPin className="h-3.5 w-3.5 text-cobalt" />
                {SITE.address}
              </span>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 transition-colors hover:text-foreground"
              >
                <Mail className="h-3.5 w-3.5 text-cobalt" />
                Apply at {SITE.email}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-background py-20 sm:py-24">
        <Container>
          <div className="mb-12 max-w-3xl">
            <Eyebrow>Open roles</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              {JOBS.length} positions available
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore the roles we're hiring for today. Click into any position to see the full
              responsibilities and qualifications.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {JOBS.map((job) => (
              <li key={job.slug}>
                <Link
                  to="/careers/$slug"
                  params={{ slug: job.slug }}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:border-cobalt/40 hover:shadow-sm sm:p-9"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cobalt/10 text-cobalt">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {job.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground sm:text-sm">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" />
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {job.intro}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-cobalt">
                    View role
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
