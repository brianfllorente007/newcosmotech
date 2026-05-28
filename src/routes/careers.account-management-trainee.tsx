import { createFileRoute } from "@tanstack/react-router";
import { JobDetailPage } from "@/components/JobDetailPage";
import { jobHead } from "@/components/JobDetail";
import { getJob } from "@/lib/jobs";

const SLUG = "account-management-trainee";

export const Route = createFileRoute("/careers/account-management-trainee")({
  head: () => jobHead(SLUG),
  component: () => (
    <JobDetailPage
      job={getJob(SLUG)!}
      detailsHeading="Grow into a client-facing sales and account management role."
      applyCopy="Send your CV and a short note about why you'd be a great fit for the Account Management Trainee role."
    />
  ),
});
