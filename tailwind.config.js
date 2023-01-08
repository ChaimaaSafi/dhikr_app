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
        Gulzar: ['"El Messiri"', "sans-serif"],
      },
      keyframes: {
        "fade-in-right": {
          from: {
            opacity: "0",
            transform: "translateX(300px)",
          },
          to: {
            opacity: "1",
          },
        },
        border: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },

      animation: {
        "fade-in-right": "fade-in-right 0.8s ease-in-out",
        border: "border 4s ease infinite",
      },
    },
  },
  plugins: [],
};
