/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,php,css,js}'], // Scans all subfolders within 'build'
  theme: {
    extend: {
     fontFamily: {
        syne: ['syne', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}






