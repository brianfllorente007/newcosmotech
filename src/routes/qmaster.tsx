import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Bell,
  BarChart3,
  Building2,
  Hospital,
  Landmark,
  Banknote,
  Store,
  GraduationCap,
  Gauge,
} from "lucide-react";
import heroImage from "@/assets/qmaster/hero.png";
import { Container } from "@/components/Container";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";
import { CtaBand } from "@/components/CtaBand";

export const Route = createFileRoute("/qmaster")({
  head: () => ({
    meta: [
      { title: "QMaster — Queue Management System for High-Volume Service" },
      {
        name: "description",
        content:
          "QMaster is Cosmotech's queue management system. Real-time monitoring, kiosk ticketing, SMS notifications, and a full performance dashboard — built for branches that serve thousands a day.",
      },
      { property: "og:title", content: "QMaster — Queue Management for High-Volume Service" },
      {
        property: "og:description",
        content:
          "Manage queues. Organize every transaction. Real-time monitoring, ticketing, and analytics deployed across 42 GSIS branches and counting.",
      },
      { property: "og:image", content: "https://newcosmotech.lovable.app/og/qmaster.png" },
    ],
    links: [
      { rel: "canonical", href: "https://newcosmotech.lovable.app/qmaster" },
    ],
  }),
  component: QMasterPage,
});

const TOP_STATS = [
  { k: "42", l: "GSIS branches running QMaster nationwide" },
  { k: "38%", l: "Average drop in wait time after rollout" },
  { k: "7 days", l: "From signed pilot to live counter" },
];

const VOCABULARY = [
  { word: "TICKET", def: "A printed or digital number that holds the customer's place in line." },
  { word: "WINDOW", def: "A staffed counter that calls, serves, and closes tickets." },
  { word: "GROUP", def: "A category of service — Billing, Application, Cashier — with its own queue." },
  { word: "PRIORITY", def: "SC, PWD, and pregnant clients routed to the front of the matched group." },
  { word: "CALL NEXT", def: "The teller pulls the next eligible ticket for the assigned window." },
  { word: "TRANSFER", def: "Move a ticket between groups without losing its position or history." },
  { word: "PARK", def: "Hold a ticket while the customer steps away. Resume from any window." },
  { word: "GRAB", def: "Pull a specific ticket out of order — supervisor-logged for audit." },
];

const FIVE_THINGS = [
  {
    n: "01",
    title: "It maps to your real floor.",
    body: "Branches don't all look the same. QMaster's window-and-group model fits one cashier or forty without forking the codebase.",
  },
  {
    n: "02",
    title: "It runs when the internet doesn't.",
    body: "Local-first. Tickets keep printing and queues keep moving on a flaky connection. Data syncs the moment it returns.",
  },
  {
    n: "03",
    title: "Tellers don't need a manual.",
    body: "Six buttons handle 95% of the work: Call Next, Call Again, Skip, Grab, Transfer, Park. New hires are productive in an afternoon.",
  },
  {
    n: "04",
    title: "Managers see the floor without standing on it.",
    body: "Live dashboards on any screen. Average wait, served-today, abandoned, per-window performance — refreshed in seconds.",
  },
  {
    n: "05",
    title: "It fits the hardware you already own.",
    body: "Works with standard ticket printers, displays, and Android tablets. No proprietary lock-in for kiosks or signage.",
  },
];

const SCOREBOARD_STAFF = [
  "Tickets served today, per window and per teller",
  "Average and longest handling time per transaction type",
  "Skipped, transferred, and parked counts with reasons",
  "Live performance comparison across the floor",
  "Daily, weekly, and monthly leaderboards",
];

const SCOREBOARD_CUSTOMER = [
  "Now-serving and next-up displayed on every screen",
  "Estimated wait time per group, updated live",
  "Audio call with configurable language and voice",
  "SMS notification when a customer's number is close",
  "Post-service rating capture via URateMe integration",
];

const WORKFLOW_STEPS = [
  { k: "1", t: "Issue", b: "Kiosk or staff prints a ticket tagged with group and priority." },
  { k: "2", t: "Route", b: "Engine matches ticket to eligible windows by skill and SLA." },
  { k: "3", t: "Call", b: "Teller calls next; display and audio fire across the branch." },
  { k: "4", t: "Serve", b: "Handle, transfer, or park — every action timestamped." },
  { k: "5", t: "Measure", b: "Closed tickets feed dashboards, exports, and URateMe." },
];

const SUMMARY_CARDS = [
  {
    tone: "from-cobalt/20 to-cobalt/5 border-cobalt/30",
    eyebrow: "For branches",
    title: "One floor, one source of truth.",
    body: "Every counter, ticket, and minute of waiting in a single live view.",
  },
  {
    tone: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30",
    eyebrow: "For head office",
    title: "Compare branches without spreadsheets.",
    body: "Centralized reporting rolls every site into one dashboard.",
  },
  {
    tone: "from-brass/30 to-brass/5 border-brass/40",
    eyebrow: "For customers",
    title: "Wait with information, not anxiety.",
    body: "Position, time estimate, and SMS — all the way to their turn.",
  },
];

const SPEC_SHEET = [
  ["Ticket issuance", "Kiosk, counter print, or QR-based mobile ticket"],
  ["Priority handling", "Senior, PWD, pregnant, and custom flags"],
  ["Display network", "Unlimited TV-out and web-based displays"],
  ["Audio call", "Multi-language voice with custom phrases"],
  ["SMS notify", "Triggered by position threshold per group"],
  ["Transaction types", "Unlimited groups with per-group SLA"],
  ["Transfers & parking", "Cross-group with full audit trail"],
  ["Supervisor controls", "Grab, force-call, reassign, reopen"],
  ["Multi-branch", "Centralized reporting across all sites"],
  ["Hardware", "Works with standard ticket printers and Android"],
  ["Offline mode", "Queues continue locally; sync on reconnect"],
  ["Integrations", "URateMe, HelpDesk, and HRIS via API"],
];

const NUMBERS = [
  { k: "1,284", l: "Average tickets served per branch per day" },
  { k: "4 min 12 s", l: "Average wait after first month live" },
  { k: "11", l: "Counters supervised from one screen" },
];

const NUMBER_BULLETS = [
  "Served, abandoned, transferred — broken down by hour",
  "Per-teller productivity with handle-time medians",
  "Group-level SLA compliance and breach alerts",
  "Branch comparison rolled up by region",
  "Exportable CSV and PDF for management reviews",
  "Direct feed into URateMe for post-service ratings",
];

const INDUSTRIES = [
  { icon: Landmark, l: "Government" },
  { icon: Banknote, l: "Banking" },
  { icon: Hospital, l: "Healthcare" },
  { icon: Building2, l: "Telco" },
  { icon: Store, l: "Retail" },
  { icon: GraduationCap, l: "Education" },
];

const FAQS = [
  {
    q: "How quickly can a branch go live?",
    a: "A standard pilot runs in seven days from signed scope: site survey on day one, hardware staged and configured by day three, training and dry-run on day five, live counter on day seven.",
  },
  {
    q: "Do we need to replace our ticket printers and displays?",
    a: "No. QMaster is hardware-agnostic. We support standard 80mm thermal printers and any HDMI/web-capable display. We'll certify your existing fleet during the site survey.",
  },
  {
    q: "What happens if the internet drops mid-day?",
    a: "Each branch runs a local node. Tickets keep printing, queues keep moving, and dashboards keep updating on the LAN. Data syncs to head office automatically when the link returns.",
  },
  {
    q: "Can we customize transaction types and priority rules?",
    a: "Yes. Branch managers create unlimited groups, set per-group SLAs, and configure priority handling for SC, PWD, pregnant clients, and any custom flag — without writing code.",
  },
  {
    q: "Does QMaster integrate with our other systems?",
    a: "QMaster ships with native integrations to URateMe (post-service ratings) and HelpDesk (escalations), plus a documented REST API for HRIS, CRM, and core banking systems.",
  },
];

function QMasterPage() {
  useReveal();

  return (
    <>
      {/* HERO */}
      <section className="border-b border-border bg-bone py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div className="reveal order-2 lg:order-1">
              <Eyebrow>QMaster — Queue Management System</Eyebrow>
              <h1 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
                Manage queues.
                <br />
                <span className="text-muted-foreground">Organize every transaction.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                QMaster runs the floor for branches that serve thousands a day —
                ticketing, routing, displays, and analytics in one system.
                Deployed across 42 GSIS offices and counting.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
                >
                  Run a 7-day pilot <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#spec"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  See the spec sheet
                </a>
              </div>
            </div>

            <div className="reveal order-1 lg:order-2">
              <img
                src={heroImage}
                alt="QMaster queue management system showing kiosk and teller console"
                className="w-full rounded-3xl object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* TOP STATS */}
      <section className="border-b border-border bg-background py-14">
        <Container>
          <div className="grid gap-10 sm:grid-cols-3">
            {TOP_STATS.map((s) => (
              <div key={s.l}>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                  {s.l.split(" ")[0] === "Average" ? "Result" : "Footprint"}
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {s.k}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY MANAGE QUEUES */}
      <section className="border-b border-border bg-background py-20 sm:py-24">
        <Container>
          <div className="reveal max-w-3xl">
            <Eyebrow>Why QMaster</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Why manage your queues, when you can let them
              <br className="hidden sm:block" /> manage themselves.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {/* Big stat card */}
            <div className="rounded-3xl bg-brass/30 p-8 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink/70">
                Result after first month
              </p>
              <p className="mt-6 text-6xl font-semibold leading-none tracking-tight text-ink sm:text-7xl">
                20–<br />30%
              </p>
              <p className="mt-6 text-sm leading-relaxed text-ink/80">
                Faster average handling time. Customers know where they stand;
                tellers know what's coming next.
              </p>
            </div>

            <div className="rounded-3xl bg-cobalt/10 p-8 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-cobalt">
                Routing, automated
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Lines that re-route themselves
              </h3>
              <BarChart3 className="mt-6 h-12 w-12 text-cobalt" strokeWidth={1.5} />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Priority lanes for SC, PWD, and pregnant clients are built in.
                Overflow rolls to the next eligible window automatically.
              </p>
            </div>

            <div className="rounded-3xl bg-emerald-500/10 p-8 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-700">
                Branch-managed
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Counters that stay calibrated
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Window assignments, transaction types, and SLAs change without
                calling IT. Branch managers run the floor.
              </p>
              <div className="mt-6 rounded-xl border border-emerald-500/30 bg-background/60 p-3 text-xs text-foreground">
                <span className="font-medium">SLA · Cashier:</span> 4 m 30 s
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* QUOTE BANNER */}
      <section className="border-b border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="reveal mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-brass/40 via-brass/20 to-brass/40 p-10 sm:p-14">
            <div className="rounded-2xl bg-background/70 p-6 sm:p-8 backdrop-blur">
              <p className="text-base leading-relaxed text-foreground sm:text-lg">
                "Three branches, one Monday morning. Tellers stopped triaging
                lines and started serving customers. The line still formed —
                but it moved."
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Operations Lead · Government Service Insurance System
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* TIGHT GESTURES — PRODUCT SHOT */}
      <section className="border-b border-border bg-background py-20 sm:py-24">
        <Container>
          <div className="reveal flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>The teller console</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Tight gestures.
                <br />
                The entire floor.
              </h2>
            </div>
            <a
              href="#spec"
              className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline-flex"
            >
              View full spec →
            </a>
          </div>

          <div className="reveal mt-12 overflow-hidden rounded-3xl border border-border bg-foreground p-3 shadow-2xl sm:p-4">
            <div className="grid gap-3 rounded-2xl bg-foreground p-4 text-background sm:p-8 lg:grid-cols-[1.4fr_1fr]">
              <div className="rounded-xl bg-background/5 p-6 sm:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-background/60">
                  Now serving
                </p>
                <p className="mt-4 text-7xl font-semibold tracking-tight text-background sm:text-8xl">
                  A–046
                </p>
                <p className="mt-2 text-sm text-background/60">Window 02 · Cashier</p>
                <div className="mt-10 grid grid-cols-3 gap-2 text-xs sm:grid-cols-6">
                  {["Call Next", "Call Again", "Skip", "Grab", "Transfer", "Park"].map((b) => (
                    <button
                      key={b}
                      type="button"
                      className="rounded-md border border-background/15 bg-background/5 px-3 py-2 text-background/80 hover:bg-background/10"
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-background/5 p-6">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-background/60">
                  Up next
                </p>
                <ul className="mt-4 divide-y divide-background/10 text-sm">
                  {[
                    ["A–047", "Cashier"],
                    ["B–112", "Application"],
                    ["A–048", "Cashier"],
                    ["C–009", "Customer Service"],
                    ["A–049", "Cashier"],
                  ].map(([t, g]) => (
                    <li key={t} className="flex items-center justify-between py-3">
                      <span className="font-medium text-background">{t}</span>
                      <span className="text-background/60">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* VOCABULARY */}
      <section className="border-b border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="reveal grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div>
              <Eyebrow>Vocabulary</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                A small, opinionated vocabulary for the counter.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Every word in QMaster maps to a single action on the floor. New
                hires learn it in an afternoon. Supervisors keep using it years
                in.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {VOCABULARY.map((v, i) => {
                const tones = [
                  "bg-cobalt/10",
                  "bg-emerald-500/10",
                  "bg-brass/25",
                  "bg-rose-300/20",
                  "bg-violet-300/20",
                  "bg-amber-200/40",
                  "bg-sky-200/30",
                  "bg-lime-200/30",
                ];
                return (
                  <div key={v.word} className={`rounded-2xl p-5 ${tones[i % tones.length]}`}>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                      {v.word}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                      {v.def}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="reveal mx-auto mt-16 max-w-3xl rounded-3xl bg-amber-100 p-8 text-center sm:p-10">
            <p className="text-base leading-relaxed text-foreground sm:text-lg">
              Our average waiting time dropped 38% in the first quarter, and our
              customers — finally — stopped looking at their watches.
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              GSIS · Operations Review, FY 2024
            </p>
          </div>
        </Container>
      </section>

      {/* FIVE THINGS */}
      <section className="border-b border-border bg-background py-20 sm:py-24">
        <Container>
          <div className="reveal max-w-3xl">
            <Eyebrow>What matters past the pilot</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Five things that decide whether queue software stays installed past the pilot.
            </h2>
          </div>
          <div className="mt-12 grid gap-px border-t border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {FIVE_THINGS.map((f) => (
              <div key={f.n} className="bg-background p-6 sm:p-8">
                <p className="text-xs font-mono font-medium tracking-[0.22em] text-muted-foreground">
                  {f.n}
                </p>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TWO SCOREBOARDS */}
      <section className="border-b border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="reveal max-w-3xl">
            <Eyebrow>Two scoreboards</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Two scoreboards. Both improve.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              QMaster keeps separate views for the people serving and the people
              being served. Both move in the same direction.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <Gauge className="h-5 w-5 text-cobalt" />
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  Operations dashboard
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {SCOREBOARD_STAFF.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-foreground/20 bg-foreground p-8 text-background sm:p-10">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-brass" />
                <h3 className="text-lg font-semibold tracking-tight text-background">
                  Customer-facing display
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {SCOREBOARD_CUSTOMER.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-background/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* WORKFLOW */}
      <section className="border-b border-border bg-background py-20 sm:py-24">
        <Container>
          <div className="reveal grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div>
              <Eyebrow>Workflow</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Drag-and-drop workflow. No hard-coding required.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Build the path a ticket takes from kiosk to closed transaction
                visually. Branch managers iterate without filing a ticket of
                their own.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-5">
              {WORKFLOW_STEPS.map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <p className="text-xs font-mono font-medium tracking-[0.22em] text-cobalt">
                    {s.k}
                  </p>
                  <h3 className="mt-3 text-sm font-semibold text-foreground">
                    {s.t}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {s.b}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Summary cards */}
          <div className="reveal mt-14 grid gap-5 md:grid-cols-3">
            {SUMMARY_CARDS.map((c) => (
              <div
                key={c.title}
                className={`rounded-3xl border bg-gradient-to-br p-8 ${c.tone}`}
              >
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/70">
                  {c.eyebrow}
                </p>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SPEC SHEET */}
      <section id="spec" className="border-b border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="reveal max-w-3xl">
            <Eyebrow>Spec sheet</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              The full spec sheet.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Everything that ships in the box, in one place. No upsell tiers
              that hide the features you actually need.
            </p>
          </div>
          <div className="mt-12 grid gap-px border-t border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {SPEC_SHEET.map(([k, v]) => (
              <div key={k} className="bg-bone p-5">
                <p className="text-sm font-semibold text-foreground">{k}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* NUMBERS */}
      <section className="border-b border-border bg-background py-20 sm:py-24">
        <Container>
          <div className="reveal grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
            <div>
              <Eyebrow>Numbers</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Numbers that make Monday morning interesting.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Every counter action is timestamped. The dashboards compose
              themselves — by hour, by teller, by branch — and roll up to head
              office without a single manual export.
            </p>
          </div>

          <div className="reveal mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-3xl bg-foreground p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-background/60">
                Tickets served · this week
              </p>
              <div className="mt-6 flex h-44 items-end gap-2 sm:gap-3">
                {[40, 65, 55, 78, 92, 70, 60, 88, 95, 72, 68, 82].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className={`flex-1 rounded-t-md ${
                      i % 3 === 0 ? "bg-cobalt" : "bg-background/30"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              {NUMBERS.map((n, i) => (
                <div
                  key={n.l}
                  className={`rounded-2xl p-6 ${
                    i === 0
                      ? "bg-amber-100"
                      : i === 1
                      ? "bg-background border border-border"
                      : "bg-emerald-100"
                  }`}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    {i === 0 ? "Throughput" : i === 1 ? "Wait" : "Span of control"}
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                    {n.k}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{n.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {NUMBER_BULLETS.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* INDUSTRIES */}
      <section className="border-b border-border bg-bone py-16 sm:py-20">
        <Container>
          <div className="reveal text-center">
            <Eyebrow className="justify-center">Wherever a line forms</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              QMaster runs the floor in every place that serves at a counter.
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-6">
            {INDUSTRIES.map((i) => (
              <div
                key={i.l}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-3 py-6"
              >
                <i.icon className="h-6 w-6 text-cobalt" strokeWidth={1.5} />
                <span className="text-xs font-medium text-foreground">{i.l}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* RUN A PILOT */}
      <section className="bg-background py-20 sm:py-24">
        <Container>
          <div className="reveal overflow-hidden rounded-3xl bg-cobalt p-10 text-background sm:p-14">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-background/70">
                  Pilot offer
                </p>
                <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-background sm:text-5xl">
                  Run a pilot in seven days.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-background/80">
                  Pick one branch. We'll handle the survey, hardware staging,
                  configuration, and training. You handle the customers — they'll
                  notice the difference by Friday.
                </p>
                <p className="mt-6 text-5xl font-semibold tracking-tight text-background">
                  ₱0
                  <span className="ml-2 align-middle text-sm font-normal text-background/70">
                    setup for the first 7 days
                  </span>
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-brass px-5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:brightness-95"
                  >
                    Book the pilot <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-background/30 px-5 text-sm font-medium text-background hover:bg-background/10"
                  >
                    Talk to sales
                  </Link>
                </div>
              </div>
              <ul className="space-y-3 rounded-2xl bg-background/10 p-6 backdrop-blur">
                {[
                  "Site survey and floor mapping",
                  "Hardware staging and config",
                  "Teller and supervisor training",
                  "Live counter by day seven",
                ].map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-background">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brass" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-bone py-20 sm:py-24">
        <Container>
          <div className="reveal max-w-3xl">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Frequently asked questions.
            </h2>
          </div>
          <div className="reveal mt-10 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <CtaBand
        eyebrow="See it on your floor"
        title="See QMaster run on your floor."
        body="Walk through the teller console, the kiosk flow, and the supervisor dashboard with our team. Live demo, your branch's numbers."
        ctaLabel="Request a Demo"
        to="/contact"
      />
    </>
  );
}
