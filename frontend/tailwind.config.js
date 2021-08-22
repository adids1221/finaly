const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#1d3557',
      'secondary': '#457b9d',
      'third': '#a8dadc',
      'fourth': '#edf2f4',
      'danger': '#e63946',
      'form': "#8ecae6"
    }),
    extend: {},
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      primary: '1d3557',
      secondary: '457b9d',
      third: 'a8dadc',
      fourth: 'f1faee',
      fifth: 'e63946'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
