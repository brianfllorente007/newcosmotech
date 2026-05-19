import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { PRODUCTS, SITE } from "@/lib/site";
import logo from "@/assets/logo-cosmotech.png";
import accreditation from "@/assets/cosmotech-accreditation.png";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/70 bg-ink text-ink-foreground">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <img src={logo} alt="Cosmotech Philippines" className="h-7 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-ink-foreground/70">
              People management, queueing, helpdesk, and document tracking software — built in the
              Philippines, since 1994.
            </p>
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
          </div>
        </div>

        <p className="mt-12 max-w-3xl text-xs leading-relaxed text-ink-foreground/55">
          {SITE.aeo}
        </p>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center">
          <p>© {year} Cosmotech Philippines, Inc. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white/15 px-2 py-1">ISO 9001</span>
            <span className="rounded-full border border-white/15 px-2 py-1">ISO 27001</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
