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
        service: {
          DEFAULT: "#0D253D",
          dark: "#061C32",
          light: "#4A6D90",
        },
        button: {
          DEFAULT: "#0369A1", // sky-600
          hover: "#075985",   // sky-700
          soft: "#E0F2FE",    // sky-100
        }
      },
    },
  },
  plugins: [],
};