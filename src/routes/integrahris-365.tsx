import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Lock,
  RefreshCw,
  Users,
  Database,
  FolderOpen,
  Download,
  Wand2,
  Clock,
  Calculator,
} from "lucide-react";
import { Container } from "@/components/Container";
import hris365Hero from "@/assets/hris365-hero.png";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/integrahris-365")({
  head: () => ({
    meta: [
      {
        title:
          "IntegraHRIS 365 — Downloadable HRIS & Payroll Software Philippines | Cosmotech",
      },
      {
        name: "description",
        content:
          "Install IntegraHRIS 365 on your own computer or server. Downloadable HRIS with SSS, PhilHealth, Pag-IBIG, and BIR compliance built in. Annual plans from ₱26,880.",
      },
      {
        property: "og:title",
        content:
          "IntegraHRIS 365 — Downloadable HRIS & Payroll Software Philippines",
      },
      {
        property: "og:description",
        content:
          "Downloadable HRIS for the Philippines. SSS, PhilHealth, Pag-IBIG, and BIR compliance built in. Plans from ₱26,880/year.",
      },
    ],
  }),
  component: IntegraHris365Page,
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
const TRUST_LOGOS = Array.from({ length: 10 }, (_, i) => `Client ${i + 1}`);

const FEATURE_CARDS = [
  {
    icon: ShieldCheck,
    title: "Built for Philippine compliance",
    body: "SSS, PhilHealth, Pag-IBIG, and BIR computations applied automatically every payroll run.",
  },
  {
    icon: Lock,
    title: "You own your data",
    body: "Installs on your own server. Encrypted at rest, with role-based access you control.",
  },
  {
    icon: RefreshCw,
    title: "Transferable licensing",
    body: "Move your license to a new computer or server at no cost. No re-purchase, no migration fee.",
  },
];

const WHY_CARDS = [
  {
    icon: ShieldCheck,
    title: "Built for Philippine compliance",
    body: "Payroll auto-applies SSS, PhilHealth, Pag-IBIG, and withholding tax. Free updates whenever the government changes tables.",
  },
  {
    icon: Lock,
    title: "You own your data",
    body: "Records, payslips, and 201 files never leave your office. Encrypted storage with role-based access.",
  },
  {
    icon: RefreshCw,
    title: "Transferable licensing",
    body: "Change computers or servers and your license moves with you — no re-purchase, no migration fee.",
  },
  {
    icon: Users,
    title: "Scales from 19 to 4,000 employees",
    body: "Nine subscription tiers. Upgrade when you outgrow a tier without reinstalling.",
  },
  {
    icon: Database,
    title: "Fast data migration",
    body: "Bring in employees, leave balances, and payroll history from spreadsheets or your current HRIS.",
  },
  {
    icon: FolderOpen,
    title: "Comprehensive 201 file",
    body: "Personal info, employment history, signed contracts, certificates, and any HR document — all attached per employee.",
  },
];

const SETUP_STEPS = [
  {
    icon: Database,
    title: "Data Migration Wizard",
    body: "Import employees and historical data from spreadsheets or another HRIS.",
  },
  {
    icon: Wand2,
    title: "Setup Wizard",
    body: "Configure company details, pay periods, and deduction rules.",
  },
  {
    icon: Clock,
    title: "DTR Wizard",
    body: "Import time logs and generate attendance summaries.",
  },
  {
    icon: Calculator,
    title: "Payroll Processing Wizard",
    body: "Run payroll, compute deductions, and generate payslips.",
  },
];

const MODULES = [
  {
    title: "HR Dashboard — Real-Time Headcount, Payroll, and Attendance",
    body: "The dashboard is the first screen you see when you log in. It pulls live data from every module so executives, HR managers, and payroll officers each see what matters to their role.",
    items: [
      "Quick notes and reminders",
      "Birthday celebrants for the month",
      "Employees currently on leave",
      "Headcount by confidentiality level",
      "Headcount by employment status",
      "Organizational unit drill-down",
      "Monthly net pay summary",
      "Absenteeism and tardiness bar graph",
      "Salary adjustment tracker",
      "Bonus and 13th month tracker",
    ],
  },
  {
    title: "Employee Record — Digital 201 File with Document Attachments",
    body: "Store, update, and retrieve everything about each employee. Personal information, employment details, salary history, and scanned documents all live in one record.",
    items: [
      "Full personal, contact, and dependent details",
      "Employment history with position and salary changes",
      "Document attachments (PDF, JPG, PNG) with no file count limit",
      "Automatic age and tenure calculations",
      "Export any record to PDF for filing or audit",
    ],
  },
  {
    title: "Leave Management — Automatic Balance Tracking and VL Cash Conversion",
    body: "Define your company's leave types, set the accrual rules, and let IntegraHRIS 365 track the rest.",
    items: [
      "Configurable leave types with per-employee or per-group accrual",
      "Application and approval workflow with audit trail",
      "Automatic balance updates after each approval",
      "VL cash conversion with automatic computation",
      "Leave history reports per employee, department, or date range",
    ],
  },
  {
    title: "Timekeeping — DTR Processing with Biometric Integration",
    body: "Turn raw time logs into processed daily time records in one click. Direct Virdi integration plus CSV/TXT imports for other brands.",
    items: [
      "Direct Virdi biometric integration (automatic log capture)",
      "CSV and TXT log imports for other biometric brands",
      "Automatic tardiness, undertime, and overtime identification",
      "Holiday and leave reconciliation during DTR processing",
      "Batch DTR generation for the entire company in one operation",
    ],
  },
  {
    title: "Payroll Management — Automated Philippine Payroll",
    body: "Compute gross pay, apply all Philippine statutory deductions, and generate payslips in one process. Pulls directly from timekeeping and leave.",
    items: [
      "Automatic SSS, PhilHealth, Pag-IBIG, and BIR computation",
      "Free updates when contribution tables or tax brackets change",
      "13th month and year-end tax adjustment in a single run",
      "Bonuses, allowances, and custom earnings per employee or group",
      "Payslip generation (print, PDF, email) with your template",
      "Bank file export for BDO, BPI, Metrobank, and other banks",
    ],
  },
  {
    title: "Reports — Over 100 Ready-Made HR and Payroll Reports",
    body: "Pre-built reports covering payroll, timekeeping, leave, employee records, and government compliance. Every report exports to Excel or PDF.",
    items: [
      "Payroll register and payroll summary",
      "SSS R-3, PhilHealth RF-1, Pag-IBIG M1-1 contribution reports",
      "BIR Alphalist and 2316 forms",
      "Attendance and DTR summaries",
      "Leave balance and history per employee",
      "Certificate of Employment and Certificate of Compensation templates",
    ],
  },
  {
    title: "Loan Management — Scheduled Deductions with Auto-Stop",
    body: "Track SSS salary loans, Pag-IBIG MPL, company loans, and cash advances with flexible deduction schedules.",
    items: [
      "Configurable deduction schedules per loan",
      "Automatic deduction during payroll runs",
      "Auto-stop when balance reaches zero (no overpayment risk)",
      "Temporary suspension by tagging a loan inactive",
      "Loan balance and payment history per employee",
    ],
  },
  {
    title: "Security — Role-Based Access, Backup, and Encryption",
    body: "Built to help you meet Philippine Data Privacy Act (RA 10173) requirements.",
    items: [
      "Role-based user access — control view, edit, and export per role",
      "Configurable password policies (length, complexity, expiration)",
      "Encrypted data storage",
      "One-click database backup",
      "Database restore from any backup file",
      "Full audit log of user activity",
    ],
  },
];

const PRICING = [
  { plan: "Micro", range: "Up to 19 employees", price: "₱26,880", proc: "1" },
  { plan: "Small", range: "20 to 49 employees", price: "₱47,040", proc: "1" },
  { plan: "Small+", range: "50 to 99 employees", price: "₱67,200", proc: "2", popular: true },
  { plan: "Medium", range: "100 to 199 employees", price: "₱100,800", proc: "2" },
  { plan: "Large", range: "200 to 499 employees", price: "₱161,280", proc: "2" },
  { plan: "Enterprise", range: "500 to 999 employees", price: "₱336,000", proc: "2" },
  { plan: "Enterprise+", range: "1,000 to 1,999 employees", price: "₱470,400", proc: "3" },
  { plan: "Enterprise++", range: "2,000 to 2,999 employees", price: "₱604,800", proc: "4" },
  { plan: "Enterprise Max", range: "Up to 4,000 employees", price: "₱739,200", proc: "5" },
];

const FAQS = [
  {
    q: "What is IntegraHRIS 365?",
    a: "IntegraHRIS 365 is a downloadable HRIS and payroll software for Philippine businesses. You install it on your own computer or server, pay a yearly subscription, and use it to manage employee records, timekeeping, payroll, leave, and reports — all with built-in SSS, PhilHealth, Pag-IBIG, and BIR compliance.",
  },
  {
    q: "Is IntegraHRIS 365 cloud-based or on-premise?",
    a: "IntegraHRIS 365 is on-premise — you install it on your own hardware. This is different from our cloud edition, Integra HRIS Payroll Master Cloud, which runs on our servers. On-premise means your employee data stays in your office and you don't need a continuous internet connection to run payroll.",
  },
  {
    q: "Is IntegraHRIS 365 BIR, SSS, PhilHealth, and Pag-IBIG compliant?",
    a: "Yes. IntegraHRIS 365 automatically computes all four Philippine statutory deductions during payroll runs. When the government updates contribution tables or tax brackets, we release a free update you download and apply.",
  },
  {
    q: "How many employees can IntegraHRIS 365 handle?",
    a: "IntegraHRIS 365 has nine subscription tiers ranging from 19 employees (Micro plan) to 4,000 employees (Enterprise Max). For organizations above 4,000 employees, we offer custom enterprise pricing — contact our sales team.",
  },
  {
    q: "How much does IntegraHRIS 365 cost?",
    a: "IntegraHRIS 365 starts at ₱26,880 per year for up to 19 employees. Pricing scales with headcount across nine tiers up to ₱739,200 per year for up to 4,000 employees. All tiers include the core HRIS, payroll, timekeeping, leave, loans, reports, and security modules.",
  },
  {
    q: "Is there a discount for multi-year subscriptions?",
    a: "Yes. A 5-year subscription saves you 50% off total fees compared to paying year by year, and includes the Employee Self-Service (ESS) module free of charge.",
  },
  {
    q: "How long is the minimum contract?",
    a: "The minimum subscription term is 1 year. Most customers renew annually, though 5-year subscriptions offer the best value.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept BDO bank deposit, bank transfer, and corporate check payments. Contact our sales team for invoice processing, purchase orders, and enterprise billing arrangements.",
  },
  {
    q: "How do I install IntegraHRIS 365?",
    a: "After you subscribe, we email a download link and license key. Run the installer on your computer or server, enter the license key, and follow the built-in setup wizard. Most teams process their first payroll within 5 business days of installing.",
  },
  {
    q: "Does IntegraHRIS 365 integrate with biometric devices?",
    a: "Yes. IntegraHRIS 365 integrates directly with Virdi biometric devices and imports time logs automatically, eliminating manual DTR encoding. Other biometric brands are supported through CSV or TXT file imports.",
  },
  {
    q: "Can I transfer my license to a different computer?",
    a: "Yes. Your IntegraHRIS 365 license is transferable at no cost. If you change computers, upgrade servers, or move offices, contact support and we'll reassign the license.",
  },
  {
    q: "Where can I access IntegraHRIS 365?",
    a: "The main IntegraHRIS 365 application runs on the computer or server where you installed it. The optional Employee Self-Service (ESS) module — included free with 5-year subscriptions — can be accessed by employees from any desktop, laptop, tablet, or mobile browser.",
  },
  {
    q: "What's the difference between IntegraHRIS 365 and IntegraHRIS Government?",
    a: "IntegraHRIS 365 is our commercial edition for private companies. IntegraHRIS Government is tailored for Philippine government agencies with GSIS contribution tracking, plantilla management, and Civil Service Commission reporting. Both are built on the same core platform.",
  },
];

// ---------- Page ----------
function IntegraHris365Page() {
  useReveal();

  // Inject FAQPage JSON-LD
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
              <Eyebrow>IntegraHRIS 365</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                The Downloadable HRIS and Payroll Software for the Philippines
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Install it on your own computer or server. Run payroll, timekeeping,
                and 201 files without a monthly cloud bill. Built for SSS, PhilHealth,
                Pag-IBIG, and BIR compliance from day one.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#pricing"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-brass px-5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:brightness-95"
                >
                  See Pricing <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  <Download className="h-4 w-4" /> Download Brochure
                </Link>
              </div>
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-border bg-muted text-[9px] font-semibold text-muted-foreground">
                  ISO
                </div>
                <span className="text-xs text-muted-foreground">
                  [PLACEHOLDER: ISO certification badge — 64x64]
                </span>
              </div>
            </div>
            <div className="lg:pl-8">
              <img
                src={hris365Hero}
                alt="IntegraHRIS 365 dashboard with setup wizard shown on a MacBook Pro"
                width={1600}
                height={1000}
                loading="eager"
                fetchPriority="high"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              align="center"
              eyebrow="Trusted nationwide"
              title="Trusted by Over 28 Philippine Organizations"
              intro="IntegraHRIS powers HR and payroll operations for leading Philippine institutions, including the Philippine Ports Authority, the Department of Foreign Affairs, Bangko Sentral ng Pilipinas, and the Bureau of Internal Revenue."
            />
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {TRUST_LOGOS.map((name) => (
                <div
                  key={name}
                  className="flex aspect-[3/2] items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/60 text-xs font-medium text-muted-foreground"
                >
                  [Logo: {name}]
                </div>
              ))}
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
      <section className="py-20 sm:py-24">
        <Container>
          <div className="reveal grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <Eyebrow>About the product</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                What is IntegraHRIS 365?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                IntegraHRIS 365 is a downloadable HRIS and payroll system for Philippine
                businesses. It's the on-premise version of our cloud HRIS platform — install
                it on your own computer or server, keep your employee data in-house, and pay
                a yearly subscription instead of a per-employee monthly fee.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                It handles the three things Philippine HR teams need every payroll cycle:
                timekeeping, payroll with SSS/PhilHealth/Pag-IBIG/BIR deductions, and a full
                digital 201 file for each employee. Setup runs through a built-in wizard, so
                most teams are processing their first payroll within the week.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Downloadable installer — no hosting or IT partner required",
                  "One-year or five-year subscription licensing (transferable at no cost)",
                  "Free updates whenever government tables or tax brackets change",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cobalt" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Placeholder
              label="201 file / dashboard mock"
              size="1200x900"
              className="aspect-[4/3]"
            />
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-cobalt/5 py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Why teams choose us"
              title="Why Philippine HR Teams Choose IntegraHRIS 365"
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_CARDS.map(({ icon: Icon, title, body }) => (
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

      {/* SETUP */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="reveal grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Eyebrow>Setup</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Setup Without the Hassle
              </h2>
              <h3 className="mt-6 text-lg font-semibold">Install in Minutes, Not Weeks</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                After you subscribe, we email a download link. Run the installer, enter your
                license key, and the system is live. No delivery delays, no consultant
                day-rate, no scheduling a technician.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The first time you set up a payroll period, import employee data, or process
                DTR, a built-in wizard walks you through the steps. Most teams process their
                first full payroll within 5 business days.
              </p>
              <div className="mt-8">
                <Placeholder
                  label="Setup wizard screenshot"
                  size="1000x600"
                  className="aspect-[5/3]"
                />
              </div>
            </div>
            <div className="space-y-4">
              {SETUP_STEPS.map((step, idx) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-7"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cobalt text-lg font-semibold text-cobalt-foreground">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <step.icon className="h-4 w-4 text-cobalt" />
                        <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* MODULES */}
      <section className="bg-cobalt/5 py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="What's inside"
              title="Features and Modules"
              intro="IntegraHRIS 365 ships with every module included — no upgrade paths, no feature gates. Here's what's in the box."
            />
            <div className="mt-12">
              <Accordion
                type="single"
                collapsible
                defaultValue="module-0"
                className="space-y-4"
              >
                {MODULES.map((m, i) => (
                  <AccordionItem
                    key={m.title}
                    value={`module-${i}`}
                    className="overflow-hidden rounded-3xl border border-border bg-card !border-b"
                  >
                    <AccordionTrigger className="px-6 py-5 text-left text-base font-semibold hover:no-underline sm:text-lg">
                      {m.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
                        <div>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {m.body}
                          </p>
                          <ul className="mt-5 space-y-2.5">
                            {m.items.map((it) => (
                              <li key={it} className="flex items-start gap-3 text-sm">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Placeholder
                          label={`${m.title.split(" — ")[0]} screenshot`}
                          size="1200x800"
                          className="aspect-[3/2]"
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              align="center"
              eyebrow="Pricing"
              title="IntegraHRIS 365 Pricing — Annual Subscriptions from ₱26,880"
              intro={
                <>
                  All plans include the core HRIS, payroll, timekeeping, leave, loans,
                  reports, and security modules — no feature gating.{" "}
                  <strong className="text-foreground">
                    Subscribe for 5 years and save 50% on total fees, plus get the Employee
                    Self-Service (ESS) module free.
                  </strong>
                </>
              }
            />

            {/* Desktop table */}
            <div className="mt-12 hidden overflow-hidden rounded-3xl border border-border bg-card md:block">
              <table className="w-full text-sm">
                <thead className="bg-muted/60 text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Plan</th>
                    <th className="px-6 py-4 font-semibold">Employee Range</th>
                    <th className="px-6 py-4 font-semibold">Annual Price</th>
                    <th className="px-6 py-4 font-semibold">Concurrent Processors</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING.map((row) => (
                    <tr
                      key={row.plan}
                      className={cn(
                        "border-t border-border",
                        row.popular && "bg-cobalt/5",
                      )}
                    >
                      <td className="px-6 py-4 font-semibold">
                        <div className="flex items-center gap-3">
                          {row.plan}
                          {row.popular && (
                            <span className="rounded-full bg-brass px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink">
                              Most Popular for SMEs
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{row.range}</td>
                      <td className="px-6 py-4 font-semibold">{row.price}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.proc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="mt-12 grid gap-4 md:hidden">
              {PRICING.map((row) => (
                <div
                  key={row.plan}
                  className={cn(
                    "rounded-2xl border border-border bg-card p-5",
                    row.popular && "border-cobalt bg-cobalt/5",
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-semibold">{row.plan}</h3>
                    {row.popular && (
                      <span className="rounded-full bg-brass px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-ink">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{row.range}</p>
                  <div className="mt-3 flex items-baseline justify-between">
                    <span className="text-xl font-semibold">{row.price}</span>
                    <span className="text-xs text-muted-foreground">
                      {row.proc} processor{row.proc !== "1" ? "s" : ""}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-2xl space-y-3 text-center text-sm text-muted-foreground">
              <p>
                All prices are annual subscriptions in Philippine pesos. Minimum
                subscription term is 1 year.
              </p>
              <p>
                <strong className="text-foreground">Need more than 4,000 employees?</strong>{" "}
                <Link to="/contact" className="text-cobalt underline-offset-4 hover:underline">
                  Contact us
                </Link>{" "}
                for custom enterprise pricing.
              </p>
              <p>
                <strong className="text-foreground">Government agency?</strong> See our{" "}
                <Link
                  to="/solutions/$slug"
                  params={{ slug: "integrahris-government" }}
                  className="text-cobalt underline-offset-4 hover:underline"
                >
                  IntegraHRIS Government
                </Link>{" "}
                edition.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-brass px-5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:brightness-95"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground hover:bg-muted"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-cobalt/5 py-20 sm:py-24">
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
              Ready to See IntegraHRIS 365 in Action?
            </h2>
            <p className="mt-4 text-base text-bone/80 sm:text-lg">
              Download the brochure for a full feature list and specs, or talk to our team
              about the right plan for your headcount.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-brass px-5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:brightness-95"
              >
                <Download className="h-4 w-4" /> Download Brochure
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-bone/30 bg-transparent px-5 text-sm font-medium text-bone hover:bg-bone/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
