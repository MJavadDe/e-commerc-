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
      fontFamily :{
        vazir : "Vazirmatn"
      }
    },
  },
  plugins: [],
}