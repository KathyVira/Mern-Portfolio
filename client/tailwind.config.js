/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': "#641793",
        'secondary': "#AC0F58",
        'tertiary': "#112B3C",
        'light-blue': '#7ED4C0'
      }
    },
    screens: {
      'lg': {
        'max': "1023px"
      },
      // 'md': {'max': '967px'},
      'sm': {
        'max': "1000px"
      }
    }
  },
  plugins: []
};