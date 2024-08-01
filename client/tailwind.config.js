/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Lato",
    },
    extend: {
      colors: {
        primary: "#0766ff",
        "primary-content": "#ffffff",
        "primary-dark": "#0051d3",
        "primary-light": "#3a85ff",

        secondary: "#ff073d",
        "secondary-content": "#ffffff",
        "secondary-dark": "#d3002e",
        "secondary-light": "#ff3a65",
      },
      backgroundImage: {
        hero: "url('assets/video/hero.mp4')",
      },
    },
  },
  plugins: [],
};
