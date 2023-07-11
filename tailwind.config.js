/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login' : "url('/src/assets/login.jpg')",
        // 'logopegadaian' : "url('/src/assets/logo=pegadaian.jpg')"
      }
    },
  },
  plugins: [],
}

