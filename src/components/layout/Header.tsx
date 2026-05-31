"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Star } from "lucide-react";
import { BUSINESS, NAV_LINKS, TRUST } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Compact the header after a small scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset on navigation
    setMenuOpen(false);
  }, [pathname]);

  // Body scroll lock + Escape to close while the menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const trigger = triggerRef.current;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [menuOpen]);

  // Simple focus trap within the open menu panel.
  const onPanelKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !panelRef.current) return;
    const focusables = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div
        className={cn(
          "hidden bg-navy text-light transition-all duration-300 md:block",
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-sm">
          <a
            href={BUSINESS.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm hover:text-amber"
          >
            <Star aria-hidden="true" className="size-4 fill-amber text-amber" />
            <span className="font-semibold">{TRUST.rating.toFixed(1)}</span>
            <span className="text-light/80">
              from {TRUST.reviewCount} Google reviews
            </span>
          </a>
          <div className="flex items-center gap-5">
            <span className="text-light/80">Open daily, 5am – 9pm</span>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-1.5 rounded-sm font-semibold hover:text-amber"
            >
              <Phone aria-hidden="true" className="size-4" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b border-line bg-white transition-shadow duration-300",
          scrolled && "shadow-md",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 transition-all duration-300",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-sm"
            aria-label={`${BUSINESS.shortName} home`}
          >
            {/* Dark mark on the white header bar */}
            <Logo
              priority
              className={cn(
                "transition-all duration-300",
                scrolled ? "h-8" : "h-10",
              )}
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-2 text-base font-medium text-navy transition-colors hover:text-amber-ink",
                      isActive(link.href) && "text-amber-ink",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={BUSINESS.phoneHref}
              className={buttonVariants({ variant: "outlineDark", size: "md" })}
            >
              <Phone aria-hidden="true" className="size-4" />
              {BUSINESS.phone}
            </a>
            <Link
              href="/free-quote"
              className={buttonVariants({ variant: "primary", size: "md" })}
            >
              Get a Free Estimate
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href={BUSINESS.phoneHref}
              aria-label={`Call ${BUSINESS.phone}`}
              className="inline-flex size-11 items-center justify-center rounded-full text-navy hover:bg-surface"
            >
              <Phone aria-hidden="true" className="size-6" />
            </a>
            <button
              ref={triggerRef}
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
              className="inline-flex size-11 items-center justify-center rounded-full text-navy hover:bg-surface"
            >
              <Menu aria-hidden="true" className="size-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-navy/60"
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
          />
          <div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            onKeyDown={onPanelKeyDown}
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-xl"
          >
            <div className="flex h-20 items-center justify-between border-b border-line px-6">
              <span className="font-heading text-lg font-bold text-navy">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="inline-flex size-11 items-center justify-center rounded-full text-navy hover:bg-surface"
              >
                <X aria-hidden="true" className="size-7" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="flex flex-col">
                <li>
                  <Link
                    href="/"
                    className="block rounded-md px-2 py-3 text-lg font-semibold text-navy hover:bg-surface"
                  >
                    Home
                  </Link>
                </li>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={cn(
                        "block rounded-md px-2 py-3 text-lg font-semibold text-navy hover:bg-surface",
                        isActive(link.href) && "text-amber-ink",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-3 border-t border-line px-6 py-5">
              <a
                href={BUSINESS.phoneHref}
                className={buttonVariants({
                  variant: "outlineDark",
                  size: "lg",
                  className: "w-full",
                })}
              >
                <Phone aria-hidden="true" className="size-5" />
                {BUSINESS.phone}
              </a>
              <Link
                href="/free-quote"
                className={buttonVariants({
                  variant: "primary",
                  size: "lg",
                  className: "w-full",
                })}
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
