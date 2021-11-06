module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#202124",
        secondary: '#FFA588'
      },
      fontFamily: {
        'display': ['Poppins']
      },
      textColor: {
        'secondary': '#FFA588'
      },
      flex: {
        '2' : '2 2 0%',
        '3': '3 3 0%',
      },
      screens: {
        'xs': '320px',
      }
    },
  },
  variants: {
    extend: { },
  },
  plugins: [],
}
