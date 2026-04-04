/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./js/**/*.js"
  ],
  theme: {
theme: {
  extend: {
    colors: {
      primary: "var(--bg-primary)",
      secondary: "var(--bg-secondary)",
      accent: "var(--text-accent)",
    }
  }
}  },
  plugins: [],
}