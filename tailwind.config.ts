import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#111517",
        dark: "#ffffff",
      },
      backgroundColor: {
        element: "#ffffff",
        "element-dark": "#2b3945",
        input: "#858585",
        light: "#fafafa",
        dark: "#202c37",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "25px",
          lg: "50px",
        },
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
