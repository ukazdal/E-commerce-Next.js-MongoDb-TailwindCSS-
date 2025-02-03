import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeColor: "#3498db",
        themeText: "#2ecc71",
        linkHover: "#2980b9",
        topbarBg: "#2c3e50",
        topbarText: "#ecf0f1",
        topbarTextHover: "#bdc3c7",
        basketHover: "#e74c3c",
        basketBg: "#c0392b",
        basketText: "#ffffff",
      },
    },
  },
  plugins: [],
} satisfies Config;
