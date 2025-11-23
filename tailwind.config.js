/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      // Pizza-themed palette
      tomato: "#D84315",
      basil: "#6B8E23",
      cheese: "#F6C85F",
      crust: "#E8D7B9",
      midnight: "#121063",
      charcoalgray: "#424242",
      background: "#FFF8F2",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: "#FFF8F2",
            foreground: "#11181C",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#D84315", // tomato (primary brand)
            },
            accent: {
              foreground: "#11181C",
              DEFAULT: "#F6C85F", // cheese (accent)
            },
            success: {
              foreground: "#FFFFFF",
              DEFAULT: "#6B8E23", // basil (success/green)
            },
          },
        },
        dark: {
          colors: {
            background: "#1F1B17",
            foreground: "#ECEDEE",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#D84315",
            },
            accent: {
              foreground: "#11181C",
              DEFAULT: "#F6C85F",
            },
            success: {
              foreground: "#FFFFFF",
              DEFAULT: "#6B8E23",
            },
          },
        },
      },
    }),
  ],
};

