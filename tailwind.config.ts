import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        beat: "beat 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        beat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.125)" },
        },
      },
      screens: {
        lg: { min: "900px" },
        xl: { min: "1100px" },
        "2xl": { min: "1280px" },
        "3xl": { min: "1520px" },
        "4xl": { min: "1920px" },
      },
    },
    container: {
      center: true,
      screens: {
        lg: "900px",
        xl: "1100px",
        "2xl": "1280px",
        "3xl": "1520px",
        "4xl": "1920px",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
