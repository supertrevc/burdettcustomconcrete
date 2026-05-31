import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

/** Consistent interior-page header: navy band with breadcrumbs + H1. */
export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-8">
        <div className="[&_a]:text-light/70 [&_a:hover]:text-amber [&_span]:text-light [&_svg]:text-white/30">
          <Breadcrumbs items={crumbs} />
        </div>
        {eyebrow && (
          <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-wide text-amber">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-3xl text-4xl font-bold text-white md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-light/80">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
