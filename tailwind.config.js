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
        'DarkMode-Gray-300': '#6c757d',
        'DarkMode-Gray-400': '#495057',
        'DarkMode-Gray-500': '#343a40',
        'DarkMode-Gray-600': '#212529',
        'Theme-bg': 'rgba(var(--DrilledBackground))',
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

