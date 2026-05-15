import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import dashGeneral from "@/assets/dashboard/general-employee.jpg";
import dashPayroll from "@/assets/dashboard/payroll.jpg";
import dashTimekeeping from "@/assets/dashboard/timekeeping.jpg";
import dashMedical from "@/assets/dashboard/medical.jpg";
import dashRecruitment from "@/assets/dashboard/recruitment.jpg";
import heroImage from "@/assets/integrahris-government/hero.png";
import logo1 from "@/assets/integrahris-government/logo-1.png";
import logo2 from "@/assets/integrahris-government/logo-2.webp";
import logo3 from "@/assets/integrahris-government/logo-3.png";
import logo4 from "@/assets/integrahris-government/logo-4.png";
import logo5 from "@/assets/integrahris-government/logo-5.png";

const TRUSTED_LOGOS = [
  { src: logo1, alt: "Philippine Ports Authority" },
  { src: logo2, alt: "Bureau of Customs" },
  { src: logo3, alt: "Department of Foreign Affairs" },
  { src: logo4, alt: "Freeport Area of Bataan" },
  { src: logo5, alt: "Philippine Drug Enforcement Agency" },
];
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Wallet,
  LineChart,
  UserCheck,
  FileBarChart,
  GitBranch,
  UserPlus,
  TrendingUp,
  FolderOpen,
  Clock,
  CalendarDays,
  Calculator,
  Target,
  GraduationCap,
  HeartPulse,
  Smartphone,
  LayoutDashboard,
  Wallet2,
  Stethoscope,
  Briefcase,
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

export const Route = createFileRoute("/integrahris-government")({
  head: () => ({
    meta: [
      {
        title: "Government HRIS Software for Philippine Agencies | IntegraHRIS",
      },
      {
        name: "description",
        content:
          "IntegraHRIS Government Edition is a complete HRIS system for Philippine government agencies, covering recruitment, employee records, timekeeping, payroll, leave, performance, training, and self-service.",
      },
      {
        property: "og:title",
        content: "Government HRIS Software for Philippine Agencies | IntegraHRIS",
      },
      {
        property: "og:description",
        content:
          "Complete HRIS for Philippine government agencies — recruitment, records, timekeeping, payroll, leave, performance, training, and ESS in one system.",
      },
      {
        property: "og:url",
        content: "https://newcosmotech.lovable.app/integrahris-government",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://newcosmotech.lovable.app/integrahris-government",
      },
    ],
  }),
  component: IntegraHrisGovernmentPage,
});

const BENEFITS = [
  {
    icon: FolderOpen,
    title: "Complete Employee Record from Day One to Separation",
    body: "Every employee's record — from pre-employment documents and Personal Data Sheet to full career movement, service records, and plantilla history — is stored in one place and accessible when you need it.",
  },
  {
    icon: Wallet,
    title: "Payroll for Thousands, Processed in Minutes",
    body: "Automates statutory deductions for GSIS, HDMF, PhilHealth, and BIR, and handles Year-End Tax Adjustment, RATA, PERA, Loyalty Pay, Longevity Pay, and unlimited custom earnings.",
  },
  {
    icon: LineChart,
    title: "Data Available On Demand",
    body: "Executives get pre-built dashboards with real-time headcount, leave balances, payroll summaries, recruitment pipeline, and medical trend data. No waiting on HR to pull a report.",
  },
  {
    icon: UserCheck,
    title: "Employees Handle Their Own Requests",
    body: "Through Employee Self-Service, staff apply for leave, view payslips, check DTRs, and monitor leave ledgers from any device — significantly cutting walk-in HR requests.",
  },
  {
    icon: FileBarChart,
    title: "Reports Without Programming",
    body: "A built-in report customizer lets HR personnel generate reportorial requirements without a developer. Predefined CSC, DBM, and other government formats included.",
  },
  {
    icon: GitBranch,
    title: "Approval Workflows Built In",
    body: "Leave applications, overtime requests, training nominations, and other employee requests move through a defined approval chain automatically — approvers notified, actions logged.",
  },
];

const MODULES = [
  {
    icon: UserPlus,
    title: "Recruitment",
    body: "Manages the full hiring process for internal and external applicants — from online submission of Personal Data and documents, to examination and interview scheduling with automated email notifications.",
    items: [
      "Status tracking: For Hiring, Interview, Examination, Archive, Future Pool, Blacklisted",
      "Automatic transfer of hired applicants to the Employee Master File",
      "Evaluation, selection, and deliberation workflows captured in-system",
    ],
  },
  {
    icon: TrendingUp,
    title: "Succession Management",
    body: "Identifies and develops employees ready to fill higher positions when vacancies arise from retirement, resignation, death, new post creation, or reassignment.",
    items: [
      "Aligned to CSC Eligibility requirements",
      "Per-position qualification standards",
      "Ready-now and ready-later successor planning",
    ],
  },
  {
    icon: FolderOpen,
    title: "Employee Record Management",
    body: "Stores and maintains complete personal data per CSC requirements — full Personal Data Sheet, scanned 201 documents, career movement history, agency service records, and plantilla history.",
    items: [
      "Family background and dependents",
      "Work and employment history",
      "Searchable single-record view",
    ],
  },
  {
    icon: Clock,
    title: "Time and Attendance",
    body: "Built for Philippine government agencies. Unlimited local and national holidays, flexi-time, core-time, shifting schedules, and attendance-exempt arrangements assigned per employee.",
    items: [
      "Direct biometric device integration",
      "Overtime payable in cash or convertible to Compensatory Overtime Credit",
      "Processed DTRs upload directly to Payroll",
    ],
  },
  {
    icon: CalendarDays,
    title: "Leave Management",
    body: "Handles all government leave types including Sick, Vacation, Paternity, and Maternity Leave.",
    items: [
      "Automatic monthly SL/VL earnings computation",
      "Leave monetization at any point in the year",
      "End-to-end status tracking per application",
    ],
  },
  {
    icon: Calculator,
    title: "Payroll Management",
    body: "Processes payroll for thousands of employees in minutes. Automates all government statutory deductions and handles Year-End Benefit, Cash Gift, Year-End Tax Adjustment, RATA, PERA, Loyalty Pay, and Longevity Pay.",
    items: [
      "Unlimited custom earnings and bonuses with qualification criteria",
      "Loan tracking: GSIS, HDMF, Salary, and Emergency Loans per employee",
      "All required government reports generated in-system",
    ],
  },
  {
    icon: Target,
    title: "Strategic Performance Management System",
    body: "Measures employee, unit, and agency-wide performance based on metrics required by the Civil Service Commission.",
    items: [
      "Individual Performance Commitment and Review (IPCR)",
      "Office Performance Commitment and Review (OPCR)",
      "Performance Management Team approval workflow",
    ],
  },
  {
    icon: GraduationCap,
    title: "Learning and Development",
    body: "Create unlimited training programs tied to competency requirements per position, with automatic generation of required trainings per employee based on competency gaps.",
    items: [
      "Personnel Development Committee facility",
      "Training requests routed through Employee Self-Service",
      "Approval, identification, and monitoring of training requirements",
    ],
  },
  {
    icon: HeartPulse,
    title: "Wellness and Relations",
    body: "Monitors and reports on unlimited employee events and activities — sports, cultural events, social gatherings, and wellness programs.",
    items: [
      "Announcement Widget in Employee Self-Service",
      "Event participation tracking",
      "Wellness program reporting",
    ],
  },
  {
    icon: Smartphone,
    title: "Employee Self-Service",
    body: "Lets employees submit and track requests online from any device, without going through HR physically. Approvers are defined per employee.",
    items: [
      "Leave applications and approvals",
      "Payslip viewing and printing",
      "DTR access and leave ledger monitoring",
      "Available as a mobile application",
    ],
  },
];

const DASHBOARD = [
  {
    id: "general",
    icon: Users,
    title: "General Employee Data",
    image: dashGeneral,
    items: [
      "Organizational unit breakdown",
      "Total headcount",
      "Leave and timekeeping summary",
      "Birthdays for the month",
      "Employee age range distribution",
      "List of retiring employees",
      "Casuals with expiring contracts",
      "Marital status count",
      "Employees per location",
      "Educational attainment breakdown",
      "Expiring temporary reassignments",
    ],
  },
  {
    id: "payroll",
    icon: Wallet2,
    title: "Payroll Data",
    image: dashPayroll,
    items: [
      "Gross pay summary",
      "Total deductions summary",
      "Net pay summary across the agency",
    ],
  },
  {
    id: "timekeeping",
    icon: Clock,
    title: "Timekeeping and Leave Data",
    image: dashTimekeeping,
    items: [
      "Employees without a time-in as of 8:00 AM",
      "Employees with filed leave for the day",
      "Accumulated leave credits across the agency",
    ],
  },
  {
    id: "medical",
    icon: Stethoscope,
    title: "Medical Data",
    image: dashMedical,
    items: [
      "Top 5 medical complaints",
      "Top 5 medical diagnoses",
      "Top 5 diseases reported",
      "Employees with common health issues",
    ],
  },
  {
    id: "recruitment",
    icon: Briefcase,
    title: "Recruitment Data",
    image: dashRecruitment,
    items: [
      "Total number of vacant positions",
      "Applicants by gender",
      "Qualified vs. non-qualified applicant counts",
      "Filled vs. unfilled plantilla positions",
      "Filled vs. unfilled non-plantilla positions",
    ],
  },
];

function IntegraHrisGovernmentPage() {
  useReveal();
  const [activeId, setActiveId] = useState<string>(DASHBOARD[0].id);
  const active = DASHBOARD.find((d) => d.id === activeId) ?? DASHBOARD[0];
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const onScroll = () => {
      const center = window.innerHeight / 2;
      let bestId = DASHBOARD[0].id;
      let bestDist = Infinity;
      for (const d of DASHBOARD) {
        const el = itemRefs.current[d.id];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const dist = Math.abs(itemCenter - center);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = d.id;
        }
      }
      setActiveId((prev) => (prev === bestId ? prev : bestId));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "IntegraHRIS Government Edition",
      description:
        "Complete HRIS system for Philippine government agencies — recruitment, records, timekeeping, payroll, leave, performance, training, and self-service.",
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
            {/* TEXT — LEFT */}
            <div className="reveal order-2 lg:order-1">
              <Eyebrow>IntegraHRIS Government Edition</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Government HRIS Software for Philippine Agencies
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                The complete HR system for Philippine government agencies, built
                for every stage of the employee lifecycle — from recruitment and
                onboarding to payroll, leave, and retirement.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-brass px-5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:brightness-95"
                >
                  Request a Demo <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#modules"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  View System Modules
                </a>
              </div>
            </div>

            {/* IMAGE — RIGHT */}
            {/* REPLACE THIS PLACEHOLDER: drop hero image at src/assets/integrahris-government/hero.jpg
                then swap the <div> below with: <img src={heroImage} alt="..." className="..." /> */}
            <div className="reveal order-1 lg:order-2">
              <img
                src={heroImage}
                alt="IntegraHRIS Government dashboard showing leave entitlement and notifications screens"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* TRUSTED BY */}
      {/* CHALLENGE / INTRO */}
      <section className="border-b border-border bg-foreground py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-background/60">
              Government Edition
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-background sm:text-5xl md:text-6xl">
              One system for the full complexity of government HR
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
              Managing HR in a government agency isn't just about people. It's
              CSC requirements, DBM compliance, GSIS and HDMF remittances, and
              a daily flood of requests from hundreds or thousands of employees.
            </p>
          </div>

          <div className="mt-16 grid gap-px border-t border-background/15 bg-background/15 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Recruitment & Records",
                body: "Full employee lifecycle, plantilla to separation",
              },
              {
                icon: Clock,
                title: "Timekeeping & Payroll",
                body: "Biometric-integrated, audit-ready processing",
              },
              {
                icon: CalendarDays,
                title: "Leave & Performance",
                body: "Appraisal, L&D, and self-service included",
              },
              {
                icon: FileBarChart,
                title: "Gov-Required Reports",
                body: "CSC, DBM, GSIS, and HDMF ready out of the box",
              },
            ].map((f) => (
              <div key={f.title} className="bg-foreground p-8">
                <f.icon className="h-6 w-6 text-background/80" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg font-semibold text-background">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-background/60">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-bone py-14 sm:py-16">
        <Container>
          <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Trusted by Government Offices
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
            {TRUSTED_LOGOS.map((logo) => (
              <div
                key={logo.alt}
                className="flex h-20 items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="max-h-16 max-w-[85%] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* BENEFITS */}
      <section className="border-b border-border py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Why IntegraHRIS"
              title="Why Government HR Teams Choose IntegraHRIS"
              intro="IntegraHRIS helps government HR teams reduce manual work, centralize employee data, automate payroll and timekeeping, and generate reports faster — without relying on scattered spreadsheets."
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

      {/* MODULES */}
      <section id="modules" className="border-b border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="System Modules"
              title="What's Included in IntegraHRIS Government Edition"
              intro="IntegraHRIS Government Edition includes the core HR modules needed to manage the full employee lifecycle inside a Philippine government agency."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {MODULES.map((m, i) => (
                <div
                  key={m.title}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cobalt/10 text-cobalt">
                      <m.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        Module {i + 1}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                        {m.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {m.body}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {m.items.map((item) => (
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

      {/* EXECUTIVE DASHBOARD */}
      <section className="border-b border-border py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Executive Dashboard"
              title="Real-Time HR Data for Agency Leadership"
              intro="Pre-built charts and graphical views keep management informed without waiting on manual reports. Click a category to explore the metrics available."
            />
            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
              {/* LEFT: interactive feature list */}
              <div className="flex flex-col">
                {DASHBOARD.map((d) => {
                  const isActive = d.id === activeId;
                  return (
                    <div
                      key={d.id}
                      ref={(el) => {
                        itemRefs.current[d.id] = el;
                      }}
                      className={`border-l-2 pl-5 transition-colors ${
                        isActive ? "border-cobalt" : "border-border"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveId(d.id)}
                        aria-expanded={isActive}
                        className="flex w-full items-center gap-3 py-4 text-left"
                      >
                        <d.icon
                          className={`h-5 w-5 shrink-0 transition-colors ${
                            isActive ? "text-cobalt" : "text-muted-foreground"
                          }`}
                        />
                        <span
                          className={`text-base font-medium tracking-tight transition-colors sm:text-lg ${
                            isActive ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {d.title}
                        </span>
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isActive
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <ul className="space-y-2 pb-5 pr-4">
                            {d.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* RIGHT: image preview */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-cobalt/15 via-cobalt/5 to-brass/15 p-3 shadow-xl sm:p-4">
                  <div className="overflow-hidden rounded-2xl bg-card">
                    {DASHBOARD.map((d) => (
                      <img
                        key={d.id}
                        src={d.image}
                        alt={`${d.title} dashboard preview`}
                        width={1280}
                        height={896}
                        loading="lazy"
                        className={`h-auto w-full transition-opacity duration-500 ${
                          d.id === active.id
                            ? "block opacity-100"
                            : "hidden opacity-0"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <CtaBand
        eyebrow="Ready when you are"
        title="Modernize HR Operations Across Your Agency"
        body="IntegraHRIS Government Edition gives Philippine government agencies a centralized system for managing employee records, timekeeping, payroll, leave, performance, training, reports, and employee self-service."
        ctaLabel="Request a Demo"
        to="/contact"
      />
    </>
  );
}
