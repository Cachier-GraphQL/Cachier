/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    fontFamily: {
      serif: ['Georgia, serif']
    },
    extend: {}
  },
  daisyui: {
    styled: true,
    themes: true,
    darkTheme: 'dark'
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
