import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "outlineDark"
  | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold transition-shadow transition-colors duration-300 shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-amber text-white hover:bg-amber-dark",
  secondary: "bg-navy text-white hover:bg-navy-light",
  // For use on dark/navy backgrounds
  outline: "border border-white/40 text-white hover:bg-white/10 shadow-none",
  // For use on light backgrounds
  outlineDark:
    "border border-line text-navy bg-white hover:bg-surface hover:border-navy/30",
  ghost: "text-navy hover:bg-surface shadow-none",
};

// Sizes keep a minimum 44px tap target (h-11 = 44px).
const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-12 px-7 text-base md:text-lg",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}): string {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
