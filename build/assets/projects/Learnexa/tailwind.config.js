/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,php,css,js}'], // Scans all subfolders within 'build'
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif'],
        Satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}