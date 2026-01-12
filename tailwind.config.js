/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shield: {
          DEFAULT: "#154BEA",
          dark: "#0F3BC2",
          light: "#E8EEFF",
        },
      },
    },
  },
  plugins: [],
};