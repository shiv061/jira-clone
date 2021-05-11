module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0045ac',
        secondary: '#f4f5f7',
        extra: {
          100: '#ebecf0',
          200: '#979797',
        },
      },
      fontFamily: {
        hind: ['Merriweather Sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
