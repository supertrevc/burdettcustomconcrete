import type { Metadata } from "next";
import { PHOTOS } from "@/lib/portfolio";
import {
  buildMetadata,
  breadcrumbJsonLd,
  imageGalleryJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/marketing/PageHero";
import { PortfolioBrowser } from "@/components/marketing/PortfolioBrowser";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/marketing/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "Concrete Project Portfolio",
  description:
    "Browse real concrete projects by Burdett Custom Concrete across North Idaho: driveways, patios, stamped concrete, flatwork, walkways, and staining.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={imageGalleryJsonLd(PHOTOS.slice(0, 24), "/portfolio")} />
      <PageHero
        eyebrow="Our work"
        title="Concrete project portfolio"
        description="Real projects from across North Idaho. Filter by category, and tap any photo to see it up close."
        crumbs={crumbs}
      />
      <Section tone="white">
        <PortfolioBrowser />
      </Section>
      <CtaBand />
    </>
  );
}
