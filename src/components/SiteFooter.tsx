import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin } from "lucide-react";
import { Container } from "./Container";
import { PRODUCTS, SITE } from "@/lib/site";
import logo from "@/assets/logo-cosmotech.png";
import certSocotec from "@/assets/cert-socotec-iso9001.webp";
import certNpc from "@/assets/cert-npc-dpo.webp";
import certIso27001 from "@/assets/cert-iso-27001.webp";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/70 bg-ink text-ink-foreground">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img src={logo} alt="Cosmotech Philippines" className="h-12 w-auto md:h-14" />
            <p className="mt-4 max-w-xs text-sm text-ink-foreground/70">
              People management, queueing, helpdesk, and document tracking software built in the
              Philippines, since 1994.
            </p>
            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-foreground/60">
                Certifications
              </h3>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <img
                  src={certSocotec}
                  alt="SOCOTEC ISO 9001 and PAB accredited QMS certification body — Certificate No. SCP000931QM"
                  loading="lazy"
                  decoding="async"
                  width="120"
                  height="94"
                  className="h-20 w-auto rounded-md bg-bone p-2"
                />
                <img
                  src={certIso27001}
                  alt="ISO 27001:2022 Certified"
                  loading="lazy"
                  decoding="async"
                  width="74"
                  height="80"
                  className="h-20 w-auto rounded-md bg-bone p-2"
                />
                <img
                  src={certNpc}
                  alt="National Privacy Commission DPO/DPS Registered"
                  loading="lazy"
                  decoding="async"
                  width="43"
                  height="80"
                  className="h-20 w-auto rounded-md bg-bone p-2"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-foreground/60">
              Products
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={p.slug === "integrahris" ? "/integrahris-365" : "/solutions/$slug"}
                    params={p.slug === "integrahris" ? undefined : { slug: p.slug }}
                    className="text-ink-foreground/85 hover:text-ink-foreground"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-foreground/60">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="text-ink-foreground/85 hover:text-ink-foreground">About</Link></li>
              <li><Link to="/projects" className="text-ink-foreground/85 hover:text-ink-foreground">Projects</Link></li>
              <li><Link to="/contact" className="text-ink-foreground/85 hover:text-ink-foreground">Contact</Link></li>
              <li><Link to="/privacy" className="text-ink-foreground/85 hover:text-ink-foreground">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-foreground/60">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/85">
              <li>{SITE.address}</li>
              <li>Tel: {SITE.phone}</li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-ink-foreground">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.facebook.com/cosmotechph"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cosmotech on Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-ink-foreground/80 transition hover:border-white/40 hover:text-ink-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/cosmotech-philippines-inc-/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cosmotech on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-ink-foreground/80 transition hover:border-white/40 hover:text-ink-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 mx-auto max-w-3xl text-center text-xs leading-relaxed text-ink-foreground/55">
          {SITE.aeo}
        </p>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center">
          <p>© {year} Cosmotech Philippines, Inc. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
