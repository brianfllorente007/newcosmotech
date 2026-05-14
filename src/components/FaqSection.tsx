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
    a: "Yes, our software systems like Integra HRIS, Docutrakr, and QMaster are built with modularity in mind. We can tailor functionalities to align specifically with your organization's unique workflows and compliance requirements.",
  },
  {
    q: "Is Cosmotech ISO certified?",
    a: "Yes, Cosmotech Philippines, Inc. is ISO 9001:2015 certified for Quality Management Systems. We are also fully compliant with the Data Privacy Act of 2012 (RA 10173).",
  },
  {
    q: "How do I request a product demo or proposal?",
    a: 'You can easily request a demo or proposal by clicking the "Book a Demo" button in our navigation bar or filling out the contact form at the bottom of this page. Our sales team will get in touch with you within 24-48 hours.',
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
