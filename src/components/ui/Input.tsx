import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const fieldBase =
  "w-full rounded-lg border bg-white px-4 text-base text-ink placeholder:text-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber aria-[invalid=true]:border-red-500";

export const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(fieldBase, "h-11 border-line", className)}
      {...props}
    />
  );
});
