import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";

/** Full-width navy conversion band. Reused at the foot of most pages. */
export function CtaBand({
  title = "Ready for concrete done right?",
  description = "Call Dave for a free estimate, often the same day. You will talk to the person who does the work, not a call center.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-light/80">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={BUSINESS.phoneHref}
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            <Phone aria-hidden="true" className="size-5" />
            Call {BUSINESS.phone}
          </a>
          <Link
            href="/free-quote"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
