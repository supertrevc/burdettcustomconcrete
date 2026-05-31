import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ShieldCheck, FileCheck2, Umbrella, MapPin } from "lucide-react";
import { BUSINESS, CITIES, TRUST, FULL_ADDRESS } from "@/lib/constants";
import { samplePhotos } from "@/lib/portfolio";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { StarRating } from "@/components/marketing/StarRating";
import { CtaBand } from "@/components/marketing/CtaBand";
import { buttonVariants } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Burdett Custom Concrete is a locally owned, licensed, bonded, and insured concrete contractor in Post Falls, Idaho. Meet Dave and why neighbors trust us.",
  path: "/about",
});

const CREDENTIALS = [
  {
    icon: FileCheck2,
    title: "Licensed",
    text: "A licensed concrete contractor operating in the state of Idaho.",
  },
  {
    icon: ShieldCheck,
    title: "Bonded",
    text: `Backed by a ${TRUST.bond} surety bond for your protection.`,
  },
  {
    icon: Umbrella,
    title: "Insured",
    text: `Carrying ${TRUST.liability} in general liability insurance.`,
  },
];

export default function AboutPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];
  const photo = samplePhotos("stamped", 1, 5)[0];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="About us"
        title="Locally owned concrete, done the right way"
        description="Burdett Custom Concrete is a Post Falls company built on showing up, doing good work, and treating neighbors the way you would want to be treated."
        crumbs={crumbs}
      />

      {/* Story + photo */}
      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-[60ch] space-y-4 text-lg leading-relaxed text-ink">
            <h2 className="text-3xl font-bold text-navy">
              You&rsquo;ll talk to Dave, not a call center
            </h2>
            <p>
              Burdett Custom Concrete is owned and run by Dave Burdett, and when
              you call, you get Dave. That is not a marketing line, it is the
              single thing our customers mention most. In review after review,
              people describe the same experience: they tried other contractors
              who took weeks to call back or never showed up, and Dave answered
              the phone and came out the next day.
            </p>
            <p>
              We are a hands-on, local operation. Dave looks at your project
              himself, gives you a straight bid, and stands behind the work.
              There is no layer of salespeople between you and the person
              actually pouring your concrete, which means clearer communication,
              honest pricing, and someone who is genuinely accountable for how
              the job turns out.
            </p>
            <p>
              The work speaks for itself, but the way we work is what keeps
              people referring us by name: prompt, courteous, clean job sites,
              and projects finished quickly without cutting corners on the base
              and prep that make concrete last.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line shadow-sm">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Credentials */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Peace of mind"
          title="Licensed, bonded, and insured"
          description="Hiring a contractor who is properly covered protects your property and your wallet. We are, and we are happy to show proof."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {CREDENTIALS.map((c) => (
            <li
              key={c.title}
              className="rounded-xl border border-line bg-white p-7 text-center shadow-sm"
            >
              <span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-amber/10 text-amber-ink">
                <c.icon aria-hidden="true" className="size-7" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-navy">{c.title}</h3>
              <p className="mt-2 text-ink">{c.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Why local + reviews */}
      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-[60ch] space-y-4 text-lg leading-relaxed text-ink">
            <h2 className="text-3xl font-bold text-navy">Why local matters</h2>
            <p>
              Being based in Post Falls is not just a dot on a map. It means we
              know North Idaho soils, grading, and the freeze-thaw winters that
              punish concrete that was not built on a proper base. It means we
              are a short drive away if you ever need us again. And it means we
              have a reputation to protect with our own neighbors, which is the
              best accountability there is.
            </p>
            <p>
              We serve homeowners and businesses across the region, and we treat
              every job, from a single pad to a full stamped patio, like it has
              our name on it. Because it does.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-surface p-8 text-center shadow-sm">
            <StarRating rating={5} className="justify-center" size="size-7" />
            <p className="mt-4 font-heading text-4xl font-bold text-navy">
              {TRUST.rating.toFixed(1)}
            </p>
            <p className="mt-1 text-muted">
              average across {TRUST.reviewCount} Google reviews
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/reviews"
                className={buttonVariants({ variant: "secondary", size: "md" })}
              >
                Read our reviews
              </Link>
              <a
                href={BUSINESS.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "outlineDark",
                  size: "md",
                })}
              >
                See us on Google
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Service area map */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Where we work"
          title="Serving Post Falls and North Idaho"
          description="Based in Post Falls and serving the surrounding communities. If you are near one of these towns, we have you covered."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-line shadow-sm">
            <iframe
              title="Map of Burdett Custom Concrete's North Idaho service area"
              src="https://www.google.com/maps?q=Post+Falls,+Idaho&z=10&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0 lg:h-full"
            />
          </div>
          <div>
            <ul className="grid grid-cols-2 gap-4">
              {CITIES.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/service-areas/${city.slug}`}
                    className="flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-3 font-heading font-semibold text-navy shadow-sm transition-shadow duration-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                  >
                    <MapPin aria-hidden="true" className="size-4 text-amber" />
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-line bg-white p-6 shadow-sm">
              <p className="flex items-start gap-2.5 text-ink">
                <MapPin
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 text-amber"
                />
                <span>
                  <span className="block font-heading font-semibold text-navy">
                    {BUSINESS.name}
                  </span>
                  <address className="not-italic">{FULL_ADDRESS}</address>
                </span>
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
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
