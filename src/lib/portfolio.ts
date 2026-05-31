import portfolioData from "../../content/portfolio.json";
import type { PortfolioCategory } from "./constants";

export interface PortfolioPhoto {
  category: PortfolioCategory;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const PHOTOS: PortfolioPhoto[] = portfolioData as PortfolioPhoto[];

export const PORTFOLIO_CATEGORIES: {
  slug: PortfolioCategory;
  label: string;
}[] = [
  { slug: "stamped", label: "Stamped & Decorative" },
  { slug: "patios", label: "Patios" },
  { slug: "driveways", label: "Driveways" },
  { slug: "broomed", label: "Broomed Flatwork" },
  { slug: "walkways", label: "Walkways & Steps" },
  { slug: "staining-sealing", label: "Staining & Sealing" },
];

export function photosByCategory(category: PortfolioCategory): PortfolioPhoto[] {
  return PHOTOS.filter((p) => p.category === category);
}

/**
 * Deterministic, well-distributed sample for a category (no Math.random so
 * server/client markup is stable). Skips the first photo so different pages
 * pulling from the same category don't all lead with the identical image.
 */
export function samplePhotos(
  category: PortfolioCategory,
  count: number,
  offset = 0,
): PortfolioPhoto[] {
  const pool = photosByCategory(category);
  if (pool.length <= count) return pool;
  const result: PortfolioPhoto[] = [];
  const step = Math.max(1, Math.floor(pool.length / count));
  for (let i = 0; i < count; i++) {
    result.push(pool[(offset + i * step) % pool.length]);
  }
  return result;
}

/** A spread of photos across all categories, for homepage strips. */
export function featuredPhotos(count: number): PortfolioPhoto[] {
  const perCat = Math.ceil(count / PORTFOLIO_CATEGORIES.length);
  const result: PortfolioPhoto[] = [];
  for (const cat of PORTFOLIO_CATEGORIES) {
    result.push(...samplePhotos(cat.slug, perCat, 2));
  }
  return result.slice(0, count);
}
