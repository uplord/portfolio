/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}', // Adjust the path based on your project structure
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      primary: '#dd2121',
      'primary-hover': '#b01a1a',
      border: '#dddddd',
      'border-dark': '#2b2b2b',
    },
  },
  plugins: [],
};
