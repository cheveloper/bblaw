"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { SITE, t } from "@/lib/content";
import { EASE } from "@/lib/motion";
import { Reveal } from "./Reveal";
import { Icons } from "./Icons";

export default function Services() {
  const { lang } = useLang();

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-luxe text-bronze">
            {t.services.eyebrow[lang]}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {t.services.title[lang]}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            {t.services.intro[lang]}
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((item, i) => {
            const Icon = Icons[item.k];
            return (
              <motion.article
                key={item.k}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: (i % 4) * 0.07, ease: EASE }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-sand bg-ivory p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-card"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-bronze to-goldlight transition-transform duration-500 group-hover:scale-x-100" />

                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-sand bg-cream/60 text-bronze transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-ink group-hover:text-goldlight">
                    {Icon()}
                  </div>

                  <h3 className="font-serif text-2xl font-semibold leading-tight text-ink">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
                    {item.desc[lang]}
                  </p>

                  <a
                    href={SITE.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-bronze transition-all hover:gap-3"
                  >
                    <span>{lang === "ru" ? "Заказать" : "Request"}</span>
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
