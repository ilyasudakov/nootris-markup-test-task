/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#111111',
        grey: '#ADADAD',
        yellow: '#FFEE00',
        orange: '#FCB500',
      },
    },
  },
  plugins: [],
};
