/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#0066ff',
        'electric-blue': '#00d9ff',
        'neon-orange': '#ff4500',
        'deep-black': '#0a0a0a',
      },
      fontFamily: {
        sans: ['Orbitron', 'Inter', 'sans-serif'],
        script: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}
