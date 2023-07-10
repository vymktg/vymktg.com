/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      textHeading: {
        1: {
          color: "rgb(23, 37, 84)",
        },
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '0%': {
            borderColor: 'transparent',
          },
          '66%': {
            borderColor: '#4943a5',
          },
        },
      },
      animation: {
        typing: 'typing 3s steps(20) alternate, blink 1.2s infinite',
      },
      bottom: {
        20: '5rem'
      }
    },
  },
  plugins: [],
};
