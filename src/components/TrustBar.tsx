import { Container } from "./Container";
import { RotatingLogoGrid } from "./RotatingLogoGrid";
import { ALL_CLIENT_LOGOS } from "@/lib/logos";

export function TrustBar() {
  return (
    <section aria-label="Trusted by" className="border-b border-border bg-bone">
      <Container className="py-12">
        <div>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-foreground/50">
            Trusted by 3000+ companies nationwide
          </p>
          <RotatingLogoGrid logos={ALL_CLIENT_LOGOS} />
        </div>
      </Container>
    </section>
  );
}
