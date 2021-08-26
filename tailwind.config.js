module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#202124"
      },
      fontFamily: {
        'display': ['Poppins']
      }
    },
  },
  variants: {
    extend: { },
  },
  plugins: [],
}
