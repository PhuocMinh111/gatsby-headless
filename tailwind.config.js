/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FF8049",
        black: "#383F50",
        light: "#FFFFFF",
      },
      leading: {
        lg: "36px",
      },
      maxWidth: {
        mdFull: "1580px",
      },
    },
  },
  plugins: [],
});
