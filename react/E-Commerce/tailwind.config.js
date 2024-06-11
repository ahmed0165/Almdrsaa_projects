/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        "1px": "1px",
      },
      backgroundImage: {
        "righ-arrow": "url('../assets/rightArrow.png')",
        "left-arrow": "url('../assets/leftArrow.png')",
        "playstaion-5": "url('../assets/Playstation5.png')",
      },
    },
  },
  plugins: [],
};
