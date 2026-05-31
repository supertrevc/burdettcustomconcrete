import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-sm font-medium text-navy ring-1 ring-line",
        className,
      )}
      {...props}
    />
  );
}
