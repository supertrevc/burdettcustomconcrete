import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Clock, Star, ExternalLink } from "lucide-react";
import { BUSINESS, FULL_ADDRESS, TRUST } from "@/lib/constants";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { FacebookIcon } from "@/components/icons";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Burdett Custom Concrete in Post Falls, Idaho. Call 208-640-1883, find our address and hours, or request a free estimate online.",
  path: "/contact",
});

const mapQuery = encodeURIComponent(
  `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.stateShort} ${BUSINESS.address.zip}`,
);

export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Get in touch"
        title="Contact Burdett Custom Concrete"
        description="Call, message, or stop by. You'll reach Dave and a local crew based right here in Post Falls."
        crumbs={crumbs}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Details */}
          <div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-amber/10 text-amber-ink">
                  <Phone aria-hidden="true" className="size-6" />
                </span>
                <div>
                  <h2 className="font-heading text-lg font-semibold text-navy">
                    Phone
                  </h2>
                  <a
                    href={BUSINESS.phoneHref}
                    className="mt-1 inline-block text-lg font-semibold text-amber-ink hover:underline"
                  >
                    {BUSINESS.phone}
                  </a>
                  <p className="mt-1 text-sm text-muted">
                    Click to call. Dave answers his phone.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-amber/10 text-amber-ink">
                  <MapPin aria-hidden="true" className="size-6" />
                </span>
                <div>
                  <h2 className="font-heading text-lg font-semibold text-navy">
                    Address
                  </h2>
                  <address className="mt-1 not-italic text-ink">
                    {FULL_ADDRESS}
                  </address>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-amber/10 text-amber-ink">
                  <Clock aria-hidden="true" className="size-6" />
                </span>
                <div>
                  <h2 className="font-heading text-lg font-semibold text-navy">
                    Hours
                  </h2>
                  <p className="mt-1 text-ink">Monday – Sunday</p>
                  <p className="text-ink">5:00 AM – 9:00 PM</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-lg bg-amber/10 text-amber-ink">
                  <Star aria-hidden="true" className="size-6" />
                </span>
                <div>
                  <h2 className="font-heading text-lg font-semibold text-navy">
                    Find us online
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <a
                      href={BUSINESS.social.google}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "outlineDark",
                        size: "sm",
                      })}
                    >
                      <ExternalLink aria-hidden="true" className="size-4" />
                      {TRUST.rating.toFixed(1)} on Google
                    </a>
                    <a
                      href={BUSINESS.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "outlineDark",
                        size: "sm",
                      })}
                    >
                      <FacebookIcon className="size-4" />
                      Facebook
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={BUSINESS.phoneHref}
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                <Phone aria-hidden="true" className="size-5" />
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/free-quote"
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-xl border border-line shadow-sm">
            <iframe
              title={`Map to ${BUSINESS.name} in Post Falls, Idaho`}
              src={`https://www.google.com/maps?q=${mapQuery}&z=14&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-96 w-full border-0 lg:h-full lg:min-h-[28rem]"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
