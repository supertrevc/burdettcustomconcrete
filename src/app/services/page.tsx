import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import { SERVICES_CONTENT } from "@/lib/services-content";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/marketing/PageHero";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/marketing/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "Concrete Services",
  description:
    "Residential and commercial concrete services in Post Falls and North Idaho: driveways, patios, stamped concrete, flatwork, walkways, staining, and more.",
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="What we do"
        title="Concrete services for North Idaho"
        description="From a single pad to a full stamped patio, every job is built on a proper base and finished to last through our freeze-thaw winters. Dave gives every estimate himself."
        crumbs={crumbs}
      />
      <Section tone="white">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li key={service.slug}>
              <ServiceCard
                slug={service.slug}
                name={service.name}
                blurb={SERVICES_CONTENT[service.slug].blurb}
              />
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </>
  );
}
