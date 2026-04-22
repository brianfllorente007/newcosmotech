import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { ArrowRight } from "lucide-react";

export function CtaBand({
  eyebrow = "Let's talk",
  title = "Software that works for the way you work.",
  body = "Tell us about your operations. We'll show you how Cosmotech can fit in.",
  ctaLabel = "Talk to our team",
  to = "/contact",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  ctaLabel?: string;
  to?: string;
}) {
  return (
    <section className="px-5 py-20 sm:px-8">
      <Container className="overflow-hidden rounded-3xl gradient-cta px-6 py-16 text-bone sm:px-12 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-bone/70">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            <span className="font-display italic text-bone">{title}</span>
          </h2>
          <p className="mt-4 text-base text-bone/80 sm:text-lg">{body}</p>
          <Link
            to={to}
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-bone px-5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            {ctaLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
