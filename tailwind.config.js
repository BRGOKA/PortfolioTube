/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      colors: {
        ember: {
          50: "#FDECEA",
          100: "#FBD3CE",
          200: "#F3A499",
          300: "#EA7566",
          400: "#E4543F",
          500: "#D6402C", // primary accent
          600: "#B93321",
          700: "#93271A",
          800: "#6D1C13",
          900: "#47120C",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.35)",
        cardHover: "0 8px 24px rgba(0,0,0,0.45)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(4px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        drawLine: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.35s ease-out both",
        drawLine: "drawLine 1.2s ease-out both",
      },
    },
  },
  plugins: [],
};
