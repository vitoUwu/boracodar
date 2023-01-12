/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        main: {
          400: "#D9CDF7",
          900: "#271A45",
        },
      },
    },
  },
  plugins: [],
};
