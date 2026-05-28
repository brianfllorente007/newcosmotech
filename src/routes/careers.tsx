import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, MapPin, Briefcase, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Cosmotech Philippines" },
      {
        name: "description",
        content:
          "Join Cosmotech Philippines. Explore open roles in sales, IT, backend development, and QA automation at our Makati office.",
      },
      { property: "og:title", content: "Careers — Cosmotech Philippines" },
      {
        property: "og:description",
        content:
          "Open roles in sales, IT, backend development, and QA automation. Work onsite in Makati with a team building software for Philippine enterprise and government.",
      },
    ],
  }),
  component: CareersPage,
});

type Job = {
  slug: string;
  title: string;
  type: string;
  location: string;
  summary: string[];
  responsibilities: string[];
  qualifications: string[];
};

const JOBS: Job[] = [
  {
    slug: "account-management-trainee",
    title: "Account Management Trainee",
    type: "Full-time · Trainee",
    location: "Makati Office · Onsite",
    summary: [
      "Kickstart your career in sales and business development. We are looking for a driven and enthusiastic individual to support client engagement, identify new business opportunities, and assist in presentations and proposal preparation.",
      "Gain hands-on experience with our products and services, work closely with industry professionals, and develop real-world skills in sales, communication, and account management — all while working towards achieving your targets in a dynamic and growth-oriented environment.",
    ],
    responsibilities: [
      "Assist in identifying and developing new business opportunities.",
      "Conduct and participate in client meetings, product presentations, and sales negotiations.",
      "Prepare proposals and other sales related documentation.",
      "Learn and understand assigned products and services that the company deals with its clients.",
      "Support post-sales coordination and after-sales services as required.",
      "Meet sales targets and activities set for the trainee program.",
    ],
    qualifications: [
      "Graduate of any 4-year IT, Business, Marketing, or Engineering course.",
      "Proficient in MS Office.",
      "Strong interest in technology and IT solutions.",
      "Excellent communication and interpersonal skills.",
      "Persuasive and confident with a strong desire to succeed in sales.",
      "Can work independently or in a team environment.",
    ],
  },
  {
    slug: "it-trainee",
    title: "IT Trainee",
    type: "Full-time · Trainee",
    location: "Makati Office · Onsite",
    summary: [
      "Apply now and gain comprehensive training across Project Implementation, System Support, Software Development, QA, and Business Requirements — building hands-on experience across multiple disciplines.",
      "Take the first step in your IT career with a full-time opportunity (not an internship) designed for real growth and exposure. Applicants must be willing to attend an onsite assessment as part of the selection process.",
    ],
    responsibilities: [
      "Successful candidates will be trained and assigned under Project Implementation, System Support, Software Development, QA, and Business Requirements Documentation departments.",
      "This is a full-time position and not an internship. Candidates must be willing to attend an onsite assessment.",
    ],
    qualifications: [
      "Bachelor's/College Degree in Computer Science, Information Technology, or equivalent.",
      "Excellent written and communication skills.",
      "Keen attention to detail and highly analytical.",
      "Willing to be trained.",
      "High motivation to work under pressure with minimal supervision in a dynamic environment.",
      "Willing to work onsite at our Makati office.",
    ],
  },
  {
    slug: "backend-developer",
    title: "Back-end Developer",
    type: "Full-time",
    location: "Makati Office · Onsite",
    summary: [
      "We are seeking an experienced Backend Developer to design and deliver secure, high-performance, and scalable backend systems and APIs. This role involves optimizing data architectures, ensuring system reliability and security, and integrating enterprise platforms.",
      "You will play a key role in driving backend innovation and collaborating with cross-functional teams to deliver robust, production-ready solutions.",
    ],
    responsibilities: [
      "Design, develop, and maintain server-side applications and APIs.",
      "Write clean, efficient, and maintainable code following best practices and coding standards.",
      "Work with relational and NoSQL databases to design schemas and optimize queries.",
      "Design, optimize, and maintain relational data models — writing stored procedures, views, and indexes for peak performance.",
      "Ensure API security, authentication, and authorization.",
      "Enforce secure-coding best practices and robust audit-trail logging for all critical operations.",
      "Improve the performance, scalability, and security of backend systems.",
      "Integrate with third-party platforms, directory services, and message buses.",
      "Ensure high availability and resilience: implement logging, metrics/monitoring, and exception handling.",
      "Collaborate with frontend developers to integrate APIs and backend services.",
      "Write comprehensive unit/integration tests and participate in code reviews, pair programming, and knowledge-sharing sessions.",
      "Troubleshoot and resolve bugs, performance bottlenecks, and system failures.",
      "Conduct and assist in performance and vulnerability assessment and testing.",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science, Information Technology, or related field (or equivalent experience).",
      "2–3 years of professional back-end development experience in C#/.NET Core (6+), delivering production-grade APIs.",
      "2–3 years of experience with PostgreSQL and working knowledge of MongoDB.",
      "2–3 years of experience in asynchronous programming, LINQ, and Entity Framework.",
      "Strong SQL skills: schema design, T-SQL, performance tuning, and transaction management.",
      "Strong understanding of RESTful API development and security best practices.",
      "Familiarity with file storage and processing.",
      "Experience with real-time features and background jobs.",
      "Knowledge of unit testing frameworks (e.g., xUnit, NUnit) and mocking tools.",
      "Experience with authentication/authorization systems, including JWT and role-based access control.",
      "Comfortable with version control workflows and agile best practices.",
    ],
  },
  {
    slug: "qa-tester-automation",
    title: "QA Tester — Automation",
    type: "Full-time",
    location: "Makati Office · Onsite",
    summary: [
      "We are looking for a Software QA Tester – Automation to design and implement automated testing solutions for web, mobile, and API applications.",
      "The role focuses on building scalable test frameworks, ensuring software quality, and integrating automation into CI/CD pipelines while collaborating with development teams to improve system reliability and performance.",
    ],
    responsibilities: [
      "Design and develop automated test scripts using tools like Selenium or Playwright for web, mobile, and API-based applications.",
      "Build and maintain automation frameworks using modern best practices (e.g., POM, Data-Driven, BDD).",
      "Conduct functional, regression, integration, performance, and security testing.",
      "Develop comprehensive test cases/scenarios and execute test scripts to ensure accuracy and reliability.",
      "Document software defects using a bug monitoring system and report defects to developers.",
      "Participate in requirement reviews, design discussions, and sprint planning to ensure testability of features.",
      "Integrate automated tests with CI/CD pipelines for continuous testing.",
      "Monitor, analyze, and report test execution results to provide insights into software quality.",
      "Collaborate with developers to analyze root causes of defects and improve software quality.",
      "Produce and update technical documentation: test plans, scenarios, cases, scripts, data, and progress reports.",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science, Information Technology, or related field (or equivalent experience).",
      "3–5 years of experience in QA automation testing.",
      "3–5 years of experience in Java, Python, or JavaScript.",
      "3–5 years of experience with test automation using Playwright and other tools/frameworks (e.g., Selenium, TestNG, JUnit).",
      "3–5 years of experience in API testing tools (e.g., Postman).",
      "Familiarity with CI/CD tools (e.g., Azure DevOps, Jenkins, GitLab CI, GitHub Actions).",
      "Experience with version control systems like Git.",
      "Basic understanding of SQL and database testing.",
      "Experience in performance testing (JMeter, Gatling) is a plus.",
      "Familiar with ISTQB testing methodology, discipline, principles, and practices from QAI. ISTQB certification is desirable but not required.",
    ],
  },
];

function CareersPage() {
  const [openSlug, setOpenSlug] = useState<string | null>(JOBS[0].slug);

  return (
    <>
      <section className="border-b border-border bg-bone py-20 sm:py-28">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>Careers</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Build software that runs the Philippines' workplaces.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We're a Makati-based team of engineers, QA specialists, and account managers
              building people management, queueing, helpdesk, and document tracking systems used
              by leading enterprises and Philippine government agencies. Join us onsite and grow
              your career alongside professionals who ship real, production-grade software.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5">
                <MapPin className="h-3.5 w-3.5 text-cobalt" />
                {SITE.address}
              </span>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 transition-colors hover:text-foreground"
              >
                <Mail className="h-3.5 w-3.5 text-cobalt" />
                Apply at {SITE.email}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-background py-20 sm:py-24">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Open roles</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {JOBS.length} positions available
              </h2>
            </div>
          </div>

          <ul className="space-y-3">
            {JOBS.map((job) => {
              const isOpen = openSlug === job.slug;
              return (
                <li
                  key={job.slug}
                  id={job.slug}
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-card transition-colors",
                    isOpen ? "border-cobalt/40 shadow-sm" : "border-border",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenSlug(isOpen ? null : job.slug)}
                    aria-expanded={isOpen}
                    aria-controls={`${job.slug}-panel`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        {job.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground sm:text-sm">
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="h-3.5 w-3.5" />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
                        isOpen && "rotate-180 text-cobalt",
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`${job.slug}-panel`}
                      className="border-t border-border px-5 pb-7 pt-6 sm:px-7"
                    >
                      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {job.summary.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>

                      <div className="mt-8 grid gap-8 md:grid-cols-2">
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                            Primary Responsibilities
                          </h4>
                          <ul className="mt-4 space-y-2.5">
                            {job.responsibilities.map((r, i) => (
                              <li
                                key={i}
                                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                              >
                                <span
                                  aria-hidden
                                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt"
                                />
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                            Qualifications
                          </h4>
                          <ul className="mt-4 space-y-2.5">
                            {job.qualifications.map((q, i) => (
                              <li
                                key={i}
                                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                              >
                                <span
                                  aria-hidden
                                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass"
                                />
                                <span>{q}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a
                          href={`mailto:${SITE.email}?subject=Application: ${encodeURIComponent(
                            job.title,
                          )}`}
                          className="inline-flex h-10 items-center rounded-full bg-cobalt px-5 text-sm font-medium text-bone transition-all hover:brightness-110"
                        >
                          Apply for this role
                        </a>
                        <span className="text-xs text-muted-foreground">
                          Send your CV to{" "}
                          <a
                            href={`mailto:${SITE.email}`}
                            className="underline-offset-4 hover:underline"
                          >
                            {SITE.email}
                          </a>
                        </span>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
