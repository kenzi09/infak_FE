/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontWeight: {
      'custom-50': '50', // Misalnya untuk ketebalan 50%
    }
  },
  },
  plugins: [],
}