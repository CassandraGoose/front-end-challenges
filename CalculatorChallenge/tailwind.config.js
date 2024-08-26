/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'very-dark-desaturated-blue': 'hsl(222, 26%, 31%)',
      'very-dark-desaturated-blue-keypad': 'hsl(223, 31%, 20%)',
      'very-dark-desaturated-blue-screen': 'hsl(224, 36%, 15%)',
      'desaturated-dark-blue-keys': 'hsl(225, 21%, 49%)',
      'desaturated-dark-blue-keys-shadow': 'hsl(224, 28%, 35%)',
      'red-keys': 'hsl(6, 63%, 50%)',
      'dark-red-keys': 'hsl(6, 70%, 34%)',
      'light-grayish-orange-keys': 'hsl(30, 25%, 89%)',
      'grayish-orange-keys': 'hsl(28, 16%, 65%)',
      'very-dark-grayish-blue-text': 'hsl(221, 14%, 31%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    fontSize: {
      xs: '0.4rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '2rem',
      '2xl': '2.25rem',
      '3xl': '2.5rem',
    },
    extend: {},
  },
  plugins: [],
}

