import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Zap,
  TrendingUp,
  Sparkles,
  LayoutDashboard,
  Building2,
  UserRound,
  Users,
  BarChart3,
  Settings,
  MessageSquare,
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

export const Route = createFileRoute("/urateme")({
  head: () => ({
    meta: [
      {
        title: "URateMe — Customer Feedback Management System | Cosmotech",
      },
      {
        name: "description",
        content:
          "URateMe captures customer feedback at every branch, tracks employee performance, and surfaces insights in real time. Built for multi-branch operations.",
      },
      {
        property: "og:title",
        content: "URateMe — Customer Feedback Management System",
      },
      {
        property: "og:description",
        content:
          "Capture customer feedback at every branch and turn scattered reactions into measurable performance signals — by branch, by employee, by segment.",
      },
    ],
  }),
  component: UrateMePage,
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
    icon: Building2,
    title: "Multi-branch visibility",
    body: "Consolidate feedback from every branch into a single dashboard — transmitted securely over your company's VPN.",
  },
  {
    icon: BarChart3,
    title: "Real-time performance signals",
    body: "Patterns surface early — a branch slipping in scores, an employee consistently rated above average, an issue clustering in one segment.",
  },
  {
    icon: Sparkles,
    title: "Point-of-service capture",
    body: "Customers rate their experience the moment it happens, tagged automatically by branch, employee, date, and demographic.",
  },
];

const BENEFIT_CARDS = [
  {
    icon: ShieldCheck,
    title: "Faster problem detection",
    body: "See issues the moment they happen — not weeks later when the customer is already gone.",
  },
  {
    icon: TrendingUp,
    title: "Fairer employee evaluation",
    body: "Objective ratings and customer-served counts replace gut feel in performance reviews.",
  },
  {
    icon: Zap,
    title: "Action you can steer with",
    body: "Customer experience data that actually drives decisions — service mix, branch positioning, coaching focus.",
  },
  {
    icon: Sparkles,
    title: "Consistent service quality",
    body: "Hold every branch to the same standard. Surface gaps before they become churn.",
  },
  {
    icon: Users,
    title: "Market profile of who you serve",
    body: "Age, gender, civil status, owner-vs-representative ratio — know who's actually walking in.",
  },
  {
    icon: ShieldCheck,
    title: "Role-protected admin",
    body: "Username and password protected admin pages with role-based control over surveys, reports, and branch data.",
  },
];

const GENERAL_FEATURES = [
  "Customizable questionnaires, greeting messages, and thank-you messages per branch or service type",
  "Consolidated reporting across all branches over your company's VPN",
  "Branch performance profiles — customers served, satisfaction and dissatisfaction ratings, top performers",
  "Employee performance profiles — customers served, ratings, feedback by questionnaire category",
  "Customer demographic capture — age, gender, civil status, customer-to-employee ratio",
  "Reports daily, weekly, monthly, and yearly in graphical and tabular views",
  "Username and password protected admin pages with role-based controls",
  "User-maintainable records for employees, branches, survey questions, greetings, and thank-you messages",
];

const MODULES = [
  {
    icon: MessageSquare,
    title: "Feedback Capture — At the Point of Service",
    body: "Customizable questionnaires, greeting messages, and thank-you messages. Surveys are configurable per branch or per service type. Customers submit complaints, compliments, and suggestions through the system, timestamped and tagged automatically.",
    items: [
      "Customizable questionnaires per branch or service type",
      "Configurable greetings and thank-you messages",
      "Automatic timestamping and tagging of every submission",
    ],
  },
  {
    icon: Building2,
    title: "Branch Performance Tracking — Side by Side",
    body: "A consolidated profile for every branch, showing total customers served, satisfaction and dissatisfaction ratings, and the top-performing employee at that location. Compare branches against each other or against company-wide benchmarks.",
    items: [
      "Total customers served per branch",
      "Satisfaction and dissatisfaction ratings",
      "Top-performing employee per location",
    ],
  },
  {
    icon: UserRound,
    title: "Employee Performance Tracking — Objective Ratings",
    body: "Individual employee profiles showing customers served, satisfaction ratings, and feedback broken down by questionnaire category. Performance data supports objective evaluation, recognition, and coaching decisions.",
    items: [
      "Customers served per employee",
      "Satisfaction ratings per criteria",
      "Feedback grouped by questionnaire category",
    ],
  },
  {
    icon: Users,
    title: "Customer Demographics — Market Insight",
    body: "Captured demographic data — age, gender, civil status, owner-versus-representative ratio — gives management a market profile of who's actually being served. Useful for service mix decisions, branch positioning, and identifying underserved segments.",
    items: [
      "Age, gender, and civil status capture",
      "Owner-vs-representative ratio per branch",
      "Customer-to-employee ratio tracking",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards and Reporting — On Demand",
    body: "Graphical and tabular presentation of results, generated on demand. Standard reports cover performance summaries, demographic reports, employee rating per branch, and employee performance reports.",
    items: [
      "Daily, weekly, monthly, and yearly performance summaries",
      "Demographic reports with satisfaction per criteria",
      "Employee rating per branch and employee performance reports",
    ],
  },
  {
    icon: Settings,
    title: "Administration and Security — Role-Based",
    body: "Username and password protected admin pages. User-maintainable records for employees, branches, survey questions, greetings, and thank-you messages. Admin roles control who can configure surveys, view reports, and access branch data.",
    items: [
      "Username and password authentication",
      "Role-based admin controls",
      "User-maintainable employee, branch, and survey records",
    ],
  },
];

const FAQS = [
  {
    q: "What is URateMe?",
    a: "URateMe is a customer feedback management system that captures customer ratings, complaints, and suggestions at the point of service and consolidates them across all branches into a single reporting system. It's designed for multi-branch operations that need visibility into customer experience and employee performance at every location.",
  },
  {
    q: "How does URateMe capture customer feedback?",
    a: "Customers submit feedback through customizable questionnaires at the point of service. Each submission is timestamped and tagged with the branch, employee, and demographic information of the customer, then transmitted to the central system for reporting.",
  },
  {
    q: "Can URateMe track employee performance?",
    a: "Yes. Each employee has a performance profile showing how many customers they served, their satisfaction ratings, and feedback grouped by questionnaire category. This data supports objective performance evaluation, recognition programs, and coaching.",
  },
  {
    q: "Can URateMe be customized per branch?",
    a: "Yes. Questionnaires, greeting messages, and thank-you messages can be customized for each branch or service type. Branch managers can run surveys specific to their location while head office maintains visibility across the whole network.",
  },
  {
    q: "What demographic data does URateMe collect?",
    a: "URateMe captures age, gender, and civil status of customers, along with the customer-to-employee representative ratio per branch. This gives management a market profile of who's actually being served — useful for service planning and identifying underserved segments.",
  },
  {
    q: "What kinds of reports does URateMe generate?",
    a: "Reports include daily, weekly, monthly, and yearly performance summaries; demographic reports with satisfaction ratings per criteria; employee rating per branch; and employee performance reports. All results can be viewed in graphical or tabular format.",
  },
  {
    q: "How does URateMe work across multiple branches?",
    a: "Each branch captures feedback locally and transmits data to the central system through the company's VPN. Head office sees consolidated results across all branches; individual branch managers see their own location's data.",
  },
  {
    q: "Is admin access secured?",
    a: "Yes. Admin pages are protected by username and password, with role-based controls over who can configure surveys, view reports, and access branch data.",
  },
];

// ---------- Modules Showcase ----------
function ModulesShowcase() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const current = MODULES[active];
  const CurrentIcon = current.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let bestIdx = -1;
        let bestDist = Infinity;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const rect = entry.boundingClientRect;
          const center = rect.top + rect.height / 2;
          const dist = Math.abs(center - window.innerHeight / 2);
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (dist < bestDist) {
            bestDist = dist;
            bestIdx = idx;
          }
        });
        if (bestIdx !== -1) setActive(bestIdx);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
      <ul className="divide-y divide-border border-y border-border">
        {MODULES.map((m, i) => {
          const isActive = i === active;
          return (
            <li
              key={m.title}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              data-index={i}
              className="py-6"
            >
              <h3
                className={cn(
                  "text-xl font-semibold tracking-tight transition-colors duration-500 sm:text-2xl",
                  isActive ? "text-foreground" : "text-foreground/30",
                )}
              >
                {m.title}
              </h3>
              <div
                className={cn(
                  "grid transition-all duration-500 ease-out",
                  isActive ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="text-base leading-relaxed text-muted-foreground">{m.body}</p>
                  <ul className="mt-5 space-y-3">
                    {m.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-cobalt" />
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

      <div className="lg:h-full">
        <div className="lg:sticky lg:top-24">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cobalt/10 text-cobalt transition-colors">
            <CurrentIcon className="h-6 w-6" />
          </div>
          <Placeholder
            key={current.title}
            label={`${current.title.split(" — ")[0]} screenshot`}
            size="1200x800"
            className="aspect-[3/2] animate-fade-in"
          />
        </div>
      </div>
    </div>
  );
}

// ---------- Page ----------
function UrateMePage() {
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
              <Eyebrow>URateMe</Eyebrow>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Customer Feedback Management for Multi-Branch Businesses
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Capture client complaints, compliments, and suggestions at the
                point of service. Consolidate every branch into a single view —
                and turn scattered reactions into measurable performance
                signals by branch, by employee, by segment.
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
              label="URateMe branch dashboard mock"
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
                Why measure customer feedback systematically
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Feedback that lives in comment cards, complaint logs, or
                word-of-mouth is invisible to management until something
                escalates. By then the customer is gone and the damage is done.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                URateMe makes feedback visible the moment it happens. Every
                rating is tagged with branch, employee, date, and demographic —
                and rolled into dashboards management actually checks.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Point-of-service capture across every branch",
                  "Per-branch and per-employee performance profiles",
                  "Demographic-aware reporting in graphs and tables",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cobalt" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Placeholder
              label="Branch comparison / employee rating mock"
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
              title="What changes when feedback runs on URateMe"
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
                Built for businesses with more than one location
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Banks, retail chains, clinics, government offices, and service
                providers that need consistent customer experience across every
                branch. Configurable surveys, consolidated reporting, role-based
                admin — all in one system.
              </p>
              <div className="mt-8">
                <Placeholder
                  label="Reporting / demographics screenshot"
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
              title="Modules and Capabilities"
              intro="URateMe ships with everything you need — feedback capture, branch and employee performance tracking, demographics, reporting, and admin controls."
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
              Hear Your Clients. Improve Your Business.
            </h2>
            <p className="mt-4 text-base text-bone/80 sm:text-lg">
              Walk through feedback capture, branch dashboards, and employee
              performance reporting with our team — live demo, your scenarios.
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
