/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Red\ Hat\ Display"',]
    },
    colors: {
      'primary': 'hsl(14, 86%, 42%)',
      'success': 'hsl(159, 69%, 38%)',
      'white': 'hsl(20, 50%, 98%)',
      'main-rose-100': 'hsl(13, 31%, 94%)',
      'main-rose-300': 'hsl(14, 25%, 72%)',
      'main-rose-400': 'hsl(7, 20%, 60%)',
      'main-rose-500': 'hsl(12, 20%, 44%)',
      'main-rose-900': 'hsl(14, 65%, 9%)',
    },
    extend: {},
  },
  plugins: [],
}

