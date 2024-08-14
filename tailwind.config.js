/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'Sakura-100': '#ffe1ec',
        'Sakura-200': '#ffd7e2',
        'Sakura-300': '#ffcdd8',
        'Sakura-400': '#ffc3ce',
        'Sakura-500': '#ffb9c4',
        'Mint': '#b8f2e6',
      }
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      sans2: ["Yuji Mai", "sans-serif"],
    },
    screens: {
      xs: "480px",
      sm: "800px",
      md: "1060px",
      lg: "1200px",
    },
  },
  plugins: [],
}

