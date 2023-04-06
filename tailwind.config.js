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
      primarybg: "#F3FCF8",
      secondarybg: "#E1F7ED",
      primarybtn: "#82D8B9",
    },
    extend: {
      fontFamily: {
        vazir: "Vazirmatn",
      },
    },
  },
  plugins: [],
};
