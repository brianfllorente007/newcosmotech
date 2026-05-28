import { createFileRoute } from "@tanstack/react-router";
import { JobDetail, jobHead } from "@/components/JobDetail";
import { getJob } from "@/lib/jobs";

const SLUG = "backend-developer";

export const Route = createFileRoute("/careers/backend-developer")({
  head: () => jobHead(SLUG),
  component: () => {
    const job = getJob(SLUG)!;
    return <JobDetail job={job} />;
  },
});
