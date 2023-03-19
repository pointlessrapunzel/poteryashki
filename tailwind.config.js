/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#FCF1D5',
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
        highlight: '#97173C',
      },
      fontFamily: {
        sans: ['var(--font-onest)', ...fontFamily.sans],
      },
      fontSize: {
        '4.5xl': ['2.5rem', '1.2'],
      },
      gridColumn: {
        contain: '2 / -2',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
    borderRadius: {
      DEFAULT: '5px',
      full: '100%',
    },
  },
  plugins: [],
}
