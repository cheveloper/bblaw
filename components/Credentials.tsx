"use client";

import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/content";
import { Reveal } from "./Reveal";
import SmartImage from "./SmartImage";

export default function Credentials() {
  const { lang } = useLang();

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Real license, framed */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-3 -z-10 rounded-[1.75rem] bg-gradient-to-br from-cream to-sand/50" />
              <div className="rounded-[1.5rem] border border-sand bg-white p-3 shadow-card">
                <SmartImage
                  img="license"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="aspect-[3/4] w-full"
                  rounded="rounded-[1rem]"
                  imgClassName="object-contain bg-white"
                />
              </div>
              <div className="absolute -bottom-4 right-6 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-goldlight shadow-card">
                № 16007655
              </div>
            </div>
          </Reveal>

          {/* Trust copy */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-luxe text-bronze">
                {t.credentials.eyebrow[lang]}
              </span>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                {t.credentials.title[lang]}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-stone">
                {t.credentials.intro[lang]}
              </p>
            </Reveal>

            <ul className="mt-8 space-y-4">
              {t.credentials.points.map((p, i) => (
                <Reveal as="li" key={i} delay={i + 1} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-bronze/10 text-bronze">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <span className="text-[15px] leading-relaxed text-graphite">{p[lang]}</span>
                </Reveal>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-sand bg-sand sm:grid-cols-4">
              {t.credentials.stats.map((s, i) => (
                <Reveal key={i} delay={i} className="bg-ivory p-5 text-center">
                  <div className="font-serif text-3xl font-semibold text-ink">{s.value}</div>
                  <div className="mt-1 text-[11px] uppercase leading-tight tracking-wider text-stone">
                    {s.label[lang]}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Service guarantees */}
        <div className="mt-16">
          <Reveal className="mb-8 text-center">
            <h3 className="font-serif text-2xl font-semibold text-ink md:text-3xl">
              {t.credentials.guaranteesTitle[lang]}
            </h3>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {t.credentials.guarantees.map((g, i) => (
              <Reveal key={i} delay={i} className="rounded-3xl border border-sand bg-ivory p-7 text-center transition-all duration-500 hover:border-gold/40 hover:shadow-card">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-goldlight">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 4v5c0 4.5-3 8-8 9-5-1-8-4.5-8-9V7z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h4 className="font-serif text-xl font-semibold text-ink">{g.title[lang]}</h4>
                <p className="mt-2 text-sm leading-relaxed text-stone">{g.desc[lang]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
