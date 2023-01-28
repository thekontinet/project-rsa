/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'alfa': ['Alfa Slab One']
    },
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.orange
      }
    },
  },
  plugins: [],
}
