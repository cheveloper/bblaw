"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/content";
import { EASE } from "@/lib/motion";

/**
 * Premium legal hero visual — no photography, no portrait.
 * An engraved "official document" panel carrying:
 *   · a justice scales + seal emblem
 *   · the real license number as a verification badge
 *   · notarial document / certification motifs
 * Custom SVG keeps it crisp, on-brand, and credibility-focused.
 */

/**
 * Seal-ring dot coordinates, precomputed with fixed precision.
 * These were generated once from `80 + 69*cos/sin((i/48)*2π)` and frozen
 * as constants so the server and client emit byte-identical SVG markup —
 * runtime trig would risk floating-point drift and a hydration mismatch.
 */
const SEAL_DOTS: readonly (readonly [number, number])[] = [
  [149, 80], [148.41, 89.006], [146.649, 97.859], [143.748, 106.405],
  [139.756, 114.5], [134.741, 122.005], [128.79, 128.79], [122.005, 134.741],
  [114.5, 139.756], [106.405, 143.748], [97.859, 146.649], [89.006, 148.41],
  [80, 149], [70.994, 148.41], [62.141, 146.649], [53.595, 143.748],
  [45.5, 139.756], [37.995, 134.741], [31.21, 128.79], [25.259, 122.005],
  [20.244, 114.5], [16.252, 106.405], [13.351, 97.859], [11.59, 89.006],
  [11, 80], [11.59, 70.994], [13.351, 62.141], [16.252, 53.595],
  [20.244, 45.5], [25.259, 37.995], [31.21, 31.21], [37.995, 25.259],
  [45.5, 20.244], [53.595, 16.252], [62.141, 13.351], [70.994, 11.59],
  [80, 11], [89.006, 11.59], [97.859, 13.351], [106.405, 16.252],
  [114.5, 20.244], [122.005, 25.259], [128.79, 31.21], [134.741, 37.995],
  [139.756, 45.5], [143.748, 53.595], [146.649, 62.141], [148.41, 70.994],
];

export default function HeroEmblem() {
  const { lang } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: EASE }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* Engraved document panel */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-sand bg-gradient-to-br from-ink via-graphite to-ink shadow-lift">
        {/* warm radial glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[34%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-goldlight/20 to-transparent blur-3xl" />
        </div>

        {/* fine double frame */}
        <div className="absolute inset-4 rounded-[1.5rem] border border-goldlight/25" />
        <div className="absolute inset-[1.15rem] rounded-[1.3rem] border border-goldlight/10" />

        {/* corner flourishes */}
        {[
          "left-6 top-6",
          "right-6 top-6 rotate-90",
          "right-6 bottom-6 rotate-180",
          "left-6 bottom-6 -rotate-90",
        ].map((pos, i) => (
          <svg key={i} className={`absolute ${pos} h-7 w-7 text-goldlight/50`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
            <path d="M3 11V3h8" strokeLinecap="round" />
            <path d="M3 7c4 0 8 2 10 6" strokeLinecap="round" opacity="0.6" />
          </svg>
        ))}

        {/* Center emblem */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
          <SealScales />

          <div className="mt-7 h-px w-16 bg-gradient-to-r from-transparent via-goldlight/60 to-transparent" />

          <p className="mt-5 font-serif text-2xl font-semibold leading-tight text-ivory">
            {lang === "ru" ? "Нотариус города Алматы" : "Notary of the City of Almaty"}
          </p>
          <p className="mt-2 text-xs uppercase tracking-luxe text-ivory/55">
            {lang === "ru" ? "Лицензированная нотариальная практика" : "Licensed Notarial Practice"}
          </p>

          {/* document lines motif */}
          <div className="mt-7 flex w-40 flex-col items-center gap-2 opacity-50">
            <span className="h-px w-full bg-ivory/30" />
            <span className="h-px w-4/5 bg-ivory/25" />
            <span className="h-px w-full bg-ivory/30" />
          </div>
        </div>
      </div>

      {/* License verification badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-sand bg-ivory/95 p-4 shadow-card backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 flex-none items-center justify-center rounded-full bg-ink text-goldlight">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l8 4v5c0 4.5-3 8-8 9-5-1-8-4.5-8-9V7z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-ink">
              {lang === "ru" ? "Лицензия № 16007655" : "License No. 16007655"}
              <span className="inline-flex items-center gap-1 rounded-full bg-bronze/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-bronze">
                <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7" />
                </svg>
                {lang === "ru" ? "Подтверждено" : "Verified"}
              </span>
            </div>
            <div className="truncate text-xs text-stone">
              {lang === "ru" ? "Министерство юстиции РК · 2016" : "Ministry of Justice, KZ · 2016"}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/** Justice scales inside an official seal ring — gently animated. */
function SealScales() {
  return (
    <div className="relative h-36 w-36">
      {/* rotating seal ring */}
      <motion.svg
        viewBox="0 0 160 160"
        className="absolute inset-0 h-full w-full text-goldlight"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, ease: "linear", repeat: Infinity }}
      >
        <circle cx="80" cy="80" r="74" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
        <circle cx="80" cy="80" r="63" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 5" />
        {/* seal text ring (dots as engraving) — precomputed, SSR-deterministic */}
        {SEAL_DOTS.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="0.9" fill="currentColor" fillOpacity="0.5" />
        ))}
      </motion.svg>

      {/* static scales of justice */}
      <svg viewBox="0 0 160 160" className="absolute inset-0 h-full w-full text-goldlight" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {/* center column */}
        <path d="M80 44v68" />
        {/* top knob */}
        <circle cx="80" cy="40" r="4" fill="currentColor" stroke="none" />
        {/* beam */}
        <path d="M44 56h72" />
        <path d="M80 44l0 12" />
        {/* base */}
        <path d="M66 116h28" />
        <path d="M72 116c0-4 3-6 8-6s8 2 8 6" />
        {/* left pan */}
        <path d="M44 56l-9 20h18z" strokeWidth="2" />
        <path d="M44 56v2" />
        {/* right pan */}
        <path d="M116 56l-9 20h18z" strokeWidth="2" />
        <path d="M116 56v2" />
        {/* hanging lines */}
        <path d="M44 56l-9 20M44 56l9 20" strokeWidth="1.2" strokeOpacity="0.7" />
        <path d="M116 56l-9 20M116 56l9 20" strokeWidth="1.2" strokeOpacity="0.7" />
      </svg>

      {/* soft pulse behind */}
      <motion.div
        className="absolute left-1/2 top-1/2 -z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-goldlight/15 blur-2xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
