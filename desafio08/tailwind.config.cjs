/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: {
          500: "#4a4556",
          600: "#363447",
          700: "#292738",
        },
      },
    },
  },
  plugins: [],
};
