/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        128: "32rem",
        200: "50rem",
        widget: "120px",
        mockup: "700px",
        mockupxs: "500px",
        mockupxxs: "400px",
        time: "1400px",
        gridxs: "3000px",
      },
      width: {
        widget: "300px",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        wiggle: "wiggle 1s ease-in-out infinite",
        "reverse-spin": "reverse-spin 1s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      blur: {
        xs: "2px",
        "3xl": "64px",
      },
      transitionProperty: {
        height: "height",
      },
      fontSize: {
        "6xl": "6rem",
        "12xl": "12rem",
      },
      fontFamily: {
        sans: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
        noto: "Noto Sans",
      },
      colors: {
        main: "#252E42",
        secondary: "#B13978",
        tierce: "#bababa"

      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
