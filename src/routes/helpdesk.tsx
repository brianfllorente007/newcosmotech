import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  BookOpen,
  UserRound,
  Workflow,
  ShieldCheck,
  Bell,
  MessageSquare,
  Settings,
  Users,
  Ticket,
} from "lucide-react";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";
import { CtaBand } from "@/components/CtaBand";

export const Route = createFileRoute("/helpdesk")({
  head: () => ({
    meta: [
      { title: "HelpDesk — Cloud Ticketing & Customer Support System" },
      {
        name: "description",
        content:
          "HelpDesk by Cosmotech is a web/cloud-based support platform that centralizes complaints, incidents, and requests with workflow, SLAs, and audit trails.",
      },
      { property: "og:title", content: "HelpDesk — Cloud Ticketing for Modern Support Teams" },
      {
        property: "og:description",
        content:
          "Route every inquiry. Lose none. Centralized ticketing, configurable workflows, and audit-ready security.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://newcosmotech.lovable.app/helpdesk" },
    ],
  }),
  component: HelpdeskPage,
});

const BENEFITS = [
  {
    eyebrow: "One centralized system",
    title: "Every ticket. One place.",
    body: "A single system of record where resources, data, and operations are controlled and secured — no scattered inboxes, no lost threads.",
  },
  {
    eyebrow: "Automation",
    title: "Manual work, off the floor.",
    body: "Streamline repetitive tasks to increase efficiency, cut cost, and improve accuracy on every expected output.",
  },
  {
    eyebrow: "Scalability",
    title: "Grows with demand.",
    body: "Adapt and expand resources or capabilities as the volume of incidents and requests increases — without re-platforming.",
  },
  {
    eyebrow: "High level of service",
    title: "Customers feel the difference.",
    body: "Improve satisfaction, exceed expectations, raise loyalty, and build a reputation that earns repeat business.",
  },
  {
    eyebrow: "Streamlined operations",
    title: "Process, simplified.",
    body: "Optimize and simplify procedures across the organization to improve overall performance end-to-end.",
  },
];

const GENERAL_FEATURES = [
  "Customizable workflows for data capture, processing, presentation, escalations and approvals — no hard-coding for changes",
  "Faster submission, approval, processing, and resolution of issues through workflow",
  "System notifications for any transaction that requires action",
  "Role-based access supporting multiple distinct roles",
  "Audit trail for tracking actions and changes across the system",
  "Interoperable for easy integration with other IT systems",
  "Data Privacy Act (RA 10173) compliant",
  "Passed VAPT security testing and OWASP Top 10 reference standard",
];

const MODULES = [
  {
    icon: LayoutDashboard,
    title: "Dashboard Management",
    body: "Customizable dashboards that display, track, and monitor the system in real time — issue counts by status, top issues, aging issues — visualized in tables, line charts, bar charts, and gauges.",
    bullets: [
      "Advanced keyword search across tickets, articles, and profiles",
      "In-app analytics that surface insights for decision-making",
      "Real-time status across the entire support floor",
    ],
  },
  {
    icon: BookOpen,
    title: "Knowledge Base Management",
    body: "Maintain and update articles from various sources — FAQs, job aids, policies, resolutions, workarounds — with file attachments of any type.",
    bullets: [
      "Indexing and tagging for proper classification",
      "Link articles to incidents, requests, and problems",
      "Versioned updates with author history",
    ],
  },
  {
    icon: UserRound,
    title: "Requester / Customer / User Profile",
    body: "Capture user information — name, ID, office, address, contact — through predefined forms and templates with configurable fields and parameters.",
    bullets: [
      "Link requester profiles to incidents, service requests, and problems",
      "Update profile fields, columns, and parameters at any time",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Management",
    body: "Configurable workflow process for every defined issue or request type, with the option to assign owners per step and compute Turn-Around-Time per processor or unit.",
    bullets: [
      "Per-step owners and approvers",
      "TAT computation per processor and department",
      "Branching paths by category, priority, or source",
    ],
  },
  {
    icon: ShieldCheck,
    title: "System Security",
    body: "Two-Factor Authentication using password and captcha, configurable password policy, and full audit trail of user activity that is easy to retrieve and report on.",
    bullets: [
      "Two-Factor Authentication (password + captcha)",
      "Configurable password policy",
      "Complete activity audit trail",
    ],
  },
  {
    icon: Bell,
    title: "Notifications",
    body: "Email and in-app notifications for every ticket status, account creation, and password reset — keeping every party in the loop.",
    bullets: [
      "Ticket status notifications to assignees and requesters",
      "Account creation and password reset alerts",
      "Configurable templates per event",
    ],
  },
  {
    icon: MessageSquare,
    title: "Feedback / Survey Management",
    body: "Automated user satisfaction surveys with a customizable feedback form, collecting input directly from end users.",
    bullets: [
      "Trigger surveys on ticket close",
      "Customizable form fields and scales",
      "Aggregated CSAT reporting",
    ],
  },
  {
    icon: Settings,
    title: "Configuration Management",
    body: "Accessible administration of system configuration with user-maintainable reference tables, libraries, and configurable workflows.",
    bullets: [
      "User-maintained reference tables and libraries",
      "Configurable workflows without code",
      "Centralized administrative controls",
    ],
  },
  {
    icon: Users,
    title: "User Management",
    body: "Enforce role-based access for every user type — granting and restricting access at the module level.",
    bullets: [
      "Module-level permissions",
      "Multiple distinct roles supported",
      "Bulk user provisioning",
    ],
  },
  {
    icon: Ticket,
    title: "Service Requests, Incidents, Tickets & Issues",
    body: "Identify and manage reported incidents, issues, and service requests across the agency or organizational unit — from intake to closure.",
    bullets: [
      "Escalate to individuals, groups, or organizational units",
      "Categorization, priority matrix, and monitoring management",
      "Create, modify, escalate, resolve, close, and cancel from multiple channels",
    ],
  },
];

const FLOW = [
  { k: "1", t: "Raise", b: "Stakeholder submits an issue via web, email, or portal — captured against a profile and category." },
  { k: "2", t: "Route", b: "Workflow assigns it to the right owner, unit, or queue with the proper SLA." },
  { k: "3", t: "Resolve", b: "Agents work the ticket with knowledge base, internal notes, and escalations as needed." },
  { k: "4", t: "Measure", b: "Close-out triggers CSAT surveys and feeds dashboards, audit trail, and reports." },
];

const FAQS = [
  {
    q: "Is HelpDesk delivered on-premise or in the cloud?",
    a: "Both. HelpDesk is a web/cloud-based solution that can be hosted in the cloud or deployed inside an agency's own infrastructure, depending on data residency requirements.",
  },
  {
    q: "Is the system compliant with Philippine data privacy regulations?",
    a: "Yes. HelpDesk is built to be Data Privacy Act (RA 10173) compliant, with role-based access, audit trails, and configurable password policies.",
  },
  {
    q: "Has the system been security-tested?",
    a: "HelpDesk has passed VAPT security testing and is built against the OWASP Top 10 reference standard.",
  },
  {
    q: "Can workflows be changed without involving developers?",
    a: "Yes. Workflows, reference tables, libraries, and forms are user-maintainable. Process changes do not require hard-coding or new releases.",
  },
  {
    q: "Can it integrate with our existing systems?",
    a: "Yes. HelpDesk is built to be interoperable with other IT systems for user data, ticket sources, and downstream reporting.",
  },
];

function HelpdeskPage() {
  useReveal();

  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden border-b border-border bg-bone pt-20 sm:pt-28">
        <Container>
          <div className="grid items-center gap-12 pb-20 lg:grid-cols-[1.1fr_1fr] sm:pb-28">
            <div className="reveal">
              <Eyebrow>HelpDesk — Cloud Ticketing System</Eyebrow>
              <h1 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
                Route every inquiry.
                <br />
                <span className="text-muted-foreground">Lose none.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Attend to every customer complaint, incident, and issue with a
                web/cloud-based platform that automates support — providing
                real-time assistance to customers and complete visibility for
                the teams behind them.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
                >
                  Request a demo <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  See the features
                </a>
              </div>
            </div>

            <div className="reveal">
              <div className="overflow-hidden rounded-3xl border border-border bg-foreground p-3 shadow-2xl sm:p-4">
                <div className="grid gap-3 rounded-2xl bg-foreground p-5 text-background sm:p-7">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-background/60">
                      Open tickets
                    </p>
                    <span className="rounded-full bg-brass/20 px-3 py-1 text-xs text-brass">
                      Live
                    </span>
                  </div>
                  <p className="text-6xl font-semibold tracking-tight text-background sm:text-7xl">
                    128
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {[
                      ["New", "24"],
                      ["In progress", "71"],
                      ["Awaiting", "33"],
                    ].map(([l, v]) => (
                      <div
                        key={l}
                        className="rounded-md border border-background/15 bg-background/5 px-3 py-2"
                      >
                        <p className="text-background/60">{l}</p>
                        <p className="mt-1 text-base font-medium text-background">{v}</p>
                      </div>
                    ))}
                  </div>
                  <ul className="mt-2 divide-y divide-background/10 text-sm">
                    {[
                      ["#3041", "Payroll portal — login error", "High"],
                      ["#3040", "Request: VPN access", "Normal"],
                      ["#3039", "Email not syncing on mobile", "Normal"],
                      ["#3038", "Printer offline — Floor 4", "Low"],
                    ].map(([id, title, p]) => (
                      <li key={id} className="flex items-center justify-between py-3">
                        <div className="min-w-0">
                          <p className="truncate font-medium text-background">{title}</p>
                          <p className="text-xs text-background/60">{id}</p>
                        </div>
                        <span
                          className={
                            "shrink-0 rounded-full px-2.5 py-1 text-xs " +
                            (p === "High"
                              ? "bg-brass/20 text-brass"
                              : p === "Normal"
                                ? "bg-background/10 text-background/80"
                                : "bg-background/5 text-background/60")
                          }
                        >
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="border-b border-border bg-background py-20 sm:py-24">
        <Container>
          <div className="reveal grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <Eyebrow>What it is</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                The support system, centralized.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              HelpDesk is the software your business uses to manage customer
              support inquiries, track progress, and ensure that every issue
              is addressed in a timely and efficient manner — a web/cloud-based
              solution for reporting issues and concerns raised by stakeholders.
            </p>
          </div>
        </Container>
      </section>

      {/* BENEFITS */}
      <section className="border-b border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="reveal max-w-3xl">
            <Eyebrow>Benefits</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              What changes when support runs on HelpDesk.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <div
                key={b.title}
                className={
                  "reveal rounded-3xl p-8 sm:p-10 " +
                  (i === 0
                    ? "bg-cobalt/10"
                    : i === 1
                      ? "bg-brass/30"
                      : i === 2
                        ? "bg-emerald-500/10"
                        : i === 3
                          ? "bg-card border border-border"
                          : "bg-foreground text-background")
                }
              >
                <p
                  className={
                    "text-xs font-medium uppercase tracking-[0.22em] " +
                    (i === 4 ? "text-background/70" : "text-muted-foreground")
                  }
                >
                  {b.eyebrow}
                </p>
                <h3
                  className={
                    "mt-4 text-xl font-semibold tracking-tight sm:text-2xl " +
                    (i === 4 ? "text-background" : "text-foreground")
                  }
                >
                  {b.title}
                </h3>
                <p
                  className={
                    "mt-4 text-sm leading-relaxed " +
                    (i === 4 ? "text-background/80" : "text-muted-foreground")
                  }
                >
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* GENERAL FEATURES */}
      <section className="border-b border-border bg-background py-20 sm:py-24">
        <Container>
          <div className="reveal grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <Eyebrow>General features</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Built for the way teams actually work.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Configurable where it matters. Compliant where it counts.
                Audit-ready by default.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {GENERAL_FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* MODULES */}
      <section id="features" className="border-b border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="reveal max-w-3xl">
            <Eyebrow>Features &amp; functionality</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Ten modules. One support platform.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {MODULES.map((m) => (
              <div
                key={m.title}
                className="reveal rounded-3xl border border-border bg-card p-8 sm:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cobalt/10 text-cobalt">
                  <m.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {m.body}
                </p>
                <ul className="mt-5 space-y-2">
                  {m.bullets.map((bl) => (
                    <li
                      key={bl}
                      className="flex items-start gap-3 text-sm text-foreground/85"
                    >
                      <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-cobalt" />
                      <span>{bl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FLOW */}
      <section className="border-b border-border bg-background py-20 sm:py-24">
        <Container>
          <div className="reveal max-w-3xl">
            <Eyebrow>The flow</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              From raised to resolved.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {FLOW.map((s) => (
              <div
                key={s.k}
                className="reveal rounded-3xl border border-border bg-card p-7"
              >
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-cobalt">
                  Step {s.k}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                  {s.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="reveal max-w-3xl">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Frequently asked questions.
            </h2>
          </div>
          <div className="reveal mt-10 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <CtaBand
        eyebrow="See HelpDesk in action"
        title="See HelpDesk handle your support floor."
        body="Walk through ticketing, workflow, knowledge base, and dashboards with our team. Live demo, your scenarios."
        ctaLabel="Request a Demo"
        to="/contact"
      />
    </>
  );
}
