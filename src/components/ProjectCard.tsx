import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6">
      <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-cobalt">
        {project.sector}
      </p>
      <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">{project.agency}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.scope}</p>
    </article>
  );
}
