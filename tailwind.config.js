/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkmode: false,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    container:{
      center:true,
    },
    screens: {
      'tablet':'640px',
      'laptop':'1024px',
      'desktop':'1280px',
    },
    extend: {},
  },

  plugins: [],
}
