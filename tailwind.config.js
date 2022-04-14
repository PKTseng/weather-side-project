const colors = require('tailwindcss/colors');

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'jit' : '',
  purge: ['./public/**/*.{html}', './src/**/*.{vue,js,ts,html}'],
  theme: {
    screens: {
      sm: '476px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      red: colors.red,
    },
  },
};
