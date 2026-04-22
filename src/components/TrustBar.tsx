import { Container } from "./Container";

const STATS = [
  "3,000+ companies served",
  "Since 1994",
  "Government-compliant HRIS",
  "42 GSIS branches nationwide",
  "ISO-certified",
];

const AGENCIES = ["GSIS", "BOC", "DPWH", "PPA", "ERC", "NTC", "PDIC", "DENR"];

export function TrustBar() {
  return (
    <section aria-label="Trusted by" className="border-b border-border bg-bone">
      <Container className="py-10">
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
        <div className="mt-8 grid grid-cols-4 gap-y-4 text-center sm:grid-cols-8">
          {AGENCIES.map((a) => (
            <span
              key={a}
              className="text-xs font-semibold tracking-[0.22em] text-foreground/45"
            >
              {a}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
