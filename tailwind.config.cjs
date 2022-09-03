/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        violet: {
          spanish: '#573280',
          russian: '#23022E',
        },
        silver: {
          metallic: '#ADA8B6',
        },
        light: {
          timber: '#CECFC7',
          honey: '#EFF8E2',
        },
      },
    },
  },
  plugins: [],
}
