module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#242424',
        secondary: '#F2F2F2',
        extra: {
          100: '#D8D8D8',
          200: '#979797',
        },
      },
      fontFamily: {
        hind: ['Hind'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
