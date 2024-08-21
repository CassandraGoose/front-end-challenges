/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'manrope': ['Manrope'],
    },
    colors: {
      primary: 'hsl(174, 77%, 80%)', //full slider bar
      secondary: 'hsl(174, 86%, 45%)', //strong cyan
      accent: 'hsl(226, 100%, 87%)', //cta text
      'light-grayish-red': 'hsl(14, 92%, 95%)', //discount background
      'light-red': 'hsl(15, 100%, 70%)', // discount text
      'very-pale-blue': 'hsl(230, 100%, 99%)', //main background
      'light-grayish-blue': 'hsl(224, 65%, 95%)', //empty slider bar
      'less-light-grayish-blue': 'hsl(223, 50%, 87%)', //toggle background
      'grayish-blue': 'hsl(225, 20%, 60%)', //text
      'dark-desaturated-blue': 'hsl(227, 35%, 25%)', //text and cta background
    },
    extend: {
    },
  },
  plugins: [],
}

