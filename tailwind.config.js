/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#954C69',
        'secondary': '#E9CFD9',
        'terciary': '#D6B2C0',
        'good': '#158843',
        'bad': '#870303',
        'secondary-text':'#656565',
        'text-color': '#58463A',
        'purple': '#4E123F',
        'blue': '#4C5C95',
        'purple-secondary': '#740157'
      },
      fontFamily: {
        'sans': ['Montserrat', 'system-ui']
      }
    },
  },
  plugins: [],
}