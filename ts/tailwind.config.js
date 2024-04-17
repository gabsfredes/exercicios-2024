/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,ts,css,tsx,jsx}"],
  theme: {
    fontFamily: {
      sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      sand: ['"Quicksand"', "serif"],
    },
    colors: {
      menuSidebar: "#725C5C",
    },
    extend: {
      boxShadow: {
        "sidebar-shadow": "0 0 10px 0 rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
