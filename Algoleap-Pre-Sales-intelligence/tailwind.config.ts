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
        "algoleap-green": "#2A8B3D",
        "algoleap-green-light": "#3DA854",
        "forest-deep": "#0F3D2E",
        "forest-mid": "#1A5240",
        "teal-accent": "#2D7A8C",
        "mint-light": "#DCEDDA",
        "mint-very-light": "#F0F7EE",
        charcoal: "#1F2937",
        "body-text": "#374151",
        "secondary-text": "#6B7280",
        "border-light": "#E5E7EB",
        "border-medium": "#D1D5DB",
        background: "#FAFBFA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        xs: "0 1px 2px rgba(15, 61, 46, 0.04)",
        sm: "0 1px 3px rgba(15, 61, 46, 0.06), 0 1px 2px rgba(15, 61, 46, 0.04)",
        md: "0 4px 12px rgba(15, 61, 46, 0.08), 0 2px 4px rgba(15, 61, 46, 0.04)",
        lg: "0 12px 32px rgba(15, 61, 46, 0.12), 0 4px 8px rgba(15, 61, 46, 0.05)",
        xl: "0 24px 56px rgba(15, 61, 46, 0.16), 0 8px 16px rgba(15, 61, 46, 0.06)",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        lg: "16px",
        xl: "22px",
      },
    },
  },
  plugins: [],
};

export default config;
