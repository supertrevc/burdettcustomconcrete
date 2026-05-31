import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, Check } from "lucide-react";
import { SERVICES_CONTENT, getServiceContent } from "@/lib/services-content";
import { BUSINESS, TRUST } from "@/lib/constants";
import { samplePhotos } from "@/lib/portfolio";
import {
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/marketing/PageHero";
import { PhotoGallery } from "@/components/marketing/PhotoGallery";
import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { CtaBand } from "@/components/marketing/CtaBand";
import { buttonVariants } from "@/components/ui/Button";

export function generateStaticParams() {
  return Object.keys(SERVICES_CONTENT).map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const content = getServiceContent(service);
  if (!content) return {};
  const image = content.photoCategory
    ? samplePhotos(content.photoCategory, 1, 1)[0]?.src
    : undefined;
  return buildMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: `/services/${service}`,
    image,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const content = getServiceContent(service);
  if (!content) notFound();

  const photos = content.photoCategory
    ? samplePhotos(content.photoCategory, 8, 1)
    : [];
  const related = content.related
    .map((slug) => SERVICES_CONTENT[slug])
    .filter(Boolean);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: content.name, path: `/services/${service}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={serviceJsonLd({
          name: content.name,
          description: content.metaDescription,
          path: `/services/${service}`,
        })}
      />
      <JsonLd data={faqJsonLd(content.faqs)} />

      <PageHero
        eyebrow="Concrete service"
        title={content.name}
        description={content.tagline}
        crumbs={crumbs}
      />

      {/* Intro + sections */}
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
          </div>

          {/* Sticky CTA card */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl border border-line bg-surface p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-navy">
                Get a free estimate
              </h2>
              <p className="mt-2 text-sm text-ink">
                Talk to Dave directly. Free on-site estimates, often the same
                day.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className={buttonVariants({
                  variant: "primary",
                  size: "md",
                  className: "mt-4 w-full",
                })}
              >
                <Phone aria-hidden="true" className="size-4" />
                {BUSINESS.phone}
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
              <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm text-ink">
                {[
                  `${TRUST.rating.toFixed(1)} stars, ${TRUST.reviewCount} Google reviews`,
                  `Licensed, bonded & insured`,
                  `Locally owned in Post Falls`,
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-amber"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {/* Photo gallery */}
      {photos.length > 0 && (
        <Section tone="surface">
          <SectionHeading
            eyebrow="Recent work"
            title={`${content.name} projects`}
            description="A look at real Burdett Custom Concrete projects across North Idaho. Tap any photo to view it larger."
          />
          <div className="mt-10">
            <PhotoGallery photos={photos} />
          </div>
        </Section>
      )}

      {/* FAQ */}
      <Section tone="white">
        <Container className="max-w-3xl px-0">
          <SectionHeading
            align="left"
            eyebrow="Questions"
            title={`${content.name} FAQs`}
          />
          <div className="mt-8">
            <Accordion items={content.faqs} />
          </div>
        </Container>
      </Section>

      {/* Related services */}
      {related.length > 0 && (
        <Section tone="surface">
          <SectionHeading eyebrow="Keep exploring" title="Related services" />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <ServiceCard slug={r.slug} name={r.name} blurb={r.blurb} />
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className={buttonVariants({ variant: "outlineDark", size: "md" })}
            >
              See the full portfolio
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
