"use client";

import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/content";
import { Reveal } from "./Reveal";
import License from "./License";

export default function About() {
  const { lang } = useLang();

  return (
    <section id="about" className="relative overflow-hidden bg-ink py-24 text-ivory md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-bronze/20 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        {/* Biography */}
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-luxe text-goldlight">
              {t.about.eyebrow[lang]}
            </span>
            <h2 className="mt-4 whitespace-pre-line font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              {t.about.title[lang]}
            </h2>
          </Reveal>

          <div>
            <div className="space-y-5">
              {t.about.body[lang].map((p, i) => (
                <Reveal key={i} delay={i + 1}>
                  <p className="text-base leading-relaxed text-ivory/75">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={5}>
              <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-goldlight" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
                <span className="text-sm text-ivory/85">
                  {t.about.licenseCard.issued[lang]}
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Dedicated license & verification section */}
        <div className="mt-16 md:mt-20">
          <License />
        </div>
      </div>
    </section>
  );
}
