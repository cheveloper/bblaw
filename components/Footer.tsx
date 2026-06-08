"use client";

import { useLang } from "@/lib/LanguageContext";
import { SITE, t } from "@/lib/content";

export default function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand bg-ivory py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="font-serif text-2xl font-semibold text-ink">
              {SITE.name[lang]}
            </div>
            <p className="mt-1 text-xs uppercase tracking-luxe text-stone">
              {t.footer.tagline[lang]}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-stone">
            <a href={`tel:${SITE.phoneHref}`} className="transition-colors hover:text-ink">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-ink">
              {SITE.email}
            </a>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-ink"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="hairline my-8" />

        <div className="flex flex-col items-start justify-between gap-2 text-xs text-stone md:flex-row md:items-center">
          <p>
            © {year} {SITE.name[lang]}. {t.footer.rights[lang]}
          </p>
          <p>
            {lang === "ru" ? "Лицензия" : "License"} № {SITE.license} ·{" "}
            {lang === "ru" ? "Министерство юстиции РК" : "Ministry of Justice, KZ"}
          </p>
        </div>
      </div>
    </footer>
  );
}
