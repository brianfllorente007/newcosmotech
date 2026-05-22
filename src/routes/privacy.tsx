import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Cosmotech Philippines" },
      {
        name: "description",
        content:
          "Privacy policy for Cosmotech Philippines, Inc. Learn how we handle data across our products and services.",
      },
      { property: "og:title", content: "Privacy Policy — Cosmotech Philippines" },
      {
        property: "og:description",
        content:
          "Privacy policy for Cosmotech Philippines, Inc. Learn how we handle data across our products and services.",
      },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
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

function PrivacyPage() {
  return (
    <section className="bg-bone pt-28 pb-20 sm:pt-32 sm:pb-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Privacy Policy</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            This page outlines key information about our products and how they
            support secure, traceable operations for the organizations we serve.
          </p>

          <div className="mt-12 space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.q}>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {s.q}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {s.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
