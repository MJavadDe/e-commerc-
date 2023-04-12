/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Commons/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: "Vazirmatn",
      },
      colors: {
        primary: {
          light: "#E1F7ED",
          DEFAULT: "#3C6E71",
        },
        secondary: {
          "very-light": "#F3FCF8",
          light: "#82D8B9",
          DEFAULT: "#198643",
        },
        gray: "#999999",
        white: "#fff",
      },
      spacing: {
        '8': "2rem",
        "15": "3.75rem"
      },
    },
  },
  plugins: [],
};
