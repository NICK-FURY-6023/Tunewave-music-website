/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: '#1DB954',
          black: '#121212',
          white: '#FFFFFF',
          gray: {
            100: '#B3B3B3',
            200: '#535353',
            300: '#282828',
            400: '#181818',
          },
        },
      },
    },
  },
  plugins: [],
};