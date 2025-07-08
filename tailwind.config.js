/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Lora", "Poppins", "Padauk", "sans-serif"],
      lora: ['Lora', ...defaultTheme.fontFamily.serif],
      montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      padauk: ['Padauk', ...defaultTheme.fontFamily.sans],
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: '#fffc01', 
      },
      keyframes: {
        flip: {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        flip: 'flip 2s infinite linear',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

