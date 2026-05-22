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
        <div className="flex h-16 w-16 shrink-0 items-center justify-center sm:h-20 sm:w-20">
          <img
            src={project.logo}
            alt={`${project.agency} logo`}
            loading="lazy"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ) : null}
    </article>
  );
}
