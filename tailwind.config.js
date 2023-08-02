/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { // TODO Verificar a necessidade dos codigos abaixo
      /*height: {
        '85vh': '85vh',
        '65vh': '65vh',
        '192': '48rem'
      },
      margin: {
        '15vh': '15vh',
        '23vh': '23vh',
        '5vw': '5vw'
      },
      padding: {
        '10vw': '10vw',
        '3vw': '3vw',
      },
      lineHeight: {
        'normal': 'normal'
      },
      textUnderlineOffset: {
        '20px': '20px'
      },
      textDecorationThickness: {
        '3px': '3px'
      }*/
    },
  },
  plugins: [],
}