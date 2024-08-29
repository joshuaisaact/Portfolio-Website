/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        windsor: ['"Windsor"', 'serif'],
        windsorBold: ["Windsor Bold", "serif"]
      }
    },
  },
  plugins: [],
}