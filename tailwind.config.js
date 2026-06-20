/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:      '#0D2B52',
        gold:      '#C9A84E',
        offWhite:  '#FBFCFD',
        grayText:  '#7B8794',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body:    ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
