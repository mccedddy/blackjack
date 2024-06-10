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
        textboxColor: "#F0F0F0",
        greenButton: "#0AB358",
        redButton: "#D70101",
        orangeButton: "#D99D35",
        blackButton: "#1E1E1E",
      },
      boxShadow: {
        boardShadow: "inset 0px 0px 100px  40px rgba(0, 0, 0, 0.3)", // Add a custom box shadow
        textboxShadow: "inset 0px 2px 1px 1px rgba(0, 0, 0, 0.1)",
        modalShadow: "0px 0px 10px 6px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
