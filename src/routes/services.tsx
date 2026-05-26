import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  Code2,
  Workflow,
  LifeBuoy,
  ServerCog,
  Network,
  MonitorPlay,
  Fingerprint,
  Check,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";
import { SectionHeading, Eyebrow } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { ContactSection } from "@/components/ContactSection";
import consultingImg from "@/assets/services-consulting.jpg";
import infrastructureImg from "@/assets/services-infrastructure.jpg";
import smartDisplayImg from "@/assets/services-smart-display.jpg";
import biometricsImg from "@/assets/services-biometrics.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Consulting — Cosmotech Philippines" },
      {
        name: "description",
        content:
          "Custom software development, system integration, IT consulting, infrastructure, smart displays, and biometric identity solutions for Philippine government and enterprise.",
      },
      { property: "og:title", content: "Services & Consulting — Cosmotech Philippines" },
      {
        property: "og:description",
        content:
          "End-to-end IT services, network infrastructure, smart displays, and biometric systems — built and supported in the Philippines.",
      },
    ],
  }),
  component: ServicesPage,
});

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  body: string;
  bullets?: string[];
};

const IT_SERVICES: ServiceItem[] = [
  {
    icon: Code2,
    title: "Software System Design & Development",
    body:
      "Custom software design and development tailored to your organization's unique processes, workflows, and compliance requirements.",
  },
  {
    icon: Workflow,
    title: "System Integration",
    body:
      "Seamless integration of new and existing systems, APIs, middleware, data migration, and end-to-end connectivity across platforms.",
  },
  {
    icon: LifeBuoy,
    title: "Support & Maintenance",
    body:
      "Proactive support and maintenance with defined SLAs, issue resolution, system monitoring, and continuous optimization.",
  },
  {
    icon: ServerCog,
    title: "IT Management & Data Center Consultancy",
    body:
      "Strategic IT management and data center consultancy, architecture planning, infrastructure design, and technology roadmapping.",
  },
];

const INFRASTRUCTURE: {
  icon: LucideIcon;
  title: string;
  body: string;
  image: string;
  capabilities: string[];
}[] = [
  {
    icon: Network,
    title: "Full Stack Infrastructure and Hardware Network Solutions",
    body:
      "We deliver fully integrated infrastructure and hardware solutions that power secure, reliable, and scalable operations. From networking and compute systems to smart devices and enterprise security, our solutions support high-performance and mission-critical environments.",
    image: infrastructureImg,
    capabilities: [
      "SD-WAN",
      "Active Security",
      "Wi-Fi Ready AP Products",
      "High-Density Switches",
      "Intelligent Routers",
      "CAS",
      "Hyper Converged Computing",
      "UniServers",
    ],
  },
  {
    icon: MonitorPlay,
    title: "Horion Smart Interactive Display",
    body:
      "Smart Collaboration Solutions for Modern Workspaces and Learning Environments. Interactive display and smart presentation solutions designed for boardrooms, classrooms, training centers, and government briefing facilities enabling smarter collaboration, communication, and engagement.",
    image: smartDisplayImg,
    capabilities: ["Smart Interactive Displays", "Smart Lecterns", "Conference & Collaboration Solutions"],
  },
  {
    icon: Fingerprint,
    title: "Union Biometrics: Advanced Identity Solutions",
    body:
      "Secure Biometric Identity Verification for Government and Enterprise. Advanced biometric technologies for secure identity authentication, access control, and workforce verification designed for government agencies, enterprises, and high-security environments.",
    image: biometricsImg,
    capabilities: [
      "Facial Recognition",
      "Iris Recognition",
      "Fingerprint Authentication",
      "Live Fake Detection",
      "Optical Sensor Technology",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border bg-bone py-20 sm:py-28">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>Services & Consulting</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Custom Solutions for End-to-End Digital Transformation
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              From custom software development and system integration to enterprise infrastructure, smart interactive displays, and biometric identity solutions. We design, implement, and support technology tailored to Philippine government and enterprise organizations.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-bone transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                Talk to Our Team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* IT SERVICES & CONSULTING */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="IT Services & Consulting"
                title={<>Plan, build, and optimize for long-term efficiency.</>}
                intro="Accelerate your digital transformation with expert IT consulting, implementation, and support services. We help you plan, deploy, and optimize technology for long-term efficiency and growth."
              />
              <img
                src={consultingImg}
                alt="Cosmotech consultants collaborating on software design"
                width={1280}
                height={896}
                loading="lazy"
                className="mt-8 hidden h-auto w-full rounded-2xl object-cover shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)] lg:block"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {IT_SERVICES.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-cobalt/60 hover:shadow-sm"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cobalt/15 text-cobalt">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* INFRASTRUCTURE & HARDWARE */}
      <section className="border-t border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Infrastructure & Hardware"
              title={<>A secure, reliable foundation for mission-critical operations.</>}
              intro="Build a secure and reliable IT foundation with high-performance infrastructure and integrated hardware systems. Designed to support mission-critical operations with scalability, stability, and minimal downtime."
            />
          </div>

          <InfrastructureTabs />
        </Container>
      </section>

      <CtaBand />
      <ContactSection />
    </>
  );
}

function InfrastructureTabs() {
  const [active, setActive] = useState(0);
  const current = INFRASTRUCTURE[active];
  const ActiveIcon = current.icon;

  return (
    <div className="mt-12">
      {/* Tabs strip */}
      <div className="relative -mx-5 sm:mx-0">
        <div className="scrollbar-hide flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-px-5 px-5 pb-2 sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0">
          {INFRASTRUCTURE.map((item, idx) => {
            const Icon = item.icon;
            const isActive = active === idx;
            return (
              <button
                key={item.title}
                onClick={() => setActive(idx)}
                aria-pressed={isActive}
                className={cn(
                  "flex min-h-16 shrink-0 snap-start items-center justify-center gap-3 rounded-2xl border px-5 py-3 text-sm font-semibold leading-tight transition-colors sm:w-auto sm:shrink",
                  isActive
                    ? "border-foreground bg-background text-foreground shadow-sm"
                    : "border-transparent bg-transparent text-foreground/55 hover:text-foreground",
                )}
              >
                <Icon className={cn("h-5 w-5 shrink-0", isActive ? "text-cobalt" : "text-foreground/55")} />
                <span className="text-center sm:whitespace-normal whitespace-nowrap">{item.title}</span>
              </button>
            );
          })}
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-bone to-transparent sm:hidden"
        />
      </div>

      {/* Panel */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col justify-between rounded-3xl bg-ink p-8 text-bone sm:p-10">
          <div>
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-bone/10 text-brass">
              <ActiveIcon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
              {current.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-bone/75">{current.body}</p>
            <ul className="mt-6 space-y-3">
              {current.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-bone/90">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brass text-ink">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]">
          <img
            src={current.image}
            alt={current.title}
            width={1280}
            height={896}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
