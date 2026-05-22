import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What industries does Cosmotech serve?",
    a: "Cosmotech has over 31 years of experience serving a wide range of sectors, including Government Agencies, Large Enterprises, Healthcare, Education, and Financial Institutions across the Philippines.",
  },
  {
    q: "Are your software solutions customizable?",
    a: "Our software solutions, including Integra HRIS, DocuTrakr, QMaster, and other platforms, are designed to be scalable and adaptable, enabling organizations to expand functionalities according to their operational requirements.",
  },
  {
    q: "Is Cosmotech ISO certified?",
    a: "Yes. Cosmotech Philippines, Inc. is ISO 9001:2015 certified for Quality Management Systems and ISO/IEC 27001:2022 certified for Information Security Management Systems. The company is also fully compliant with the Data Privacy Act of 2012 (RA 10173).",
  },
  {
    q: "How do I request a product demo or proposal?",
    a: 'You can request a demo or proposal by clicking the "Book a Demo" button in the navigation bar or by completing the contact form at the bottom of this page. Our team will get in touch with you within 24–48 hours.',
  },
  {
    q: "Does Cosmotech provide implementation, training, and technical support?",
    a: "Yes. We provide end-to-end implementation services, including system deployment, user training, technical support, maintenance, and continuous system enhancement to ensure successful adoption across your organization.",
  },
  {
    q: "Where can your solutions be deployed?",
    a: "Our solutions can be deployed on-premise, or cloud-based environments depending on your organization's infrastructure, security, and operational requirements.",
  },
  {
    q: "How does Cosmotech help organizations with digital transformation?",
    a: "Cosmotech Philippines, Inc. helps organizations modernize operations through integrated software systems, AI-powered technologies, workflow automation, infrastructure solutions, and end-to-end IT services tailored to their operational needs.",
  },
];

export function FaqSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions, answered.</>}
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
      </Container>
    </section>
  );
}
