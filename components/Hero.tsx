"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { SITE, t } from "@/lib/content";
import { EASE } from "@/lib/motion";
import HeroEmblem from "./HeroEmblem";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 01-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 01-1.44-5.01c0-5.18 4.22-9.4 9.41-9.4 2.51 0 4.87.98 6.64 2.76a9.34 9.34 0 012.75 6.65c-.01 5.18-4.22 9.4-9.4 9.4z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

export default function Hero() {
  const { lang } = useLang();

  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-cream to-transparent blur-3xl" />
        <div className="absolute top-40 -left-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-sand/60 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-32">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-sand bg-ivory/60 px-4 py-2 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-luxe text-stone">
              {t.hero.eyebrow[lang]}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: EASE }}
            className="whitespace-pre-line font-serif text-5xl font-semibold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            {t.hero.title[lang]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: EASE }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-stone"
          >
            {t.hero.subtitle[lang]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: EASE }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1F7A4D] px-7 py-4 text-base font-medium text-white shadow-card transition-all hover:scale-[1.02] hover:bg-[#1a6841] hover:shadow-lift"
            >
              <WhatsAppIcon />
              {t.hero.whatsapp[lang]}
            </a>
            <a
              href={`tel:${SITE.phoneHref}`}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-ink/15 bg-ivory/50 px-7 py-4 text-base font-medium text-ink backdrop-blur transition-all hover:border-ink hover:bg-ivory"
            >
              <PhoneIcon />
              {t.hero.call[lang]}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex items-center gap-6 text-sm text-stone"
          >
            <div>
              <div className="font-serif text-3xl font-semibold text-ink">9+</div>
              <div className="text-xs uppercase tracking-wider">
                {lang === "ru" ? "лет опыта" : "years"}
              </div>
            </div>
            <div className="h-10 w-px bg-sand" />
            <div>
              <div className="font-serif text-3xl font-semibold text-ink">500+</div>
              <div className="text-xs uppercase tracking-wider">
                {lang === "ru" ? "клиентов" : "clients"}
              </div>
            </div>
            <div className="h-10 w-px bg-sand" />
            <div>
              <div className="font-serif text-3xl font-semibold text-ink">5.0★</div>
              <div className="text-xs uppercase tracking-wider">
                {lang === "ru" ? "рейтинг" : "rating"}
              </div>
            </div>
          </motion.div>
        </div>

        <HeroEmblem />
      </div>
    </section>
  );
}
