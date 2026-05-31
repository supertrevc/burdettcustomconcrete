import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, FULL_ADDRESS } from "@/lib/constants";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Burdett Custom Concrete collects, uses, and protects the information you submit through our website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero title="Privacy Policy" crumbs={crumbs} />

      <Section tone="white">
        <Container className="max-w-[70ch] px-0">
          <div className="space-y-6 leading-relaxed text-ink [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_a]:font-medium [&_a]:text-amber-ink [&_a:hover]:underline">
            <p className="text-muted">Last updated: May 2026</p>

            <p>
              {BUSINESS.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy. This policy explains what
              information we collect through this website, how we use it, and the
              choices you have. We keep this simple because our business is
              simple: we pour concrete, and we only collect what we need to get
              back to you.
            </p>

            <h2>Information we collect</h2>
            <p>
              When you submit our free-estimate form, we collect the information
              you provide: your name, phone number, email address, the type of
              project, and any details you include in your message. We do not
              ask for sensitive information, and you should not send payment
              details or anything sensitive through the form.
            </p>
            <p>
              Like most websites, our hosting provider may automatically log
              basic technical information such as your IP address and browser
              type for security and reliability. We do not use this to identify
              you personally.
            </p>

            <h2>How we use your information</h2>
            <p>We use the information you submit only to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Respond to your estimate request and contact you about it;</li>
              <li>Schedule and carry out work you ask us to do;</li>
              <li>Keep a record of our communication with you.</li>
            </ul>
            <p>
              We do not sell, rent, or trade your information, and we do not send
              marketing spam.
            </p>

            <h2>Service providers</h2>
            <p>
              We use a small number of trusted third-party services to run this
              website and respond to you:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Our website host, which serves the site and may keep basic server
                logs.
              </li>
              <li>
                An email delivery service that sends us the contents of your form
                submission so we can reply.
              </li>
              <li>
                Embedded Google Maps, which loads from Google when you view a map
                on our site and is subject to Google&rsquo;s own privacy policy.
              </li>
            </ul>
            <p>
              These providers only process your information to provide their
              service to us.
            </p>

            <h2>Cookies and analytics</h2>
            <p>
              This site does not use advertising cookies or sell your browsing
              data. Any cookies are limited to what is needed for the site to
              function and load correctly.
            </p>

            <h2>How long we keep your information</h2>
            <p>
              We keep estimate requests and related communication only as long as
              needed to serve you and to keep reasonable business records, then
              we dispose of it.
            </p>

            <h2>Your choices</h2>
            <p>
              You can ask us what information we have about you, ask us to correct
              it, or ask us to delete it. Just call or email us using the contact
              details below and we will take care of it.
            </p>

            <h2>Children</h2>
            <p>
              This site is intended for adults seeking concrete services. We do
              not knowingly collect information from children.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              If we change this policy, we will update the date at the top of this
              page. Significant changes will be reflected here.
            </p>

            <h2>Contact us</h2>
            <p>
              Questions about your privacy? Reach us at{" "}
              <Link href={BUSINESS.phoneHref}>{BUSINESS.phone}</Link> or visit our{" "}
              <Link href="/contact">contact page</Link>. Our mailing address is{" "}
              {FULL_ADDRESS}.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
