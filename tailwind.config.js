/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff5f5',
          100: '#ffe4e4',
          200: '#ffc9c9',
          300: '#ffa4a4',
          400: '#ff7a7a',
          500: '#fa8383',
          600: '#f05a5a',
          700: '#e13d3d',
          800: '#c32828',
          900: '#a01f1f',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
