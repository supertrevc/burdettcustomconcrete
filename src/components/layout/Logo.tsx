import Image from "next/image";
import { BRAND_LOGO, BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Single-source brand wordmark. The asset is a transparent PNG with a dark
 * mark, so it sits directly on the section color (never in its own box):
 *   - default: shown as-is (dark) on light backgrounds.
 *   - light:   `brightness-0 invert` recolors the mark to solid white for
 *              dark backgrounds, leaving the transparent areas transparent.
 * This is the CSS-filter approach (filter: brightness(0) invert(1)) so we
 * ship one file instead of a separate light asset.
 */
export function Logo({
  light = false,
  priority = false,
  className,
}: {
  light?: boolean;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={BRAND_LOGO}
      alt={BUSINESS.name}
      width={600}
      height={100}
      priority={priority}
      className={cn(
        "w-auto",
        light && "brightness-0 invert",
        className,
      )}
    />
  );
}
