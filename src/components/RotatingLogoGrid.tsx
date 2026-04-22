import { useEffect, useMemo, useRef, useState } from "react";

export type Logo = { src: string; alt: string };

type Props = {
  logos: Logo[];
  /** Slots per row at each breakpoint */
  perRow?: { base: number; sm: number; lg: number };
  rows?: number;
};

function pickInitial(pool: Logo[], count: number): Logo[] {
  const out: Logo[] = [];
  const used = new Set<number>();
  for (let i = 0; i < count; i++) {
    if (pool.length === 0) break;
    if (used.size >= pool.length) {
      // pool smaller than count — allow repeats once exhausted
      out.push(pool[i % pool.length]);
      continue;
    }
    let idx = Math.floor(Math.random() * pool.length);
    while (used.has(idx)) idx = (idx + 1) % pool.length;
    used.add(idx);
    out.push(pool[idx]);
  }
  return out;
}

export function RotatingLogoGrid({
  logos,
  perRow = { base: 4, sm: 6, lg: 9 },
  rows = 2,
}: Props) {
  const totalSlots = perRow.lg * rows;
  const [slots, setSlots] = useState<Logo[]>(() => pickInitial(logos, totalSlots));
  // Per-slot "front layer is current" toggle
  const [frontIsA, setFrontIsA] = useState<boolean[]>(() =>
    Array.from({ length: totalSlots }, () => true),
  );
  // Layer A & B contents per slot
  const [layerA, setLayerA] = useState<Logo[]>(() => slots);
  const [layerB, setLayerB] = useState<Logo[]>(() =>
    Array.from({ length: totalSlots }, (_, i) => slots[i]),
  );

  const slotsRef = useRef(slots);
  slotsRef.current = slots;

  const rootRef = useRef<HTMLDivElement | null>(null);
  const visibleRef = useRef(true);
  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  // Pause when offscreen
  useEffect(() => {
    if (!rootRef.current || typeof IntersectionObserver === "undefined") return;
    const el = rootRef.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion || logos.length <= totalSlots) {
      // If pool not bigger than slots, swapping looks awkward; static is fine
      if (reducedMotion) return;
    }
    if (logos.length < 2) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    const scheduleSwap = (slotIdx: number, delay: number) => {
      const t = setTimeout(function tick() {
        if (visibleRef.current) {
          // Pick a new logo not currently visible
          const visible = new Set(slotsRef.current.map((l) => l.src));
          const candidates = logos.filter((l) => !visible.has(l.src));
          const next =
            candidates.length > 0
              ? candidates[Math.floor(Math.random() * candidates.length)]
              : logos[Math.floor(Math.random() * logos.length)];

          setSlots((prev) => {
            const copy = [...prev];
            copy[slotIdx] = next;
            return copy;
          });
          setFrontIsA((prevFront) => {
            const wasA = prevFront[slotIdx];
            // Write next into the back layer, then flip
            if (wasA) {
              setLayerB((prev) => {
                const copy = [...prev];
                copy[slotIdx] = next;
                return copy;
              });
            } else {
              setLayerA((prev) => {
                const copy = [...prev];
                copy[slotIdx] = next;
                return copy;
              });
            }
            const copy = [...prevFront];
            copy[slotIdx] = !wasA;
            return copy;
          });
        }
        const nextDelay = 3500 + Math.random() * 2500;
        timers.push(setTimeout(tick, nextDelay));
      }, delay);
      timers.push(t);
    };

    for (let i = 0; i < totalSlots; i++) {
      scheduleSwap(i, 800 + Math.random() * 4000);
    }

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [logos, totalSlots, reducedMotion]);

  const gridCls = `grid grid-cols-${perRow.base} sm:grid-cols-${perRow.sm} lg:grid-cols-${perRow.lg} gap-x-6 gap-y-6 sm:gap-x-10 sm:gap-y-8`;

  return (
    <div ref={rootRef} className={gridCls}>
      {Array.from({ length: totalSlots }).map((_, i) => {
        const a = layerA[i];
        const b = layerB[i];
        const showA = frontIsA[i];
        return (
          <div
            key={i}
            className="relative flex h-20 items-center justify-center sm:h-24"
          >
            {a && (
              <img
                src={a.src}
                alt={showA ? a.alt : ""}
                aria-hidden={!showA}
                className="absolute max-h-14 w-auto object-contain transition-all duration-300 ease-out sm:max-h-16"
                style={{
                  opacity: showA ? 1 : 0,
                  transform: showA ? "scale(1)" : "scale(0.92)",
                }}
              />
            )}
            {b && (
              <img
                src={b.src}
                alt={!showA ? b.alt : ""}
                aria-hidden={showA}
                className="absolute max-h-14 w-auto object-contain transition-all duration-300 ease-out sm:max-h-16"
                style={{
                  opacity: !showA ? 1 : 0,
                  transform: !showA ? "scale(1)" : "scale(0.92)",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
