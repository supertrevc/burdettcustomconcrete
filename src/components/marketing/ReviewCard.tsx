import { Card } from "@/components/ui/Card";
import { StarRating } from "./StarRating";
import type { Review } from "@/lib/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="flex h-full flex-col p-6">
      <StarRating rating={5} size="size-4" />
      <blockquote className="mt-4 flex-1 text-ink">
        <p className="leading-relaxed">{review.quote}</p>
      </blockquote>
      <footer className="mt-5 border-t border-line pt-4">
        <p className="font-heading font-semibold text-navy">{review.name}</p>
        <p className="text-sm text-muted">
          {review.project} · via {review.source}
        </p>
      </footer>
    </Card>
  );
}
