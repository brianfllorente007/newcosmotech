import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, LifeBuoy, Lock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading, Eyebrow } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { ContactSection } from "@/components/ContactSection";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

import logoPpa from "@/assets/logos/clients/ppa.webp";
import logoDfa from "@/assets/logos/clients/dfa.webp";
import logoBoc from "@/assets/logos/clients/boc.webp";
import logoNtc from "@/assets/logos/clients/ntc.webp";
import logoLandbank from "@/assets/logos/clients/landbank.webp";
import logoBir from "@/assets/logos/clients/bir.webp";
import logoErc from "@/assets/logos/agencies/erc.webp";
import logoBsp from "@/assets/logos/clients/bsp.png";
import logoFab from "@/assets/logos/clients/fab.webp";
import logoCosmotech from "@/assets/cosmotech-logo.png";
import logoOlms from "@/assets/logos/clients/denr.png.asset.json";
import logoNcmh from "@/assets/logos/clients/ncmh.png.asset.json";
import logoUz from "@/assets/logos/clients/uz.webp.asset.json";

type ClientTile = {
  name: string;
  shortName?: string;
  portal: string;
  logo?: string;
  placeholder?: boolean;
};

const CLIENTS: ClientTile[] = [
  {
    name: "Philippine Ports Authority",
    shortName: "PPA",
    portal: "https://helpdesk-ppa.integrahris.com/",
    logo: logoPpa,
  },
  {
    name: "Department of Foreign Affairs",
    shortName: "DFA",
    portal: "https://helpdesk-dfa.integrahris.com/",
    logo: logoDfa,
  },
  {
    name: "Department of Finance — Bureau of Customs",
    shortName: "BOC",
    portal: "https://cosmotech-helpdesk.integrahris.com/Login/Index?ReturnUrl=%2F",
    logo: logoBoc,
  },
  {
    name: "National Telecommunications Commission",
    shortName: "NTC",
    portal: "https://helpdesk-ntc.integrahris.com/",
    logo: logoNtc,
  },
  {
    name: "Landbank",
    portal: "https://helpdesk-lbp.integrahris.com/",
    logo: logoLandbank,
  },
  {
    name: "Bureau of Internal Revenue",
    shortName: "BIR",
    portal: "https://helpdesk-bir.integrahris.com/Login/Index?ReturnUrl=%2F",
    logo: logoBir,
  },
  {
    name: "Energy Regulatory Commission",
    shortName: "ERC",
    portal: "https://helpdesk-erc.integrahris.com/Login/Index?ReturnUrl=%2F",
    logo: logoErc,
  },
  {
    name: "Bangko Sentral ng Pilipinas",
    shortName: "BSP",
    portal: "https://helpdesk-bsp.integrahris.com/Login/Index?ReturnUrl=%2F",
    logo: logoBsp,
  },
  {
    name: "Freeport Area of Bataan",
    shortName: "FAB",
    portal: "https://helpdesk-afab.integrahris.com/Login/Index?ReturnUrl=%2F",
    logo: logoFab,
  },
  {
    name: "Online Leave Management System",
    shortName: "OLMS",
    portal: "https://helpdesk-olms.integrahris.com/Login/Index?ReturnUrl=%2F",
    logo: logoOlms.url,
  },
  {
    name: "National Center for Mental Health",
    shortName: "NCMH",
    portal: "https://helpdesk-ncmh.integrahris.com/Login/Index?ReturnUrl=%2F",
    logo: logoNcmh.url,
  },
  {
    name: "Universidad de Zamboanga",
    shortName: "UZ",
    portal: "https://helpdesk-uz.integrahris.com/Login/Index?ReturnUrl=%2F",
    logo: logoUz.url,
  },
  {
    name: "Other clients",
    shortName: "Others",
    portal: "https://cosmotech-helpdesk.integrahris.com/Login/Index?ReturnUrl=%2F",
    logo: logoCosmotech,
  },
];

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      {
        title: "Support Portal — Client HelpDesk Access | Cosmotech Philippines",
      },
      {
        name: "description",
        content:
          "Access dedicated HelpDesk portals for Cosmotech's government and enterprise clients — PPA, DFA, BOC, NTC, Landbank, BIR, ERC, BSP, FAB, and more.",
      },
      {
        property: "og:title",
        content: "Support Portal — Client HelpDesk Access",
      },
      {
        property: "og:description",
        content:
          "Sign in to your organization's dedicated Cosmotech HelpDesk portal for tickets, service requests, and technical support.",
      },
    ],
  }),
  component: SupportPage,
});

function ClientCard({ client }: { client: ClientTile }) {
  const label = client.shortName ?? client.name;

  return (
    <a
      href={client.portal}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${client.name} support portal (opens in a new tab)`}
      className={cn(
        "group relative flex h-44 flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300",
        "hover:-translate-y-1 hover:border-cobalt/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
    >
      {client.placeholder ? (
        <div className="flex h-20 w-full flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-border bg-muted/40 px-3 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Logo placeholder
          </span>
          <span className="text-xs font-medium text-foreground">{label}</span>
        </div>
      ) : (
        <div className="flex h-20 w-full items-center justify-center px-3">
          <img
            src={client.logo}
            alt={`${client.name} logo`}
            loading="lazy"
            className="max-h-16 w-auto max-w-[180px] object-contain"
          />
        </div>
      )}

      <div className="flex w-full items-center justify-between gap-2">
        <p className="truncate text-sm font-medium text-foreground" title={client.name}>
          {label}
        </p>
        <ArrowRight className="h-4 w-4 shrink-0 text-cobalt opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
      </div>
    </a>
  );
}

function SupportPage() {
  useReveal();

  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden border-b border-border bg-ink py-20 text-bone sm:py-28"
        style={{
          background:
            "linear-gradient(180deg, #02070D 0%, #071B32 50%, #174A82 100%)",
        }}
      >
        <Container className="relative">
          <div className="reveal mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center text-bone/70">Support portal</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Sign in to your HelpDesk portal
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-bone/75 sm:text-lg">
              Each Cosmotech client runs on a dedicated, secure HelpDesk environment. Pick your
              organization below to open its portal — for tickets, service requests, and technical
              support.
            </p>
          </div>
        </Container>
      </section>

      {/* CLIENT GRID */}
      <section className="py-16 sm:py-20 md:py-24">
        <Container>
          <div className="reveal">
            <SectionHeading
              eyebrow="Client portals"
              title={<>Select your organization</>}
              intro="Click your agency's logo to open its dedicated HelpDesk login. Each portal is isolated to its organization for security and audit compliance."
            />
          </div>

          <div className="reveal mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {CLIENTS.map((client) => (
              <ClientCard key={client.name + client.portal} client={client} />
            ))}
          </div>
        </Container>
      </section>

      {/* TRUST / REASSURANCE */}
      <section className="bg-cobalt/5 py-16 sm:py-20">
        <Container>
          <div className="reveal grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Isolated environments",
                body: "Each client portal runs on a dedicated instance, so data, users, and audit logs never cross organizations.",
              },
              {
                icon: Lock,
                title: "Secure sign-in",
                body: "Two-Factor Authentication, configurable password policy, and a full activity audit trail on every account.",
              },
              {
                icon: LifeBuoy,
                title: "Real human support",
                body: "Behind every portal is a Cosmotech support team that knows your deployment, your users, and your workflows.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-3xl border border-border bg-card p-7 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cobalt/10 text-cobalt">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* HELP / NOT SURE */}
      <section className="border-t border-border bg-bone py-16 sm:py-20">
        <Container>
          <div className="reveal mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">Can't find your portal?</Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Reach out and we'll point you to the right one.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              If your organization isn't listed above, or you're unsure which portal to use, our
              team can route you to the right environment and help you get signed in.
            </p>
          </div>
        </Container>
      </section>

      <CtaBand />

      <div className="reveal">
        <ContactSection />
      </div>
    </>
  );
}
