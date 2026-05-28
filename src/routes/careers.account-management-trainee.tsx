import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Briefcase, CheckCircle2, Mail, MapPin, Target } from "lucide-react";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow } from "@/components/SectionHeading";
import { jobHead } from "@/components/JobDetail";
import { getJob } from "@/lib/jobs";
import { SITE } from "@/lib/site";

const SLUG = "account-management-trainee";

export const Route = createFileRoute("/careers/account-management-trainee")({
  head: () => jobHead(SLUG),
  component: AccountManagementTraineePage,
});

function AccountManagementTraineePage() {
  const job = getJob(SLUG)!;

  return (
    <>
      <section className="border-b border-border bg-bone py-20 sm:py-28">
        <Container>
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All open roles
          </Link>

          <div className="mt-8 max-w-4xl">
            <Eyebrow>Open role</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {job.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {job.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5">
                <Briefcase className="h-3.5 w-3.5 text-cobalt" />
                {job.type}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5">
                <MapPin className="h-3.5 w-3.5 text-cobalt" />
                {job.location}
              </span>
              <a
                href={`mailto:${SITE.email}?subject=Application: ${encodeURIComponent(job.title)}`}
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
            <Eyebrow>Role details</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Grow into a client-facing sales and account management role.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {job.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <section className="rounded-3xl border border-border bg-card p-7 sm:p-9">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cobalt/10 text-cobalt">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                Primary Responsibilities
              </h3>
              <ul className="mt-6 space-y-4">
                {job.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-border bg-card p-7 sm:p-9">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brass/15 text-brass">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                Qualifications
              </h3>
              <ul className="mt-6 space-y-4">
                {job.qualifications.map((qualification) => (
                  <li
                    key={qualification}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                    <span>{qualification}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-bone p-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-9">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Ready to apply?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Send your CV and a short note about why you'd be a great fit for the Account
                Management Trainee role.
              </p>
            </div>
            <a
              href={`mailto:${SITE.email}?subject=Application: ${encodeURIComponent(job.title)}`}
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-cobalt px-6 text-sm font-medium text-bone transition-all hover:brightness-110 sm:mt-0"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email {SITE.email}
            </a>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
