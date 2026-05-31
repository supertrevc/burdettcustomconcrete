import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  rating = 5,
  className,
  size = "size-5",
}: {
  rating?: number;
  className?: string;
  size?: string;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating.toFixed(1)} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn(
            size,
            i < Math.round(rating)
              ? "fill-amber text-amber"
              : "fill-line text-line",
          )}
        />
      ))}
    </span>
  );
}
