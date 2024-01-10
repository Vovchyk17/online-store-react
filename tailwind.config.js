/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,html,scss}'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Roboto', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Menlo', 'monospace'],
    },
  },
  plugins: [],
}
