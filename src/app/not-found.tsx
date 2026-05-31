import Link from "next/link";
import { Phone, Home, ArrowRight } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-surface">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center md:py-32">
        <p className="font-heading text-6xl font-bold text-amber">404</p>
        <h1 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mt-4 max-w-md text-lg text-ink">
          The page you were looking for may have moved. Let&rsquo;s get you back
          on solid ground, or just give Dave a call.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            <Home aria-hidden="true" className="size-5" />
            Back to home
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            <Phone aria-hidden="true" className="size-5" />
            Call {BUSINESS.phone}
          </a>
        </div>

        <nav aria-label="Helpful links" className="mt-12 w-full">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 rounded-sm font-medium text-navy hover:text-amber-ink"
                >
                  {link.label}
                  <ArrowRight aria-hidden="true" className="size-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
