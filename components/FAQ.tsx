"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/content";
import { EASE } from "@/lib/motion";
import { Reveal } from "./Reveal";

export default function FAQ() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <Reveal className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-luxe text-bronze">
            {t.faq.eyebrow[lang]}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {t.faq.title[lang]}
          </h2>
        </Reveal>

        <div className="divide-y divide-sand overflow-hidden rounded-3xl border border-sand bg-ivory">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-cream/50 md:px-8"
                >
                  <span className="font-serif text-lg font-medium text-ink md:text-xl">
                    {item.q[lang]}
                  </span>
                  <span
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border border-sand text-bronze transition-all duration-300 ${
                      isOpen ? "rotate-45 bg-ink text-goldlight" : ""
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-stone md:px-8">
                        {item.a[lang]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
