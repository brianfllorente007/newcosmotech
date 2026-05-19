import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cosmotech Philippines" },
      {
        name: "description",
        content:
          "Talk to Cosmotech Philippines. Office in Makati City. Tel (02) 8403-9811 to 12. Email sales@cosmotech.com.ph.",
      },
      { property: "og:title", content: "Contact — Cosmotech Philippines" },
      {
        property: "og:description",
        content:
          "Office: 7761 Saint Paul St., San Antonio Village, Makati City. We'd love to hear about your project.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <ContactSection headingLevel="h1" />;
}
