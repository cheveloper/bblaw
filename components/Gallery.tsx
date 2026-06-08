"use client";

import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/content";
import { Reveal } from "./Reveal";
import SmartImage from "./SmartImage";

export default function Gallery() {
  const { lang } = useLang();

  return (
    <section className="relative border-y border-sand/60 bg-cream/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-luxe text-bronze">
            {t.gallery.eyebrow[lang]}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {t.gallery.title[lang]}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            {t.gallery.intro[lang]}
          </p>
        </Reveal>

        {/* Mosaic: real building (large) + entrance + office placeholders */}
        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          <Reveal className="col-span-2 row-span-2 h-full">
            <SmartImage
              img="building"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full"
              imgClassName="transition-transform duration-700 hover:scale-105"
            />
          </Reveal>

          <Reveal delay={1} className="col-span-2 md:col-span-1 md:row-span-2 h-full">
            <SmartImage
              img="entrance"
              sizes="(max-width: 768px) 100vw, 25vw"
              className="h-full w-full"
              imgClassName="transition-transform duration-700 hover:scale-105"
            />
          </Reveal>

          <Reveal delay={2} className="md:row-span-1 h-full">
            <SmartImage img="office1" sizes="25vw" className="h-full w-full" />
          </Reveal>

          <Reveal delay={3} className="md:row-span-1 h-full">
            <SmartImage img="office2" sizes="25vw" className="h-full w-full" />
          </Reveal>

          <Reveal delay={2} className="col-span-2 md:col-span-3 md:row-span-1 h-full">
            <SmartImage img="office3" sizes="(max-width: 768px) 100vw, 75vw" className="h-full w-full" />
          </Reveal>

          <Reveal delay={3} className="md:row-span-1 h-full">
            <SmartImage img="office4" sizes="25vw" className="h-full w-full" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
