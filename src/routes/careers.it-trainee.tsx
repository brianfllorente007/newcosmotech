import { createFileRoute } from "@tanstack/react-router";
import { JobDetailPage } from "@/components/JobDetailPage";
import { jobHead } from "@/components/JobDetail";
import { getJob } from "@/lib/jobs";

const SLUG = "it-trainee";

export const Route = createFileRoute("/careers/it-trainee")({
  head: () => jobHead(SLUG),
  component: () => (
    <JobDetailPage
      job={getJob(SLUG)!}
      detailsHeading="Launch a multi-disciplinary IT career with real hands-on training."
      applyCopy="Send your CV and a short note about why you'd thrive in the IT Trainee program."
    />
  ),
});
