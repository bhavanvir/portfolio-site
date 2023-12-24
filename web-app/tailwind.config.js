/** @type {import('tailwindcss').Config} */
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
      "primary-text": "#000000",
    },
  },
  plugins: [],
};
