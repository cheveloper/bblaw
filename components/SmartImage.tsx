"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { IMAGES, type ImageKey } from "@/lib/images";

/**
 * Renders a real photo via next/image when available, or a tasteful
 * branded placeholder that names the photo the client should supply.
 */
export default function SmartImage({
  img,
  className = "",
  imgClassName = "",
  sizes = "100vw",
  priority = false,
  width,
  height,
  rounded = "rounded-3xl",
}: {
  img: ImageKey;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  rounded?: string;
}) {
  const { lang } = useLang();
  const asset = IMAGES[img];
  const alt = asset.alt[lang];

  if (asset.status === "real") {
    return (
      <div className={`relative overflow-hidden ${rounded} ${className}`}>
        <Image
          src={asset.src}
          alt={alt}
          fill={!width}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
        />
      </div>
    );
  }

  // Placeholder — clearly indicates a real photo belongs here.
  const recommended =
    "recommended" in asset ? (asset.recommended as string) : "";
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden ${rounded} border border-sand bg-gradient-to-br from-cream to-sand/60 ${className}`}
    >
      <div className="flex flex-col items-center gap-3 px-6 py-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-bronze/30 bg-ivory/70 text-bronze">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.4}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="9" cy="10" r="2" />
            <path d="M3 17l5-4 4 3 3-2 6 5" />
          </svg>
        </div>
        <p className="max-w-[16rem] text-sm font-medium leading-snug text-graphite">
          {alt}
        </p>
        {recommended && (
          <p className="text-[11px] uppercase tracking-wider text-stone/80">
            {recommended}
          </p>
        )}
      </div>
    </div>
  );
}
