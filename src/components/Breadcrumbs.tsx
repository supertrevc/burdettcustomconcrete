import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  path: string;
}

/** Visible breadcrumb trail. Pair with breadcrumbJsonLd() for structured data. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {isLast ? (
                <span aria-current="page" className="font-medium text-navy">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path}
                    className="rounded-sm transition-colors hover:text-amber-ink hover:underline"
                  >
                    {item.name}
                  </Link>
                  <ChevronRight
                    aria-hidden="true"
                    className="size-4 text-line"
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
