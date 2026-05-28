import { createFileRoute } from "@tanstack/react-router";
import { JobDetail, jobHead } from "@/components/JobDetail";
import { getJob } from "@/lib/jobs";

const SLUG = "qa-tester-automation";

export const Route = createFileRoute("/careers/qa-tester-automation")({
  head: () => jobHead(SLUG),
  component: () => {
    const job = getJob(SLUG)!;
    return <JobDetail job={job} />;
  },
});
