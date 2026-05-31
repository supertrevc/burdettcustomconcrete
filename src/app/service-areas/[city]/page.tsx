import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { CITIES_CONTENT, getCityContent } from "@/lib/cities-content";
import { SERVICES, BUSINESS, FULL_ADDRESS } from "@/lib/constants";
import { samplePhotos } from "@/lib/portfolio";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/marketing/PageHero";
import { PhotoGallery } from "@/components/marketing/PhotoGallery";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { CtaBand } from "@/components/marketing/CtaBand";
import { buttonVariants } from "@/components/ui/Button";

export function generateStaticParams() {
  return Object.keys(CITIES_CONTENT).map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const content = getCityContent(city);
  if (!content) return {};
  return buildMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: `/service-areas/${city}`,
    image: samplePhotos(content.featuredCategory, 1, 1)[0]?.src,
  });
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const content = getCityContent(city);
  if (!content) notFound();

  const photos = samplePhotos(content.featuredCategory, 4, 1);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: content.name, path: `/service-areas/${city}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow={`Concrete contractor in ${content.name}, ID`}
        title={`Concrete Contractor in ${content.name}, Idaho`}
        description={content.tagline}
        crumbs={crumbs}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="max-w-[70ch] space-y-4 text-lg leading-relaxed text-ink">
              {content.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {content.sections.map((section) => (
              <div key={section.heading} className="mt-10">
                <h2 className="text-2xl font-bold text-navy md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 max-w-[70ch] space-y-4 leading-relaxed text-ink">
                  {section.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Services available */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-navy md:text-3xl">
                Concrete services we offer in {content.name}
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {SERVICES.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center justify-between gap-3 rounded-lg border border-line bg-white px-4 py-3 font-medium text-navy shadow-sm transition-shadow duration-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                    >
                      {service.name}
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 shrink-0 text-amber"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* NAP + CTA aside */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl border border-line bg-surface p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-navy">
                Serving {content.name} from Post Falls
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-ink">
                <li className="flex items-start gap-2.5">
                  <Phone
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-amber"
                  />
                  <a
                    href={BUSINESS.phoneHref}
                    className="font-semibold text-navy hover:text-amber-ink"
                  >
                    {BUSINESS.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-amber"
                  />
                  <address className="not-italic">{FULL_ADDRESS}</address>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-amber"
                  />
                  <span>Open daily, 5:00 AM – 9:00 PM</span>
                </li>
              </ul>
              <a
                href={BUSINESS.phoneHref}
                className={buttonVariants({
                  variant: "primary",
                  size: "md",
                  className: "mt-5 w-full",
                })}
              >
                <Phone aria-hidden="true" className="size-4" />
                Call for a free estimate
              </a>
              <Link
                href="/free-quote"
                className={buttonVariants({
                  variant: "outlineDark",
                  size: "md",
                  className: "mt-3 w-full",
                })}
              >
                Request a quote online
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      {photos.length > 0 && (
        <Section tone="surface">
          <SectionHeading
            eyebrow="Recent work"
            title="Concrete projects near you"
            description="A few examples of the kind of work we bring to homes and businesses across North Idaho."
          />
          <div className="mt-10">
            <PhotoGallery photos={photos} />
          </div>
        </Section>
      )}

      <CtaBand
        title={`Need concrete in ${content.name}?`}
        description="Call Dave for a free estimate, often the same day. Licensed, bonded, and insured, and based right here in North Idaho."
      />
    </>
  );
}
