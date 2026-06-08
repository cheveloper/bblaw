"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/content";

const PDF_HREF = "/documents/license.pdf";
const FULL_IMAGE = "/images/license-original.jpg";

export default function LicenseModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { lang } = useLang();
  const l = t.about.license;
  const [zoomed, setZoomed] = useState(false);

  // Lock body scroll + close on Escape while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  // Reset zoom whenever the modal re-opens
  useEffect(() => {
    if (open) setZoomed(false);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex flex-col bg-ink/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={l.modalTitle[lang]}
          onClick={onClose}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between gap-4 px-4 py-4 md:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-lg font-semibold text-ivory md:text-xl">
              {l.modalTitle[lang]} · № {l.number}
            </h3>
            <div className="flex items-center gap-2">
              <a
                href={PDF_HREF}
                download
                className="inline-flex items-center gap-2 rounded-full bg-goldlight px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-[#d4b56f]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                </svg>
                <span className="hidden sm:inline">{l.download[lang]}</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                aria-label={l.close[lang]}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-ivory transition-colors hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable image stage */}
          <div
            className="flex-1 overflow-auto px-4 pb-6 md:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto flex min-h-full w-full max-w-3xl items-start justify-center">
              <button
                type="button"
                onClick={() => setZoomed((z) => !z)}
                aria-label={l.zoomHint[lang]}
                className="block w-full cursor-zoom-in"
                style={{ cursor: zoomed ? "zoom-out" : "zoom-in" }}
              >
                <div
                  className="relative mx-auto overflow-hidden rounded-xl bg-white shadow-lift transition-all duration-300"
                  style={{ width: zoomed ? "180%" : "100%", maxWidth: zoomed ? "none" : "768px" }}
                >
                  <Image
                    src={FULL_IMAGE}
                    alt={l.previewAlt[lang]}
                    width={1400}
                    height={1977}
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="h-auto w-full"
                    priority
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Bottom hint */}
          <div
            className="px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-1 text-center text-xs text-ivory/60"
            onClick={(e) => e.stopPropagation()}
          >
            {l.zoomHint[lang]}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
