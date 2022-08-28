/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      colors: {
        gold: "#D5966C",
        "almost-black": "#151515",
        "dark-grey": "#444444",
      },
      fontFamily: {
        bsd: ["Big Shoulders Display", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
