/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        beViet: ['Be Vietnam Pro'],
      },
      colors: {
        primary: '#1b1d1f',
        secondary: '#282b30',
        blue: '#4e80ee',
        gray: '#6c727f',
        light: '#d2d5da',
        text: '#6C7280',
        textLight: '#D1D4D9',
      },
    },
  },
  plugins: [],
};
