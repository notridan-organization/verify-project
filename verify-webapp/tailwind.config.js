/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "**/components/**/*.{js,vue,ts}",
    "**/layouts/**/*.vue",
    "**/pages/**/*.vue",
    "**/plugins/**/*.{js,ts}",
    "**/nuxt.config.{js,ts}",
    "**/app.vue",
  ],
  darkMode: "media",

  theme: {
    extend: {
      colors: {
        dark: {
          0: "#495a8f", 
          1: "#425181",
          2: "#37446b",
          3: "#2c3656",
          4: "#242c46", // BG-MAIN
        },
        light: {
          0: "#808cb1",
          1: "#b6bdd2",
          2: "#d2d6e3",
          3: "#dbdee9",
          4: "#e4e6ee", // BG-MAIN
        },
      }
    },
  },
  plugins: [],
}