/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:['class'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
      colors: {
        primary: '#700ADA',
        secondary: '#700ADA',
       dark1:"#1C2434",
      },
    },
  },
  plugins: [],
}