import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { fieldBase } from "./Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, rows = 5, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(fieldBase, "min-h-28 border-line py-3", className)}
      {...props}
    />
  );
});
