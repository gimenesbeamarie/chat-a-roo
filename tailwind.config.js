/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveatbold:["Caveat-Bold", "san serif"],
        kanitbold:["Kanit-Bold", "san serif"],
        sourgummy:["SourGummy-Light", "san serif"],
        montserrat:["Montserrat-Regular", "san serif"],
        msemibold:["Montserrat-SemiBold", "san serif"],
      }
    },
  },
  plugins: [],
}

