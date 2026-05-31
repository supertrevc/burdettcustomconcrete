"use client";

import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  q: string;
  a: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-line rounded-xl border border-line bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.q}>
            <h3 className="m-0">
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-lg font-semibold text-navy hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber"
              >
                <span>{item.q}</span>
                {isOpen ? (
                  <Minus aria-hidden="true" className="size-5 shrink-0 text-amber" />
                ) : (
                  <Plus aria-hidden="true" className="size-5 shrink-0 text-amber" />
                )}
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className={cn("px-5 pb-5 text-ink")}
            >
              <p className="max-w-[70ch] leading-relaxed">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
