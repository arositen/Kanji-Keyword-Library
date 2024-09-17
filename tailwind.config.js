/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'DarkMode-Gray-300': '#6c757d',
        'DarkMode-Gray-400': '#495057',
        'DarkMode-Gray-500': '#343a40',
        'DarkMode-Gray-600': '#212529',
        'App-bg': 'rgba(var(--app-bg))',
        'Theme-text-color': 'rgba(var(--text-color))',
        'Theme-kanjiCardbg1': 'rgba(var(--Theme-kanjiCard-bg1))',
        'Theme-kanjiCardbg2': 'rgba(var(--Theme-kanjiCard-bg2))',
      }
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      sans2: ["Yuji Mai", "sans-serif"],
      slack: ["Slackside One", "cursive"]
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

