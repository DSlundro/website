/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary: '#333333',
        secondary: '#2f3dff',
        light: '#737373',
      },
      fontFamily: {
        primary: ['"Open Sans"', 'sans-serif'],
        secondary: [ 'Montserrat', 'sans-serif'],
      },

    },
  },
  plugins: [],
  corePlugins:{
    preflight: false
  }
}