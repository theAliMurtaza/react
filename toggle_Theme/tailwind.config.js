/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#f8fafc",
        darkBg: "#0f172a",
      },
    },
  },
  plugins: [],
};
