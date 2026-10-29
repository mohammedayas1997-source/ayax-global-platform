import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ayax: {
          navy: "#031B4E",       // Deep Royal Navy
          dark: "#021235",       // Darker Navy don background
          lightNavy: "#0D2E70",  // Light accent navy
          gold: "#F59E0B",       // Core Gold
          lightGold: "#FBBF24",  // Vibrant Gold
          softBg: "#F8FAFC",
        },
      },
    },
  },
  plugins: [],
};
export default config;