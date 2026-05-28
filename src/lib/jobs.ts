export type Job = {
  slug: string;
  title: string;
  type: string;
  location: string;
  intro: string;
  summary: string[];
  responsibilities: string[];
  qualifications: string[];
};

export const JOBS: Job[] = [
  {
    slug: "account-management-trainee",
    title: "Account Management Trainee",
    type: "Full-time · Trainee",
    location: "Makati Office · Onsite",
    intro:
      "Kickstart your career in sales and business development. Support client engagement, identify new opportunities, and learn the craft of account management alongside seasoned professionals.",
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
    intro:
      "Gain comprehensive training across Project Implementation, System Support, Software Development, QA, and Business Requirements — real growth and exposure from day one.",
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
    intro:
      "Design and deliver secure, high-performance, and scalable backend systems and APIs. Drive backend innovation across enterprise platforms with a collaborative engineering team.",
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
    intro:
      "Design and implement automated testing solutions for web, mobile, and API applications. Build scalable test frameworks and integrate automation into CI/CD pipelines.",
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

export function getJob(slug: string): Job | undefined {
  return JOBS.find((j) => j.slug === slug);
}
