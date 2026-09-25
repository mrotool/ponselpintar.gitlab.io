import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-[var(--surface)] border-y border-[var(--border)] scroll-mt-20">
      <div className="container-page">
        <SectionHeading
          label="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          description="Jawaban atas pertanyaan umum seputar layanan Ponsel Pintar."
          center
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)]"
              >
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-[var(--fg)] sm:text-base">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-[var(--muted)] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-[var(--muted)] leading-relaxed whitespace-pre-line">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
