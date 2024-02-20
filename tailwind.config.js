/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        robo: ["Roboto", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      boxShadow: {
        range: "15px 15px 20px rgba(0, 0, 0, 0.1), -15px -15px 20px #fff",
        line: "5px 5px 5px rgba(0,0,0,0.1), -5px -5px 10px #fff, inset 5px 5px 5px rgba(0,0,0,0.1)",
        lineTwo:
          "5px 5px 10px rgba(0,0,0,0.1), -5px -5px 10px #fff, inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 5px rgba(255,255,255, 0.25)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
