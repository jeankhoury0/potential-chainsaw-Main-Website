module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainAccent: "#32445C",
        secondAccent: "#32445C",
        secondAccAccent: "#ffff",
        grayAccent: "#17242A",
        creme: "#D8C3A4",
        whiteoff: "#EAE8DC",
        linkedin: "#0073b1",
        yellowAccent: "#DCD764",
      },
      minHeight: {
        2.5: "2.5em",
        3.5: "3.5em",
        4.5: "4.5em",
        5.5: "5.5em",
      },
    },
  },
  variants: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // require('@tailwindcss/forms'),
  ],
};
