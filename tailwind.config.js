/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'red-white-stripes': 'repeating-linear-gradient(90deg, #c90000, #c90000 10px, #ffffff 10px, #ffffff 20px)',
      },
      colors: {
        primary: '#A13500',
        accent: '#FF8345',
        'coke-red': '#E41B17',
        'warm-brown': '#4B2E2E',
        'booker-pink': '#FADADD',
        'booker-beige': '#FBF3E4',
        'booker-salmon': '#F8AFA6',
        'booker-dark-salmon': '#E57373',
        'crimson-red': '#B22222',
        'soft-beige': '#fdf6ec',
        'neon-fuchsia': '#e400ff',
        'gold': '#D4AF37',
      },
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      }
    }
  },
  plugins: []
};
