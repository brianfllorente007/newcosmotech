import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { SectionHeading, Eyebrow } from "@/components/SectionHeading";
import { FeatureCheckList } from "@/components/FeatureCheckList";
import { CtaBand } from "@/components/CtaBand";
import { WhyCosmotech } from "@/components/WhyCosmotech";
import { SITE } from "@/lib/site";
import ourClientsImg from "@/assets/our-clients.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cosmotech Philippines" },
      {
        name: "description",
        content:
          "Cosmotech Philippines is a Makati-based IT solutions provider founded in 1994, building people management, queueing, helpdesk, and document tracking software for Philippine government and enterprise.",
      },
      { property: "og:title", content: "About — Cosmotech Philippines" },
      {
        property: "og:description",
        content:
          "Founded in 1994. People management, queueing, helpdesk and document tracking software for Philippine workplaces.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-bone py-20 sm:py-28">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>About Cosmotech</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Your technology partner in the Philippines since 1994.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We started in 1994 as a hardware and software integrator. Over the decades we've
              grown into a full-service technology company serving both private businesses and
              government agencies across the Philippines. Today our work spans cloud-based
              software, AI-powered systems, smart office solutions, and enterprise software
              development.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-bone py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Our Vision</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Our vision is to lead in the development of human-centric solutions that transform the way we work.
              </h2>
            </div>
            <div>
              <Eyebrow>Our Mission</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Our mission is to drive relentless tech innovation, deliver VIP client experiences and cultivate creativity in a vibrant work environment all while ensuring continuous profitability for our shareholders.
              </h2>
            </div>
          </div>
        </Container>
      </section>

      <WhyCosmotech />

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="How we work"
                title={<>One team, end-to-end.</>}
                intro="We handle the full project lifecycle — so you don't have to coordinate three vendors to deliver one system."
              />
              <FeatureCheckList
                items={[
                  "Requirements gathering and assessment",
                  "System design and architecture",
                  "Installation and integration",
                  "Training for your staff",
                  "Post-implementation support and maintenance",
                ]}
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="What we do"
                title={<>Modern capabilities, local fit.</>}
                intro="Every solution we ship is built with Philippine compliance, language, and operating realities in mind."
              />
              <FeatureCheckList
                items={[
                  "Cloud-based and on-premise software",
                  "AI-powered automation",
                  "Smart office and IoT solutions",
                  "Enterprise software development",
                  "Biometrics and facial recognition systems",
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-bone py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Eyebrow className="justify-center">Trusted partners</Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              A short list of organizations we work with.
            </h2>
          </div>
          <img
            src={ourClientsImg}
            alt="Logos of organizations Cosmotech works with"
            className="mx-auto h-auto w-full max-w-6xl"
            loading="lazy"
          />
          <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            {SITE.aeo}
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
