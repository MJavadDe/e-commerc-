/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Commons/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#3C6E71",
      secondary: "#198643",
      // : "#F3FCF8",
    },
    extend: {
      fontFamily: {
        vazir: "Vazirmatn",
      },
    },
  },
  plugins: [],
};
