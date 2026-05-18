import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Zap,
  TrendingUp,
  Sparkles,
  Workflow,
  LayoutDashboard,
  BookOpen,
  UserRound,
  Bell,
  MessageSquare,
  Settings,
  Users,
  Ticket,
  Download,
} from "lucide-react";
import { Container } from "@/components/Container";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/helpdesk")({
  head: () => ({
    meta: [
      {
        title:
          "HelpDesk — Cloud Ticketing & Customer Support Software | Cosmotech",
      },
      {
        name: "description",
        content:
          "HelpDesk by Cosmotech is a web/cloud-based support platform that automates ticketing, workflows, knowledge base, and audit-ready security. RA 10173 compliant and OWASP-tested.",
      },
      {
        property: "og:title",
        content: "HelpDesk — Cloud Ticketing & Customer Support Software",
      },
      {
        property: "og:description",
        content:
          "Route every inquiry. Lose none. Centralized ticketing, configurable workflows, knowledge base, and audit-ready security.",
      },
    ],
  }),
  component: HelpdeskPage,
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
    icon: ShieldCheck,
    title: "Audit-ready security",
    body: "Two-Factor Authentication, configurable password policies, and a full audit trail of every user action.",
  },
  {
    icon: Workflow,
    title: "Configurable workflows",
    body: "Define owners, approvals, and escalations per request type — no hard-coding required for process changes.",
  },
  {
    icon: Zap,
    title: "Real-time assistance",
    body: "Email and in-app notifications keep requesters and agents in sync from creation to resolution.",
  },
];

const BENEFIT_CARDS = [
  {
    icon: ShieldCheck,
    title: "One centralized system",
    body: "Manage resources, data, and operations in one place — with the security and control of a single system of record.",
  },
  {
    icon: Zap,
    title: "Automation",
    body: "Streamline manual and repetitive tasks to increase efficiency, reduce cost, and improve accuracy of every output.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    body: "Adapt and expand resources or capabilities as demand grows — without changing the way your team works.",
  },
  {
    icon: Sparkles,
    title: "Maintain a high level of service",
    body: "Improve customer satisfaction, exceed expectations, increase loyalty, and build a stronger reputation.",
  },
  {
    icon: Workflow,
    title: "Streamline operations",
    body: "Optimize and simplify processes and procedures across the organization to improve overall performance.",
  },
  {
    icon: ShieldCheck,
    title: "Compliant and tested",
    body: "Built for Data Privacy Act (RA 10173) compliance and tested against VAPT and the OWASP Top 10 reference standard.",
  },
];

const GENERAL_FEATURES = [
  "Customizable workflows for data capture, processing, presentation, escalations and approvals — no hard-coding needed",
  "Faster submission, approval, processing, and resolution of issues through workflow",
  "System notifications for any transaction that needs appropriate action",
  "Role-based access supporting multiple distinct roles",
  "Better tracking of actions and changes via audit trail module",
  "Interoperable for easy integration with other IT systems",
  "Data Privacy Act (RA 10173) compliant",
  "Passed VAPT security testing and built on the OWASP Top 10 reference standard",
];

const MODULES = [
  {
    icon: LayoutDashboard,
    title: "Dashboard Management — Real-Time Visibility",
    body: "Customizable dashboards that display, track, and monitor the Helpdesk in real time — issues by status, top issues, aging issues — visualized through tables, line charts, bar charts, and gauges.",
    items: [
      "Advanced keyword search across tickets, knowledge base, and profiles",
      "In-app analytics that surface insights for decision-making",
      "Variety of search methodologies for fast lookups",
      "Real-time issue status across the support floor",
    ],
  },
  {
    icon: BookOpen,
    title: "Knowledge Base Management — Reusable Answers",
    body: "Maintain and update articles from various sources — FAQs, job aids, policies, resolutions, and workarounds — with file attachments of any type.",
    items: [
      "Add, modify, and attach files in multiple formats",
      "Indexing and tagging for proper classification",
      "Link articles to incidents, requests, and problems easily",
    ],
  },
  {
    icon: UserRound,
    title: "Requester / Customer / User Profile",
    body: "Capture user information — name, ID, office, address, contact number — using predefined forms and templates with configurable fields and parameters.",
    items: [
      "Create and modify user profiles with predefined templates",
      "Add and update fields, columns, and parameters as needed",
      "Link requester profiles to incidents, service requests, and problems",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Management — Configurable Per Issue Type",
    body: "Configurable workflow process for every defined issue or request type, with the option to assign owners per step and compute Turn-Around-Time per processor or unit.",
    items: [
      "Per-step owners and approvers",
      "TAT computation per processor, department, section, or unit",
      "Branching paths by category, priority, or source",
    ],
  },
  {
    icon: ShieldCheck,
    title: "System Security — 2FA, Audit Trail, and Policy",
    body: "Ensure security with Two-Factor Authentication using password and captcha, plus configurable password policy and full audit trail of user activity.",
    items: [
      "Two-Factor Authentication (password + captcha)",
      "Configurable password policy",
      "Complete activity audit trail, easily retrieved and reported",
    ],
  },
  {
    icon: Bell,
    title: "Notifications — Email and In-App",
    body: "Send email and in-app notifications for every ticket status, user account creation, and password reset — keeping every party in the loop.",
    items: [
      "Ticket status alerts to assignees and requesters",
      "Account creation and password reset notifications",
      "Configurable templates per event",
    ],
  },
  {
    icon: MessageSquare,
    title: "Feedback / Survey Management",
    body: "Automated user satisfaction surveys with a customizable feedback form, collecting input directly from end users.",
    items: [
      "Automated post-resolution surveys",
      "Customizable feedback form fields and scales",
      "Aggregated CSAT reporting",
    ],
  },
  {
    icon: Settings,
    title: "Configuration Management",
    body: "Accessible and efficient administration of system configuration with user-maintainable reference tables, libraries, and configurable workflows.",
    items: [
      "User-maintained reference tables and libraries",
      "Configurable workflows without code",
      "Centralized administrative controls",
    ],
  },
  {
    icon: Users,
    title: "User Management — Role-Based Access",
    body: "Enforce role-based access for every user type, with grant and restriction of access per module.",
    items: [
      "Module-level permissions",
      "Multiple distinct roles supported",
      "Bulk user provisioning",
    ],
  },
  {
    icon: Ticket,
    title: "Service Requests, Incidents, Tickets & Issues Management",
    body: "Maintain, identify, and manage reported incidents, issues, and service requests across the agency or organizational unit — from intake to closure.",
    items: [
      "Escalate to individuals, groups, or organizational units",
      "Categorization, priority matrix, and monitoring management",
      "Create, modify, escalate, resolve, close, and cancel across channels",
    ],
  },
];

const FAQS = [
  {
    q: "What is HelpDesk?",
    a: "HelpDesk is a web/cloud-based support platform that automates how an organization handles customer complaints, incidents, and issues — providing real-time assistance to customers and complete visibility for the teams behind them.",
  },
  {
    q: "Is HelpDesk delivered on-premise or in the cloud?",
    a: "HelpDesk is a web/cloud-based solution and can be hosted in the cloud or deployed inside your own infrastructure, depending on your data residency requirements.",
  },
  {
    q: "Is the system compliant with Philippine data privacy regulations?",
    a: "Yes. HelpDesk is built to be Data Privacy Act (RA 10173) compliant, with role-based access, audit trails, and configurable password policies.",
  },
  {
    q: "Has the system been security-tested?",
    a: "HelpDesk has passed VAPT security testing and is built against the OWASP Top 10 reference standard. Two-Factor Authentication and configurable password policies are included.",
  },
  {
    q: "Can workflows be changed without involving developers?",
    a: "Yes. Workflows, reference tables, libraries, and forms are user-maintainable. Process changes do not require hard-coding or new releases.",
  },
  {
    q: "Does HelpDesk integrate with our existing systems?",
    a: "Yes. HelpDesk is built to be interoperable with other IT systems — supporting integrations for user data, ticket sources, and downstream reporting.",
  },
  {
    q: "Can requesters submit tickets from different channels?",
    a: "Yes. Requesters can create, modify, escalate, resolve, close, and cancel incidents, issues, and service requests from various channels — keeping every party in the loop via in-app and email notifications.",
  },
];

// ---------- Page ----------
function HelpdeskPage() {
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
              <Eyebrow>HelpDesk</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                The Cloud Helpdesk That Routes Every Inquiry
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Attend to every customer complaint, incident, and issue raised
                through a web/cloud-based platform that automates support —
                providing real-time assistance to customers and complete
                visibility for the teams behind them.
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
                  <Download className="h-4 w-4" /> Download Brochure
                </Link>
              </div>
            </div>
            <Placeholder
              label="HelpDesk dashboard mock"
              size="1600x1000"
              className="aspect-[16/10]"
            />
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
              <Eyebrow>About the product</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                What is HelpDesk?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                HelpDesk is the software your business uses to manage customer
                support inquiries, track progress, and ensure that every issue
                is addressed in a timely and efficient manner. A web/cloud-based
                solution for the reporting of issues and concerns raised by
                stakeholders.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                It centralizes intake, routing, knowledge, and reporting — so
                customers get answers faster, agents work with the right
                context, and management has the dashboards and audit trail
                they need.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Web/cloud-based — accessible from anywhere",
                  "Configurable workflows for every request type",
                  "RA 10173 compliant, VAPT-tested, OWASP-aligned",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cobalt" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Placeholder
              label="Ticket detail / workflow mock"
              size="1200x900"
              className="aspect-[4/3]"
            />
          </div>
        </Container>
      </section>

      {/* BENEFITS */}
      <section className="bg-cobalt/5 py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Benefits"
              title="What changes when support runs on HelpDesk"
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
              <Eyebrow>General features</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Built for the way teams actually work
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Configurable where it matters. Compliant where it counts.
                Audit-ready by default. Every feature below ships in the box —
                no upgrade paths, no feature gates.
              </p>
              <div className="mt-8">
                <Placeholder
                  label="Workflow / audit trail screenshot"
                  size="1000x600"
                  className="aspect-[5/3]"
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
      <section className="bg-cobalt/5 py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="What's inside"
              title="Features and Functionality"
              intro="HelpDesk ships with every module included — dashboards, knowledge base, workflows, security, and ticketing across every channel."
            />
            <ModulesShowcase />

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
              Ready to See HelpDesk in Action?
            </h2>
            <p className="mt-4 text-base text-bone/80 sm:text-lg">
              Walk through ticketing, workflows, knowledge base, and dashboards
              with our team — live demo, your scenarios.
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
