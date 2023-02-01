/** @type {import('tailwindcss').Config} */
module.exports = {
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
      maxWidth: {
        mdFull: "1580px",
      },
    },
  },
  plugins: [],
};
