import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/site";
import dpoBadge from "@/assets/dpo-dps-badge.png";

export function ContactSection({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const Heading = headingLevel;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent. We'll be in touch within 1 business day.");
    }, 600);
  }

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <Heading className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Tell us about your project.
            </Heading>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Whether you're modernizing a paper-based process or extending an existing system,
              our team can help. Send us a note and we'll respond within one business day.
            </p>

            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-cobalt" />
                <span className="text-foreground/85">{SITE.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-cobalt" />
                <span className="text-foreground/85">{SITE.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-cobalt" />
                <a href={`mailto:${SITE.email}`} className="text-foreground/85 hover:text-cobalt">
                  {SITE.email}
                </a>
              </li>
            </ul>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Cosmotech Philippines office map"
                src="https://www.google.com/maps?q=7761+St+Paul+St,+San+Antonio+Village,+Makati,+Metro+Manila&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-muted/40 p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] sm:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cobalt/10 blur-3xl"
            />
            <div className="relative">
              <div className="mb-8">
                <Eyebrow>Start a conversation</Eyebrow>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Send us a brief.
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share a few details and we'll get back within one business day.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">
                    Full name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Juan dela Cruz"
                    className="h-12 rounded-xl border-border/70 bg-background/70 px-4 text-base shadow-none focus-visible:ring-2 focus-visible:ring-cobalt/40"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-xs uppercase tracking-wider text-muted-foreground">
                    Company / agency
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    required
                    placeholder="Cosmotech Philippines"
                    className="h-12 rounded-xl border-border/70 bg-background/70 px-4 text-base shadow-none focus-visible:ring-2 focus-visible:ring-cobalt/40"
                  />
                </div>
              </div>

              <div className="mt-5 space-y-1.5">
                <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">
                  Work email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="h-12 rounded-xl border-border/70 bg-background/70 px-4 text-base shadow-none focus-visible:ring-2 focus-visible:ring-cobalt/40"
                />
              </div>

              <div className="mt-5 space-y-1.5">
                <Label htmlFor="product" className="text-xs uppercase tracking-wider text-muted-foreground">
                  Please select a product to inquire
                </Label>
                <select
                  id="product"
                  name="product"
                  required
                  defaultValue=""
                  className="flex h-12 w-full rounded-xl border border-border/70 bg-background/70 px-4 text-base shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt/40"
                >
                  <option value="" disabled>Select a product</option>
                  <option value="Custom Solution">Custom Solution</option>
                  <option value="IntegraHRIS365">IntegraHRIS365</option>
                  <option value="IntegraHRIS Government">IntegraHRIS Government</option>
                  <option value="QMaster">QMaster</option>
                  <option value="Docutrakr">Docutrakr</option>
                  <option value="Helpdesk">Helpdesk</option>
                  <option value="URateMe">URateMe</option>
                  <option value="Asset Management System">Asset Management System</option>
                  <option value="Government Procurement Management System">Government Procurement Management System</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="mt-5 space-y-1.5">
                <Label htmlFor="source" className="text-xs uppercase tracking-wider text-muted-foreground">
                  How did you find our services?
                </Label>
                <Input
                  id="source"
                  name="source"
                  placeholder="Web Search, Facebook, Email, Old Customer, Referral, Others"
                  className="h-12 rounded-xl border-border/70 bg-background/70 px-4 text-base shadow-none focus-visible:ring-2 focus-visible:ring-cobalt/40"
                />
              </div>

              <div className="mt-5 space-y-1.5">
                <Label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">
                  How can we help?
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your operations, what you're using today, and what you'd like to improve."
                  className="rounded-xl border-border/70 bg-background/70 px-4 py-3 text-base shadow-none focus-visible:ring-2 focus-visible:ring-cobalt/40"
                />
              </div>


              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  type="submit"
                  disabled={submitting}
                  size="lg"
                  className="group h-12 rounded-xl px-6 text-sm font-semibold tracking-wide"
                >
                  {submitting ? "Sending…" : (
                    <>
                      Send message
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </Button>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                By sending, you agree to be contacted by Cosmotech Philippines about your inquiry.
              </p>

              {submitted && (
                <p className="mt-3 rounded-lg bg-cobalt/10 px-4 py-3 text-sm font-medium text-cobalt">
                  Thank you for reaching out! A representative from our team will contact you shortly.
                </p>
              )}

              <div className="mt-10 flex items-center gap-4 border-t border-border/60 pt-6">
                <img
                  src={dpoBadge}
                  alt="National Privacy Commission DPO/DPS Registered badge"
                  loading="lazy"
                  className="h-24 w-auto shrink-0"
                />
                <div className="text-xs leading-relaxed text-muted-foreground">
                  <p className="font-semibold uppercase tracking-wider text-foreground">
                    NPC Registered
                  </p>
                  <p className="mt-1">
                    Cosmotech Philippines, Inc. is registered with the National Privacy Commission for its Data Protection Officer (DPO) and Data Processing Systems (DPS) in compliance with the Data Privacy Act of 2012.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
