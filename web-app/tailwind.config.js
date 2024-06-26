/** @type {import('tailwindcss').Config} */

let colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      "primary-background": "#ffffff",
      "secondary-background": "#000000",
      "primary-text": "#000000",
      "secondary-text": "#ffffff",
      slate: colors.coolGray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
    },
  },
  plugins: [],
};
