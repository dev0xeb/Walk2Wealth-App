/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        rubik:['Rubik-Regular', 'sans-serif'],
        "rubikBold":['Rubik-Bold', 'sans-serif'],
        "rubik-extrabold":['Rubik-ExtraBold', "sans-serif"],
        "rubik-medium":['Rubik-Medium', "sans-serif"],
        "rubik-semibold":['Rubik-SemiBold', "sans-serif"],
        "rubik-light":['Rubik-Light', "sans-serif"]
      },
      colors: {
        "primary": "0A66BC8"
      }
    },
  },
  plugins: [],
}