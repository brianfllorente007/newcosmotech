import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { TrustBar } from "@/components/TrustBar";
import { SectionHeading, Eyebrow } from "@/components/SectionHeading";
import { SuiteTabs } from "@/components/SuiteTabs";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { LogoWall } from "@/components/LogoWall";
import { useReveal } from "@/hooks/use-reveal";
import { PROJECTS } from "@/lib/site";
import { ALL_CLIENT_LOGOS } from "@/lib/logos";
import heroBg from "@/assets/hero-bg.mp4";
import heroImage from "@/assets/hero-image.png";

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
        <video
          src={heroBg}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <Container className="relative pt-20 pb-0 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center text-bone/70">
              <span className="text-bone/70">Cosmotech Philippines · Since 1994</span>
            </Eyebrow>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              People management software for{" "}
              <span className="text-bone/95">
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
                className="inline-flex h-11 items-center gap-2 rounded-full bg-brass px-5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:brightness-95"
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

          <img
            src={heroImage}
            alt="IntegraHRIS Government dashboard preview"
            className="mt-12 sm:mt-16 mx-auto block w-full max-w-5xl h-auto"
          />
        </Container>
      </section>

      <TrustBar />

      {/* SOLUTIONS SUITE */}
      <section className="py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Our solutions"
              title={<>Software built for Philippine workplaces</>}
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
              From manual processes to digital ones — we handle the transition.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-bone/75 sm:text-lg">
              We work with organizations that are still on paper-based workflows and with those
              that already have digital systems but need them to work better. Our team handles
              everything: assessment, design, installation, and ongoing support. You don't need to
              figure out the technical side — that's what we're here for.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-brass px-5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:brightness-95"
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

      {/* CLIENT LOGO WALL */}
      <section className="border-b border-border bg-bone py-20">
        <Container>
          <div className="reveal mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">Trusted by leading enterprises</Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Government agencies and private companies that rely on Cosmotech.
            </h2>
          </div>
          <div className="reveal mt-10">
            <LogoWall logos={ALL_CLIENT_LOGOS} cols="compact" />
          </div>
        </Container>
      </section>

      {/* PROJECTS TEASER */}
      <section className="py-24">
        <Container>
          <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title={<>Trusted by Philippine government & enterprise</>}
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
                Your technology partner since 1994.
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
