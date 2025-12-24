/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          100: "#0154AA",
          200: "#F6F9FF",
        },
        dark: {
          100: "#333333",
          200: "#737A91",
          300: "#585D6E",
        },
        light: {
          100: "#FFFFFF",
          200: "#F4F4F4",
          300: "#E9ECEF",
          400: "##E1E1E1",
        },
      },
      container: {
        center: true, // Optional: centers the container
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "1rem",
          xl: "3rem",
        },
        screens: {
          'xl': '1440px',
          '2xl': '1536px'
        }
      },
      fontFamily: {
        neueHaas: ["Neue Haas Grotesk Display Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
