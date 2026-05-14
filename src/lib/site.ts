import integrahris365Light from "@/assets/logos/products/integrahris365-light.webp";
import integrahris365Dark from "@/assets/logos/products/integrahris365-dark.webp";
import integrahrisGovtLight from "@/assets/logos/products/integrahris-govt-light.webp";
import integrahrisGovtDark from "@/assets/logos/products/integrahris-govt-dark.webp";
import qmasterLight from "@/assets/logos/products/qmaster-light.webp";
import qmasterDark from "@/assets/logos/products/qmaster-dark.webp";
import helpdeskLight from "@/assets/logos/products/helpdesk-light.webp";
import helpdeskDark from "@/assets/logos/products/helpdesk-dark.webp";
import uratemeLight from "@/assets/logos/products/urateme-light.webp";
import uratemeDark from "@/assets/logos/products/urateme-dark.webp";
import shotIntegra365 from "@/assets/products/integrahris365.webp";
import shotIntegraGovt from "@/assets/products/integrahris-govt.webp";
import shotQmaster from "@/assets/products/qmaster.webp";
import shotHelpdesk from "@/assets/products/helpdesk.webp";
import shotDocutrakr from "@/assets/products/docutrakr.webp";
import docutrakrLight from "@/assets/logos/products/docutrakr-light.png";
import docutrakrDark from "@/assets/logos/products/docutrakr-dark.png";
import shotUrateme from "@/assets/products/urateme.webp";

export const SITE = {
  name: "Cosmotech Philippines",
  tagline: "People Management Software for Philippine Government & Enterprise",
  phone: "(02) 8403-9811 to 12",
  email: "sales@cosmotech.com.ph",
  address: "7761 Saint Paul St., San Antonio Village, Makati City",
  aeo: "Cosmotech Philippines, Inc. is an IT solutions provider based in Makati City, Philippines. Founded in 1994, the company develops and deploys people management software, queue management systems, helpdesk solutions, and document tracking systems for private enterprises and Philippine government agencies. Office: 7761 Saint Paul St., San Antonio Village, Makati City. Tel: (02) 8403-9811 to 12. Email: sales@cosmotech.com.ph.",
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  short: string;
  description: string;
  features: string[];
  deployedAt?: string[];
  logoLight?: string;
  logoDark?: string;
  screenshot?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "integrahris",
    name: "IntegraHRIS 365",
    tagline: "Downloadable, subscription HRIS for private companies.",
    short:
      "Cloud-ready HRIS for enterprises. Scalable HR, payroll, and workforce management for today's fast-moving organizations.",
    description:
      "Cloud-ready HRIS for enterprises. Scalable HR, payroll, and workforce management for today's fast-moving organizations.",
    features: [
      "Human Resources, Payroll, and Timekeeping in one platform",
      "Scales from 1 to 4,000 employees",
      "Subscription pricing — no large upfront investment",
      "Compliant with Philippine labor and tax regulations",
      "Self-service portal for employees",
    ],
    logoLight: integrahris365Light,
    logoDark: integrahris365Dark,
    screenshot: shotIntegra365,
  },
  {
    slug: "integrahris-government",
    name: "IntegraHRIS Government",
    tagline: "End-to-end HRIS for Philippine government agencies.",
    short:
      "Complete HR and payroll management for government agencies; plantilla, payroll, leave, performance management, and PRIME-HRM compliance.",
    description:
      "Complete HR and payroll management for government agencies; plantilla, payroll, leave, performance management, and PRIME-HRM compliance.",
    features: [
      "Recruitment, 201 file, and onboarding",
      "Biometric timekeeping and DTR generation",
      "GSIS, PhilHealth, Pag-IBIG, and BIR compliant payroll",
      "Leave, performance, and retirement modules",
      "Audit-ready reporting and role-based access",
    ],
    deployedAt: ["Bureau of Customs", "PDIC", "National Telecommunications Commission"],
    logoLight: integrahrisGovtLight,
    logoDark: integrahrisGovtDark,
    screenshot: shotIntegraGovt,
  },
  {
    slug: "qmaster",
    name: "QMaster",
    tagline: "Queue management for high-volume frontline service.",
    short:
      "Organize counter transactions and track frontline performance with multi-printer, multi-display, and SMS-ready queueing.",
    description:
      "QMaster organizes customer transactions at the counter level and tracks the performance of your frontline staff. It supports multiple ticket printers, unlimited transaction types, SMS notifications, and multi-display setups.",
    features: [
      "Multiple ticket printers and queue displays",
      "Unlimited transaction types and priority lanes",
      "SMS notifications for waiting customers",
      "Real-time staff performance dashboard",
      "Centralized reporting across branches",
    ],
    deployedAt: ["GSIS — 42 branches nationwide", "Multiple LTO offices"],
    logoLight: qmasterLight,
    logoDark: qmasterDark,
    screenshot: shotQmaster,
  },
  {
    slug: "helpdesk",
    name: "HelpDesk",
    tagline: "Route every inquiry. Lose none.",
    short:
      "Customizable workflows, role-based access, two-factor auth, and full audit trails so no ticket falls through the cracks.",
    description:
      "HelpDesk routes every customer inquiry to the right team member automatically. It supports customizable workflows, role-based access, two-factor authentication, and full audit trails — so no ticket falls through the cracks.",
    features: [
      "Automatic ticket routing by team and topic",
      "Customizable workflows and SLAs",
      "Role-based access with two-factor authentication",
      "Full audit trail for every ticket",
      "Customer-facing self-service portal",
    ],
    logoLight: helpdeskLight,
    logoDark: helpdeskDark,
    screenshot: shotHelpdesk,
  },
  {
    slug: "docutrakr",
    name: "Docutrakr",
    tagline: "QR-coded document tracking, in real time.",
    short:
      "Every document gets a unique QR code. Know its location, processing status, and handling history at any moment.",
    description:
      "Docutrakr assigns a unique QR code to every document so you can track its location, processing status, and handling history in real time. No more lost files, no more manual follow-ups.",
    features: [
      "Unique QR code per document",
      "Real-time location and status tracking",
      "Full handling history and chain of custody",
      "Automated escalations for stalled documents",
      "Mobile scanning from any device",
    ],
    logoLight: docutrakrLight,
    logoDark: docutrakrDark,
    screenshot: shotDocutrakr,
  },
  {
    slug: "urateme",
    name: "URateMe",
    tagline: "Customer feedback that turns into action.",
    short:
      "Collect post-transaction ratings and turn raw feedback into the data your team needs to improve service.",
    description:
      "URateMe collects customer feedback after every transaction. It turns raw ratings into actionable data your team can use to improve service quality and identify recurring issues.",
    features: [
      "Post-transaction rating capture",
      "Trend analysis and recurring-issue detection",
      "Per-staff and per-branch dashboards",
      "Integrates with QMaster and HelpDesk",
      "Exportable reports for management review",
    ],
    logoLight: uratemeLight,
    logoDark: uratemeDark,
    screenshot: shotUrateme,
  },
  {
    slug: "horion",
    name: "Horion Interactive Display",
    tagline: "Interactive displays for modern meeting rooms and classrooms.",
    short:
      "Smart interactive flat panels that turn any meeting room or classroom into a collaborative workspace.",
    description:
      "Horion Interactive Displays are smart, touch-enabled flat panels designed for modern meeting rooms, classrooms, and training centers. Built-in collaboration tools, wireless screen sharing, and intuitive whiteboarding make every session more productive.",
    features: [
      "4K touch-enabled interactive flat panels",
      "Built-in whiteboarding and annotation",
      "Wireless screen sharing from any device",
      "Multi-user collaboration",
      "Enterprise-grade installation and support",
    ],
  },
];

export type Project = {
  agency: string;
  scope: string;
  sector: "Government" | "Enterprise";
};

export const PROJECTS: Project[] = [
  { agency: "Philippine Ports Authority", scope: "Facial Recognition for Contactless Attendance Tracking", sector: "Government" },
  { agency: "Bureau of Customs", scope: "Human Resource Information System", sector: "Government" },
  { agency: "Government Service Insurance System (GSIS)", scope: "Queue Management System — 42 branches nationwide", sector: "Government" },
  { agency: "Department of Public Works and Highways (DPWH)", scope: "Biometrics Time and Attendance; Physical Resource Management System (PRMS)", sector: "Government" },
  { agency: "Energy Regulatory Commission (ERC)", scope: "Uniform Reportorial Requirements System", sector: "Government" },
  { agency: "National Telecommunications Commission", scope: "Human Resource Information System", sector: "Government" },
  { agency: "Philippine Deposit Insurance Corporation (PDIC)", scope: "Human Resource Information System", sector: "Government" },
  { agency: "Freeport Area of Bataan", scope: "Billing and Collection System", sector: "Government" },
  { agency: "Land Management Bureau", scope: "Survey Information Management System", sector: "Government" },
  { agency: "DENR", scope: "Online Leave Management System (OLMS)", sector: "Government" },
];

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
