/** @type {import('tailwindcss').Config} */

let colors = require("tailwindcss/colors");
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        uncut: ["Uncut Sans"],
      },
    },
    colors: {
      "primary-background": "#C6BEAC",
      "secondary-background": "#000000",
      "tertiary-background": "#FFFFFF",
      "primary-text": "#000000",
      "secondary-text": "#FFFFFF",
      purple: colors.purple,
    },
  },
  plugins: [],
};
