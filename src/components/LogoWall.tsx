import { cn } from "@/lib/utils";

type Logo = { src: string; alt: string };

export function LogoWall({
  logos,
  className,
}: {
  logos: Logo[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-card sm:grid-cols-3 lg:grid-cols-6",
        className,
      )}
    >
      {logos.map((logo, i) => (
        <div
          key={logo.alt}
          className={cn(
            "flex h-24 items-center justify-center p-5",
            "border-border",
            // bottom borders for all rows except last
            "border-b",
            // right borders inside row
            (i + 1) % 2 !== 0 && "border-r sm:border-r-0",
            (i + 1) % 3 !== 0 && "sm:border-r lg:border-r-0",
            (i + 1) % 6 !== 0 && "lg:border-r",
          )}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="max-h-12 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
}
