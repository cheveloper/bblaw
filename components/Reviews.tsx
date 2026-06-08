"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/content";
import { Reveal } from "./Reveal";
import { EASE } from "@/lib/motion";

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.5 6.8L12 17.8 5.9 20.9l1.5-6.8L2.2 8.9l6.9-.6z" />
        </svg>
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Reviews() {
  const { lang } = useLang();

  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-luxe text-bronze">
            {t.reviews.eyebrow[lang]}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {t.reviews.title[lang]}
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-sand bg-ivory px-5 py-2.5">
            <Stars />
            <span className="text-sm font-medium text-graphite">
              5.0 · {lang === "ru" ? "по отзывам клиентов" : "based on client reviews"}
            </span>
          </div>
        </Reveal>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {t.reviews.items.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: EASE }}
              className="group mb-5 break-inside-avoid rounded-3xl border border-sand bg-ivory p-7 transition-all duration-500 hover:border-gold/40 hover:shadow-card"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-serif text-base font-semibold text-goldlight">
                  {initials(r.name)}
                </div>
                <div>
                  <figcaption className="font-semibold text-ink">{r.name}</figcaption>
                  <p className="text-xs text-stone">{r.date[lang]}</p>
                </div>
              </div>
              <div className="mt-4">
                <Stars />
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-graphite/90">
                “{r.text[lang]}”
              </blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
