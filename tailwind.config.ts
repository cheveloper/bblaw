import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F4EE",
        cream: "#EFE9DE",
        sand: "#E4DBCB",
        ink: "#1A1814",
        graphite: "#2B2723",
        stone: "#6B6358",
        gold: "#A8853E",
        goldlight: "#C9A961",
        bronze: "#8A6D2F",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.18em",
      },
      boxShadow: {
        soft: "0 2px 40px -12px rgba(26,24,20,0.12)",
        card: "0 20px 60px -24px rgba(26,24,20,0.18)",
        lift: "0 30px 80px -30px rgba(26,24,20,0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
