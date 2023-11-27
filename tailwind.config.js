/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark": "rgb(18, 25, 38)",
        "gray": "rgb(54, 65, 82)",
        "blue": "rgb(33, 150, 243)",
        "very-purple": "rgb(103, 58, 183)",
        "trans-purple": "rgb(237, 231, 246)",
        "mid-purple": "rgb(94, 53, 177)",
      },
      fontSize: {
        "heading": "3.5rem",
        "small": "1.125rem",
        "x-small": "0.9375rem",
      }
    }
  },
  plugins: [],
}
