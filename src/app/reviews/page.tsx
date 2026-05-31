import type { Metadata } from "next";
import { Star, ExternalLink, PenLine } from "lucide-react";
import { BUSINESS, TRUST } from "@/lib/constants";
import { REVIEWS } from "@/lib/reviews";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/ui/Section";
import { ReviewCard } from "@/components/marketing/ReviewCard";
import { StarRating } from "@/components/marketing/StarRating";
import { CtaBand } from "@/components/marketing/CtaBand";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "Reviews",
  description:
    "Burdett Custom Concrete has a perfect 5.0-star average across 19 Google reviews. Read what Post Falls and North Idaho homeowners say about Dave and the crew.",
  path: "/reviews",
});

export default function ReviewsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Reviews", path: "/reviews" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Reviews"
        title="What North Idaho says about us"
        description="We are grateful for every review. The theme is always the same: prompt, communicative, and done right."
        crumbs={crumbs}
      />

      {/* Aggregate */}
      <Section tone="white" className="!pb-10">
        <div className="mx-auto max-w-2xl rounded-xl border border-line bg-surface p-8 text-center shadow-sm">
          <StarRating rating={5} className="justify-center" size="size-8" />
          <p className="mt-4 font-heading text-5xl font-bold text-navy">
            {TRUST.rating.toFixed(1)}
          </p>
          <p className="mt-2 text-lg text-muted">
            average across{" "}
            <span className="font-semibold text-navy">
              {TRUST.reviewCount} Google reviews
            </span>
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BUSINESS.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "primary", size: "md" })}
            >
              <ExternalLink aria-hidden="true" className="size-4" />
              Read all reviews on Google
            </a>
            <a
              href={BUSINESS.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outlineDark", size: "md" })}
            >
              <PenLine aria-hidden="true" className="size-4" />
              Leave us a review
            </a>
          </div>
        </div>
      </Section>

      {/* Reviews grid */}
      <Section tone="white" className="!pt-0">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <li key={review.name}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted">
          <Star aria-hidden="true" className="size-4 fill-amber text-amber" />
          These are a selection of our reviews. Read them all, and the latest,
          on our Google Business Profile.
        </p>
      </Section>

      <CtaBand
        title="Want to be our next 5-star review?"
        description="Call Dave for a free estimate and find out why your neighbors keep recommending us by name."
      />
    </>
  );
}
