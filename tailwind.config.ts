import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },

      backgroundImage: {
        appointments: "url('/assets/images/appointments-bg.png')",
        pending: "url('/assets/images/pending-bg.png')",
        cancelled: "url('/assets/images/cancelled-bg.png')",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;