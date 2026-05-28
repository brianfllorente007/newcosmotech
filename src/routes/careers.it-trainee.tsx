import { createFileRoute } from "@tanstack/react-router";
import { JobDetail, jobHead } from "@/components/JobDetail";
import { getJob } from "@/lib/jobs";

const SLUG = "it-trainee";

export const Route = createFileRoute("/careers/it-trainee")({
  head: () => jobHead(SLUG),
  component: () => {
    const job = getJob(SLUG)!;
    return <JobDetail job={job} />;
  },
});
