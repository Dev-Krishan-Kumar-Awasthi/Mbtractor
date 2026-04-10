/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': {
          DEFAULT: '#004d40',
          light: '#00796b',
          dark: '#00251a',
        },
        'saffron-gold': {
          DEFAULT: '#ffc107',
          light: '#ffecb3',
          dark: '#ffa000',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
