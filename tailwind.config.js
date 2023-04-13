/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Commons/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: "Vazirmatn",
      },
      colors: {
        primary: {
          light: "#E1F7ED",
          dark:"#46A194",
          DEFAULT: "#3C6E71",
        },
        secondary: {
          "very-light": "#F3FCF8",
          light: "#82D8B9",
          DEFAULT: "#198643",
        },
        gray: {
          default: "#999999",
          dark: "#707070",
        },
        white: "#fff",
      },
      spacing: {
        8: "2rem",
        15: "3.75rem",
      },
    },
  },
  plugins: [],
};
