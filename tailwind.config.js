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
        'lemonade': '#F8D27E',
        'sea-blue': '#0F4E77',
        'matcha': '#89A577',
        'honey-drizzle': '#E7B08B',
        'coffee-grounds': '#3F2516',
        'primary': '#0F4E77',
        'secondary': '#372516',
        'accent': '#FBD271',
        'neutral-dark': '#372516',
      },
    },
  },
  plugins: [],
}
