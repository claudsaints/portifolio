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
        black: "#09122C",
        glow: "#8E1616",
        c_glow: "#b61c1c",
        c_red: "#E17564",
      },
      screens: {
        "landscape-mobile": {
          raw: "(min-width: 640px) and (max-width: 932px) and (max-height: 430px)",
        },
      },
      fontFamily: {
        tysla: ["var(--font-tysla)", "sans-serif"],
        gest: ["var(--font-geist-sans)", "sans-serif"],
        gestMono: ["var(--font-geist-mono)", "monospace"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
