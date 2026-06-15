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
import gpmsLight from "@/assets/logos/products/gpms-light.png";
import shotGpms from "@/assets/products/gpms.png";
import logoPpa from "@/assets/logos/agencies/ppa.svg";
import logoBoc from "@/assets/logos/agencies/boc.webp";
import logoGsis from "@/assets/logos/agencies/gsis.svg";
import logoDpwh from "@/assets/logos/agencies/dpwh.webp";
import logoErc from "@/assets/logos/agencies/erc.webp";
import logoNtc from "@/assets/logos/agencies/ntc.webp";
import gpmsDark from "@/assets/logos/products/gpms-dark.png";
import integraAssetLight from "@/assets/logos/products/integra-asset-light.png";
import integraAssetDark from "@/assets/logos/products/integra-asset-dark.png";
import shotIntegraAsset from "@/assets/products/integra-asset.webp";

export const SITE = {
  name: "Cosmotech Philippines",
  tagline: "People Management Software for Philippine Government & Enterprise",
  phone: "(02) 8403-9811 to 12",
  email: "sales@cosmotech.com.ph",
  address: "7761 Saint Paul St., San Antonio Village, Makati City",
  aeo: "Cosmotech Philippines, Inc. is an IT solutions provider based in Makati City, Philippines. Founded in 1994, the company develops and deploys people management software, queue management systems, helpdesk solutions, and document tracking systems for private enterprises and Philippine government agencies.",
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
    tagline: "Scalable HR and payroll for private companies.",
    short:
      "Scalable HR, payroll, and workforce management software designed for private companies streamlining employee management, payroll processing, attendance, and HR operations in one centralized platform.",
    description:
      "Scalable HR, payroll, and workforce management software designed for private companies streamlining employee management, payroll processing, attendance, and HR operations in one centralized platform.",
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
    tagline: "End-to-End HRIS for Philippine Government Agencies",
    short:
      "CSC-aligned HR and payroll management system for government agencies covering plantilla, recruitment, payroll, leave management, performance evaluation, and PRIME-HRM compliance.",
    description:
      "CSC-aligned HR and payroll management system for government agencies covering plantilla, recruitment, payroll, leave management, performance evaluation, and PRIME-HRM compliance.",
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
    tagline: "Intelligent Queue Management for High-Volume Service Environments",
    short:
      "Modern queue management and customer flow system with real-time monitoring, analytics, digital ticketing, SMS notifications, and kiosk integration for faster and more efficient public service.",
    description:
      "Modern queue management and customer flow system with real-time monitoring, analytics, digital ticketing, SMS notifications, and kiosk integration for faster and more efficient public service.",
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
    tagline: "Centralized Support Ticketing and Service Management",
    short:
      "Streamline issue resolution, service requests, and technical support through an automated helpdesk platform that improves response time, accountability, and operational efficiency.",
    description:
      "Streamline issue resolution, service requests, and technical support through an automated helpdesk platform that improves response time, accountability, and operational efficiency.",
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
    tagline: "Real-Time Document Tracking and Workflow Management",
    short:
      "Track, monitor, and retrieve documents with complete visibility across departments using QR-based tracking, workflow automation, notifications, and centralized document monitoring.",
    description:
      "Track, monitor, and retrieve documents with complete visibility across departments using QR-based tracking, workflow automation, notifications, and centralized document monitoring.",
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
    tagline: "Real-Time Customer Feedback and Satisfaction Monitoring",
    short:
      "Capture customer and citizen feedback through digital surveys and AI-driven insights to monitor service quality, satisfaction ratings, and operational performance in real time.",
    description:
      "Capture customer and citizen feedback through digital surveys and AI-driven insights to monitor service quality, satisfaction ratings, and operational performance in real time.",
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
    slug: "integra-asset",
    name: "Integra Asset Management",
    tagline: "Asset Management System for Philippine Government Agencies",
    short:
      "Web-based asset lifecycle management system aligned with government processes and COA requirements—covering inventory monitoring, asset accountability, transfers, reporting, and audit-ready documentation.",
    description:
      "Web-based asset lifecycle management system aligned with government processes and COA requirements—covering inventory monitoring, asset accountability, transfers, reporting, and audit-ready documentation.",
    features: [
      "Full asset lifecycle management",
      "COA-ready reports and compliance",
      "Issuance, transfers, and disposal workflows",
      "Centralized asset registry across offices",
      "Audit trail and accountability",
    ],
    logoLight: integraAssetLight,
    logoDark: integraAssetDark,
    screenshot: shotIntegraAsset,
  },
  {
    slug: "cosmotech-gpms",
    name: "CosmotechGPMS",
    tagline: "Government Procurement Management System",
    short:
      "Digitize and streamline government procurement processes with a centralized platform designed to improve transparency, accountability, workflow efficiency, and compliance monitoring from requisition to procurement completion.",
    description:
      "Digitize and streamline government procurement processes with a centralized platform designed to improve transparency, accountability, workflow efficiency, and compliance monitoring from requisition to procurement completion.",
    features: [
      "Procurement planning and APP management",
      "End-to-end bidding workflow",
      "Full audit trail and document trail",
      "Vendor and supplier management",
      "Transparency and compliance reporting",
    ],
    logoLight: gpmsLight,
    logoDark: gpmsDark,
    screenshot: shotGpms,
  },
];


export type Project = {
  agency: string;
  scope: string;
  sector: "Government" | "Enterprise";
  logo?: string;
};

export const PROJECTS: Project[] = [
  { agency: "Philippine Ports Authority", scope: "Facial Recognition for Contactless Attendance Tracking", sector: "Government", logo: logoPpa },
  { agency: "Bureau of Customs", scope: " Internal Administration Management System (IAMS)", sector: "Government", logo: logoBoc },
  { agency: "Government Service Insurance System (GSIS)", scope: "Queue Management System — 42 branches nationwide", sector: "Government", logo: logoGsis },
  { agency: "Department of Public Works and Highways (DPWH)", scope: "Biometrics Time and Attendance; Physical Resource Management System (PRMS)", sector: "Government", logo: logoDpwh },
  { agency: "Energy Regulatory Commission (ERC)", scope: "Uniform Reportorial Requirements System", sector: "Government", logo: logoErc },
  { agency: "National Telecommunications Commission", scope: " Internal Administration Management System (IAMS)", sector: "Government", logo: logoNtc },
  { agency: "Philippine Deposit Insurance Corporation (PDIC)", scope: " Internal Administration Management System (IAMS)", sector: "Government" },
  { agency: "Freeport Area of Bataan", scope: "Billing and Collection System", sector: "Government" },
  { agency: "Land Management Bureau", scope: "Survey Information Management System", sector: "Government" },
  { agency: "DENR", scope: "Online Leave Management System (OLMS)", sector: "Government" },
];

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;
