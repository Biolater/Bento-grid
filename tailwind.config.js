/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-100": "var(--purple-100)",
        "purple-500": "var(--purple-500)",
        "yellow-100": "var(--yellow-100)",
        "yellow-500": "var(--yellow-500)",
        white: `hsl(0, 0%, 100%)`,
        black: `hsl(0, 0%, 7%)`,
      },
    },
  },
  plugins: [],
};
