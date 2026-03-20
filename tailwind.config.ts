import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0b1f4d",
        ink: "#07132b",
        cream: "#f7f0e4",
        gold: "#d2ab60",
        "gold-soft": "#f3dfb2"
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"]
      },
      boxShadow: {
        luxury: "0 28px 80px rgba(2, 7, 22, 0.28)",
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 18px 48px rgba(2, 7, 22, 0.38)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top, rgba(255,255,255,0.18), transparent 42%)",
        "gold-line": "linear-gradient(90deg, rgba(210,171,96,0), rgba(243,223,178,0.9), rgba(210,171,96,0))"
      }
    }
  },
  plugins: []
};

export default config;
