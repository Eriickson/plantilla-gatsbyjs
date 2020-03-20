module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "",
          "200": "",
          "300": "",
          "400": "",
          "500": "",
          "600": "",
          "700": "",
          "800": "",
          "900": "",
        },
        secondary: {
          "100": "",
          "200": "",
          "300": "",
          "400": "",
          "500": "",
          "600": "",
          "700": "",
          "800": "",
          "900": "",
        },
      },
    },
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
    boxShadow: {
      "outline-black": "0 0 0 3px rgba(0, 0, 0, 0.5)",
      "outline-white": "0 0 0 3px rgba(255, 255, 255, 0.5)",
      "outline-gray": "0 0 0 3px rgba(160, 174, 192, 0.5)",
      "outline-red": "0 0 0 3px rgba(245, 101, 101, 0.5)",
      "outline-orange": "0 0 0 3px rgba(237, 137, 54, 0.5)",
      "outline-yellow": "0 0 0 3px rgba(236, 201, 75, 0.5)",
      "outline-green": "0 0 0 3px rgba(72, 187, 120, 0.5)",
      "outline-teal": "0 0 0 3px rgba(56, 178, 172, 0.5)",
      "outline-blue": "0 0 0 3px rgba(66, 153, 225, 0.5)",
      "outline-indigo": "0 0 0 3px rgba(102, 126, 234, 0.5)",
      "outline-purple": "0 0 0 3px rgba(159, 122, 234, 0.5)",
      "outline-pink": "0 0 0 3px rgba(237, 100, 166, 0.5)",
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
}
