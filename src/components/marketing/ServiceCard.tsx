import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICE_ICONS } from "./serviceIcons";

export function ServiceCard({
  slug,
  name,
  blurb,
}: {
  slug: string;
  name: string;
  blurb: string;
}) {
  const Icon = SERVICE_ICONS[slug];
  return (
    <Link
      href={`/services/${slug}`}
      className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
    >
      <span className="inline-flex size-12 items-center justify-center rounded-lg bg-amber/10 text-amber-ink">
        {Icon ? <Icon aria-hidden="true" className="size-6" /> : null}
      </span>
      <h3 className="mt-4 text-xl font-semibold text-navy">{name}</h3>
      <p className="mt-2 flex-1 text-ink">{blurb}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-amber-ink">
        Learn more
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
