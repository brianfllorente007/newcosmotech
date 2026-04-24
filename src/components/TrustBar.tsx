import { Container } from "./Container";
import { LogoTicker } from "./LogoTicker";
import { ALL_CLIENT_LOGOS } from "@/lib/logos";

export function TrustBar() {
  return (
    <section aria-label="Trusted by" className="border-b border-border bg-bone">
      <Container className="py-12">
        <p className="mb-8 text-center font-semibold uppercase tracking-[0.18em] text-foreground/50 text-sm sm:text-base md:text-lg">
          Trusted by 3000+ companies nationwide
        </p>
        <LogoTicker logos={ALL_CLIENT_LOGOS} />
      </Container>
    </section>
  );
}
