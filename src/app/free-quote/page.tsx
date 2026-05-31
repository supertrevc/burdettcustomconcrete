import type { Metadata } from "next";
import {
  Clock,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { TRUST } from "@/lib/constants";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/marketing/PageHero";
import { QuoteForm } from "@/components/marketing/QuoteForm";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = buildMetadata({
  title: "Get a Free Concrete Estimate",
  description:
    "Request a free concrete estimate from Burdett Custom Concrete in Post Falls, Idaho. Tell us about your project and Dave will call you back, often within a day.",
  path: "/free-quote",
});

const REASONS = [
  {
    icon: PhoneCall,
    title: "You talk to Dave",
    text: "No call center and no runaround. The owner reviews your request and calls you back personally.",
  },
  {
    icon: Clock,
    title: "Fast, free estimates",
    text: "Free on-site estimates, often same-day bids. We respect that your time matters.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    text: `Bonded ${TRUST.bond} and carrying ${TRUST.liability} in liability. You're covered.`,
  },
  {
    icon: Sparkles,
    title: "Built to last",
    text: "Proper base, drainage, and a freeze-thaw-rated mix so your concrete holds up here.",
  },
];

const EXPECT = [
  "We review your request and Dave calls you back, usually within a day.",
  "We set up a time to come out and look at the project in person.",
  "You get a clear, honest, written estimate, often the same day we visit.",
  "If it's a fit, we schedule the work and keep you in the loop start to finish.",
];

export default function FreeQuotePage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Free Quote", path: "/free-quote" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Free estimate"
        title="Tell us about your project"
        description="Fill out the form and Dave will call you back, usually within a day. Prefer to talk now? Call us any day between 5am and 9pm."
        crumbs={crumbs}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Supporting copy */}
          <div>
            <h2 className="text-2xl font-bold text-navy md:text-3xl">
              Why homeowners choose Burdett
            </h2>
            <ul className="mt-6 space-y-5">
              {REASONS.map((r) => (
                <li key={r.title} className="flex gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-amber/10 text-amber-ink">
                    <r.icon aria-hidden="true" className="size-6" />
                  </span>
                  <span>
                    <span className="block font-heading font-semibold text-navy">
                      {r.title}
                    </span>
                    <span className="mt-1 block text-ink">{r.text}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-xl border border-line bg-surface p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-navy">
                <Clock aria-hidden="true" className="size-5 text-amber" />
                What to expect
              </h3>
              <ol className="mt-4 space-y-3">
                {EXPECT.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-ink">
                    <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-5 flex items-start gap-2 rounded-lg bg-white p-4 text-sm text-ink ring-1 ring-line">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-amber"
                />
                <span>
                  <strong className="text-navy">Our promise:</strong> a real
                  callback from a real person, usually within one business day.
                  No spam, no pushy sales.
                </span>
              </p>
            </div>
          </div>

          {/* Form */}
          <div id="quote-form">
            <QuoteForm />
          </div>
        </div>
      </Section>
    </>
  );
}
