/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Commons/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "ant-checkbox-inner",
    "ant-checkbox",
    "ant-checkbox-wrapper",
    "ant-checkbox-checked",

    // pagination style
    "ant-pagination-item-active",

    
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: "Vazirmatn",
      },
      colors: {
        primary: {
          "very-light": "#EFFBF7",
          light: "#E1F7ED",
          dark: "#46A194",
          DEFAULT: "#3C6E71",
        },
        secondary: {
          "very-light": "#F3FCF8",
          light: "#82D8B9",
          DEFAULT: "#61CE70",
        },
        gray: {
          light: "#C3C3C3",
          DEFAULT: "#999999",
          dark: "#707070",
          "very-light": "#EDF3F6",
        },
        blue: {
          DEFAULT: "#3A4678",
          light: "#F2FCF8"
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
