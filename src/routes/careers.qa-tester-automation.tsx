import { createFileRoute } from "@tanstack/react-router";
import { JobDetailPage } from "@/components/JobDetailPage";
import { jobHead } from "@/components/JobDetail";
import { getJob } from "@/lib/jobs";

const SLUG = "qa-tester-automation";

export const Route = createFileRoute("/careers/qa-tester-automation")({
  head: () => jobHead(SLUG),
  component: () => (
    <JobDetailPage
      job={getJob(SLUG)!}
      detailsHeading="Design automated testing that ships reliable web, mobile, and API products."
      applyCopy="Send your CV and a short note about your automation experience for the QA Tester role."
    />
  ),
});
