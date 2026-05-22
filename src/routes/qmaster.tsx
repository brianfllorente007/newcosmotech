import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ModulesShowcase } from "@/components/ModulesShowcase";
import {
  ArrowRight,
  Check,
  Download,
  ShieldCheck,
  Zap,
  TrendingUp,
  Sparkles,
  Workflow,
  Bell,
  BarChart3,
  Gauge,
  Ticket,
  Monitor,
  Users,
  Settings,
  MessageSquare,
  LayoutDashboard,
} from "lucide-react";
import heroImage from "@/assets/qmaster/hero.png";
import modulesImage from "@/assets/qmaster-modules.png";
import { Container } from "@/components/Container";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";
import { CtaBand } from "@/components/CtaBand";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/qmaster")({
  head: () => ({
    meta: [
      { title: "QMaster — Queue Management System for High-Volume Service" },
      {
        name: "description",
        content:
          "QMaster is Cosmotech's queue management system. Real-time monitoring, kiosk ticketing, SMS notifications, and a full performance dashboard — built for branches that serve thousands a day.",
      },
      { property: "og:title", content: "QMaster — Queue Management for High-Volume Service" },
      {
        property: "og:description",
        content:
          "Manage queues. Organize every transaction. Real-time monitoring, ticketing, and analytics deployed across 42 GSIS branches and counting.",
      },
      { property: "og:image", content: "https://newcosmotech.lovable.app/og/qmaster.png" },
    ],
    links: [{ rel: "canonical", href: "https://newcosmotech.lovable.app/qmaster" }],
  }),
  component: QMasterPage,
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
    icon: Gauge,
    title: "Real-time queue monitoring",
    body: "Live dashboards on any screen. Average wait, served-today, abandoned, and per-window performance refreshed in seconds.",
  },
  {
    icon: Workflow,
    title: "Automated routing",
    body: "Priority lanes for SC, PWD, and pregnant clients built in. Overflow rolls to the next eligible window automatically.",
  },
  {
    icon: Zap,
    title: "Runs when the internet doesn't",
    body: "Local-first. Tickets keep printing and queues keep moving on a flaky connection. Data syncs the moment it returns.",
  },
];

const BENEFIT_CARDS = [
  {
    icon: TrendingUp,
    title: "Faster handling time",
    body: "Customers know where they stand; tellers know what's coming next. Branches see 20–30% faster average handling within the first month.",
  },
  {
    icon: Sparkles,
    title: "Better customer experience",
    body: "Position, time estimate, and SMS notification all the way to their turn. Wait with information, not anxiety.",
  },
  {
    icon: Users,
    title: "Branch-managed configuration",
    body: "Window assignments, transaction types, and SLAs change without calling IT. Branch managers run the floor.",
  },
  {
    icon: ShieldCheck,
    title: "Hardware-agnostic",
    body: "Works with standard 80mm ticket printers, HDMI displays, and Android tablets. No proprietary lock-in for kiosks or signage.",
  },
  {
    icon: BarChart3,
    title: "Centralized reporting",
    body: "Every counter, ticket, and minute of waiting rolls up to head office. Compare branches without spreadsheets.",
  },
  {
    icon: Workflow,
    title: "Compliant and tested",
    body: "Built for Data Privacy Act (RA 10173) compliance and tested against VAPT and the OWASP Top 10 reference standard.",
  },
];

const GENERAL_FEATURES = [
  "Kiosk, counter print, or QR-based mobile ticket issuance",
  "Priority handling for Senior, PWD, pregnant, and custom flags",
  "Unlimited TV-out and web-based displays with multi-language audio call",
  "SMS notifications triggered by position threshold per group",
  "Unlimited transaction groups with per-group SLA configuration",
  "Cross-group transfers and parking with full audit trail",
  "Supervisor controls — grab, force-call, reassign, and reopen tickets",
  "Centralized multi-branch reporting across every site",
  "Offline mode — queues continue locally and sync on reconnect",
  "Native integrations with URateMe and HelpDesk, plus REST API for HRIS and CRM",
];

const MODULES = [
  {
    icon: LayoutDashboard,
    title: "Operations Dashboard — Real-Time Floor Visibility",
    body: "Customizable dashboards that display, track, and monitor every counter in real time — tickets served, average wait, longest handling time, and per-window performance visualized through tables and charts.",
    items: [
      "Tickets served today, per window and per teller",
      "Average and longest handling time per transaction type",
      "Skipped, transferred, and parked counts with reasons",
      "Live performance comparison across the floor",
      "Daily, weekly, and monthly leaderboards",
    ],
  },
  {
    icon: Ticket,
    title: "Ticket Issuance — Kiosk, Counter, and Mobile",
    body: "Customers grab a number from a touchscreen kiosk, the front desk, or their phone via QR. Every ticket is tagged with group, priority flag, and timestamp the moment it prints.",
    items: [
      "Self-service kiosk with branded touchscreen flow",
      "Counter-printed tickets for assisted issuance",
      "QR-based mobile tickets — no app install required",
      "Configurable priority flags (SC, PWD, pregnant, custom)",
    ],
  },
  {
    icon: Workflow,
    title: "Routing Engine — Skill and SLA Matching",
    body: "The engine matches each ticket to eligible windows by skill and SLA, with automatic overflow to the next available counter. Priority lanes route to the front of the matched group.",
    items: [
      "Skill-based routing per window and transaction type",
      "Automatic overflow when a queue exceeds SLA",
      "Priority handling routed to the front of the matched group",
      "Cross-group transfers without losing ticket position",
    ],
  },
  {
    icon: Monitor,
    title: "Customer-Facing Display — Now Serving and Up Next",
    body: "Branded screens show now-serving, next-up, and estimated wait time per group. Multi-language audio call fires across the branch with configurable voice and phrases.",
    items: [
      "Now-serving and next-up on every screen",
      "Estimated wait time per group, updated live",
      "Multi-language audio call with custom phrases",
      "SMS notification when a customer's number is close",
    ],
  },
  {
    icon: Users,
    title: "Teller Console — Six Buttons, Whole Floor",
    body: "Tellers don't need a manual. Six buttons handle 95% of the work: Call Next, Call Again, Skip, Grab, Transfer, Park. New hires are productive in an afternoon.",
    items: [
      "Tight, opinionated gestures for the counter",
      "Park a ticket while the customer steps away — resume from any window",
      "Grab a specific ticket out of order, supervisor-logged for audit",
      "Transfer between groups without losing position or history",
    ],
  },
  {
    icon: Bell,
    title: "Notifications — SMS, Audio, and In-App",
    body: "Send SMS when a customer's number is close, audio call when it's their turn, and in-app alerts to supervisors when SLA is at risk.",
    items: [
      "Position-threshold SMS per group",
      "Multi-language audio call across the branch",
      "Supervisor SLA-breach alerts in real time",
      "Configurable templates per event",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting — Per Hour, Per Teller, Per Branch",
    body: "Every counter action is timestamped. Dashboards compose themselves by hour, by teller, by branch — and roll up to head office without a single manual export.",
    items: [
      "Served, abandoned, and transferred counts broken down by hour",
      "Per-teller productivity with handle-time medians",
      "Group-level SLA compliance and breach alerts",
      "Branch comparison rolled up by region",
      "Exportable CSV and PDF for management reviews",
    ],
  },
  {
    icon: Settings,
    title: "Configuration Management — Branch-Managed",
    body: "Branch managers create unlimited groups, set per-group SLAs, and configure priority handling for any custom flag — without writing code or filing an IT ticket.",
    items: [
      "Unlimited transaction groups with per-group SLA",
      "User-maintained reference tables and libraries",
      "Drag-and-drop workflow editor",
      "Centralized administrative controls",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security — 2FA, Audit Trail, and Policy",
    body: "Two-Factor Authentication, configurable password policies, and a full audit trail of every counter action. Built for Data Privacy Act (RA 10173) compliance.",
    items: [
      "Two-Factor Authentication (password + captcha)",
      "Configurable password policy",
      "Complete activity audit trail, easily retrieved and reported",
      "Role-based access supporting multiple distinct roles",
    ],
  },
  {
    icon: MessageSquare,
    title: "Feedback Capture — URateMe Integration",
    body: "Automated post-service rating capture via native URateMe integration. Customers rate the transaction the moment their ticket closes.",
    items: [
      "Post-service rating capture on every closed ticket",
      "Customizable feedback form fields and scales",
      "Aggregated CSAT reporting per teller and branch",
    ],
  },
];

const FAQS = [
  {
    q: "What is QMaster?",
    a: "QMaster is Cosmotech's queue management system. It runs the floor for branches that serve thousands a day — ticketing, routing, displays, and analytics in one system. Deployed across 42 GSIS offices and counting.",
  },
  {
    q: "How quickly can a branch go live?",
    a: "A standard pilot runs in seven days from signed scope: site survey on day one, hardware staged and configured by day three, training and dry-run on day five, live counter on day seven.",
  },
  {
    q: "Do we need to replace our ticket printers and displays?",
    a: "No. QMaster is hardware-agnostic. We support standard 80mm thermal printers and any HDMI/web-capable display. We'll certify your existing fleet during the site survey.",
  },
  {
    q: "What happens if the internet drops mid-day?",
    a: "Each branch runs a local node. Tickets keep printing, queues keep moving, and dashboards keep updating on the LAN. Data syncs to head office automatically when the link returns.",
  },
  {
    q: "Can we customize transaction types and priority rules?",
    a: "Yes. Branch managers create unlimited groups, set per-group SLAs, and configure priority handling for SC, PWD, pregnant clients, and any custom flag — without writing code.",
  },
  {
    q: "Is QMaster compliant with Philippine data privacy regulations?",
    a: "Yes. QMaster is built to be Data Privacy Act (RA 10173) compliant, with role-based access, audit trails, and configurable password policies. It has passed VAPT security testing and is built against the OWASP Top 10 reference standard.",
  },
  {
    q: "Does QMaster integrate with our other systems?",
    a: "QMaster ships with native integrations to URateMe (post-service ratings) and HelpDesk (escalations), plus a documented REST API for HRIS, CRM, and core banking systems.",
  },
];

// ---------- Modules Showcase data → shared component ----------
const MODULE_VISUALS = MODULES.map((m) => ({
  icon: m.icon,
  title: m.title,
  body: m.body,
  items: m.items,
  visual: (
    <Placeholder
      label={`${m.title.split(" — ")[0]} screenshot`}
      size="1200x800"
      className="h-full w-full"
    />
  ),
}));

// ---------- Page ----------
function QMasterPage() {
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
              <Eyebrow>QMaster</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                The Queue Management System That Runs the Floor
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                QMaster runs ticketing, routing, displays, and analytics in one
                system — built for branches that serve thousands a day. Deployed
                across 42 GSIS offices and counting.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-brass px-5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:brightness-95"
                >
                  Talk to Our Team <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  <Download className="h-4 w-4" /> Download Brochure
                </Link>
              </div>
            </div>
            <div className="lg:pl-8">
              <img
                src={heroImage}
                alt="QMaster queue management system showing kiosk and teller console"
                loading="eager"
                fetchPriority="high"
                className="w-full h-auto"
              />
            </div>
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
      <section className="border-b border-border bg-background py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Why QMaster"
              title="Why manage your queues, when you can let them manage themselves."
              intro="QMaster's window-and-group model fits one cashier or forty without forking the codebase. Branches see faster handling, calmer counters, and dashboards that compose themselves — by hour, by teller, by branch."
            />
          </div>

          <div className="reveal mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BENEFIT_CARDS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-3xl border border-border bg-card p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cobalt/10 text-cobalt">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* GENERAL FEATURES LIST */}
      <section className="border-b border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="reveal grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <Eyebrow>General Features</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Everything that ships in the box.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                No upsell tiers that hide the features you actually need. One
                platform, every counter.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {GENERAL_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-cobalt" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* MODULES */}
      <section className="border-b border-border bg-background py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Modules</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Every module, working together.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From kiosk to closed transaction — ticketing, routing, displays,
              and analytics in a single system.
            </p>
          </div>
          <ModulesShowcase modules={MODULE_VISUALS} />
        </Container>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-6xl px-5 sm:px-8 text-center">
        <Container>
          <div className="reveal mx-auto max-w-3xl">
            <Eyebrow className="justify-center">FAQ</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Frequently asked questions.
            </h2>
          </div>
          <div className="reveal mx-auto mt-10 max-w-3xl text-left">
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
        eyebrow="See it on your floor"
        title="See QMaster run on your floor."
        body="Walk through the teller console, the kiosk flow, and the supervisor dashboard with our team. Live demo, your branch's numbers."
        ctaLabel="Request a Demo"
        to="/contact"
      />
    </>
  );
}
