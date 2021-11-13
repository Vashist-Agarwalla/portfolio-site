module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#202124",
        secondary: '#FFA588',
        other: '#292B2E'
      },
      fontFamily: {
        'display': ['Poppins']
      },
      textColor: {
        'secondary': '#FFA588'
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      },
      animation: {
        moveRight: 'moveRight 1.5s ease-in-out infinite'
      },
      keyframes: {
        moveRight: {
          '0%,100%': {
            'margin-left': '0px'
          },
          '50%': {
            'margin-left': '3rem'
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
