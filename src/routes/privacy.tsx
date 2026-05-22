import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Cosmotech Philippines" },
      {
        name: "description",
        content:
          "How Cosmotech Philippines, Inc. collects, uses, and protects your information when you visit our website.",
      },
      { property: "og:title", content: "Privacy Policy — Cosmotech Philippines" },
      {
        property: "og:description",
        content:
          "How Cosmotech Philippines, Inc. collects, uses, and protects your information when you visit our website.",
      },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Information We Collect",
    body: (
      <>
        <p>When you visit our Site, we may collect the following types of information:</p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            <span className="font-medium text-foreground">Personal information:</span> This may
            include your name, contact details, email address, and any other information you
            provide to us voluntarily.
          </li>
          <li>
            <span className="font-medium text-foreground">Usage information:</span> We collect
            information about how you interact with our Site, such as your IP address, device
            information, browser type, and cookies.
          </li>
          <li>
            <span className="font-medium text-foreground">Third-party information:</span> We may
            receive information from third-party services or platforms if you interact with our
            Site through them.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    body: (
      <>
        <p>We use the information collected for the following purposes:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>To provide and maintain our services.</li>
          <li>To communicate with you, respond to your inquiries, and provide customer support.</li>
          <li>To personalize your experience on our Site.</li>
          <li>To analyze and improve our services and operations.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Cookies",
    body: (
      <p>
        We use cookies and similar tracking technologies to enhance your experience on our Site.
        You can choose to accept or reject cookies through your browser settings. Please note that
        blocking cookies may affect the functionality of the Site.
      </p>
    ),
  },
  {
    title: "4. Data Security",
    body: (
      <p>
        We take appropriate measures to protect your personal information from unauthorized access,
        disclosure, alteration, or destruction. However, please be aware that no method of
        transmission over the internet or electronic storage is 100% secure.
      </p>
    ),
  },
  {
    title: "5. Third-Party Links",
    body: (
      <p>
        Our Site may contain links to third-party websites or services that are not operated by us.
        We are not responsible for the privacy practices or content of these third parties. We
        recommend reviewing the privacy policies of those websites.
      </p>
    ),
  },
  {
    title: "6. Children's Privacy",
    body: (
      <p>
        Our Site is not directed to individuals under the age of 18. We do not knowingly collect
        personal information from children. If you believe that a child has provided us with their
        personal information, please contact us, and we will take steps to delete the information.
      </p>
    ),
  },
  {
    title: "7. Changes to This Privacy Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Any changes will be effective when
        posted on this page. We encourage you to review this Privacy Policy periodically to stay
        informed about how we are protecting your information.
      </p>
    ),
  },
  {
    title: "8. Contact Us",
    body: (
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or our data
        practices, please contact us at (02) 8403-9811 to 12.
      </p>
    ),
  },
];

function PrivacyPage() {
  return (
    <section className="bg-bone pt-28 pb-20 sm:pt-32 sm:pb-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Privacy Policy</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cosmotech Philippines, Inc. ("Cosmotech," "we," or "us") is committed to protecting
            your privacy and ensuring the security of your personal information. This Privacy
            Policy describes how we collect, use, and disclose information when you visit our
            website{" "}
            <a
              href="https://cosmotech.com.ph"
              className="text-cobalt underline-offset-4 hover:underline"
            >
              https://cosmotech.com.ph
            </a>
            .
          </p>

          <div className="mt-12 space-y-10 text-base leading-relaxed text-muted-foreground">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {s.title}
                </h2>
                <div className="mt-3">{s.body}</div>
              </div>
            ))}

            <div className="space-y-4 border-t border-border pt-8">
              <p>By using our Site, you agree to the terms outlined in this Privacy Policy.</p>
              <p>Thank you for trusting Cosmotech Philippines, Inc. with your personal information.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
