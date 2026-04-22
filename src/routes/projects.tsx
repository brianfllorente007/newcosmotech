import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { SectionHeading, Eyebrow } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { LogoWall } from "@/components/LogoWall";
import { PROJECTS } from "@/lib/site";
import { ALL_CLIENT_LOGOS } from "@/lib/logos";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Cosmotech Philippines" },
      {
        name: "description",
        content:
          "Selected work for Philippine government agencies and enterprises: GSIS, BOC, DPWH, PPA, ERC, NTC, PDIC, DENR and more.",
      },
      { property: "og:title", content: "Projects — Cosmotech Philippines" },
      {
        property: "og:description",
        content:
          "A sample of HRIS, queue management, biometrics, and document systems we've delivered to Philippine government and enterprise clients.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const government = PROJECTS.filter((p) => p.sector === "Government");
  const enterprise = PROJECTS.filter((p) => p.sector === "Enterprise");

  return (
    <>
      <section className="border-b border-border bg-bone py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Selected work"
            title={<>Trusted by Philippine government agencies and private companies.</>}
            intro="We have delivered projects for some of the largest government institutions in the country. Here's a sample of what we've built and deployed."
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
            Government
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {government.map((p) => (
              <ProjectCard key={p.agency + p.scope} project={p} />
            ))}
          </div>

          {enterprise.length > 0 && (
            <>
              <h2 className="mt-16 text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
                Enterprise
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {enterprise.map((p) => (
                  <ProjectCard key={p.agency + p.scope} project={p} />
                ))}
              </div>
            </>
          )}

          <div className="mt-20">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <Eyebrow className="justify-center">Selected clients</Eyebrow>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Organizations that trust Cosmotech.
              </h2>
            </div>
            <LogoWall logos={ALL_CLIENT_LOGOS} cols="compact" />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
