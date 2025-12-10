/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neon-red': '#ff0033',
        'neon-red-dark': '#cc0029',
        'dark-bg': '#050505',
        'terminal-green': '#00ff00',
        'terminal-black': '#0c0c0c',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(255, 0, 51, 0.7), 0 0 20px rgba(255, 0, 51, 0.5)',
        'neon-hover': '0 0 20px rgba(255, 0, 51, 1), 0 0 40px rgba(255, 0, 51, 0.7)',
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}
