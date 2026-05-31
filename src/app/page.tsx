import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Star,
  ShieldCheck,
  ClipboardList,
  MapPin,
  PhoneCall,
  Ruler,
  Hammer,
  CheckCircle2,
  ArrowRight,
  XCircle,
  CheckCircle,
} from "lucide-react";
import { BUSINESS, CITIES, SERVICES, TRUST } from "@/lib/constants";
import { SERVICES_CONTENT } from "@/lib/services-content";
import { REVIEWS } from "@/lib/reviews";
import { featuredPhotos } from "@/lib/portfolio";
import { buttonVariants } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { ReviewCard } from "@/components/marketing/ReviewCard";
import { StarRating } from "@/components/marketing/StarRating";
import { CtaBand } from "@/components/marketing/CtaBand";

const HERO_IMAGE =
  "/portfolio/stamped/Stamped-Concrete-Contractor-Post-Falls-North-Idaho-Burdett-Custom-Concrete-1.webp";

const TRUST_ITEMS = [
  {
    icon: Star,
    title: `${TRUST.rating.toFixed(1)} stars`,
    text: `${TRUST.reviewCount} Google reviews`,
  },
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    text: `Bonded ${TRUST.bond}, ${TRUST.liability} liability`,
  },
  {
    icon: ClipboardList,
    title: "Free estimates",
    text: "Often same-day bids",
  },
  {
    icon: MapPin,
    title: "Locally owned",
    text: "Post Falls, North Idaho",
  },
];

const STEPS = [
  {
    icon: PhoneCall,
    title: "Call Dave",
    text: "Tell us about your project. Dave actually answers his phone and will set up a time to come look.",
  },
  {
    icon: Ruler,
    title: "Free on-site estimate",
    text: "We measure, talk through options and finishes, and give you a straight bid, often the same day.",
  },
  {
    icon: Hammer,
    title: "We build it",
    text: "We prep the base, pour, and finish, showing up when we say we will and keeping the site clean.",
  },
  {
    icon: CheckCircle2,
    title: "Walkthrough",
    text: "We walk the finished work with you and tell you how to care for it through North Idaho winters.",
  },
];

export default function HomePage() {
  const homeServices = SERVICES.slice(0, 6);
  const homeReviews = REVIEWS.slice(0, 3);
  const stripPhotos = featuredPhotos(6);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy">
        <Image
          src={HERO_IMAGE}
          alt="Stamped concrete patio built by Burdett Custom Concrete in Post Falls, Idaho"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/55"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-light ring-1 ring-white/20">
              <StarRating rating={5} size="size-4" />
              {TRUST.rating.toFixed(1)} from {TRUST.reviewCount} Google reviews
            </p>
            <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              North Idaho&rsquo;s concrete crew that actually answers the phone
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-light/85 md:text-xl">
              From driveways and patios to stamped and decorative concrete,
              Burdett Custom Concrete builds it right the first time. Licensed,
              bonded, and insured, and locally owned in Post Falls.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/free-quote"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                Get a Free Estimate
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                <Phone aria-hidden="true" className="size-5" />
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust row */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {TRUST_ITEMS.map((item) => (
              <li key={item.title} className="flex items-center gap-3">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-amber/10 text-amber-ink">
                  <item.icon aria-hidden="true" className="size-6" />
                </span>
                <span>
                  <span className="block font-heading font-semibold text-navy">
                    {item.title}
                  </span>
                  <span className="block text-sm text-muted">{item.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Problem / solution */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Why homeowners call us"
          title="Most concrete contractors are slow to call back. Dave isn't."
          description="The number one thing customers tell us is that other companies took weeks to respond or never showed up at all. Here is the difference."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border border-line bg-surface p-7">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-navy">
                <XCircle aria-hidden="true" className="size-6 text-muted" />
                The usual experience
              </h3>
              <ul className="mt-4 space-y-3 text-ink">
                <li>Calls and voicemails that go unanswered for weeks</li>
                <li>Contractors who never show up to bid the job</li>
                <li>Vague quotes and a crew you never actually meet</li>
                <li>Work that drags on long past what was promised</li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="h-full rounded-xl border-2 border-amber bg-white p-7 shadow-sm">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-navy">
                <CheckCircle aria-hidden="true" className="size-6 text-amber" />
                Working with Burdett
              </h3>
              <ul className="mt-4 space-y-3 text-ink">
                <li>Dave answers his phone and often bids same-day</li>
                <li>He shows up when he says he will, every time</li>
                <li>You deal directly with the owner, start to finish</li>
                <li>Clean work site and projects finished quickly</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Services grid */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="What we do"
          title="Concrete services across North Idaho"
          description="Residential and commercial concrete, built on a proper base and finished to last through freeze and thaw."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((service) => (
            <li key={service.slug}>
              <Reveal className="h-full">
                <ServiceCard
                  slug={service.slug}
                  name={service.name}
                  blurb={SERVICES_CONTENT[service.slug].blurb}
                />
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className={buttonVariants({ variant: "outlineDark", size: "md" })}
          >
            View all services
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </Section>

      {/* How it works */}
      <Section tone="white">
        <SectionHeading
          eyebrow="How it works"
          title="Four simple steps"
          description="No runaround, no pressure. Here is exactly what to expect from first call to finished concrete."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <Reveal>
                <div className="relative rounded-xl border border-line bg-white p-6 shadow-sm">
                  <span className="absolute -top-4 left-6 inline-flex size-9 items-center justify-center rounded-full bg-amber font-heading text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <step.icon
                    aria-hidden="true"
                    className="mt-3 size-8 text-amber-ink"
                  />
                  <h3 className="mt-3 text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* Photo strip */}
      <section className="bg-navy py-4">
        <ul className="flex gap-1 overflow-hidden">
          {stripPhotos.map((photo) => (
            <li key={photo.src} className="relative aspect-square flex-1">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Reviews"
          title="What your neighbors say"
          description="A perfect 5.0-star average across 19 Google reviews. Here are a few of them."
        />
        <div className="mt-6 flex items-center justify-center gap-3">
          <StarRating rating={5} />
          <span className="font-heading text-lg font-semibold text-navy">
            {TRUST.rating.toFixed(1)} from {TRUST.reviewCount} Google reviews
          </span>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {homeReviews.map((review) => (
            <li key={review.name}>
              <Reveal className="h-full">
                <ReviewCard review={review} />
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/reviews"
            className={buttonVariants({ variant: "secondary", size: "md" })}
          >
            Read all reviews
          </Link>
          <a
            href={BUSINESS.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outlineDark", size: "md" })}
          >
            See us on Google
          </a>
        </div>
      </Section>

      {/* Where we work */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Service areas"
          title="Proudly serving North Idaho"
          description="Locally owned and based in Post Falls. We bring our crew to these communities and the areas around them."
        />
        <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
          {CITIES.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/service-areas/${city.slug}`}
                className="flex items-center justify-between rounded-lg border border-line bg-white px-4 py-3 font-heading font-semibold text-navy shadow-sm transition-shadow duration-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                {city.name}
                <ArrowRight aria-hidden="true" className="size-4 text-amber" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
