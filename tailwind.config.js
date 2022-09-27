/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#277BC0",
        "main-blue-50": "#eaf3fb",
        "main-blue-100": "#d5e7f6",
        "main-blue-200": "#95c3e9",
        "main-blue-300": "#4194d8",
        "main-blue-500": "#1e5f94",
        "main-blue-600": "#1a527f",
        "main-blue-700": "#16446a",
        "dark-blue": "#4C6793",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}