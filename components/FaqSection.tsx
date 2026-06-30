"use client";

import { useState } from "react";
import Image from "next/image";
import { faqs } from "@/lib/content";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-blue px-5 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-[20px] bg-white/95"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                >
                  <span>{item.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      stroke="#202020"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div className={`faq-panel ${isOpen ? "open" : ""}`}>
                  <div>
                    <p className="px-5 pb-5 text-ink/80">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Image
        src="/assets/faq-character.png"
        alt=""
        width={160}
        height={160}
        aria-hidden
        className="pointer-events-none absolute bottom-6 right-4 hidden h-auto w-28 md:block lg:right-12 lg:w-36"
      />
    </section>
  );
}
