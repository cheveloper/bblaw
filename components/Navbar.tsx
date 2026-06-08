"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { SITE, t } from "@/lib/content";
import { EASE } from "@/lib/motion";

const links = [
  { id: "about", label: t.nav.about },
  { id: "services", label: t.nav.services },
  { id: "reviews", label: t.nav.reviews },
  { id: "faq", label: { ru: "Вопросы", en: "FAQ" } },
  { id: "contact", label: t.nav.contact },
];

export default function Navbar() {
  const { lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-xl shadow-soft border-b border-sand/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <a href="#home" className="group flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold tracking-tight text-ink md:text-2xl">
            {SITE.name[lang]}
          </span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-luxe text-stone">
            {t.footer.tagline[lang]}
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="group relative text-sm font-medium text-graphite transition-colors hover:text-ink"
            >
              {l.label[lang]}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Switch language"
            className="rounded-full border border-sand px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-graphite transition-colors hover:border-gold hover:text-gold"
          >
            {lang === "ru" ? "EN" : "RU"}
          </button>

          <a
            href="#booking"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-ivory transition-all hover:bg-graphite hover:shadow-card sm:inline-block"
          >
            {t.nav.cta[lang]}
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-px w-6 bg-ink transition-all ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`h-px w-6 bg-ink transition-all ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-px w-6 bg-ink transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden border-t border-sand/60 bg-ivory/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-serif text-xl text-graphite transition-colors hover:bg-cream"
                >
                  {l.label[lang]}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-ivory"
              >
                {t.nav.cta[lang]}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
