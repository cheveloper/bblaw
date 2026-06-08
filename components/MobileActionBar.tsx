"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { SITE } from "@/lib/content";

/**
 * Mobile-only sticky conversion bar: Call · WhatsApp · Book.
 * Appears after the hero. Large tap targets (>=56px) for thumb reach.
 */
export default function MobileActionBar() {
  const { lang } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const labels = {
    call: lang === "ru" ? "Звонок" : "Call",
    whatsapp: "WhatsApp",
    book: lang === "ru" ? "Запись" : "Book",
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-label={lang === "ru" ? "Быстрые действия" : "Quick actions"}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-sand/70 bg-ivory/95 px-3 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-2.5 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto grid max-w-md grid-cols-3 gap-2.5">
            <a
              href={`tel:${SITE.phoneHref}`}
              className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 rounded-2xl border border-sand bg-white text-ink transition-colors active:bg-cream"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span className="text-[11px] font-semibold">{labels.call}</span>
            </a>

            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 rounded-2xl bg-[#1F7A4D] text-white transition-colors active:bg-[#1a6841]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
              </svg>
              <span className="text-[11px] font-semibold">{labels.whatsapp}</span>
            </a>

            <a
              href="#booking"
              className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 rounded-2xl bg-ink text-goldlight transition-colors active:bg-graphite"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18M9 15l2 2 4-4" />
              </svg>
              <span className="text-[11px] font-semibold">{labels.book}</span>
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
