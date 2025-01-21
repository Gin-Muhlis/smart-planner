import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssTyprography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        primary: "#00DF81",
        secondary: "#2CC295",
        tertiary: "#03624C",
        "dark-green": "#032221",
        "black-green": "RGB(2, 27, 26)",
        background: "#F1F7F6",
        stone: "#707D7D",
        pistachio: "#AAC8C4",
      },
      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTyprography],
} satisfies Config;
