/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "480px" },
      tb: { min: "480px", max: "768px" },
      md: { min: "768px", max: "976px" },
      lg: { min: "976px", max: "1440px" },
      xl: { min: "1440px" },
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
      fontFamily: {
        TC: ["Noto Serif TC", "serif"],
        Rubik: ["Rubik", "sans-serif"],
        Lora: ["Lora", "serif"],
      },
      height: {
        xl: "40em",
      },
    },
  },
  plugins: [],
};
