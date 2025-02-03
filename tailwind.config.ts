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
        themeColor: "var(--themeColor)",
        themeText: "var(--themeTextColor)",
        linkHover: "var(--linkHover)",
        topbarBg: "var(--topbarBg)",
        topbarText: "var(--topbarText)",
        topbarTextHover: "var(--topbarTextHover)",
        basketHover: "var(--basketHover)",
        basketBg: "var(--basketBg)",
        basketText: "var(--basketText)",
      },
    },
  },
  plugins: [],
} satisfies Config;
