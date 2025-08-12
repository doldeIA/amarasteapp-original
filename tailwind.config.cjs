module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/**.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
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
        gold: '#D4AF37'
      }
    }
  },
  plugins: []
};
