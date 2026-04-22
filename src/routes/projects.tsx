import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { PROJECTS } from "@/lib/site";

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
            title="Trusted by Philippine government agencies and private companies."
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
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
