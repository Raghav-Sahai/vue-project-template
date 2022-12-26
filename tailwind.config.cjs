const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      colors: {
        blue: colors.blue,
        oragne: colors.orange,
      }
    },
  },
  plugins: [],
};
