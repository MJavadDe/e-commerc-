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
      "primary-100": "#E1F7ED",
      "secondary-100": "#F3FCF8",
      "secondary-300": "#82D8B9",
      "gray": "#999999",
    },
    extend: {
      fontFamily: {
        vazir: "Vazirmatn",
      },
    },
  },
  plugins: [],
};
