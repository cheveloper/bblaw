"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { SITE, t } from "@/lib/content";

export default function Directions() {
  const { lang } = useLang();
  const [copied, setCopied] = useState(false);
  const d = t.contact.directions;

  async function copyAddress() {
    const address = t.contact.address[lang];
    try {
      await navigator.clipboard.writeText(address);
    } catch {
      // Fallback for older browsers / insecure contexts
      const el = document.createElement("textarea");
      el.value = address;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      try { document.execCommand("copy"); } catch { /* noop */ }
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }

  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-bronze">
        {d.heading[lang]}
      </h3>
      <div className="flex flex-wrap gap-3">
        <a
          href={SITE.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-ivory transition-all hover:bg-graphite hover:shadow-card"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21c5-5 7-8.5 7-12a7 7 0 10-14 0c0 3.5 2 7 7 12z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          {d.openMaps[lang]}
        </a>

        <a
          href={SITE.googleRouteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-ivory px-5 py-3 text-sm font-medium text-ink transition-all hover:border-ink hover:shadow-card"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11l18-8-8 18-2-7-8-3z" />
          </svg>
          {d.buildRoute[lang]}
        </a>

        <button
          type="button"
          onClick={copyAddress}
          aria-live="polite"
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-ivory px-5 py-3 text-sm font-medium text-ink transition-all hover:border-ink hover:shadow-card"
        >
          {copied ? (
            <>
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-bronze" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
              {d.copied[lang]}
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="11" height="11" rx="2" />
                <path d="M5 15V5a2 2 0 012-2h10" />
              </svg>
              {d.copyAddress[lang]}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
