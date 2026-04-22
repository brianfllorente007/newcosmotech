import { Container } from "./Container";
import { LogoWall } from "./LogoWall";
import { AGENCY_LOGOS } from "@/lib/logos";

const STATS = [
  "3,000+ companies served",
  "Since 1994",
  "Government-compliant HRIS",
  "42 GSIS branches nationwide",
  "ISO-certified",
];

export function TrustBar() {
  return (
    <section aria-label="Trusted by" className="border-b border-border bg-bone">
      <Container className="py-12">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-foreground/75">
          {STATS.map((s, i) => (
            <li key={s} className="flex items-center gap-6">
              <span>{s}</span>
              {i < STATS.length - 1 && (
                <span className="hidden h-1 w-1 rounded-full bg-foreground/25 sm:inline-block" />
              )}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-foreground/50">
            Trusted by Philippine government agencies
          </p>
          <LogoWall logos={AGENCY_LOGOS} cols="compact" />
        </div>
      </Container>
    </section>
  );
}
