/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0576fc',
          primary: '#0576fc',
          orange: '#0576fc', // remap orange references to brand blue
          peach: '#E5EFFF',
          cream: '#ECEAE5',
          creamLight: '#F8EEE8',
          dark: '#111111',
          black: '#000000',
          accent: '#0576fc',
          card: '#FAF2EE',
        }
      },
      fontFamily: {
        display: ['Mdnichrometest', 'MD Nichrome', 'Impact', 'sans-serif'],
        'display-dark': ['"Mdnichrometest Dark"', 'MD Nichrome Dark', 'Impact', 'sans-serif'],
        sans: ['Neuemontreal', 'Neue Montreal', 'Helvetica Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
