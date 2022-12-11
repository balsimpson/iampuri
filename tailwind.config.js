/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./content/*.md",
    "./pages/*.vue",
    "./layouts/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arvo: ["Arvo", "serif"],
        lora: ["Lora", "serif"],
        qwitch: ["Qwitcher Grypen", "cursive"],
      },

      keyframes: {
        wiggle1: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        morph: {
          '0%': { borderRadius: '40% 60% 70% 30%' },
          '34%': { borderRadius: '70% 30% 50% 50%' },
          '67%': { borderRadius: '100% 60% 60% 100%' },
          '100%': { borderRadius: '40% 60% 70% 30%' },
        }
      },

      animation: {
        wiggle: 'wiggle1 2s linear infinite',
        morph: 'morph 5s ease-in infinite',
      },
    },
  },
}
