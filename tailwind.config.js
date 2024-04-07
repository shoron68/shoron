/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      'nunito': ["Poppins", "sans-serif"],
      'pops': ["Nunito Sans", "sans-serif"],
    }
  },
  plugins: [],
}