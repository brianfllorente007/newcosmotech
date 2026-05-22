import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-cobalt">
          {project.sector}
        </p>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">{project.agency}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.scope}</p>
      </div>
      {project.logo ? (
        <img
          src={project.logo}
          alt={`${project.agency} logo`}
          loading="lazy"
          className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
        />
      ) : null}
    </article>
  );
}
