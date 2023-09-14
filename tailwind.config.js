/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        small: "450px",
        medium: "850px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
