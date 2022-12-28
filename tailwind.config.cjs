/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-dark-cyan": "hsl(158, 36%, 37%)",
        "button-hover-extra-dark-cyan": "hsl(158, 36%, 22%)",
        "bg-cream": "hsl(30, 38%, 92%)",
        "heading-dark-blue": "hsl(212, 21%, 14%)",
        "sub-grayish-blue": "hsl(228, 12%, 48%)",
      },
    },
  },
  plugins: [],
};
