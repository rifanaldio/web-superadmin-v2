/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#004D43',
        'primaryyellow' : 'rgb(191, 215, 48)',
        'hovertext' : 'rgb(0, 171, 78)',
        'bghover' : 'rgb(230, 246, 234)'
      },
      fontFamily : {
        'nutino' : "Nunito Sans"
      },
      backgroundImage: {
        'login' : "url('/src/assets/login.jpg')",
      },
    },
  },
  plugins: [],
}

