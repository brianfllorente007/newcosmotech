import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/cosmotech-logo.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const loc = useLocation();
  const isHome = loc.pathname === "/";

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent only on home + at top of page (after mount, to avoid SSR mismatch)
  const transparent = mounted && isHome && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        transparent
          ? "border-b border-transparent bg-transparent text-bone"
          : "border-b border-border/60 bg-background/85 text-foreground backdrop-blur supports-[backdrop-filter]:bg-background/70",
      )}
    >
      <Container className="flex h-20 items-center gap-8 pt-3 md:h-24 md:pt-4">
        <Link to="/" className="flex items-center" aria-label="Cosmotech Philippines home">
          <img src={logo} alt="Cosmotech Philippines" className="h-10 w-auto md:h-12" />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 min-[480px]:flex sm:gap-7"
          aria-label="Primary"
        >
          {NAV.filter((n) => n.to !== "/contact").map((n) => {
            const active = loc.pathname === n.to || (n.to !== "/" && loc.pathname.startsWith(n.to));
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
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-2 py-2 text-sm",
                  transparent ? "text-bone hover:bg-bone/10" : "text-foreground hover:bg-muted",
                )}
              >
                {n.label}
              </Link>
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
