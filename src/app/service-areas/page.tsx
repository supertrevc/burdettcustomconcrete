import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { CITIES } from "@/lib/constants";
import { CITIES_CONTENT } from "@/lib/cities-content";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/marketing/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas in North Idaho",
  description:
    "Burdett Custom Concrete serves Post Falls, Coeur d'Alene, Hayden, Rathdrum, Spirit Lake, and Athol, Idaho with driveways, patios, and flatwork.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Where we work"
        title="Concrete service areas across North Idaho"
        description="Locally owned and based in Post Falls, we serve homeowners and businesses throughout the region. Find your community below."
        crumbs={crumbs}
      />
      <Section tone="white">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((city) => {
            const content = CITIES_CONTENT[city.slug];
            return (
              <li key={city.slug}>
                <Link
                  href={`/service-areas/${city.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-lg bg-amber/10 text-amber-ink">
                    <MapPin aria-hidden="true" className="size-6" />
                  </span>
                  <h2 className="mt-4 text-xl font-semibold text-navy">
                    {city.name}, Idaho
                  </h2>
                  <p className="mt-2 flex-1 text-ink">{content.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-amber-ink">
                    Concrete in {city.name}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>
      <CtaBand />
    </>
  );
}
