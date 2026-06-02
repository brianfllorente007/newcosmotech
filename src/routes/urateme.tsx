import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ModulesShowcase } from "@/components/ModulesShowcase";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Zap,
  TrendingUp,
  Sparkles,
  LayoutDashboard,
  Building2,
  UserRound,
  Users,
  BarChart3,
  Settings,
  MessageSquare,
  
} from "lucide-react";
import { Container } from "@/components/Container";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import productLogo from "@/assets/logos/products/urateme-dark.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import urateMeHero from "@/assets/urateme/urateme-hero.png";
import urateMeWhatItDoes from "@/assets/urateme/what-it-does.png";
import modFeedbackCapture from "@/assets/urateme/modules/feedback-capture.png";
import modBranchPerformance from "@/assets/urateme/modules/branch-performance.png";
import modEmployeePerformance from "@/assets/urateme/modules/employee-performance.png";
import modClientDemographics from "@/assets/urateme/modules/client-demographics.png";
import modReports from "@/assets/urateme/modules/reports.png";
import modAdminSecurity from "@/assets/urateme/modules/administration-security.png";

export const Route = createFileRoute("/urateme")({
  head: () => ({
    meta: [
      {
        title: "URateMe — Feedback Management System | Cosmotech",
      },
      {
        name: "description",
        content:
          "Hear your clients. Improve your business. URateMe collects complaints, praises, and suggestions at the point of service, then consolidates every branch into one system.",
      },
      {
        property: "og:title",
        content: "URateMe — Feedback Management System",
      },
      {
        property: "og:description",
        content:
          "Never miss what your customers are thinking. A direct line from clients to management, with real-time branch and employee performance reporting.",
      },
    ],
  }),
  component: UrateMePage,
});

// ---------- Placeholder helper ----------
function Placeholder({
  label,
  size,
  className,
}: {
  label: string;
  size: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1 rounded-3xl border-2 border-dashed border-border bg-muted/60 p-6 text-center",
        className,
      )}
    >
      <span className="text-sm font-semibold text-foreground">[PLACEHOLDER: {label}]</span>
      <span className="text-xs text-muted-foreground">
        Drop final asset here · suggested size: {size}
      </span>
    </div>
  );
}

// ---------- Data ----------
const FEATURE_CARDS = [
  {
    icon: Sparkles,
    title: "Point-of-service capture",
    body: "Collects complaints, praises, and suggestions directly from clients — at the moment of service.",
  },
  {
    icon: BarChart3,
    title: "Real-time branch monitoring",
    body: "Monitors service delivery and flags defective processes and poor service practices as they happen.",
  },
  {
    icon: Building2,
    title: "Consolidated multi-branch view",
    body: "Consolidates data from all branches into one system, transmitted securely through your company VPN.",
  },
];

const BENEFIT_CARDS = [
  {
    icon: MessageSquare,
    title: "Direct Customer Engagement",
    body: "Clients can submit complaints, praises, and suggestions directly through the system, at the point of service.",
  },
  {
    icon: Zap,
    title: "Improved Customer Service",
    body: "Because deliverables are actively monitored, service becomes faster and more consistent.",
  },
  {
    icon: TrendingUp,
    title: "Improved Customer Loyalty",
    body: "Customers who feel heard come back. Collecting and acting on feedback builds that trust.",
  },
  {
    icon: ShieldCheck,
    title: "Standard Treatment",
    body: "Every client receives the same quality of service regardless of nationality, occupation, or socio-economic status.",
  },
  {
    icon: Building2,
    title: "Branch Performance Profile",
    body: "See branch-level data including total customers served, satisfaction and dissatisfaction ratings, and top-performing employees per location.",
  },
  {
    icon: UserRound,
    title: "Employee Performance Profile",
    body: "Track individual employees by number of customers served, satisfaction ratings per category, and specific client feedback.",
  },
  {
    icon: Users,
    title: "Client Demographics",
    body: "Capture visitor profile data including age, gender, and civil status, and track the customer-to-employee representative ratio.",
  },
];

const GENERAL_FEATURES = [
  "Graphical and tabular presentation of results",
  "Data consolidation across all branches",
  "Username and password-protected admin pages",
  "User-customizable questionnaires, greeting messages, and thank-you messages",
  "Maintainable records for employees, branches, and survey questions",
];

const MODULES = [
  {
    icon: MessageSquare,
    title: "Feedback Capture — At the Point of Service",
    body: "Customers submit complaints, praises, and suggestions directly through the system. Questionnaires, greeting messages, and thank-you messages are user-customizable per branch or service type.",
    items: [
      "User-customizable questionnaires per branch or service type",
      "Configurable greeting and thank-you messages",
      "Complaints, praises, and suggestions captured at the point of service",
    ],
  },
  {
    icon: Building2,
    title: "Branch Performance Profile",
    body: "A consolidated profile for every branch — total customers served, satisfaction and dissatisfaction ratings, and the top-performing employees at that location.",
    items: [
      "Total customers served per branch",
      "Satisfaction and dissatisfaction ratings",
      "Top-performing employees per location",
    ],
  },
  {
    icon: UserRound,
    title: "Employee Performance Profile",
    body: "Individual employee profiles tracking the number of customers served, satisfaction ratings per category, and the specific client feedback received.",
    items: [
      "Number of customers served per employee",
      "Satisfaction ratings per criteria",
      "Specific client feedback per employee",
    ],
  },
  {
    icon: Users,
    title: "Client Demographics",
    body: "Visitor profile data — age, gender, and civil status — alongside the customer-to-employee representative ratio, giving management a clear picture of who's actually being served.",
    items: [
      "Age, gender, and civil status capture",
      "Customer-to-employee representative ratio",
      "Owner-vs-representative tracking per branch",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Reports — Graphical and Tabular",
    body: "Graphical and tabular presentation of results, generated on demand. Standard reports cover performance summaries, demographics, and per-branch and per-employee ratings.",
    items: [
      "Standard Reports — daily, weekly, monthly, or yearly",
      "Demographic Reports — satisfaction per age, gender, and owner/representative ratio",
      "Employee Rating Per Branch — ratings broken down by employee across each branch",
      "Employee Performance Report — customers served and satisfaction rating per criteria",
    ],
  },
  {
    icon: Settings,
    title: "Administration and Security",
    body: "Username and password-protected admin pages. User-maintainable records for employees, branches, and survey questions, plus greetings and thank-you messages.",
    items: [
      "Username and password-protected admin pages",
      "Maintainable records for employees, branches, and survey questions",
      "User-customizable greetings and thank-you messages",
    ],
  },
];

const FAQS = [
  {
    q: "What is URateMe Feedback Management System?",
    a: "URateMe is a feedback management system that helps organizations collect, analyze, and understand customer feedback to improve service quality, customer satisfaction, and operational performance.",
  },
  {
    q: "How does URateMe collect customer feedback?",
    a: "URateMe captures customer feedback through digital surveys, online forms, and customizable feedback channels, allowing organizations to gather insights across different products, services, and departments.",
  },
  {
    q: "Can URateMe monitor customer satisfaction and service performance?",
    a: "Yes. URateMe includes KPI monitoring tools that track customer satisfaction, service quality, product performance, and operational responsiveness in real time.",
  },
  {
    q: "Does URateMe provide analytics and reporting tools?",
    a: "Yes. URateMe generates reports, dashboards, and visual insights that help organizations identify feedback trends, monitor performance, and make data-driven improvement decisions.",
  },
  {
    q: "Does URateMe send alerts for negative feedback?",
    a: "Yes. URateMe provides real-time alerts and notifications for negative feedback, enabling organizations to respond quickly and address concerns before they escalate.",
  },
  {
    q: "Can URateMe support benchmarking and performance comparison?",
    a: "Yes. URateMe includes benchmarking capabilities that allow organizations to compare customer satisfaction and service performance against internal targets, industry standards, or competitors.",
  },
  {
    q: "Is URateMe suitable for government agencies?",
    a: "Yes. URateMe supports ARTA Client Satisfaction Measurement (CSM) requirements, helping government agencies monitor customer experience, ease of doing business, and public service satisfaction.",
  },
  {
    q: "What industries can use URateMe?",
    a: "URateMe is suitable for government agencies, enterprises, healthcare organizations, educational institutions, retail businesses, and service-oriented organizations seeking to improve customer experience and service quality through data-driven feedback management.",
  },
];

const MODULE_IMAGES: Record<string, string> = {
  "Feedback Capture — At the Point of Service": modFeedbackCapture,
  "Branch Performance Profile": modBranchPerformance,
  "Employee Performance Profile": modEmployeePerformance,
  "Client Demographics": modClientDemographics,
  "Reports — Graphical and Tabular": modReports,
  "Administration and Security": modAdminSecurity,
};



// ---------- Modules Showcase data → shared component ----------
const MODULE_VISUALS = MODULES.map((m) => ({
  icon: m.icon,
  title: m.title,
  body: m.body,
  items: m.items,
  preloadSrc: MODULE_IMAGES[m.title],
  visual: (
    <img
      src={MODULE_IMAGES[m.title]}
      alt={`${m.title.split(" — ")[0]} — URateMe UI screenshot`}
      className="h-full w-full object-contain object-top"
      decoding="sync"
    />
  ),
}));

// ---------- Page ----------
function UrateMePage() {
  useReveal();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="border-b border-border bg-bone py-20 sm:py-28">
        <Container>
          <div className="reveal grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <img src={productLogo} alt="URateMe" className="mb-6 h-9 w-auto sm:h-11" />
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Hear your clients. Improve your business.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Never miss what your customers are thinking. URateMe is a
                Feedback Management System that gives you a direct line to
                your customers — and the tools to act on what they say.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-brass px-5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:brightness-95"
                >
                  Request a Demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border bg-card aspect-[16/10]">
              <img
                src={urateMeHero}
                alt="Customer using a URateMe Port Customer Satisfaction Survey kiosk powered by Cosmotech"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="reveal mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center">The Problem</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Feedback that isn't captured doesn't get fixed.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Most businesses collect customer feedback inconsistently.
              Complaints get lost. Praise goes unrecorded. Managers have no
              clear picture of how different branches or employees are
              actually performing. URateMe fixes that.
            </p>
          </div>
        </Container>
      </section>

      {/* THREE FEATURE CARDS */}
      <section className="bg-cobalt/5 py-20 sm:py-24">
        <Container>
          <div className="reveal grid gap-6 md:grid-cols-3">
            {FEATURE_CARDS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cobalt/10 text-cobalt">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHAT IS */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="reveal grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <Eyebrow>What it does</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                A direct line to your customers — and the operating standard to back it up.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                URateMe is built to give companies a direct line to their
                customers while establishing consistent operating standards.
                It delivers an automated, accurate view of customer sentiment
                and gives management the tools to act on that data
                immediately.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Tracks the performance of individual employees and entire branches",
                  "Consolidates data from all branches into one system",
                  "Generates reports on a daily, weekly, monthly, or yearly basis",
                  "Transmits branch data fast through a company VPN",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cobalt" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl aspect-[4/3]">
              <img
                src={urateMeWhatItDoes}
                alt="URateMe branch comparison and employee ratings dashboard"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </Container>
      </section>


      {/* BENEFITS */}
      <section className="bg-cobalt/5 py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Benefits"
              title="What you get when feedback runs on URateMe"
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFIT_CARDS.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cobalt/10 text-cobalt">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* GENERAL FEATURES */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="reveal grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Eyebrow>Features and functionalities</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Works for one location — or every branch you run.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                URateMe works for single-location businesses and multi-branch
                operations alike. Reports from all branches can be transmitted
                through a company VPN, making it practical for organizations
                with distributed teams or locations spread across a region.
              </p>
              <div className="mt-8">
                <img
                  src={ppaKioskPhoto.url}
                  alt="URateMe kiosk in use at a Philippine Ports Authority branch"
                  className="aspect-[5/3] w-full rounded-3xl object-cover shadow-lg"
                  loading="lazy"
                />
              </div>

            </div>
            <ul className="space-y-3">
              {GENERAL_FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-foreground"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-cobalt" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* MODULES */}
      <section className="bg-cobalt/5 py-12 sm:py-16">
        <Container>
          <div>
            <SectionHeading
              eyebrow="What's inside"
              title="Modules and Capabilities"
              intro="URateMe ships with everything you need — feedback capture, branch and employee performance tracking, demographics, reporting, and admin controls."
            />
            <ModulesShowcase modules={MODULE_VISUALS} />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="reveal mx-auto max-w-3xl">
            <SectionHeading
              align="center"
              eyebrow="FAQ"
              title="Frequently Asked Questions"
            />
            <Accordion type="single" collapsible className="mt-12 space-y-3">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`faq-${i}`}
                  className="overflow-hidden rounded-2xl border border-border bg-card !border-b"
                >
                  <AccordionTrigger className="px-5 py-4 text-left text-base font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20 sm:px-8">
        <Container className="overflow-hidden rounded-3xl gradient-cta px-6 py-16 text-bone sm:px-12 sm:py-20">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-bone/70">
              Get started
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-bone sm:text-4xl md:text-5xl">
              Ready to see what your customers are actually thinking?
            </h2>
            <p className="mt-4 text-base text-bone/80 sm:text-lg">
              Contact Cosmotech to set up URateMe for your business — we'll
              walk you through feedback capture, branch dashboards, and
              employee performance reporting, live.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-brass px-5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:brightness-95"
              >
                Request a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-bone/30 px-5 text-sm font-medium text-bone hover:bg-bone/10"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
