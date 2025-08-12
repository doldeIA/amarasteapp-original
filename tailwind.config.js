/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A13500", // cor principal do fundo
        neonGreen: "#00ff00",
        neonRed: "#E41B17",
      },
      fontFamily: {
        sans: ["Barlow Condensed", "sans-serif"],
      },
      animation: {
        'neon-pulse': 'neonPulse 0.4s infinite ease-in-out',
        'neon-blink-red': 'neonBlinkRed 0.8s infinite',
        'neon-green-pulse': 'neon-green-pulse 1s infinite ease-in-out',
        'swoop-in': 'swoopIn 0.3s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'animated-gradient': 'animated-gradient 10s ease infinite',
        'blink-red-button': 'blink-red-button 1.2s infinite ease-in-out',
      },
      keyframes: {
        neonPulse: {
          '0%, 100%': {
            boxShadow:
              '0 0 8px rgba(255,255,255,1), 0 0 16px rgba(255,255,255,0.8), 0 0 24px rgba(255,255,255,0.6)',
          },
          '50%': {
            boxShadow:
              '0 0 4px rgba(255,255,255,0.7), 0 0 8px rgba(255,255,255,0.5)',
          },
        },
        neonBlinkRed: {
          '0%, 100%': {
            filter:
              'drop-shadow(0 0 0.5px rgba(228,27,23,0.8)) drop-shadow(0 0 1px rgba(228,27,23,0.6))',
          },
          '50%': {
            filter:
              'drop-shadow(0 0 0.25px rgba(228,27,23,0.6)) drop-shadow(0 0 0.5px rgba(228,27,23,0.4))',
          },
        },
        'neon-green-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 8px #00ff00',
            textShadow: '0 0 4px #ffffff',
          },
          '50%': {
            boxShadow: '0 0 20px #00ff00, 0 0 30px #00ff00',
            textShadow: '0 0 8px #ffffff, 0 0 12px #00ff00',
          },
        },
        swoopIn: {
          from: { opacity: 0, transform: 'translateY(-20px) scale(0.95)' },
          to: { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'animated-gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'blink-red-button': {
          '0%, 100%': {
            backgroundColor: '#E41B17',
            boxShadow:
              '0 0 5px rgba(228,27,23,0.7), 0 0 10px rgba(228,27,23,0.5)',
          },
          '50%': {
            backgroundColor: '#ff4d4d',
            boxShadow:
              '0 0 10px rgba(228,27,23,1), 0 0 20px rgba(228,27,23,0.7)',
          },
        },
      },
    },
  },
  plugins: [],
};
