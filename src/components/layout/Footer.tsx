import Link from "next/link";
import { Phone, MapPin, Clock, Star } from "lucide-react";
import { FacebookIcon } from "@/components/icons";
import { Logo } from "@/components/layout/Logo";
import {
  BUSINESS,
  CITIES,
  FULL_ADDRESS,
  NAV_LINKS,
  SERVICES,
  TRUST,
} from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-light">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + social */}
          <div>
            {/* Light mark (brightness-0 invert) directly on the navy section */}
            <Logo light className="h-9" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-light/70">
              Licensed, bonded, and insured concrete contractor serving Post
              Falls and North Idaho. You talk to Dave, not a call center.
            </p>
            <a
              href={BUSINESS.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-sm text-sm hover:text-amber"
            >
              <Star aria-hidden="true" className="size-4 fill-amber text-amber" />
              <span className="font-semibold text-white">
                {TRUST.rating.toFixed(1)}
              </span>
              <span className="text-light/70">
                from {TRUST.reviewCount} Google reviews
              </span>
            </a>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Burdett Custom Concrete on Facebook"
                className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-amber"
              >
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-amber">
              Services
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="rounded-sm text-light/80 transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service areas + company */}
          <div>
            <nav aria-label="Service areas">
              <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-amber">
                Service Areas
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {CITIES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/service-areas/${c.slug}`}
                      className="rounded-sm text-light/80 transition-colors hover:text-white"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Company" className="mt-6">
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-sm text-light/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-amber">
              Get in Touch
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-light/80">
              <li className="flex items-start gap-2.5">
                <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-amber" />
                <a
                  href={BUSINESS.phoneHref}
                  className="rounded-sm font-semibold text-white hover:text-amber"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-amber" />
                <address className="not-italic">{FULL_ADDRESS}</address>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-amber" />
                <span>Open daily, 5:00 AM – 9:00 PM</span>
              </li>
            </ul>
            <Link
              href="/free-quote"
              className={buttonVariants({
                variant: "primary",
                size: "md",
                className: "mt-5",
              })}
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 text-sm text-light/60 md:flex-row md:items-center">
          <p>
            © {year} {BUSINESS.name}. Licensed, bonded &amp; insured.
          </p>
          <Link
            href="/privacy"
            className="rounded-sm transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
