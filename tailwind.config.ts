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
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: {
          DEFAULT: "#DC2626", // Crimson Red
          dark: "#991B1B",
          light: "#EF4444",
        },
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        accent: "#F87171",
        surface: {
          DEFAULT: "#111417",
          low: "#191C1F",
          high: "#282A2E",
          highest: "#323539",
        }
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "var(--font-plus-jakarta)", "sans-serif"],
      },
      borderRadius: {
        lg: "12px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
