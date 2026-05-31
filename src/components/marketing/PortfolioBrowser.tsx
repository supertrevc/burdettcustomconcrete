"use client";

import { useMemo, useState } from "react";
import { PHOTOS, PORTFOLIO_CATEGORIES } from "@/lib/portfolio";
import type { PortfolioCategory } from "@/lib/constants";
import { PhotoGallery } from "./PhotoGallery";
import { cn } from "@/lib/utils";

type Filter = PortfolioCategory | "all";

export function PortfolioBrowser() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () => (filter === "all" ? PHOTOS : PHOTOS.filter((p) => p.category === filter)),
    [filter],
  );

  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: `All work (${PHOTOS.length})` },
    ...PORTFOLIO_CATEGORIES.map((c) => ({
      value: c.slug as Filter,
      label: c.label,
    })),
  ];

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {filters.map((f) => {
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.value)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber",
                active
                  ? "bg-navy text-white"
                  : "border border-line bg-white text-navy hover:border-navy/30 hover:bg-surface",
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-muted" aria-live="polite">
        Showing {filtered.length}{" "}
        {filtered.length === 1 ? "photo" : "photos"}
      </p>

      <div className="mt-6">
        <PhotoGallery photos={filtered} />
      </div>
    </div>
  );
}
