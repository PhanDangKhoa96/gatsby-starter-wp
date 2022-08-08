/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      screens: {
        md: '768px',
        xl: '1440px',
      },
      colors: {
        'background': '#fdfdfd',
        'foreground': '#183B56',
        'primary': '#1565D8',
        'secondary': '#36B37E',
        'border-base-color': '#EBF0F3',
      },
    },
  },
  plugins: [],
}
