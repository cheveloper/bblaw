export type ImgAsset = {
  src: string;
  alt: { ru: string; en: string };
  /** real = supplied by client; placeholder = needs a real photo dropped in */
  status: "real" | "placeholder";
  /** recommended dimensions for the replacement photo */
  recommended?: string;
};

/**
 * IMAGE MANIFEST
 * --------------
 * Every photo slot on the site is declared here so it's obvious which
 * images are real (already provided by the notary) and which are
 * placeholders awaiting a professional photo.
 *
 * To finish the site: shoot/supply the "placeholder" images at the
 * recommended size, drop them in /public/images with the EXACT filename
 * below, and flip `status` to "real". No other code changes needed.
 */
export const IMAGES = {
  // ✅ REAL — extracted from the notary's own license document
  license: {
    src: "/images/license.jpg",
    alt: {
      ru: "Государственная лицензия № 16007655, Министерство юстиции РК",
      en: "State license No. 16007655, Ministry of Justice of Kazakhstan",
    },
    status: "real",
  },

  // ✅ REAL — the actual Koktem Towers building (from client video)
  building: {
    src: "/images/building.jpg",
    alt: {
      ru: 'БЦ «Koktem Towers», пр. Достык 180, Алматы',
      en: "Koktem Towers Business Center, 180 Dostyk Ave, Almaty",
    },
    status: "real",
  },

  // ✅ REAL — building entrance (from client video)
  entrance: {
    src: "/images/entrance.jpg",
    alt: {
      ru: "Вход в бизнес-центр, где расположен офис нотариуса",
      en: "Entrance to the business center housing the notary office",
    },
    status: "real",
  },

  // ✅ REAL — location map (client 2GIS screenshot)
  map: {
    src: "/images/location-map.jpg",
    alt: {
      ru: "Расположение офиса на карте — пр. Достык 180",
      en: "Office location on the map — 180 Dostyk Avenue",
    },
    status: "real",
  },

  // ⛔ PLACEHOLDER — office gallery
  office1: {
    src: "/images/office-1.jpg",
    alt: { ru: "Офис нотариуса", en: "Notary office" },
    status: "placeholder",
    recommended: "Landscape, 1600×1067px",
  },
  office2: {
    src: "/images/office-2.jpg",
    alt: { ru: "Зона ресепшн", en: "Reception area" },
    status: "placeholder",
    recommended: "Portrait, 1067×1600px",
  },
  office3: {
    src: "/images/office-3.jpg",
    alt: { ru: "Переговорная зона", en: "Meeting area" },
    status: "placeholder",
    recommended: "Landscape, 1600×1067px",
  },
  office4: {
    src: "/images/office-4.jpg",
    alt: { ru: "Зона ожидания для клиентов", en: "Client waiting area" },
    status: "placeholder",
    recommended: "Landscape, 1600×1067px",
  },
} as const;

export type ImageKey = keyof typeof IMAGES;
