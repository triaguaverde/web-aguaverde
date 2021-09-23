// tailwind.config.js
module.exports = {
  purge: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'av-green-p': '#4dba87',
        'av-green-s': '#8fd46a',
        'av-green-dark': '#236948',
        'av-bg': '#f6f6f6',
        'av-morado': '#4f48ad',
        'av-morado-dark': '#2c2678',
        'av-darker-morado': '#5e527f',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
