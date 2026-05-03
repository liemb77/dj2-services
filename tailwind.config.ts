import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0D0F14",
        "bg-secondary": "#131620",
        "bg-card": "#161923",
        gold: "#C9A96E",
        "gold-muted": "#8B7240",
        "text-primary": "#F5F3EE",
        "text-secondary": "#A8A5A0",
        "text-muted": "#8A8FA0",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        dm: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      borderColor: {
        "gold-subtle": "rgba(201, 169, 110, 0.3)",
        subtle: "rgba(255, 255, 255, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
