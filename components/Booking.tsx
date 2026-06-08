"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { SITE, t } from "@/lib/content";
import { EASE } from "@/lib/motion";
import { Reveal } from "./Reveal";

const TIME_SLOTS = ["10:00 — 12:00", "12:00 — 14:00", "14:00 — 16:00", "16:00 — 18:00"];

type Errors = Partial<Record<"name" | "phone" | "email" | "service", string>>;

export default function Booking() {
  const { lang } = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const v = t.booking.validation;

  function validate(): boolean {
    const e: Errors = {};
    if (!name.trim()) e.name = v.name[lang];
    if (phone.replace(/[^0-9]/g, "").length < 7) e.phone = v.phone[lang];
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = v.email[lang];
    if (!service) e.service = v.service[lang];
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function buildWhatsAppText(): string {
    const L = lang === "ru";
    const lines = [
      L ? "Здравствуйте! Хочу записаться на приём к нотариусу." : "Hello! I'd like to book a notary appointment.",
      `${L ? "Имя" : "Name"}: ${name}`,
      `${L ? "Телефон" : "Phone"}: ${phone}`,
      email && `Email: ${email}`,
      service && `${L ? "Услуга" : "Service"}: ${service}`,
      date && `${L ? "Дата" : "Date"}: ${date}`,
      time && `${L ? "Время" : "Time"}: ${time}`,
      comment && `${L ? "Комментарий" : "Comment"}: ${comment}`,
    ].filter(Boolean);
    return lines.join("\n");
  }

  function openWhatsApp() {
    const url = `${SITE.whatsappHref}?text=${encodeURIComponent(buildWhatsAppText())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  // Primary submit: send to notary via email API, then show confirmation.
  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, service, date, time, comment, lang }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (res.ok && data.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  // WhatsApp submit: validate, open WhatsApp with prefilled details.
  function onWhatsAppSubmit() {
    if (!validate()) return;
    openWhatsApp();
  }

  function reset() {
    setName(""); setPhone(""); setEmail(""); setService("");
    setDate(""); setTime(""); setComment(""); setErrors({}); setStatus("idle");
  }

  return (
    <section id="booking" className="relative overflow-hidden bg-ink py-24 text-ivory md:py-32 scroll-mt-20">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-bronze/20 to-transparent blur-3xl" />
        <div className="absolute -right-32 top-0 h-[360px] w-[360px] rounded-full bg-gradient-to-bl from-goldlight/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left: pitch */}
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-luxe text-goldlight">
            {t.booking.eyebrow[lang]}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {t.booking.title[lang]}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ivory/70">{t.booking.intro[lang]}</p>

          <ul className="mt-8 space-y-3.5">
            {t.booking.benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-goldlight/15 text-goldlight">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span className="text-ivory/85">{b[lang]}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-3 text-sm text-ivory/60">
            <span>{t.booking.callInstead[lang]}:</span>
            <a href={`tel:${SITE.phoneHref}`} className="font-semibold text-goldlight hover:underline">
              {SITE.phone}
            </a>
          </div>
        </Reveal>

        {/* Right: form / success */}
        <Reveal delay={1}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md md:p-9">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-goldlight text-ink">
                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-semibold">{t.booking.success.title[lang]}</h3>
                  <p className="mt-3 max-w-sm text-ivory/70">{t.booking.success.body[lang]}</p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <button
                      onClick={openWhatsApp}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F7A4D] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a6841]"
                    >
                      <WhatsAppGlyph /> WhatsApp
                    </button>
                    <button
                      onClick={reset}
                      className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-ivory/80 transition-colors hover:bg-white/5"
                    >
                      {t.booking.success.again[lang]}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label={t.contact.formName[lang]} value={name} onChange={setName}
                      placeholder={t.booking.namePlaceholder[lang]} required error={errors.name} autoComplete="name"
                    />
                    <Field
                      label={t.contact.formPhone[lang]} value={phone} onChange={setPhone}
                      placeholder={t.booking.phonePlaceholder[lang]} type="tel" required error={errors.phone} autoComplete="tel"
                    />
                  </div>

                  <div className="mt-5">
                    <Field
                      label={t.booking.emailLabel[lang]} value={email} onChange={setEmail}
                      placeholder={t.booking.emailPlaceholder[lang]} type="email" error={errors.email} autoComplete="email"
                    />
                  </div>

                  <div className="mt-5">
                    <label htmlFor="bk-service" className="mb-2 block text-sm font-medium text-ivory/80">
                      {t.booking.serviceLabel[lang]} <span className="text-goldlight">*</span>
                    </label>
                    <select
                      id="bk-service" value={service} onChange={(e) => setService(e.target.value)}
                      aria-invalid={!!errors.service}
                      className={`w-full rounded-xl border bg-white/5 px-4 py-3.5 text-ivory outline-none transition-colors focus:border-goldlight focus:bg-white/10 ${errors.service ? "border-red-400/70" : "border-white/15"}`}
                    >
                      <option value="" className="bg-ink">{t.booking.selectService[lang]}</option>
                      {t.services.items.map((s) => (
                        <option key={s.k} value={s.title[lang]} className="bg-ink">{s.title[lang]}</option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1.5 text-xs text-red-300">{errors.service}</p>}
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="bk-date" className="mb-2 block text-sm font-medium text-ivory/80">
                        {t.booking.dateLabel[lang]}
                      </label>
                      <input
                        id="bk-date" type="date" value={date} onChange={(e) => setDate(e.target.value)}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-ivory outline-none transition-colors focus:border-goldlight focus:bg-white/10 [color-scheme:dark]"
                      />
                    </div>
                    <div>
                      <label htmlFor="bk-time" className="mb-2 block text-sm font-medium text-ivory/80">
                        {t.booking.timeLabel[lang]}
                      </label>
                      <select
                        id="bk-time" value={time} onChange={(e) => setTime(e.target.value)}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-ivory outline-none transition-colors focus:border-goldlight focus:bg-white/10"
                      >
                        <option value="" className="bg-ink">{t.booking.timeAny[lang]}</option>
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot} className="bg-ink">{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="bk-comment" className="mb-2 block text-sm font-medium text-ivory/80">
                      {t.booking.commentLabel[lang]}
                    </label>
                    <textarea
                      id="bk-comment" value={comment} onChange={(e) => setComment(e.target.value)}
                      placeholder={t.booking.commentPlaceholder[lang]} rows={3}
                      className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-ivory placeholder:text-ivory/30 outline-none transition-colors focus:border-goldlight focus:bg-white/10"
                    />
                  </div>

                  {status === "error" && (
                    <p className="mt-4 rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                      {t.booking.errorMsg[lang]}
                    </p>
                  )}

                  <button
                    type="submit" disabled={status === "sending"}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-goldlight px-6 py-4 text-base font-semibold text-ink transition-all hover:scale-[1.01] hover:bg-[#d4b56f] disabled:opacity-60"
                  >
                    {status === "sending" ? t.booking.sending[lang] : t.booking.submit[lang]}
                  </button>

                  <div className="my-4 flex items-center gap-3 text-xs uppercase tracking-wider text-ivory/40">
                    <span className="h-px flex-1 bg-white/10" />
                    {t.booking.orDivider[lang]}
                    <span className="h-px flex-1 bg-white/10" />
                  </div>

                  <button
                    type="button" onClick={onWhatsAppSubmit}
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1F7A4D] px-6 py-4 text-base font-semibold text-white transition-all hover:scale-[1.01] hover:bg-[#1a6841]"
                  >
                    <WhatsAppGlyph />
                    {t.booking.submitWhatsApp[lang]}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
    </svg>
  );
}

function Field({
  label, value, onChange, placeholder, type = "text", required, error, autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  const id = `bk-${label.toLowerCase().replace(/[^a-z0-9]/g, "")}`;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ivory/80">
        {label} {required && <span className="text-goldlight">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border bg-white/5 px-4 py-3.5 text-ivory placeholder:text-ivory/30 outline-none transition-colors focus:border-goldlight focus:bg-white/10 ${error ? "border-red-400/70" : "border-white/15"}`}
      />
      {error && <p className="mt-1.5 text-xs text-red-300">{error}</p>}
    </div>
  );
}
