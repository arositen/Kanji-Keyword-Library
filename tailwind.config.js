/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'CPink-100': '#ed6d8c',
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
    },
  },
  plugins: [],
}

