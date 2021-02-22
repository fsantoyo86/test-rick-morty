const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'Indie': ['Indie Flower', 'cursive'],
      }
    },
    colors:{
      gray:colors.gray,
      white:colors.white,
      blueGray:colors.blueGray,
      yellow: colors.yellow,
      red:colors.red,
      orange: colors.orange,
      green:colors.green,
      amber: colors.amber,
      lime: colors.lime,
      lightblue: colors.lightBlue,
      violet:colors.violet,
      emerald : colors.emerald,
      coolGray: colors.coolGray,
      teal: colors.teal,
      cyan: colors.cyan,
      purple: colors.purple,
      rose: colors.rose,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
