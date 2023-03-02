/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f3f3",
          100: "#e6e6e8",
          200: "#c2c2c5",
          300: "#9d9da2",
          400: "#53535c",
          500: "#090916",
          600: "#080814",
          700: "#070711",
          800: "#05050d",
          900: "#04040b",
        },
        accent: {
          50: "#f5f5f8",
          100: "#ebebf0",
          200: "#ccceda",
          300: "#aeb0c3",
          400: "#717497",
          500: "#34396a",
          600: "#2f335f",
          700: "#272b50",
          800: "#1f2240",
          900: "#191c34",
        },
      },
    },
  },
  daisyui: {
    themes: [
      // {
      //   mytheme: {
      //     primary: "#a991f7",
      //     secondary: "#f6d860",
      //     accent: "#37cdbe",
      //     neutral: "#3d4451",
      //     "base-100": "#ffffff",
      //   },
      // },
      "lofi",
      "corporate",
    ],
  },
  plugins: [require("daisyui")],
};
