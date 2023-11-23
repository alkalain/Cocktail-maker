/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        /* font-family: 'Italianno', cursive; 
        @import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');
        */
        Italianno: ['Italianno','cursive']
      }
    },
    screens: {
      sm:"640px",
      md:"768px",
    }
  },
  plugins: [],
} 
