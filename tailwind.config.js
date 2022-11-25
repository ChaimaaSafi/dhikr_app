/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          1: "#f2f2f2",
        },
        brown: {
          1: "#6A443E",
          2: "#D65027",
        },
      },
      fontFamily: {
        Alegreya: ['"Alegreya"', "sans-serif"],
        Gulzar: ['"Gulzar"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
