import { createFileRoute } from "@tanstack/react-router";
import { JobDetailPage } from "@/components/JobDetailPage";
import { jobHead } from "@/components/JobDetail";
import { getJob } from "@/lib/jobs";

const SLUG = "backend-developer";

export const Route = createFileRoute("/careers/backend-developer")({
  head: () => jobHead(SLUG),
  component: () => (
    <JobDetailPage
      job={getJob(SLUG)!}
      detailsHeading="Build secure, high-performance backend systems for enterprise platforms."
      applyCopy="Send your CV, a short intro, and links to relevant work for the Back-end Developer role."
    />
  ),
});
