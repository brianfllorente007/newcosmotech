import { cn } from "@/lib/utils";

export type LogoItem = {
  src: string;
  alt: string;
};

export function LogoWall({
  logos,
  className,
  cols = "default",
}: {
  logos: LogoItem[];
  className?: string;
  cols?: "default" | "compact";
}) {
  const gridCols =
    cols === "compact"
      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-6"
      : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6";

  return (
    <div
      className={cn(
        "grid overflow-hidden rounded-2xl border border-border bg-card",
        gridCols,
        className,
      )}
    >
      {logos.map((logo, i) => (
        <div
          key={logo.alt + i}
          className="flex h-24 items-center justify-center border-b border-r border-border/60 p-5 transition-transform duration-300 hover:-translate-y-0.5"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="max-h-12 w-auto max-w-[140px] object-contain"
          />
        </div>
      ))}
    </div>
  );
}
