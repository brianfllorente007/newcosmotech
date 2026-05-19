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
  const Heading = headingLevel;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
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
            className="rounded-3xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="company">Company / agency</Label>
                <Input id="company" name="company" required className="mt-1.5" />
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required className="mt-1.5" />
            </div>
            <div className="mt-4">
              <Label htmlFor="message">How can we help?</Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-1.5"
                placeholder="Tell us about your operations, what you're using today, and what you'd like to improve."
              />
            </div>
            <Button type="submit" disabled={submitting} className="mt-6 w-full sm:w-auto">
              {submitting ? "Sending…" : "Send message"}
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              By sending, you agree to be contacted by Cosmotech Philippines about your inquiry.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
