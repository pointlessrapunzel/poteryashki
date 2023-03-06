/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          200: '#F3D27D',
          300: '#FFD569',
          400: '#EC912C',
          600: '#EF6A29',
          800: '#D65110',
          900: '#B4440D',
        },
        pink: {
          200: '#E8D3E2',
        },
        neutral: {
          100: '#F1F1F1',
        },
      },
      fontFamily: {
        sans: ['var(--font-onest)', ...fontFamily.sans],
      },
      fontSize: {
        '4.5xl': ['2.5rem', '1.2'],
      },
      gridTemplateColumns: {
        main: 'minmax(2rem, 1fr) repeat(10, minmax(0, 9rem)) minmax(2rem, 1fr)',
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
