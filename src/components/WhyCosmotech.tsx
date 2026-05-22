import { Container } from "./Container";
import { Eyebrow } from "./SectionHeading";
import {
  Award,
  BadgeCheck,
  Workflow,
  Sparkles,
  Cpu,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type Item = { icon: LucideIcon; title: string; body: string };

const ITEMS: Item[] = [
  {
    icon: Award,
    title: "31+ Years of Trusted IT Leadership",
    body: "Reliable and scalable solutions for government and enterprise.",
  },
  {
    icon: BadgeCheck,
    title: "Certified & Experienced IT Experts",
    body: "Licensed team in software, integration, and consulting.",
  },
  {
    icon: Workflow,
    title: "End-to-End Digital Delivery",
    body: "Complete services from design to continuous support.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Custom System Solutions",
    body: "Tailored systems aligned with your specific requirements.",
  },
  {
    icon: Cpu,
    title: "Integrated Hardware & Software",
    body: "Seamless integration for optimal system performance.",
  },
  {
    icon: ShieldCheck,
    title: "ISO-Certified and DPA Compliant",
    body: "We are ISO 9001:2015 certified since 2017 and in full compliance with the Data Privacy Act of 2012 (RA 10173).",
  },
];

export function WhyCosmotech() {
  return (
    <section className="bg-bone py-16 sm:py-20 md:py-24">
      <Container>
        <div className="max-w-5xl">
          <Eyebrow>Why Cosmotech?</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-[2rem]">
            For over three decades, we have been the trusted technology partner of the Philippines government and enterprise institutions delivering secure, scalable, and mission-critical systems that power essential operations nationwide.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-cobalt/60 hover:shadow-sm"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cobalt/15 text-cobalt">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
