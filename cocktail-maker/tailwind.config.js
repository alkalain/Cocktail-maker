/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      /* font-family: 'Italianno', cursive;
      @import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');
      */
      Italianno: ['Italianno', 'cursive']
    }
  },
  screens: {
    sm: "640px",
    md: "768px",
  }
};
export const plugins = []; 
