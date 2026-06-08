import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

// Display serif — supports Cyrillic for Russian headings.
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// Body sans — Manrope has full Cyrillic + Latin coverage.
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const SITE_URL = "https://notary-almaty.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Нотариус в центре Алматы — Тойганбаева Б.Б. | Notary in Almaty",
    template: "%s | Тойганбаева Б.Б.",
  },
  description:
    "Частный нотариус Тойганбаева Баглана Булатовна в центре Алматы. Доверенности, сделки с недвижимостью, завещания, согласия, переводы. Лицензия № 16007655. Быстро и надёжно.",
  keywords: [
    "нотариус Алматы",
    "частный нотариус",
    "доверенность Алматы",
    "сделки с недвижимостью",
    "нотариальные услуги",
    "notary Almaty",
    "Тойганбаева нотариус",
    "Koktem Towers нотариус",
  ],
  authors: [{ name: "Toiganbayeva Baglana" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: "en_US",
    url: SITE_URL,
    title: "Нотариус в центре Алматы — Тойганбаева Б.Б.",
    description:
      "Профессиональные нотариальные услуги в центре Алматы. Быстро, надёжно, с вниманием к каждому клиенту.",
    siteName: "Тойганбаева Б.Б. — Нотариус",
  },
  twitter: {
    card: "summary_large_image",
    title: "Нотариус в центре Алматы — Тойганбаева Б.Б.",
    description: "Профессиональные нотариальные услуги в центре Алматы.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#F7F4EE",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Нотариус Тойганбаева Баглана Булатовна",
  description: "Частный нотариус в центре Алматы. Полный спектр нотариальных услуг.",
  url: SITE_URL,
  telephone: "+77051702277",
  email: "toyganbaeva760@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: 'пр. Достык 180, БЦ "Koktem Towers", офис 11',
    addressLocality: "Алматы",
    addressCountry: "KZ",
  },
  geo: { "@type": "GeoCoordinates", latitude: 43.2325, longitude: 76.9555 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "10:00",
    closes: "18:00",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "State License for Notarial Activity No. 16007655",
    identifier: "16007655",
    datePublished: "2016-05-11",
    recognizedBy: {
      "@type": "GovernmentOrganization",
      name: "Ministry of Justice of the Republic of Kazakhstan",
    },
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Нужно ли записываться заранее?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "В будние дни приём без записи с 10:00 до 18:00. В субботу — по предварительной записи. Рекомендуем позвонить или написать в WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "Делаете ли вы нотариально заверенные переводы?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, выполняем переводы любых документов на все языки мира с нотариальным заверением — паспорта, свидетельства, договоры.",
      },
    },
    {
      "@type": "Question",
      name: "Где находится офис и есть ли парковка?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'Офис в БЦ «Koktem Towers», пр. Достык 180, офис 11, в центре Алматы. Для клиентов предусмотрена удобная парковка.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </head>
      <body className="font-sans grain antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
