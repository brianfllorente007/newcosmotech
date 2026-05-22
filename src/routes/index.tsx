import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { TrustBar } from "@/components/TrustBar";
import { SectionHeading, Eyebrow } from "@/components/SectionHeading";
import { SuiteTabs } from "@/components/SuiteTabs";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { ContactSection } from "@/components/ContactSection";
import { WhyCosmotech } from "@/components/WhyCosmotech";
import { FaqSection } from "@/components/FaqSection";
import { useReveal } from "@/hooks/use-reveal";
import { PROJECTS, PRODUCTS } from "@/lib/site";
import heroBg from "@/assets/hero-bg.mp4";
import heroImage from "@/assets/hero-image.webp";
import heroPoster from "@/assets/hero-poster.webp";
import ourClients from "@/assets/our-clients.webp";

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
    links: [
      {
        rel: "preload",
        as: "image",
        href: PRODUCTS[0].screenshot,
        type: "image/webp",
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
      <section className="relative -mt-24 overflow-hidden gradient-hero pt-24 text-bone md:-mt-28 md:pt-28 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-ink">
        <video
          src={heroBg}
          poster={heroPoster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <Container className="relative pt-16 pb-0 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-brass sm:text-sm">
              Pioneering Intelligent Automation
            </p>
            <h1 className="mt-5 break-words max-[360px]:text-[2rem] text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Leveraging AI to Automate, Optimize, and Elevate Operations
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-bone/75 sm:text-lg">
              From manual processes to intelligent automation, empowering your organizations to
              accelerate efficiency, reduce operational friction, and deliver smarter services at
              scale.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#solutions"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("solutions")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-brass px-5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:brightness-95"
              >
                See our solutions <ArrowRight className="h-4 w-4" />
              </a>
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
            className="mt-8 sm:mt-10 mx-auto block w-full max-w-5xl h-auto px-2 sm:px-0"
          />
        </Container>
      </section>

      <TrustBar />

      {/* SOLUTIONS SUITE */}
      <section id="solutions" className="scroll-mt-24 py-16 sm:py-20 md:py-24">
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
      <section className="bg-ink py-16 text-bone sm:py-20 md:py-24">
        <Container>
          <div className="reveal mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center text-bone/70">Digital transformation</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Custom Solutions for Businesses and Government Agencies
            </h2>
            <p className="mt-5 text-base leading-relaxed text-bone/75 sm:text-lg">
              We design and build AI-enabled custom software and hardware for organizations that need more than what off-the-shelf systems can offer. Whether you're modernizing paper-based workflows or upgrading existing digital systems, our team handles everything: assessment, design, installation, and ongoing support.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-brass px-5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:brightness-95"
              >
                Talk to our experts <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-bone/30 px-5 text-sm font-medium text-bone hover:bg-bone/10"
              >
                Learn More
              </Link>
            </div>
          </div>

        </Container>
      </section>


      {/* PROJECTS TEASER */}
      <section className="py-16 sm:py-20 md:py-24">
        <Container>
          <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="FEATURED WORK"
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

      {/* WHY COSMOTECH */}
      <div className="reveal">
        <WhyCosmotech />
      </div>

      {/* CLIENTS */}
      <section className="bg-bone pb-16 sm:pb-20 md:pb-24">
        <Container>
          <div className="reveal mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center">Our Clients</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Empowering Our Clients' Success
            </h2>
          </div>
          <div className="reveal mt-12 flex justify-center">
            <img
              src={ourClients}
              alt="Logos of Cosmotech clients including Philippine government agencies and enterprises"
              loading="lazy"
              className="h-auto w-full max-w-5xl"
            />
          </div>
        </Container>
      </section>

      <div className="reveal">
        <FaqSection />
      </div>

      <CtaBand />

      <div className="reveal">
        <ContactSection />
      </div>
    </>
  );
}
