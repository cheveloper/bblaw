"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/content";
import { Reveal } from "./Reveal";
import LicenseModal from "./LicenseModal";

export default function License() {
  const { lang } = useLang();
  const l = t.about.license;
  const [open, setOpen] = useState(false);

  const details: { label: string; value: string }[] = [
    { label: l.numberLabel[lang], value: `№ ${l.number}` },
    { label: l.dateLabel[lang], value: l.date[lang] },
    { label: l.authorityLabel[lang], value: l.authority[lang] },
    { label: l.activityLabel[lang], value: l.activity[lang] },
  ];

  return (
    <section
      id="license"
      aria-labelledby="license-title"
      className="relative scroll-mt-24 border-t border-white/10 py-16 md:py-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Clickable preview */}
        <Reveal>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            className="group relative mx-auto block w-full max-w-sm cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white p-2 shadow-lift transition-all duration-500 group-hover:-translate-y-1 group-hover:border-goldlight/60 group-hover:shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[1400/1977] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/license.jpg"
                  alt={l.previewAlt[lang]}
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              {/* hover overlay with zoom cue */}
              <div className="pointer-events-none absolute inset-2 flex items-center justify-center rounded-xl bg-ink/0 transition-colors duration-500 group-hover:bg-ink/30">
                <span className="flex items-center gap-2 rounded-full bg-ivory/95 px-4 py-2.5 text-sm font-medium text-ink opacity-0 shadow-card transition-opacity duration-500 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                  </svg>
                  {l.viewButton[lang]}
                </span>
              </div>
            </div>
            {/* verified badge */}
            <span className="absolute -bottom-3 right-6 inline-flex items-center gap-1.5 rounded-full bg-goldlight px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink shadow-card">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
              № {l.number}
            </span>
          </button>
        </Reveal>

        {/* Details */}
        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-luxe text-goldlight">
              {l.eyebrow[lang]}
            </span>
            <h3 id="license-title" className="mt-4 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
              {l.title[lang]}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ivory/75">{l.trustText[lang]}</p>
          </Reveal>

          <dl className="mt-8 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {details.map((d, i) => (
              <Reveal as="div" key={i} delay={i} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <dt className="text-xs uppercase tracking-wider text-ivory/50">{d.label}</dt>
                <dd className="text-[15px] font-medium text-ivory sm:text-right">{d.value}</dd>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={4}>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-haspopup="dialog"
              className="mt-7 inline-flex items-center justify-center gap-2.5 rounded-full bg-goldlight px-7 py-4 text-base font-semibold text-ink transition-all hover:scale-[1.02] hover:bg-[#d4b56f] hover:shadow-card"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <path d="M8 8h8M8 12h8M8 16h5" />
              </svg>
              {l.viewButton[lang]}
            </button>
          </Reveal>
        </div>
      </div>

      <LicenseModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
