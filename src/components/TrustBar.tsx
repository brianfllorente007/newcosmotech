import { Container } from "./Container";
import { RotatingLogoGrid } from "./RotatingLogoGrid";
import { ALL_CLIENT_LOGOS } from "@/lib/logos";

export function TrustBar() {
  return (
    <section aria-label="Trusted by" className="border-b border-border bg-bone">
      <Container className="py-12">
        <p className="mb-6 text-center font-semibold uppercase tracking-[0.22em] text-foreground/50 text-lg">
          Trusted by 3000+ companies nationwide
        </p>
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10">
          <RotatingLogoGrid logos={ALL_CLIENT_LOGOS} />
        </div>
      </Container>
    </section>
  );
}
