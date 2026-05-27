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
  Workflow,
  LayoutDashboard,
  QrCode,
  Bell,
  FileText,
  Settings,
  Clock,
  BarChart3,
  Download,
} from "lucide-react";
import { Container } from "@/components/Container";
import docutrakrHero from "@/assets/docutrakr-hero.png";
import docutrakrWorkflow from "@/assets/docutrakr-workflow.png";
import docutrakrAudit from "@/assets/docutrakr-audit.png";
import modReceiving from "@/assets/docutrakr/modules/document-receiving.png";
import modWorkflow from "@/assets/docutrakr/modules/workflow-management.png";
import modNotifications from "@/assets/docutrakr/modules/notifications.png";
import modDashboard from "@/assets/docutrakr/modules/dashboard.png";
import modSecurity from "@/assets/docutrakr/modules/security.png";
import modReference from "@/assets/docutrakr/modules/reference-tables.png";
import modReports from "@/assets/docutrakr/modules/reports.png";
import modFiling from "@/assets/docutrakr/modules/filing-archival.png";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import docutrakrLogo from "@/assets/logos/products/docutrakr-dark.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/docutrakr")({
  head: () => ({
    meta: [
      {
        title: "Docutrakr — QR Code Document Tracking & Workflow Software | Cosmotech",
      },
      {
        name: "description",
        content:
          "Docutrakr tracks every document from receipt to filing with QR codes, automated workflows, and real-time status monitoring. RA 10173 compliant.",
      },
      {
        property: "og:title",
        content: "Docutrakr — QR Code Document Tracking & Workflow Software",
      },
      {
        property: "og:description",
        content:
          "Know where every document is — and how long each step is taking — in real time. Cloud or on-premise. RA 10173 compliant.",
      },
    ],
  }),
  component: DocutrakrPage,
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
    icon: QrCode,
    title: "Unique QR per document",
    body: "Every document gets a unique QR code or document code at the point of receipt — date and time stamped, processor recorded.",
  },
  {
    icon: Workflow,
    title: "Auto-assigned workflows",
    body: "The right workflow is assigned based on document type — with pre-defined processors and expected turnaround time per step.",
  },
  {
    icon: Clock,
    title: "Measurable turnaround",
    body: "Actual time spent at every step is recorded and compared against expected turnaround — bottlenecks surface immediately.",
  },
];

const BENEFIT_CARDS = [
  {
    icon: ShieldCheck,
    title: "No lost documents",
    body: "Every document has a code. Anyone can scan or search to see exactly who's holding it and where it is in the workflow.",
  },
  {
    icon: Zap,
    title: "Automated routing",
    body: "Workflows route documents through the right processors automatically — no manual handoffs, no dropped queues.",
  },
  {
    icon: TrendingUp,
    title: "Performance visibility",
    body: "Measure processing time per processor, per department, and per document type. Reward speed; identify delays.",
  },
  {
    icon: Sparkles,
    title: "Full audit trail",
    body: "Every action by every user is logged, retrievable, and printable — for internal governance and external audit.",
  },
  {
    icon: ShieldCheck,
    title: "RA 10173 compliant",
    body: "Built for Data Privacy Act compliance — role-based access, two-factor authentication, configurable password policy.",
  },
  {
    icon: Workflow,
    title: "Cloud or on-premise",
    body: "Deploy as cloud-hosted SaaS or on-premise — same features, same security, your choice of infrastructure.",
  },
];

const GENERAL_FEATURES = [
  "Unique QR code or document code assigned at receipt, with workflow checklist printed",
  "Real-time receipt date and time stamping, with processor recorded",
  "Auto-assigned workflows per document type, with processors and turnaround time per step",
  "Attachment tracking alongside parent documents",
  "Email and in-app notifications for requestors and processors at every status change",
  "Filing location logged with multiple definable tiers (building, floor, cabinet, folder)",
  "Actual vs expected turnaround time computed at every step",
  "Auto-generated workflow diagram for every submitted document",
  "Data Privacy Act (RA 10173) compliant with two-factor authentication and full audit trail",
];

const MODULES = [
  {
    icon: QrCode,
    image: modReceiving,
    title: "Document Receiving and Processing",
    body: "​Hello world new copy for you.",
    items: [
      "QR code / document code generation at receipt",
      "Printable workflow checklist per document",
      "Attach related documents to a parent record",
    ],
  },
  {
    icon: Workflow,
    image: modWorkflow,
    title: "Workflow Management — Configurable Per Document Type",
    body: "Configure the workflow for each document type with a defined sequence of steps, processor assignments, and turnaround time per step. Sequences are flexible and re-orderable. The system computes time spent per processor and per department, and generates a workflow diagram for every document.",
    items: [
      "Per-step processors and turnaround times",
      "Re-orderable workflow sequences",
      "Auto-generated workflow diagrams",
    ],
  },
  {
    icon: Bell,
    image: modNotifications,
    title: "Notifications — Email and In-App",
    body: "Email and in-app notifications fire automatically. Requestors are notified each time the document is received by a new processor, with the current status. Processors are notified when a document arrives in their queue.",
    items: [
      "Requestor notifications on every status change",
      "Processor notifications on new arrivals",
      "Configurable templates per event",
    ],
  },
  {
    icon: LayoutDashboard,
    image: modDashboard,
    title: "Dashboard and Analytics — Real-Time",
    body: "A customizable dashboard displays real-time summaries of document volume, status, and processing performance in charts and graphs. Built-in analytics surface insights for management decision-making — which departments are processing fastest, which documents are overdue, where bottlenecks are forming.",
    items: [
      "Real-time document volume and status",
      "Processing performance in charts and graphs",
      "Bottleneck and overdue document surfacing",
    ],
  },
  {
    icon: ShieldCheck,
    image: modSecurity,
    title: "System Security — 2FA, Audit Trail, and Policy",
    body: "Two-factor authentication using password and CAPTCHA. Configurable password policy. Full audit trail of every user action, retrievable and printable for internal governance and external audit.",
    items: [
      "Two-factor authentication (password + CAPTCHA)",
      "Configurable password policy",
      "Retrievable, printable audit trail",
    ],
  },
  {
    icon: Settings,
    image: modReference,
    title: "Configurable Reference Tables",
    body: "Adapt the system to any organization's structure — organizational units with multiple levels, employees by assignment, locations with multiple tiers, document statuses per phase, and processes with definable turnaround time per step.",
    items: [
      "Multi-level organizational units",
      "Multi-tier storage locations",
      "Per-phase document statuses and TATs",
    ],
  },
  {
    icon: BarChart3,
    image: modReports,
    title: "Report Management — Excel, CSV, PDF",
    body: "Generate document tracking reports in Excel, CSV, or PDF: received documents for the day or period, per organizational unit, processed-on-schedule lists, top-performing departments and employees, customizable reports, and a printable audit trail report.",
    items: [
      "Received and processed documents by day, period, or org unit",
      "On-schedule vs delayed reporting",
      "Top-performing departments and employees of the month",
    ],
  },
  {
    icon: FileText,
    image: modFiling,
    title: "Filing and Archival",
    body: "Log the filing location of every document and its attachments — with multiple definable tiers like building, floor, cabinet, and folder. Find any archived document by scanning its code or searching.",
    items: [
      "Multi-tier filing location capture",
      "Attachment filing tracked with parent",
      "Searchable archive by QR or document code",
    ],
  },
];

const FAQS = [
  {
    q: "What is Docutrakr?",
    a: "DocuTrakr is a document tracking and workflow management system that enables organizations to monitor, manage, and retrieve documents in real time through a centralized digital platform.",
  },
  {
    q: "How does Docutrakr improve document tracking?",
    a: "DocuTrakr improves document tracking by enabling real-time monitoring of document status and location using unique QR or document codes, helping organizations reduce lost or misplaced files.",
  },
  {
    q: "Can Docutrakr automate document workflows?",
    a: "Yes. Docutrakr includes workflow automation features that streamline document routing, approvals, endorsements, and processing to improve operational efficiency and turnaround times.",
  },
  {
    q: "Does Docutrakr support document retrieval and inquiry handling?",
    a: "Yes. Docutrakr allows users to quickly locate and retrieve documents, helping organizations respond faster to inquiries and improve overall service efficiency.",
  },
  {
    q: "How does Docutrakr help monitor employee efficiency?",
    a: "Docutrakr includes a Workflow Management module with Turnaround Time (TAT) tracking that helps organizations monitor processing efficiency and identify workflow bottlenecks.",
  },
  {
    q: "Does Docutrakr provide dashboards and analytics?",
    a: "Yes. Docutrakr includes dashboards and reporting tools that provide summarized views of document activities, workflow status, and operational insights to support monitoring and decision-making.",
  },
  {
    q: "Does Docutrakr send notifications and document updates?",
    a: "Yes. Docutrakr supports email and in-app notifications to keep users informed of document movements, status changes, approvals, and workflow updates in real time.",
  },
  {
    q: "Can Docutrakr be customized based on organizational requirements?",
    a: "Yes. Docutrakr supports configurable references that allow organizations to customize units, employee roles, document classifications, locations, and workflow processes according to operational requirements.",
  },
  {
    q: "What industries can use Docutrakr?",
    a: "Docutrakr is suitable for government agencies, enterprises, educational institutions, healthcare organizations, and businesses that require secure, efficient, and traceable document management and workflow processes.",
  },
];

// ---------- Modules Showcase data → shared component ----------
const MODULE_VISUALS = MODULES.map((m) => ({
  icon: m.icon,
  title: m.title,
  body: m.body,
  items: m.items,
  preloadSrc: m.image,
  visual: (
    <img
      src={m.image}
      alt={`${m.title} — Docutrakr UI screenshot`}
      className="h-full w-full object-contain object-top"
      decoding="sync"
    />
  ),
}));

// ---------- Page ----------
function DocutrakrPage() {
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
      <section className="flex flex-col overflow-hidden border-b border-border bg-bone pt-20 sm:pt-28">
        <Container>
          <div className="reveal mx-auto flex max-w-3xl flex-col items-center text-center">
            <img src={docutrakrLogo} alt="Docutrakr" className="h-10 w-auto sm:h-12" />
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Document Tracking with QR Code Workflow Automation
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Assign a unique QR code to every document upon receipt, then
              monitor its location, processor, and status through a
              configurable workflow until it's filed. Know where every
              document is — and how long each step is taking — in real time.
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
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground hover:bg-muted"
              >
                <Download className="h-4 w-4" /> Download Brochure
              </Link>
            </div>
          </div>
        </Container>
        <div className="mt-16 flex justify-center px-5 sm:px-8">
          <img
            src={docutrakrHero}
            alt="Docutrakr dashboard with QR code document tracking"
            className="block h-auto w-full max-w-6xl"
          />
        </div>
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
                Why teams switch from logbooks and shared drives
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Manual document logs lose track of who's holding what. Shared
                drives store files but don't tell you whether a request has
                been processed, who's sitting on it, or how long it's been
                there.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Docutrakr fills that gap. Every document gets a code at receipt
                and rides a pre-defined workflow through the right processors
                automatically — with timestamps, notifications, and a full
                audit trail.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Cloud-hosted SaaS or on-premise deployment",
                  "Configurable workflows per document type",
                  "RA 10173 compliant with 2FA and full audit trail",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cobalt" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={docutrakrWorkflow}
              alt="Docutrakr dashboard shown on a laptop atop stacked document logbooks"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]"
              loading="lazy"
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
              title="What changes when documents run on Docutrakr"
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
                Built for accountability over document movement
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Government agencies, HR departments, accounting teams, legal
                offices — any unit that needs to know who has what document,
                where it is, and how long it's been there. Configurable
                workflows, automated routing, and a complete audit trail in
                one system.
              </p>
              <div className="mt-8">
                <img
                  src={docutrakrAudit}
                  alt="Audit trail and report screenshot"
                  className="aspect-[5/3] w-full rounded-2xl object-cover shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]"
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
            <div className="reveal">
              <SectionHeading
                eyebrow="What's inside"
                title="Modules and Capabilities"
                intro="Docutrakr ships with everything you need — QR-coded receiving, configurable workflows, notifications, dashboards, security, and report management."
              />
            </div>
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
              Solve Your Document Tracking Problems Today
            </h2>
            <p className="mt-4 text-base text-bone/80 sm:text-lg">
              Walk through QR receiving, configurable workflows, dashboards,
              and the audit trail with our team — live demo, your scenarios.
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
