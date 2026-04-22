import { cn } from "@/lib/utils";

/**
 * CSS-only product mock cards — no stock photography.
 */
function Frame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border/70 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="ml-3 text-[11px] font-medium tracking-wide text-muted-foreground">
          cosmotech.app
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export function HrisMock({ className }: { className?: string }) {
  return (
    <Frame className={className}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Payroll run</p>
          <p className="mt-1 text-2xl font-semibold">April 2026 · Cut-off 1</p>
        </div>
        <span className="rounded-full bg-cobalt/10 px-2.5 py-1 text-xs font-medium text-cobalt">
          Ready
        </span>
      </div>
      <div className="mt-5 divide-y divide-border rounded-lg border border-border">
        {[
          ["Reyes, A.", "₱42,180.00", "Net"],
          ["Cruz, M.", "₱38,560.50", "Net"],
          ["Santos, J.", "₱51,002.75", "Net"],
        ].map(([n, a, l]) => (
          <div key={n} className="flex items-center justify-between px-4 py-2.5 text-sm">
            <span className="font-medium">{n}</span>
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">{l}</span>
              <span className="tabular-nums">{a}</span>
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function QueueMock({ className }: { className?: string }) {
  return (
    <Frame className={className}>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">Now serving</p>
      <p className="mt-1 text-6xl font-semibold tracking-tight text-cobalt">A-072</p>
      <p className="text-sm text-muted-foreground">Window 4 · Loans</p>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
        {["A-073", "A-074", "A-075"].map((t) => (
          <div key={t} className="rounded-md border border-border py-2">
            <p className="font-medium text-foreground">{t}</p>
            <p className="text-[10px] text-muted-foreground">Waiting</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function HelpdeskMock({ className }: { className?: string }) {
  return (
    <Frame className={className}>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">Ticket #4821</p>
      <p className="mt-1 text-base font-medium">Cannot access leave portal</p>
      <p className="text-sm text-muted-foreground">Assigned to IT · SLA: 4h remaining</p>
      <div className="mt-4 space-y-2 text-sm">
        <div className="rounded-lg bg-muted px-3 py-2">
          <span className="font-medium">M. Garcia:</span> I get a 403 when I try to file a leave.
        </div>
        <div className="rounded-lg bg-cobalt/10 px-3 py-2 text-foreground">
          <span className="font-medium text-cobalt">Support:</span> Resetting your role now —
          please retry in a minute.
        </div>
      </div>
    </Frame>
  );
}

export function DocMock({ className }: { className?: string }) {
  return (
    <Frame className={className}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Document</p>
          <p className="mt-1 text-xl font-semibold">PR-2026-04-118</p>
          <p className="text-sm text-muted-foreground">Purchase request · Procurement</p>
        </div>
        <div className="grid h-14 w-14 grid-cols-4 grid-rows-4 gap-[2px] rounded-md bg-foreground/5 p-1.5">
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "rounded-[1px]",
                [0, 2, 5, 6, 9, 10, 11, 13, 15].includes(i) ? "bg-foreground" : "bg-transparent",
              )}
            />
          ))}
        </div>
      </div>
      <ol className="mt-5 space-y-2 text-sm">
        {[
          ["Submitted", "Apr 18"],
          ["Reviewed — Finance", "Apr 19"],
          ["With Approver", "Apr 22 (now)"],
        ].map(([s, d], i) => (
          <li key={s} className="flex items-center gap-3">
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                i === 2 ? "bg-cobalt" : "bg-foreground/30",
              )}
            />
            <span className="flex-1 text-foreground/85">{s}</span>
            <span className="text-xs text-muted-foreground">{d}</span>
          </li>
        ))}
      </ol>
    </Frame>
  );
}
