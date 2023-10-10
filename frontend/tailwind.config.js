/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:['class'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
      colors: {
        primary: '#0E21A0',
        secondary: '#0C356A',
       dark1:"#1C2434",
      },
    },
  },
  plugins: [],
}