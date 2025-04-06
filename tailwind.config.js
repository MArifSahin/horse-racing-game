/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /^bg-(red|green|blue|yellow|purple|orange|pink|amber|lime|teal|cyan|violet|indigo|fuchsia|rose|sky|emerald|stone|zinc|slate)-500$/
    }
  ],
}
