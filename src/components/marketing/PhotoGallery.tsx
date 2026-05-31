"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioPhoto } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

/**
 * Responsive image grid with an accessible lightbox (keyboard arrows,
 * Escape to close, focus trap, body scroll lock). Thumbnails lazy-load.
 */
export function PhotoGallery({
  photos,
  className,
}: {
  photos: PortfolioPhoto[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i - 1 + photos.length) % photos.length,
      ),
    [photos.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Tab" && dialogRef.current) {
        const focusables =
          dialogRef.current.querySelectorAll<HTMLElement>("button");
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
      }
    };
    document.addEventListener("keydown", onKey);
    dialogRef.current?.querySelector("button")?.focus();
    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", onKey);
      lastTrigger.current?.focus();
    };
  }, [openIndex, close, next, prev]);

  const active = openIndex === null ? null : photos[openIndex];

  return (
    <>
      <ul
        className={cn(
          "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
          className,
        )}
      >
        {photos.map((photo, i) => (
          <li key={photo.src}>
            <button
              type="button"
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setOpenIndex(i);
              }}
              aria-label={`View larger: ${photo.alt}`}
              className="group relative block aspect-square w-full overflow-hidden rounded-xl border border-line bg-surface shadow-sm transition-shadow duration-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {active && openIndex !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${openIndex + 1} of ${photos.length}: ${active.alt}`}
          className="fixed inset-0 z-[80] flex flex-col bg-navy/95 p-4"
        >
          <div className="flex items-center justify-between text-light">
            <span className="text-sm">
              {openIndex + 1} / {photos.length}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="inline-flex size-11 items-center justify-center rounded-full text-light hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              <X aria-hidden="true" className="size-7" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center gap-2 overflow-hidden">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-light hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              <ChevronLeft aria-hidden="true" className="size-7" />
            </button>

            <div className="relative flex h-full max-h-[75vh] flex-1 items-center justify-center">
              <Image
                key={active.src}
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="90vw"
                className="h-auto max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
              />
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-light hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              <ChevronRight aria-hidden="true" className="size-7" />
            </button>
          </div>

          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-light/80">
            {active.alt}
          </p>
        </div>
      )}
    </>
  );
}
