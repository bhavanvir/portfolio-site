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
      "primary-background": "#ffffff",
      "secondary-background": "#000000",
      "primary-text": "#000000",
      "secondary-text": "#ffffff",
      slate: colors.coolGray,
      red: colors.red,
      emerald: colors.emerald,
      violet: colors.violet,
      amber: colors.amber,
      cyan: colors.cyan,
      rose: colors.rose,
    },
  },
  plugins: [],
};
