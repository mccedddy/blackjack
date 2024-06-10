/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      colors: {
        boardColor: "#205D22", // Add your custom color here
        navBarColor: "#133B16",
      },
      boxShadow: {
        boardShadow: "inset 0px 0px 100px  40px rgba(0, 0, 0, 0.3)", // Add a custom box shadow
      },
    },
  },
  plugins: [],
};
