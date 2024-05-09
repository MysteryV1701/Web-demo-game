/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1E1F24",
        "sky-light": "#74DAF8",
        "sky-dark": "#60B3D7",
        tree: "#54BF47",
      },
      backgroundColor: {
        "sky-light": "#74DAF8",
        "sky-dark": "#60B3D7",
        tree: "#54BF47",
      },
      textShadow: {
        sm: "0 1px 2px blue",
        DEFAULT: "0 2px 4px blue",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
