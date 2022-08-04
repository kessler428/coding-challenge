/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bg-admin": '#02141D',
        "bg-header": '#052536',
      }
    },
  },
  plugins: [],
}
