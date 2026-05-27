import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  Scale,
  Building2,
  Package,
  Car,
  Printer,
  QrCode,
  RefreshCw,
  Eye,
  TrendingUp,
  CircleDollarSign,
} from "lucide-react";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";
import integraHero from "@/assets/integra/hero-issuance.png";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";
import { CtaBand } from "@/components/CtaBand";
import featAcquisition from "@/assets/integra/acquisition-recording.png";
import featIssuance from "@/assets/integra/issuance-of-asset.png";
import featReturnDisposal from "@/assets/integra/return-disposal.png";
import featTransfer from "@/assets/integra/transfer-of-property.png";
import featInventory from "@/assets/integra/asset-inventory-reporting.png";
import featInsurance from "@/assets/integra/insurance-reports.png";
import featSystemAdmin from "@/assets/integra/system-admin.png";

export const Route = createFileRoute("/integra")({
  head: () => ({
    meta: [
      {
        title:
          "Integra Asset Management System for Philippine Government Agencies | Cosmotech",
      },
      {
        name: "description",
        content:
          "Cosmotech Integra is a web-based asset management system for Philippine government agencies. Manage the full asset lifecycle, aligned with COA and GAM requirements. Request a demo.",
      },
      {
        property: "og:title",
        content: "Integra Asset Management System for Philippine Agencies",
      },
      {
        property: "og:description",
        content:
          "Track, issue, transfer, and audit assets across your agency. COA-ready reports and full asset lifecycle management in one system.",
      },
      {
        property: "og:url",
        content: "https://newcosmotech.lovable.app/integra",
      },
    ],
    links: [
      { rel: "canonical", href: "https://newcosmotech.lovable.app/integra" },
    ],
  }),
  component: IntegraPage,
});

const TRACKED_ASSETS = [
  "Office Supplies",
  "Computers & Laptops",
  "Printers & Copiers",
  "Ink Cartridges",
  "Furniture & Fixtures",
  "Semi-Expendables",
  "Equipment (above ₱50,000)",
  "Company Cars & Vehicles",
];

const BENEFITS = [
  {
    icon: Eye,
    title: "Improved asset visibility",
    body: "See all assets across the organization in one place, with location, owner, and condition at a glance.",
  },
  {
    icon: TrendingUp,
    title: "Better decision-making",
    body: "Decisions backed by accurate, centralized asset data instead of scattered spreadsheets and registers.",
  },
  {
    icon: Activity,
    title: "Increased asset utilization",
    body: "Know what you have, where it is, and who holds it — so nothing sits idle or unaccounted for.",
  },
  {
    icon: ShieldCheck,
    title: "Improved accuracy & compliance",
    body: "Reduce manual errors and stay COA-ready with audit-aligned forms, reports, and workflows.",
  },
  {
    icon: Bell,
    title: "Faster maintenance planning",
    body: "Scheduled alerts and warranty reminders keep assets serviced on time and avoid costly downtime.",
  },
  {
    icon: CircleDollarSign,
    title: "Reduced costs and asset loss",
    body: "Full accountability chains across employees and offices minimize loss, duplication, and write-offs.",
  },
];

const MODULES = [
  {
    icon: Database,
    title: "Acquisition & Recording",
    body: "Record and classify all assets from the point of entry — office supplies, semi-expendables, equipment above ₱50,000, computers and peripherals, furniture and fixtures, and company vehicles.",
  },
  {
    icon: FileCheck2,
    title: "Issuance of Asset",
    body: "Create, edit, review, approve, and disapprove issuances, reissuances, and returns to and from accountable employees and offices. Check supply and equipment availability before issuance.",
  },
  {
    icon: RefreshCw,
    title: "Return & Disposal",
    body: "Record details of returned or disposed items, tag their condition, and automatically update inventory once an item is returned in good condition or disposed.",
  },
  {
    icon: ClipboardList,
    title: "Transfer of Property",
    body: "Record each property transfer, generate a Property Transfer Report with complete details, and attach supporting documents to any transfer transaction.",
  },
  {
    icon: FileBarChart,
    title: "Asset Inventory",
    body: "Generate the semi-annual RPCI by item type and fund cluster. Generate and consolidate the annual RPCPPE-ICS and RPCPPE-PAR per office and per individual.",
  },
  {
    icon: Scale,
    title: "Insure Asset",
    body: "Generate per-office insurance reports for fire insurance, floater insurance, and Engineering Electronic Equipment Insurance (EEEI), with RPCPPE-ICS and RPCPPE-PAR.",
  },
  {
    icon: ShieldCheck,
    title: "System Administration & Security",
    body: "Role-based access by privilege, login and password protection with mandatory 30-day password rotation, strong authentication, and configurable session timeout.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Reports",
    body: "Generate the full set of COA-required forms and reports — printable, exportable, and ready for audit at any time.",
  },
];

const FEATURE_BLOCKS = [
  {
    icon: Database,
    title: "Acquisition & recording",
    body: "Record and classify every asset from the moment it enters your agency.",
    image: featAcquisition,
    items: [
      "Inventory of Office Supplies",
      "Inventory of Semi-Expendables",
      "Inventory of Equipment: Semi-Expendables (above ₱50,000)",
      "Inventory of Computers, Printers & Peripherals",
      "Furniture and Fixtures",
      "Company Cars and Vehicles",
    ],
  },
  {
    icon: FileCheck2,
    title: "Issuance of asset",
    body: "Manage issuances, reissuances, and returns with full approval workflows.",
    image: featIssuance,
    items: [
      "Create, edit, review, approve, and disapprove issuances",
      "Track reissuances and returns to and from employees and offices",
      "Check supply, item, and equipment availability before issuance",
      "Record asset movements and assign accountability",
      "Generate a daily report summarizing issuance of semi-expendable assets and inventories",
    ],
  },
  {
    icon: RefreshCw,
    title: "Return & disposal",
    body: "Close the loop on every asset with proper condition tracking and inventory updates.",
    image: featReturnDisposal,
    items: [
      "Record the details of returned or disposed items and properties",
      "Tag the condition of each returned or disposed item",
      "Automatically update inventory once an item is returned in good condition or disposed",
      "Maintain a complete history of returns and disposals",
    ],
  },
  {
    icon: ClipboardList,
    title: "Transfer of property",
    body: "Track property transfers between offices and employees with full documentation.",
    image: featTransfer,
    items: [
      "Record the details of each property transfer",
      "Generate a Property Transfer Report with complete details",
      "Attach supporting documents to any transfer transaction",
      "Maintain transfer history per asset and per office",
    ],
  },
  {
    icon: FileBarChart,
    title: "Asset inventory & reporting",
    body: "Generate the physical count reports your agency needs for COA submission.",
    image: featInventory,
    items: [
      "Semi-annual Report on the Physical Count of Inventories (RPCI) by item type and fund cluster",
      "Annual RPCPPE-ICS and RPCPPE-PAR",
      "Per-office and per-individual reporting",
      "Records of accountable semi-expendable assets and PPE",
      "Consolidated reporting across departments",
    ],
  },
  {
    icon: Scale,
    title: "Insure asset",
    body: "Generate per-office insurance reports for every category of insured asset.",
    image: featInsurance,
    items: [
      "Consolidated Report of Items Subject for Fire Insurance",
      "Consolidated Report of Items Subject for Floater Insurance",
      "Consolidated Report of Items Subject for Engineering Electronic Equipment Insurance (EEEI)",
      "Insurance reports paired with RPCPPE-ICS and RPCPPE-PAR",
    ],
  },
  {
    icon: ShieldCheck,
    title: "System administration & security",
    body: "Control access and protect agency data with role-based permissions and strong authentication.",
    image: featSystemAdmin,
    items: [
      "Role-based access system based on privileges granted per user",
      "Login and password protection",
      "Mandatory password changes every 30 calendar days",
      "Strong authentication with enforced password policies",
      "Configurable session timeout set by the administrator",
    ],
  },
];

const PLATFORM_CAPABILITIES = [
  "Web-based access using different browsers",
  "Customized search and display of records",
  "In-app and email notifications, and system alerts",
  "Interface with existing application systems",
  "Configurable processes and workflows",
  "Recording and monitoring of inventories",
  "RFID and QR Code tagging per asset",
  "Full traceable history of incumbents, audits, maintenance, and repairs",
];

const REPORTS = [
  { code: "IAR", name: "Inspection and Acceptance Report" },
  { code: "IIRUP", name: "Inventory and Inspection Report of Unserviceable Property" },
  { code: "ICS", name: "Inventory Custodian Slip" },
  { code: "PAR", name: "Property Acknowledgment Receipt" },
  { code: "Property Card", name: "Per-asset property record" },
  { code: "PTR", name: "Property Transfer Report" },
  { code: "RLSDDP", name: "Report on Lost, Stolen, Damaged or Destroyed Property" },
  { code: "RSMI / RSPI", name: "Report on Supplies and Materials Issues / Report on Supplies and Property Issued" },
  { code: "RPCI", name: "Report on Physical Count of Inventories" },
  { code: "RPCPPE", name: "Report on the Physical Count of Property, Plant and Equipment" },
  { code: "RIS", name: "Requisition and Issue Slip" },
  { code: "SC", name: "Stock Card" },
  { code: "WMR", name: "Waste Material Report" },
  { code: "Custom Report", name: "Configurable to agency requirements" },
];

const FAQS = [
  {
    q: "What is the Asset Management System?",
    a: "The Asset Management System is a web-based platform designed to help government agencies manage the complete lifecycle of assets from acquisition and issuance to inventory monitoring, transfer, and disposal through a centralized and COA-aligned system.",
  },
  {
    q: "Is the Asset Management System aligned with government and COA requirements?",
    a: "Yes. The system is aligned with Government Accounting Manual (GAM) processes and supports COA-compliant asset monitoring, inventory management, reporting, and audit documentation requirements.",
  },
  {
    q: "What government forms are supported by the system?",
    a: "The system supports standard government property and inventory forms including ICS, PAR, RIS, PTR, RPCPPE, RPCI, RSMI, RSPI, WMR, and Stock Card reports.",
  },
  {
    q: "Can the system track the full lifecycle of government assets?",
    a: "Yes. The system manages the complete asset lifecycle, including acquisition, recording, issuance, accountability, transfer, relocation, inventory monitoring, return, and disposal.",
  },
  {
    q: "Does the system support asset accountability and traceability?",
    a: "Yes. The system tracks asset assignments per employee or office and maintains complete movement history, condition records, and audit trails for full accountability and traceability.",
  },
  {
    q: "Can the Asset Management System monitor inventories and physical counts?",
    a: "Yes. The system supports inventory monitoring, physical count reporting, supplies and materials tracking, and consolidated or per-office inventory reporting aligned with government compliance requirements.",
  },
  {
    q: "Does the system support audit-ready documentation?",
    a: "Yes. The system includes audit-ready features such as document attachment, approval workflows, transaction history, printable reports, and exportable audit trails for compliance and verification purposes.",
  },
  {
    q: "Can the Asset Management System send notifications and alerts?",
    a: "Yes. The system supports in-app notifications, email alerts, and system reminders to help users monitor asset-related activities, approvals, and inventory updates in real time.",
  },
  {
    q: "Is the Asset Management System customizable?",
    a: "Yes. The system supports configurable workflows, customizable processes, advanced search capabilities, and integration with existing application systems based on organizational requirements.",
  },
];

function IntegraPage() {
  useReveal();
  const [showAllReports, setShowAllReports] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Cosmotech Integra — Asset Management System",
      description:
        "Web-based asset management system for Philippine government agencies. Aligned with the Government Accounting Manual and COA reporting requirements.",
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
      <section className="overflow-hidden border-b border-border py-20 sm:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="reveal">
              <Eyebrow>Integra</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Asset Management System for Philippine Government Agencies
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Web-based asset lifecycle management system aligned with
                government processes and COA requirements—covering inventory
                monitoring, asset accountability, transfers, reporting, and
                audit-ready documentation.
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

            <div className="reveal relative lg:h-[520px]">
              <img
                src={integraHero}
                alt="Cosmotech Integra asset management dashboard"
                className="w-full object-contain lg:absolute lg:left-0 lg:top-1/2 lg:h-auto lg:max-w-none lg:-translate-y-1/2 lg:w-[140%]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* PROBLEM */}
      <section className="border-b border-border bg-foreground py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-background sm:text-5xl md:text-6xl">
              Monitoring assets across a government agency is harder than it looks
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
              Asset Owner. Asset Location. Maintenance Schedule. Warranty
              Schedule. These are all difficult to trace without the right
              system in place.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
              Integra centralizes all asset information into one system —
              accessible via any browser, configurable to your agency's
              workflows, and built to interface with your existing applications.
            </p>
          </div>
        </Container>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-border py-20 sm:py-24">
        <Container>
          <div className="reveal grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Overview"
                title="What Integra does"
              />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Integra centralizes every asset record across your agency.
                Each item is tagged via RFID or QR Code, enabling a full
                traceable history of incumbents, audits, maintenance, and
                repairs.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                The platform supports the full asset lifecycle — acquisition,
                issuance, transfer, return, disposal, and audit — with the
                forms and reports required by the Government Accounting Manual.
              </p>
            </div>
            <div className="self-start rounded-3xl border border-border bg-bone p-8">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                Platform capabilities
              </h3>
              <ul className="mt-6 grid gap-3">
                {PLATFORM_CAPABILITIES.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT INTEGRA TRACKS */}
      <section className="border-b border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="What Integra tracks"
              title="From office supplies to company vehicles"
              intro="Every category of asset your agency manages — tagged, traceable, and accountable."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cobalt/10 text-cobalt">
                  <Printer className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                  Office Supplies, Equipment, Computers & Printers
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Integra monitors office supplies, computers and laptops,
                  printers, ink cartridges, and copiers. Each asset is tagged
                  via RFID or QR Code, enabling a full traceable history of
                  incumbents, audits, maintenance, and repairs.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Supplies",
                    "Laptops",
                    "Desktops",
                    "Printers",
                    "Copiers",
                    "Ink Cartridges",
                  ].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bone px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      <QrCode className="h-3 w-3 text-cobalt" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cobalt/10 text-cobalt">
                  <Car className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                  Company Cars & Vehicles
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  For fleet assets, Integra tracks maintenance schedules,
                  vehicle insurance, tire monitoring, battery status, and spare
                  parts — keeping the full service history in one record.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Maintenance",
                    "Insurance",
                    "Tires",
                    "Battery",
                    "Spare Parts",
                  ].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bone px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      <Package className="h-3 w-3 text-cobalt" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {TRACKED_ASSETS.map((a) => (
                <div
                  key={a}
                  className="flex items-start gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CORE BENEFITS */}
      <section className="border-b border-border py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Core benefits"
              title="Why agencies choose Integra"
              intro="Six ways Integra makes asset management work better for your office."
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
      <section className="border-b border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Main modules"
              title="Built around the full asset lifecycle"
              intro="Integra is organized into modules that cover every stage of asset management."
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
      <section id="features" className="border-b border-border py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Feature deep dive"
              title="A closer look at what Integra can do"
            />
            <FeatureDeepDiveTabs />
          </div>
        </Container>
      </section>

      {/* REPORTS */}
      <section className="border-b border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Dashboard & reports"
              title="Every COA-required form, ready for audit"
              intro="Integra generates the complete set of COA-required forms and reports — printable, exportable, and ready for audit."
            />
            <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card">
              <ul className="divide-y divide-border">
                {(showAllReports ? REPORTS : REPORTS.slice(0, 6)).map((r) => (
                  <li
                    key={r.code}
                    className="grid grid-cols-[140px_1fr] gap-4 px-6 py-4 sm:grid-cols-[200px_1fr] sm:px-8"
                  >
                    <span className="text-sm font-semibold tracking-tight text-cobalt">
                      {r.code}
                    </span>
                    <span className="text-sm text-foreground">{r.name}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border bg-bone px-6 py-4 sm:px-8">
                <button
                  type="button"
                  onClick={() => setShowAllReports((v) => !v)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-cobalt hover:underline"
                >
                  {showAllReports
                    ? "Show fewer reports"
                    : `Show all ${REPORTS.length} reports`}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* COMPLIANCE */}
      <section className="border-b border-border bg-foreground py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-background/60">
              GAM Compliance
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-background sm:text-5xl">
              Built for the Government Accounting Manual
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
              Integra is aligned with the Government Accounting Manual from the
              ground up — not retrofitted. Every form, workflow, and report
              reflects the standards government agencies are already required
              to follow.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: FileText,
                title: "Standard government forms",
                body: "ICS, PAR, RIS, PTR, RPCPPE, RPCI, RSMI/RSPI, WMR, and Stock Card.",
              },
              {
                icon: RefreshCw,
                title: "Full lifecycle management",
                body: "Acquisition, issuance, transfer, inventory, return, and disposal.",
              },
              {
                icon: ShieldCheck,
                title: "Accountability & traceability",
                body: "Per-employee, per-office assignment with full history and audit trail.",
              },
              {
                icon: FolderArchive,
                title: "Audit-ready documentation",
                body: "Supporting documents, approval workflows, and exportable audit trails.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-background/15 bg-background/5 p-6 text-left"
              >
                <c.icon
                  className="h-6 w-6 text-background/80"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 text-base font-semibold tracking-tight text-background">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-background/70">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-background/15 bg-background/5 p-6">
            <div className="flex items-start gap-4">
              <Building2
                className="mt-0.5 h-6 w-6 shrink-0 text-background/80"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="text-base font-semibold tracking-tight text-background">
                  Inventory & reporting compliance
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-background/70">
                  Physical count reports (RPCI, RPCPPE), supplies and materials
                  monitoring (RSMI), and consolidated and per-office reporting
                  are all built in.
                </p>
              </div>
            </div>
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
        title="Ready to centralize your agency's assets?"
        body="Talk to the Integra team to see how the system fits your agency's size, structure, and existing workflows."
        ctaLabel="Request a Demo"
        to="/contact"
      />
    </>
  );
}

function FeatureDeepDiveTabs() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const current = FEATURE_BLOCKS[active];
  const CurrentIcon = current.icon;

  useEffect(() => {
    const handleScroll = () => {
      const anchor = window.innerHeight * 0.4;
      let current = 0;
      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= anchor) current = idx;
      });
      setActive(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);



  return (
    <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
      {/* Scroll-driven / click-to-expand list */}
      <ul className="divide-y divide-border border-y border-border">
        {FEATURE_BLOCKS.map((b, i) => {
          const isActive = i === active;
          return (
            <li
              key={b.title}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              data-index={i}
              className="py-6"
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="block w-full text-left"
                aria-expanded={isActive}
              >
                <h3
                  className={cn(
                    "text-xl font-semibold tracking-tight transition-colors duration-500 sm:text-2xl",
                    isActive
                      ? "text-foreground"
                      : "text-foreground/30 hover:text-foreground/60",
                  )}
                >
                  {b.title}
                </h3>
              </button>
              <div
                className={cn(
                  "grid transition-all duration-500 ease-out",
                  isActive
                    ? "mt-4 grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {b.body}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {b.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cobalt" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Sticky visual panel */}
      <div className="lg:h-full">
        <div className="lg:sticky lg:top-24">
          <div
            key={current.title}
            className="animate-fade-in overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
          >
            <img
              src={current.image}
              alt={`${current.title} — Integra UI screenshot`}
              loading="lazy"
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
