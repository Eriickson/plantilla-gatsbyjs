module.exports = {
  theme: {
    extend: {},
    screens: {
      xxs: "320px",
      // => @media (min-width: 320px) { ... }

      xs: "425px",
      // => @media (min-width: 425px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
}
