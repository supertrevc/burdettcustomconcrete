import type { Metadata } from "next";
import {
  BUSINESS,
  CITIES,
  FULL_ADDRESS,
  OPENING_HOURS,
  SITE_URL,
  TRUST,
} from "./constants";

export const DEFAULT_OG_IMAGE =
  "/portfolio/stamped/Stamped-Concrete-Contractor-Post-Falls-North-Idaho-Burdett-Custom-Concrete-1.webp";

interface BuildMetaArgs {
  /** Page-specific title (the layout appends " | Burdett Custom Concrete"). */
  title: string;
  description: string;
  /** Absolute-from-root path, e.g. "/services/concrete-driveways". */
  path: string;
  /** Override the OG/Twitter image (path under /public). */
  image?: string;
}

/** Reusable metadata builder: canonical + Open Graph + Twitter on every page. */
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: BuildMetaArgs): Metadata {
  const fullTitle = `${title} | ${BUSINESS.shortName}`;
  const url = path === "/" ? "/" : path;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: BUSINESS.shortName,
      title: fullTitle,
      description,
      url,
      locale: "en_US",
      images: [{ url: image, width: 1600, height: 1200, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/* ------------------------------------------------------------------ */
/* JSON-LD structured data builders                                    */
/* ------------------------------------------------------------------ */

const ORG_ID = `${SITE_URL}/#business`;

/** Site-wide LocalBusiness schema (NAP, hours, geo, areaServed, rating). */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": ORG_ID,
    name: BUSINESS.name,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.stateShort,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: OPENING_HOURS.days,
        opens: OPENING_HOURS.opens,
        closes: OPENING_HOURS.closes,
      },
    ],
    areaServed: CITIES.map((c) => ({
      "@type": "City",
      name: `${c.name}, Idaho`,
    })),
    sameAs: [BUSINESS.social.facebook, BUSINESS.social.google],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: TRUST.rating.toFixed(1),
      reviewCount: TRUST.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function serviceJsonLd(args: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: args.name,
    name: args.name,
    description: args.description,
    url: `${SITE_URL}${args.path}`,
    provider: {
      "@type": "GeneralContractor",
      "@id": ORG_ID,
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
    },
    areaServed: CITIES.map((c) => `${c.name}, ID`),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function imageGalleryJsonLd(
  images: { src: string; alt: string }[],
  path: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${BUSINESS.shortName} project gallery`,
    url: `${SITE_URL}${path}`,
    associatedMedia: images.map((img) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}${img.src}`,
      caption: img.alt,
    })),
  };
}

export { FULL_ADDRESS };
