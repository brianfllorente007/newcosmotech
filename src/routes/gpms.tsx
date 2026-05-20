import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  FileCheck2,
  ClipboardList,
  Activity,
  FileText,
  Wallet,
  LayoutDashboard,
  FileBarChart,
  ShieldCheck,
  Bell,
  FolderArchive,
  GitBranch,
  Scale,
  Building2,
  Gavel,
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
import { CtaBand } from "@/components/CtaBand";

export const Route = createFileRoute("/gpms")({
  head: () => ({
    meta: [
      {
        title:
          "Government Procurement Management System (GPMS) Philippines | Cosmotech",
      },
      {
        name: "description",
        content:
          "Cosmotech GPMS is a Philippine government procurement system supporting RA 9184 and RA 12009. Manage PPMP, APP, bidding, contracts, and payments. Request a demo.",
      },
      {
        property: "og:title",
        content:
          "Government Procurement Management System for Philippine Agencies",
      },
      {
        property: "og:description",
        content:
          "Manage procurement plans, bidding, contracts, payments, and reporting in one system. Built to support RA 9184 and RA 12009.",
      },
      {
        property: "og:url",
        content: "https://newcosmotech.lovable.app/gpms",
      },
    ],
    links: [
      { rel: "canonical", href: "https://newcosmotech.lovable.app/gpms" },
    ],
  }),
  component: GpmsPage,
});

const HIGHLIGHTS = [
  { icon: Activity, label: "End-to-end procurement tracking" },
  { icon: FolderArchive, label: "Document archiving per project" },
  { icon: GitBranch, label: "Approval tracking and notifications" },
  { icon: ClipboardList, label: "Procurement activity monitoring" },
  { icon: Wallet, label: "Contract and payment monitoring" },
  { icon: ShieldCheck, label: "Secure access and audit trail" },
];

const MODES = [
  "Public Bidding",
  "Alternative Methods",
  "Small Value Procurement",
  "Shopping",
  "Repeat Order",
  "Limited Source Bidding",
  "Negotiation",
];

const BENEFITS = [
  {
    icon: Database,
    title: "Centralized procurement management",
    body: "Manage procurement data, documents, requests, approvals, contracts, payments, and reports in one system.",
  },
  {
    icon: FileCheck2,
    title: "Faster approval tracking",
    body: "Track purchase requests and procurement approvals anytime, with workflow support for approvals and disapprovals.",
  },
  {
    icon: FolderArchive,
    title: "Document archiving per project",
    body: "Attach and archive scanned documents per project, making them searchable and downloadable anytime.",
  },
  {
    icon: Bell,
    title: "Automated notifications and alerts",
    body: "Send reminders for procurement deadlines, invitations to bid, notices of award, and other procurement-related actions.",
  },
  {
    icon: Scale,
    title: "Procurement compliance support",
    body: "Generate documents and reports aligned with RA 9184 and other procurement monitoring requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Secure access and audit trail",
    body: "Control user access through role-based permissions and maintain an audit trail of system actions.",
  },
];

const MODULES = [
  {
    icon: Database,
    title: "References",
    body: "Maintain reference tables for commonly used procurement data: items and services, groups, vendors, bidders, modes of procurement, types of procurement, and sources of funds.",
  },
  {
    icon: ClipboardList,
    title: "PPMP and APP",
    body: "Record, submit, and approve the Project Procurement Management Plan per department. Consolidate approved PPMPs into the Annual Procurement Plan and generate procurement reports by department, mode of procurement, or type of procurement.",
  },
  {
    icon: FileCheck2,
    title: "Purchase Request",
    body: "Manage the submission and approval of purchase requests per department, with request tracking, approval workflow, disapproval tracking, and email notifications.",
  },
  {
    icon: Activity,
    title: "Procurement Activities Monitoring",
    body: "Generate forms and monitor procurement activities based on the selected mode of procurement, including schedules, timelines, activity updates, bidders, notices, and outcomes.",
  },
  {
    icon: Gavel,
    title: "Contracts and Project Implementation",
    body: "Monitor contract details, project implementation status, and completion progress. Track contract information, suppliers, due dates, contract price, liquidated damages, performance bonds, warranty details, and other contract documents.",
  },
  {
    icon: Wallet,
    title: "Billing and Payments",
    body: "Record payment terms, contract prices, due dates, computed amounts, Statements of Account, vouchers, OR/reference numbers, and total amounts paid per contract.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    body: "View summarized information for planning, monitoring, and decision-making, including completed projects, awarded contracts, expiring contracts, deliverables, PPMPs, purchase requests, and contracts with open balances.",
  },
  {
    icon: FileBarChart,
    title: "Reports and Forms Generation",
    body: "Generate procurement reports, monitoring reports, compliance reports, contract summaries, forms, notices, and other required documents.",
  },
];

const FEATURE_BLOCKS = [
  {
    icon: Activity,
    title: "End-to-end procurement tracking",
    body: "GPMS tracks the full procurement lifecycle, from pre-procurement planning to procurement activities, project implementation, contract monitoring, billing, and completion.",
    items: [
      "Track procurement activities across all stages",
      "Monitor project status in real time",
      "View activity progress through dashboards and reports",
      "Keep procurement documents organized by project",
      "Record timelines and action history for transparency",
    ],
  },
  {
    icon: ClipboardList,
    title: "PPMP and APP management",
    body: "The PPMP and APP module lets departments prepare, submit, and approve procurement plans.",
    items: [
      "Encode procurement projects per department",
      "Track approval of PPMPs",
      "Consolidate approved PPMPs into the Annual Procurement Plan",
      "Generate annual procurement reports",
      "Link approved budget per project and department",
      "Send email notifications during approval workflows",
    ],
  },
  {
    icon: FileCheck2,
    title: "Purchase request management",
    body: "GPMS provides a workflow for managing purchase requests from submission to approval.",
    items: [
      "Submit purchase requests per department",
      "Track pending, approved, and disapproved requests",
      "Receive email notifications for request updates",
      "Approve or disapprove purchase requests anytime",
      "Monitor purchase request progress through dashboards",
    ],
  },
  {
    icon: Gavel,
    title: "Procurement activities monitoring",
    body: "Monitor procurement activities with pre-determined schedules, action periods, and activity timelines based on the mode of procurement.",
    items: [
      "Invitation to Bid",
      "Bid Bulletin",
      "Abstract of Bids",
      "Notice of Award",
      "Notice to Proceed",
      "Post-Qualification",
      "Submission of Additional Documents",
      "Contract preparation and signing",
      "Supplier and bidder monitoring",
    ],
  },
  {
    icon: FileText,
    title: "Contract and project implementation monitoring",
    body: "Track detailed contract information, suppliers, implementation status, and project completion.",
    items: [
      "Contract number, date, and due date",
      "Company or supplier name and contact details",
      "Contract deliverables and project description",
      "Contract price and performance bond details",
      "Contract status and implementation status",
      "Liquidated damages and warranty information",
      "Summary reports for expiring, multi-year, consultancy, infrastructure, and goods contracts",
    ],
  },
  {
    icon: Wallet,
    title: "Billing and payments",
    body: "Record and monitor payment details for contracts and projects.",
    items: [
      "Payment terms and contract price",
      "Payment due date and computed amount due",
      "Statement of Account and printed vouchers",
      "Amount paid per contract and OR/reference number",
      "Total paid amount per contract",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard and business intelligence",
    body: "The GPMS dashboard summarizes procurement information for monitoring and decision-making.",
    items: [
      "Total completed projects for the year, per month",
      "Total awarded contracts and expiring contracts",
      "Deliverables for the period",
      "PPMPs for purchase request and PPMPs with contract",
      "Procurement activity status",
      "Graphical reports and charts",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security and audit trail",
    body: "GPMS includes security controls based on user roles, access rights, and permissions.",
    items: [
      "Role-based access control",
      "User permission management",
      "Audit trail of user actions",
      "Record history showing before-and-after changes",
      "Identification of action makers",
    ],
  },
];

const SPECIAL_FEATURES = [
  "Complete bidding documents based on RA 9184",
  "Centralized document location per project",
  "End-to-end project tracking and monitoring",
  "Business intelligence for quick procurement insights",
  "Graphical monitoring of activity status",
  "Posting capability to PhilGEPS",
  "Workflow for request monitoring and approval",
  "Recorded time duration per request approval stage",
  "Pre-determined procurement activity timelines",
  "Email sending of procurement notices",
  "Graphical representation of project activity status",
  "Optional integration with Budget System, ERP Financial System, and PhilGEPS",
];

const REPORTS = [
  "Procurement Monitoring Report for all projects, items procured, and classified procurement modes",
  "Consolidated Procurement Monitoring Report",
  "Annual Agency Procurement Compliance and Performance Indicator report",
  "Projects with failed bids or cancelled projects, with reasons",
  "Contracts issued to suppliers with no deliveries yet",
  "Delivered items not yet paid",
  "Expiring contracts with time limits set",
  "Total number and amount of alternative methods per mode",
  "Summary of issued purchase orders and job orders per contract",
  "Summary of disbursement vouchers per purchase order or job order",
  "Total number of suppliers invited per canvass",
  "Total number of contracts awarded",
  "Summary of items purchased through RF per account code",
  "List of contracts per category",
  "Infrastructure and consultancy summaries",
  "Summary of multi-year contracts",
  "Summary of one-year contracts",
  "Contracts with partial or complete delivery",
  "Pending transactions",
  "Summary of public bidding",
  "Summary of shopping above ₱50,000 and other shopping",
  "Summary of direct contracting",
  "Summary of repeat orders",
  "Summary of limited source bidding",
  "Summary of negotiation modes",
  "Contracts about to expire",
  "Suppliers with liquidated damages",
  "Contracts with penalties",
  "Performance evaluation summaries",
  "Retention fees deducted",
  "Performance bond refunds",
];

const FORMS = [
  "Invitation to Bid",
  "Bid Bulletin",
  "Abstract of Bids",
  "Notice for Submission of Additional Documents",
  "Notice of Award",
  "Notice of the Bidding Results to Bidders",
  "Notice of Post Disqualification",
  "Notice to Proceed",
  "Canvass Form and Summary of Canvass",
  "Referrals to proponents or end-users for evaluation",
  "BAC Referral Form",
  "Job Order / Letter Order / Purchase Order Form",
  "Certificate of Sealed Canvass for Opening",
  "Certificate of Submitted Quotation",
  "Requisition and Issue Voucher Form",
  "Voucher for Revolving Fund",
  "Disbursement Voucher",
  "Delivery Penalty Computation",
  "Supplier / Contractor / Consultant Performance Evaluation Form",
];

const DOCUMENT_TYPES = [
  "Invitation to Bid",
  "Advertisement in newspaper",
  "Abstract of Bids",
  "Bid Evaluation Report by TWG",
  "Post-Qualification Report by TWG",
  "Letters and communications to and from bidders",
  "Minutes of meetings",
  "Contracts or agreements",
  "Disbursement Voucher",
  "Other supporting documents",
];

const FAQS = [
  {
    q: "Is GPMS compliant with RA 9184 and RA 12009?",
    a: "Yes. GPMS is designed to support the reporting and monitoring requirements of the Philippine Government Procurement Reform Act (RA 9184) and RA 12009. The system can generate bidding documents and procurement reports aligned with these laws.",
  },
  {
    q: "Does GPMS integrate with PhilGEPS?",
    a: "Yes. GPMS includes posting capability to the Philippine Government Electronic Procurement System (PhilGEPS). Optional integration is also available with Budget Systems and ERP Financial Systems.",
  },
  {
    q: "Which modes of procurement does GPMS support?",
    a: "GPMS supports Public Bidding, Alternative Methods, Small Value Procurement, Shopping, Repeat Order, Limited Source Bidding, and Negotiation.",
  },
  {
    q: "Can GPMS generate BAC forms and procurement notices?",
    a: "Yes. The system can generate common procurement forms including the Invitation to Bid, Bid Bulletin, Abstract of Bids, Notice of Award, Notice to Proceed, BAC Referral Form, Canvass Form, Purchase Order, Disbursement Voucher, and supplier performance evaluation forms.",
  },
  {
    q: "What does the GPMS dashboard show?",
    a: "The dashboard provides summarized procurement information for planning and decision-making, including completed projects, awarded contracts, expiring contracts, deliverables, PPMPs for purchase request, PPMPs with contract, and procurement activity status.",
  },
  {
    q: "Is GPMS secure for handling government procurement data?",
    a: "GPMS includes role-based access control, user permission management, and a full audit trail of system actions. Record history shows before-and-after changes and identifies the user who made each action.",
  },
  {
    q: "How does GPMS handle document archiving?",
    a: "Scanned documents can be attached and archived per project, making them searchable and downloadable anytime. Supported uploads include the Invitation to Bid, Abstract of Bids, Bid Evaluation Report, Post-Qualification Report, contracts, disbursement vouchers, and other supporting documents.",
  },
];

function GpmsPage() {
  useReveal();
  const [showAllReports, setShowAllReports] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Cosmotech GPMS — Government Procurement Management System",
      description:
        "Philippine government procurement system supporting RA 9184 and RA 12009. Manage PPMP, APP, bidding, contracts, and payments.",
      brand: { "@type": "Brand", name: "Cosmotech Philippines" },
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
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <Eyebrow>GPMS</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Government Procurement Management System for Philippine Agencies
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Cosmotech GPMS helps government offices manage procurement
                plans, purchase requests, public bidding, contracts, payments,
                and reporting in one system. Built to support RA 9184 and RA
                12009 reporting and monitoring requirements.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-brass px-5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:brightness-95"
                >
                  Request a Demo <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  View System Features
                </a>
              </div>
            </div>

            <div className="reveal">
              <div className="grid grid-cols-2 gap-4">
                {HIGHLIGHTS.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-2xl border border-border bg-card p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cobalt/10 text-cobalt">
                      <h.icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-sm font-medium leading-snug text-foreground">
                      {h.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PROBLEM / NEED */}
      <section className="border-b border-border bg-foreground py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-background/60">
              The need
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-background sm:text-5xl md:text-6xl">
              Procurement should be easier to track, approve, and report
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
              Government procurement involves multiple departments, approvals,
              documents, deadlines, suppliers, and compliance requirements.
              Without a centralized system, tracking these activities becomes
              slow, manual, and hard to audit.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
              GPMS organizes procurement plans, requests, bidding activities,
              contracts, payments, reports, and supporting documents in one
              system.
            </p>
          </div>
        </Container>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-border py-20 sm:py-24">
        <Container>
          <div className="reveal grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Overview" title="What GPMS does" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Cosmotech GPMS supports the full procurement process, from
                pre-procurement planning through project implementation and
                completion. Users can track documents, activities, approvals,
                contracts, and reports without juggling spreadsheets, shared
                drives, or paper files.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                The system is designed to support the detailed reporting and
                monitoring requirements of the Philippine Government
                Procurement Reform Act (RA 9184) and RA 12009.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-bone p-8">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                Modes of procurement supported
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {MODES.map((m) => (
                  <li
                    key={m}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CORE BENEFITS */}
      <section className="border-b border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Core benefits"
              title="Why agencies choose GPMS"
              intro="Six ways GPMS makes procurement work easier for your office."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cobalt/10 text-cobalt">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* MAIN MODULES */}
      <section className="border-b border-border py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Main modules"
              title="Built around the full procurement process"
              intro="GPMS is organized into modules that cover every stage of the procurement process."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {MODULES.map((m) => (
                <div
                  key={m.title}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cobalt/10 text-cobalt">
                      <m.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                      {m.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURE DEEP DIVE */}
      <section id="features" className="border-b border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Feature deep dive"
              title="A closer look at what GPMS can do"
            />
            <div className="mt-12 space-y-6">
              {FEATURE_BLOCKS.map((f, i) => (
                <div
                  key={f.title}
                  className="grid gap-8 rounded-3xl border border-border bg-card p-8 sm:p-10 lg:grid-cols-2 lg:gap-12"
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cobalt/10 text-cobalt">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {f.body}
                    </p>
                  </div>
                  <ul className={`space-y-2 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    {f.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SPECIAL FEATURES */}
      <section className="border-b border-border py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Special features"
              title="Built for Philippine government procurement"
              intro="Capabilities designed around how Philippine agencies actually work."
            />
            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {SPECIAL_FEATURES.map((s) => (
                <div
                  key={s}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* REPORTS AND FORMS */}
      <section className="border-b border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Reports & forms"
              title="Reports and forms you can generate"
              intro="GPMS can generate the procurement reports and forms your office needs for compliance and day-to-day operations."
            />
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Reports */}
              <div className="rounded-3xl border border-border bg-card p-8">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  Reports
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  GPMS can generate procurement and contract reports, including:
                </p>
                <ul className="mt-6 space-y-2">
                  {(showAllReports ? REPORTS : REPORTS.slice(0, 5)).map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => setShowAllReports((v) => !v)}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-cobalt hover:underline"
                >
                  {showAllReports
                    ? "Show fewer reports"
                    : `Show all ${REPORTS.length} reports`}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Forms */}
              <div className="rounded-3xl border border-border bg-card p-8">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  Forms
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  GPMS can generate common procurement forms, including:
                </p>
                <ul className="mt-6 space-y-2">
                  {FORMS.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* DOCUMENT UPLOADS */}
      <section className="border-b border-border py-20 sm:py-24">
        <Container>
          <div className="reveal grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Document uploads"
                title="Attach and archive every procurement document"
              />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                GPMS lets users upload and attach project documents so
                everything stays linked to its project and searchable during
                audits.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-bone p-8">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                Document types supported
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {DOCUMENT_TYPES.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <FolderArchive className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* COMPLIANCE */}
      <section className="border-b border-border bg-foreground py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-background/60">
              Compliance
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-background sm:text-5xl">
              Built for Philippine procurement law
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
              GPMS is designed to align with the requirements of the following:
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              {
                icon: Building2,
                label:
                  "Republic of the Philippines Government Procurement Policy Board",
              },
              {
                icon: Scale,
                label:
                  "Philippine Government Procurement Reform Act (RA 9184)",
              },
              {
                icon: Scale,
                label:
                  "Philippine Government Procurement Reform Act (RA 12009)",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border border-background/15 bg-background/5 p-6 text-center"
              >
                <c.icon
                  className="mx-auto h-6 w-6 text-background/80"
                  strokeWidth={1.5}
                />
                <p className="mt-4 text-sm leading-relaxed text-background/80">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked questions"
              align="center"
            />
            <div className="mx-auto mt-10 max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-base font-medium sm:text-lg">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <CtaBand
        eyebrow="Get started"
        title="Modernize your government procurement workflow"
        body="Cosmotech GPMS helps agencies improve procurement visibility, reduce manual tracking, support compliance, and manage the full procurement lifecycle in one system."
        ctaLabel="Schedule a Demo"
        to="/contact"
      />
    </>
  );
}
