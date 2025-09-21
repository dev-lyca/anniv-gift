import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        float1: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25px)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float4: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px) translateX(10px)" },
        },
      },
      animation: {
        typing: "typing 12s steps(120, end)",
        blink: "blink 0.8s step-end infinite",
        float1: "float1 6s ease-in-out infinite",
        float2: "float2 8s ease-in-out infinite",
        float3: "float3 5s ease-in-out infinite",
        float4: "float4 7s ease-in-out infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;
