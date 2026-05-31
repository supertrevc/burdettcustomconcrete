import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Tone = "white" | "surface" | "navy";

const toneClasses: Record<Tone, string> = {
  white: "bg-white text-ink",
  surface: "bg-surface text-ink",
  navy: "bg-navy text-light",
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: Tone;
  /** Wrap children in a centered max-w-7xl container (default true). */
  container?: boolean;
  containerClassName?: string;
}

export function Section({
  tone = "white",
  container = true,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-20 md:py-28", toneClasses[tone], className)}
      {...props}
    >
      {container ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
