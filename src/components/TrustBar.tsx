import { Container } from "./Container";
import { ALL_CLIENT_LOGOS } from "@/lib/logos";

export function TrustBar() {
  return (
    <section aria-label="Trusted by" className="border-b border-border bg-bone">
      <Container className="py-12">
        <p className="mb-8 text-center font-semibold uppercase tracking-[0.18em] text-foreground/50 text-sm sm:text-base md:text-lg">
          Trusted by 3000+ companies nationwide
        </p>
        <div className="flex flex-nowrap items-center justify-between gap-4 sm:gap-6 md:gap-8 overflow-x-auto">
          {ALL_CLIENT_LOGOS.map((logo) => (
            <div
              key={logo.src}
              className="flex h-16 shrink-0 items-center justify-center sm:h-20"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 w-auto object-contain sm:max-h-14 md:max-h-16"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
