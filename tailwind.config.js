/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          200: '#F3D27D',
          500: '#EF6A29',
        },
      },
    },
  },
  plugins: [],
}
