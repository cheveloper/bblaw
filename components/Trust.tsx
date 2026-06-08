"use client";

import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Icons } from "./Icons";

export default function Trust() {
  const { lang } = useLang();

  return (
    <section className="relative border-y border-sand/60 bg-cream/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mb-14 text-center">
          <div className="hairline mx-auto mb-6 w-16" />
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {t.trust.title[lang]}
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-sand bg-sand sm:grid-cols-2 lg:grid-cols-4">
          {t.trust.items.map((item, i) => {
            const Icon = Icons[item.k];
            return (
              <Reveal
                key={item.k}
                delay={i}
                className="group bg-ivory p-8 transition-colors duration-500 hover:bg-white"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-bronze transition-all duration-500 group-hover:bg-ink group-hover:text-goldlight">
                  {Icon()}
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink">
                  {item.title[lang]}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-stone">
                  {item.desc[lang]}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
