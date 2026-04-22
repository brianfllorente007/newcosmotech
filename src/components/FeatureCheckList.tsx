import { Check } from "lucide-react";

export function FeatureCheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3 text-[15px] text-foreground/85">
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cobalt/10 text-cobalt">
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
