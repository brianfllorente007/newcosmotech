import { type ComponentType, type ReactNode, useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type ShowcaseModule = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  body: string;
  items: string[];
  /** Visual to render in the right-hand pinned slot (image, placeholder, etc.) */
  visual: ReactNode;
  /** Optional preload URL — included as a hidden <img> so swaps are instant. */
  preloadSrc?: string;
};

type Props = {
  modules: ShowcaseModule[];
  /** Color class for the icon tile background, e.g. "bg-cobalt/10 text-cobalt". */
  iconClassName?: string;
};

/**
 * Pinned-scroll feature showcase.
 *
 * - Tall outer wrapper drives one viewport of scroll per module.
 * - Inner panel is sticky and centered between nav and viewport bottom.
 * - Clicking a feature title scrolls to that module's segment.
 * - The "next" image slides up from below into the current slot whenever
 *   the active index advances (matched to the feature-text expand duration).
 */
export function ModulesShowcase({ modules, iconClassName = "bg-cobalt/10 text-cobalt" }: Props) {
  const [active, setActive] = useState(0);
  const [displayIdx, setDisplayIdx] = useState(0);
  const [incomingIdx, setIncomingIdx] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const incomingRef = useRef<HTMLDivElement | null>(null);

  const STEP_VH = 90;
  const TRANSITION_MS = 500;

  // Scroll → active index
  useEffect(() => {
    const handleScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      if (window.innerWidth < 1024) {
        setActive(0);
        return;
      }
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0;
      const scaled = progress * modules.length;
      const idx = Math.min(modules.length - 1, Math.floor(scaled));
      setActive(idx);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [modules.length]);

  // Drive slide-in transition when active changes
  useEffect(() => {
    if (active === displayIdx) return;
    setIncomingIdx(active);
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (incomingRef.current) {
          incomingRef.current.style.transform = "translateY(0%)";
        }
      });
    });
    const t = window.setTimeout(() => {
      setDisplayIdx(active);
      setIncomingIdx(null);
    }, TRANSITION_MS + 20);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
    };
  }, [active, displayIdx]);

  const handleSelect = (i: number) => {
    setActive(i);
    const el = wrapperRef.current;
    if (!el || window.innerWidth < 1024) return;
    const total = el.offsetHeight - window.innerHeight;
    const targetProgress = (i + 0.5) / modules.length;
    const top = el.offsetTop + total * targetProgress;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const display = modules[displayIdx];
  const incoming = incomingIdx !== null ? modules[incomingIdx] : null;
  const ActiveIcon = (modules[active] ?? display).icon;

  return (
    <div
      ref={wrapperRef}
      className="mt-6 lg:relative"
      style={{ height: `${modules.length * STEP_VH}vh` }}
    >
      <div className="lg:sticky lg:top-28 lg:flex lg:h-[calc(100vh-7rem)] lg:items-center lg:py-4">
        <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* Left: feature list */}
          <ul className="divide-y divide-border border-y border-border">
            {modules.map((m, i) => {
              const isActive = i === active;
              return (
                <li key={m.title} className="py-2">
                  <button
                    type="button"
                    onClick={() => handleSelect(i)}
                    className="block w-full text-left focus:outline-none"
                    aria-expanded={isActive}
                  >
                    <h3
                      className={cn(
                        "text-lg font-semibold tracking-tight transition-colors duration-500 sm:text-xl",
                        isActive
                          ? "text-foreground"
                          : "text-foreground/30 hover:text-foreground/60",
                      )}
                    >
                      {m.title}
                    </h3>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-out",
                      isActive ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {m.body}
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {m.items.map((it) => (
                          <li key={it} className="flex items-start gap-3 text-sm">
                            <Check className="mt-0.5 h-5 w-5 shrink-0 text-cobalt" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Right: pinned visual */}
          <div>
            <div
              className={cn(
                "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors",
                iconClassName,
              )}
            >
              <ActiveIcon className="h-6 w-6" />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl">
              {/* Preload all module images so swaps are instant. */}
              <div aria-hidden className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0">
                {modules.map((m) =>
                  m.preloadSrc ? (
                    <img key={`preload-${m.title}`} src={m.preloadSrc} alt="" decoding="async" />
                  ) : null,
                )}
              </div>
              {/* Current visual */}
              <div className="absolute inset-0">{display.visual}</div>
              {/* Incoming visual — slides up from below */}
              {incoming && (
                <div
                  ref={incomingRef}
                  aria-hidden
                  className="pointer-events-none absolute inset-0 hidden transition-transform ease-out lg:block"
                  style={{
                    transform: "translateY(100%)",
                    transitionDuration: `${TRANSITION_MS}ms`,
                    maskImage:
                      "linear-gradient(to bottom, black 60%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 60%, transparent 100%)",
                  }}
                >
                  {incoming.visual}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
