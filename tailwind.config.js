/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "431px",
        ss: "370px",
        xs: "0px",
      },
    },
  },
  plugins: [],
};
