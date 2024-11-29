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

        background: "bg-gradient-to-r from-gray-800 to-gray-900",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
