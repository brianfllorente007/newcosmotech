import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "./Container";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/cosmotech-logo.png";

const SOLUTIONS_DROPDOWN = [
  { to: "/integrahris-365", label: "IntegraHRIS 365" },
  { to: "/integrahris-government", label: "IntegraHRIS Government" },
  { to: "/qmaster", label: "QMaster" },
  { to: "/helpdesk", label: "HelpDesk" },
  { to: "/docutrakr", label: "Docutrakr" },
  { to: "/urateme", label: "URateMe" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const loc = useLocation();
  const isHome = loc.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        transparent
          ? "border-b border-transparent bg-transparent text-bone"
          : "border-b border-white/10 bg-ink/90 text-bone backdrop-blur supports-[backdrop-filter]:bg-ink/80",
      )}
    >
      <Container className="flex h-24 items-center gap-8 pt-3 md:h-28 md:pt-4">
        <Link to="/" className="flex items-center" aria-label="Cosmotech Philippines home">
          <img src={logo} alt="Cosmotech Philippines" className="h-14 w-auto md:h-16" />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 min-[480px]:flex sm:gap-7"
          aria-label="Primary"
        >
          {NAV.filter((n) => n.to !== "/contact").map((n) => {
            const active = loc.pathname === n.to || (n.to !== "/" && loc.pathname.startsWith(n.to));

            if (n.to === "/solutions") {
              const dropdownActive =
                active || SOLUTIONS_DROPDOWN.some((d) => loc.pathname.startsWith(d.to));
              return (
                <div
                  key={n.to}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <Link
                    to={n.to}
                    className={cn(
                      "inline-flex items-center gap-1 text-sm transition-colors",
                      transparent
                        ? "text-bone/80 hover:text-bone"
                        : "text-muted-foreground hover:text-foreground",
                      dropdownActive && (transparent ? "text-bone" : "text-foreground"),
                    )}
                  >
                    {n.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  {solutionsOpen && (
                    <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3">
                      <div className="overflow-hidden rounded-xl border border-border bg-background py-2 shadow-lg">
                        {SOLUTIONS_DROPDOWN.map((d) => (
                          <Link
                            key={d.to}
                            to={d.to}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                          >
                            {d.label}
                          </Link>
                        ))}
                        <div className="my-1 border-t border-border" />
                        <Link
                          to="/solutions"
                          className="block px-4 py-2 text-sm font-medium text-cobalt hover:bg-muted"
                        >
                          View all solutions →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "text-sm transition-colors",
                  transparent
                    ? "text-bone/80 hover:text-bone"
                    : "text-muted-foreground hover:text-foreground",
                  active && (transparent ? "text-bone" : "text-foreground"),
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden min-[480px]:block">
          <Link
            to="/contact"
            className={cn(
              "inline-flex h-9 items-center rounded-full px-4 text-sm font-medium transition-all hover:brightness-95",
              transparent
                ? "bg-brass text-ink"
                : "bg-foreground text-background hover:opacity-90",
            )}
          >
            Talk to our team
          </Link>
        </div>

        <button
          className={cn(
            "ml-auto inline-flex h-9 w-9 items-center justify-center rounded-md border min-[480px]:hidden",
            transparent ? "border-bone/40 text-bone" : "border-border",
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </Container>

      {open && (
        <div
          className={cn(
            "border-t min-[480px]:hidden",
            transparent ? "border-bone/20 bg-ink/90 backdrop-blur" : "border-border bg-background",
          )}
        >
          <Container className="flex flex-col gap-1 py-3">
            {NAV.map((n) => (
              <div key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-2 py-2 text-sm",
                    transparent ? "text-bone hover:bg-bone/10" : "text-foreground hover:bg-muted",
                  )}
                >
                  {n.label}
                </Link>
                {n.to === "/solutions" && (
                  <div className="ml-3 flex flex-col gap-1 border-l border-border/40 pl-3">
                    {SOLUTIONS_DROPDOWN.map((d) => (
                      <Link
                        key={d.to}
                        to={d.to}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "rounded-md px-2 py-1.5 text-sm",
                          transparent
                            ? "text-bone/80 hover:bg-bone/10"
                            : "text-muted-foreground hover:bg-muted",
                        )}
                      >
                        {d.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-brass px-4 text-sm font-medium text-ink hover:brightness-95"
            >
              Talk to our team
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
