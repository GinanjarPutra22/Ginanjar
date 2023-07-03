/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        inter: ["inter"],

      },
      colors:{
        primary: "#0D6EFD",
        satu:"#EF1212",
        gray1:"#5F6061",

        // Text
        black1 :"#0F172A",
        black2 :"#373A42",

      }
    },
  },
  plugins: [require("tailgrids/plugin", ''),],
}

