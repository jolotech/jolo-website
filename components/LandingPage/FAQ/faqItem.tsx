"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  defaultOpenId?: string;
  className?: string;
};

export default function FAQ({
  items,
  title = "FAQs",
  subtitle = "You wonder? we have all the answers",
  defaultOpenId,
  className = "",
}: FAQProps) {
  const initial = defaultOpenId ?? items[0]?.id;

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          {subtitle && <p className="mt-2 text-sm md:text-base text-black/60">{subtitle}</p>}
        </div>

        <div className="rounded-2xl border border-black/15 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-3 md:p-4">
          <Accordion type="single" collapsible defaultValue={initial} className="space-y-3">
            {items.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-2 rounded-xl border-black
                  data-[state=open]:bg-black data-[state=open]:text-white"
              >
                <AccordionTrigger
                  className="
                    group
                    w-full rounded-xl px-4 md:px-5 py-4 text-left
                    bg-white
                    data-[state=open]:bg-black data-[state=open]:text-white
                    transition-colors
                  "
                >
                  <div className="flex w-full items-center justify-between gap-6 ">
                    <span className="text-base md:text-lg font-medium">{item.question}</span>
                    <span
                      className="
                        relative inline-flex h-6 w-6 shrink-0 items-center justify-center
                        rounded-full border border-black
                        group-data-[state=open]:border-white
                      "
                      aria-hidden
                    >
                      <span
                        className="
                          absolute h-[2px] w-3 bg-black
                          group-data-[state=open]:bg-white
                        "
                      />

                      <span
                        className="
                          absolute w-[2px] h-3 bg-black
                          group-data-[state=open]:opacity-0
                        "
                      />
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent
                  className="
                    rounded-b-xl px-4 md:px-5 pb-5 pt-1
                    data-[state=open]:bg-black data-[state=open]:text-white
                  "
                >
                  <p className="text-sm md:text-base leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
