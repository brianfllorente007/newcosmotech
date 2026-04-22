import type { Logo } from "./RotatingLogoGrid";

type Props = {
  logos: Logo[];
  speedSeconds?: number;
};

export function LogoTicker({ logos, speedSeconds = 50 }: Props) {
  // Duplicate the list for seamless looping
  const loop = [...logos, ...logos];

  return (
    <div
      className="group relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex w-max items-center gap-16 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {loop.map((logo, i) => (
          <div
            key={`${logo.src}-${i}`}
            className="flex h-20 shrink-0 items-center justify-center sm:h-24"
          >
            <img
              src={logo.src}
              alt={i < logos.length ? logo.alt : ""}
              aria-hidden={i >= logos.length}
              className="max-h-14 w-auto object-contain sm:max-h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
