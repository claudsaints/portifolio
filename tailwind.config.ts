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
        c_glow: "#BE3144",
        c_red: "#E17564",
      },
      screens: {
        "landscape-mobile": {
          raw: "(min-width: 640px) and (max-width: 932px) and (max-height: 430px)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
