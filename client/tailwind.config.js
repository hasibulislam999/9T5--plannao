/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008771",
        secondary: "#ffb96d",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
