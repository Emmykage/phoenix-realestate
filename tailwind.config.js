/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        none: "0%"
      },
      gridTemplateColumns: {
        blogLayout: "300px auto"
      },
      width: {
        container: "1500px"
      },
      colors: {

        "primary": "#2f3b69",
       alt: " rgb(255 204 0)",
       "theme-alt": "#68b4e8",
       "theme-black": "#21252f",
       "theme-pry": "#48a0dc",
      //  "theme-pry": "#48a0dc",
      "theme-dark": "#21252f"
       
      }
    },
  },
  plugins: [],
}

