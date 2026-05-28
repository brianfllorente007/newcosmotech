import { createFileRoute } from "@tanstack/react-router";
import { JobDetail, jobHead } from "@/components/JobDetail";
import { getJob } from "@/lib/jobs";

const SLUG = "account-management-trainee";

export const Route = createFileRoute("/careers/account-management-trainee")({
  head: () => jobHead(SLUG),
  component: () => {
    const job = getJob(SLUG)!;
    return <JobDetail job={job} />;
  },
});
