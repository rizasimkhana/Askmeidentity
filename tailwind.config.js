/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{html,js}',
    './index.html'],
  theme: {
    extend: {
      fontFamily:{
        "righteous":["Righteous"],
        "saira":["Saira"],
        "rowdies":["Rowdies"]
      }
    },
  },
  plugins: [],
}

