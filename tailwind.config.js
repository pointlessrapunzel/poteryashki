/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          200: '#F3D27D',
          400: '#EC912C',
          600: '#EF6A29',
        },
        pink: {
          200: '#E8D3E2',
        },
      },
      gridTemplateColumns: {
        main: 'minmax(2rem, 1fr) repeat(10, minmax(0, 10rem)) minmax(2rem, 1fr)',
      },
      gridColumn: {
        contain: '2 / -2',
      },
    },
    borderRadius: {
      DEFAULT: '5px',
    },
  },
  plugins: [],
}
