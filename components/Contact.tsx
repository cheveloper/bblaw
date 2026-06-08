"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { SITE, t } from "@/lib/content";
import { Reveal } from "./Reveal";
import Directions from "./Directions";
import FindUs from "./FindUs";

export default function Contact() {
  const { lang } = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No backend: route the lead to WhatsApp with prefilled text.
    const msg =
      lang === "ru"
        ? `Здравствуйте! Меня зовут ${name}. Мой телефон: ${phone}. Хочу записаться к нотариусу.`
        : `Hello! My name is ${name}. My phone: ${phone}. I'd like to book a notary appointment.`;
    window.open(`${SITE.whatsappHref}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="relative border-t border-sand/60 bg-cream/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-luxe text-bronze">
            {t.contact.eyebrow[lang]}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {t.contact.title[lang]}
          </h2>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Map + details */}
          <Reveal className="overflow-hidden rounded-3xl border border-sand bg-ivory shadow-soft">
            <div className="relative h-72 w-full overflow-hidden border-b border-sand md:h-80">
              <iframe
                title="Map"
                src={SITE.mapEmbed}
                className="h-full w-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={SITE.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 rounded-full bg-ink px-4 py-2 text-xs font-medium text-ivory shadow-card transition-colors hover:bg-graphite"
              >
                {lang === "ru" ? "Открыть в 2ГИС" : "Open in maps"}
              </a>
            </div>

            <div className="grid gap-6 p-8 sm:grid-cols-2">
              <Detail
                label={lang === "ru" ? "Адрес" : "Address"}
                value={t.contact.address[lang]}
              />
              <Detail
                label={t.contact.hoursTitle[lang]}
                value={t.contact.hours[lang].join("\n")}
              />
              <Detail
                label={lang === "ru" ? "Телефон" : "Phone"}
                value={SITE.phone}
                href={`tel:${SITE.phoneHref}`}
              />
              <Detail label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
            </div>
            <div className="border-t border-sand px-8 py-6">
              <Directions />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={1} className="rounded-3xl border border-sand bg-ink p-8 text-ivory md:p-10">
            <h3 className="font-serif text-2xl font-semibold">
              {lang === "ru" ? "Записаться на приём" : "Book an appointment"}
            </h3>
            <p className="mt-2 text-sm text-ivory/60">{t.contact.formNote[lang]}</p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-goldlight/30 bg-white/5 py-12 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-goldlight text-ink">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="mt-4 max-w-xs text-ivory/80">{t.contact.sent[lang]}</p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="mt-7 space-y-5">
                <Field
                  label={t.contact.formName[lang]}
                  value={name}
                  onChange={setName}
                  placeholder={lang === "ru" ? "Ваше имя" : "Your name"}
                  required
                />
                <Field
                  label={t.contact.formPhone[lang]}
                  value={phone}
                  onChange={setPhone}
                  placeholder="+7 ___ ___ __ __"
                  type="tel"
                  required
                />
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-goldlight px-6 py-4 text-base font-semibold text-ink transition-all hover:scale-[1.01] hover:bg-[#d4b56f] hover:shadow-card"
                >
                  {t.contact.formSubmit[lang]}
                </button>
              </form>
            )}
          </Reveal>
        </div>

        {/* How to Find Us — video walkthrough */}
        <div className="mt-12 md:mt-16">
          <FindUs />
        </div>
      </div>
    </section>
  );
}

function Detail({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <p className="mt-1.5 whitespace-pre-line text-[15px] leading-relaxed text-graphite">
      {value}
    </p>
  );
  return (
    <div>
      <span className="text-xs font-semibold uppercase tracking-wider text-bronze">
        {label}
      </span>
      {href ? (
        <a href={href} className="block transition-colors hover:text-bronze">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ivory/80">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-ivory placeholder:text-ivory/30 outline-none transition-colors focus:border-goldlight focus:bg-white/10"
      />
    </label>
  );
}
