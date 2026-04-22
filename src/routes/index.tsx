import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { TrustBar } from "@/components/TrustBar";
import { SectionHeading, Eyebrow } from "@/components/SectionHeading";
import { SuiteTabs } from "@/components/SuiteTabs";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { HrisMock, QueueMock, HelpdeskMock } from "@/components/ProductMock";
import { useReveal } from "@/hooks/use-reveal";
import { PROJECTS } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Cosmotech Philippines — HRIS, Queueing, HelpDesk & Document Software Since 1994",
      },
      {
        name: "description",
        content:
          "Cosmotech Philippines builds HR, payroll, queue management, helpdesk, and document tracking software for Philippine government agencies and private companies. Trusted by 3,000+ organizations.",
      },
      {
        property: "og:title",
        content: "Cosmotech Philippines — Software for Philippine Workplaces",
      },
      {
        property: "og:description",
        content:
          "People management, queueing, helpdesk and document software, built in the Philippines since 1994.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  useReveal();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-hero text-bone">
        <Container className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center text-bone/70">
              <span className="text-bone/70">Cosmotech Philippines · Since 1994</span>
            </Eyebrow>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              People management software for{" "}
              <span className="font-display italic text-bone/95">
                Philippine government & private companies
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-bone/75 sm:text-lg">
              We've been building HR, queuing, helpdesk, and document management systems since
              1994. Over 3,000 companies and government offices trust our software to handle the
              work that keeps their operations running.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/solutions"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-bone px-5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                See our solutions <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-bone/30 px-5 text-sm font-medium text-bone hover:bg-bone/10"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          {/* Floating product mocks */}
          <div className="relative mt-16 hidden lg:block">
            <div className="absolute -left-6 top-0 w-[280px] rotate-[-4deg]">
              <QueueMock />
            </div>
            <div className="absolute -right-4 top-6 w-[320px] rotate-[3deg]">
              <HelpdeskMock />
            </div>
            <div className="mx-auto w-[420px]">
              <HrisMock />
            </div>
            <div className="h-[260px]" />
          </div>

          {/* Mobile single mock */}
          <div className="mt-14 lg:hidden">
            <div className="mx-auto max-w-sm">
              <HrisMock />
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* SOLUTIONS SUITE */}
      <section className="py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Our solutions"
              title={
                <>
                  Software built for{" "}
                  <span className="font-display italic">Philippine workplaces</span>
                </>
              }
              intro="From HR and payroll to customer queues and document tracking, our products are built for the way Philippine organizations actually operate — government compliance, local regulations, and all."
            />
          </div>
          <div className="reveal">
            <SuiteTabs />
          </div>
        </Container>
      </section>

      {/* DIGITAL TRANSFORMATION */}
      <section className="bg-ink py-24 text-bone">
        <Container>
          <div className="reveal mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center text-bone/70">Digital transformation</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              From manual processes to{" "}
              <span className="font-display italic">digital ones</span> — we handle the transition.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-bone/75 sm:text-lg">
              We work with organizations that are still on paper-based workflows and with those
              that already have digital systems but need them to work better. Our team handles
              everything: assessment, design, installation, and ongoing support. You don't need to
              figure out the technical side — that's what we're here for.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-bone px-5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Talk to our experts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* paper -> digital motif */}
          <div className="reveal mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              "Paper forms",
              "Manual filing",
              "Phone follow-ups",
              "Spreadsheets",
            ].map((item, i) => (
              <div key={item} className="rounded-xl border border-white/10 p-5 text-sm">
                <p className="text-bone/55 line-through">{item}</p>
                <p className="mt-2 font-medium text-bone">
                  {["Smart forms", "QR-tracked docs", "Auto SLAs", "Live dashboards"][i]}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROJECTS TEASER */}
      <section className="py-24">
        <Container>
          <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title={
                <>
                  Trusted by Philippine{" "}
                  <span className="font-display italic">government & enterprise</span>
                </>
              }
              intro="We have delivered projects for some of the largest government institutions in the country. Here's a sample of what we've built and deployed."
            />
            <Link
              to="/projects"
              className="shrink-0 text-sm font-medium text-cobalt hover:underline"
            >
              See all projects →
            </Link>
          </div>
          <div className="reveal mt-12 grid gap-4 sm:grid-cols-2">
            {PROJECTS.slice(0, 6).map((p) => (
              <ProjectCard key={p.agency + p.scope} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-bone py-24">
        <Container>
          <div className="reveal grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>About</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Your <span className="font-display italic">technology partner</span> since 1994.
              </h2>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                We started in 1994 as a hardware and software integrator. Over the decades we've
                grown into a full-service technology company serving both private businesses and
                government agencies across the Philippines.
              </p>
              <p>
                Today our work spans cloud-based software, AI-powered systems, smart office
                solutions, and enterprise software development.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-cobalt hover:gap-3 transition-all"
              >
                Read our story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
