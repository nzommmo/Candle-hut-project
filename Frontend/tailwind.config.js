/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGreen: '#35B88A'
      },
      fontFamily:{
        irishGrover: ['"Irish Grover"','cursive'],
        islandMoments : ['"Island Moments"','cursive'],
        inknutAntiqua: ['"Inknut Antiqua"', 'serif']
      }
    },
  },
  plugins: [],
}