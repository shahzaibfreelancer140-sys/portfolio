/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,php,css,js}'], // Scans all subfolders within 'build'
  theme: {
    extend: {
     fontFamily: {
        Satoshi: ['Satoshi',  'sans-serif'],
         CabinetGrotesk: ['CabinetGrotesk',  'sans-serif'],
         Halant: ['Halant',  'sans-serif'],
        //  BebasNeue: ['BebasNeue',  'sans-serif'],
      },
    },
  },
  
  plugins: [],
}