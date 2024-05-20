/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        one: '#1d1d1f',
        two: '#727277',
    },
    },
  },
  plugins: [],
}

