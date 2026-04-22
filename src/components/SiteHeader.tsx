import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/cosmotech-logo.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Cosmotech Philippines home">
          <img
            src={logo}
            alt="Cosmotech Philippines"
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((n) => {
            const active = loc.pathname === n.to || (n.to !== "/" && loc.pathname.startsWith(n.to));
            return (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "text-sm text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-foreground",
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex h-9 items-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Talk to our team
          </Link>
        </div>

        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-foreground hover:bg-muted"
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
