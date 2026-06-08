"use client";

import { useRef, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { SITE, t } from "@/lib/content";
import { Reveal } from "./Reveal";

export default function FindUs() {
  const { lang } = useLang();
  const f = t.contact.findUs;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    setPlaying(true);
    // Defer to allow the <video> to mount before calling play()
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {
        /* user can use native controls if programmatic play is blocked */
      });
    });
  }

  return (
    <section aria-labelledby="findus-title" className="border-t border-sand/60 pt-12 md:pt-16">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h3
          id="findus-title"
          className="font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl"
        >
          {f.title[lang]}
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone md:text-lg">
          {f.description[lang]}
        </p>
      </Reveal>

      <Reveal delay={1} className="mx-auto mt-9 w-full max-w-sm">
        {/* Premium video card */}
        <div className="relative overflow-hidden rounded-3xl border border-sand bg-ink shadow-card">
          {!playing ? (
            <button
              type="button"
              onClick={handlePlay}
              aria-label={f.playLabel[lang]}
              className="group relative block aspect-[3/4] w-full"
            >
              {/* Poster (eager-loaded, lightweight). Plain img keeps the card
                  fully static until the user opts in to the video. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/videos/directions-poster.jpg"
                alt={lang === "ru" ? "Вход в Koktem Towers" : "Koktem Towers entrance"}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              {/* Play affordance */}
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <span className="absolute h-16 w-16 rounded-full bg-goldlight/30 transition-transform duration-500 group-hover:scale-110" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-goldlight text-ink shadow-lift transition-transform duration-500 group-hover:scale-105">
                  <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
              <span className="absolute bottom-4 left-0 right-0 text-center text-sm font-medium text-ivory/90">
                {f.playLabel[lang]}
              </span>
            </button>
          ) : (
            <video
              ref={videoRef}
              className="aspect-[3/4] w-full bg-ink"
              controls
              playsInline
              preload="metadata"
              poster="/videos/directions-poster.jpg"
            >
              <source src="/videos/directions.mp4" type="video/mp4" />
            </video>
          )}
        </div>

        {/* Build Route button */}
        <a
          href={SITE.googleRouteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-4 text-base font-medium text-ivory transition-all hover:scale-[1.01] hover:bg-graphite hover:shadow-card"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11l18-8-8 18-2-7-8-3z" />
          </svg>
          {f.buildRoute[lang]}
        </a>

        {/* Help note */}
        <p className="mt-4 text-center text-sm leading-relaxed text-stone">
          {f.note[lang]}{" "}
          <a href={`tel:${SITE.phoneHref}`} className="font-semibold text-bronze hover:underline">
            {SITE.phone}
          </a>
        </p>
      </Reveal>
    </section>
  );
}
