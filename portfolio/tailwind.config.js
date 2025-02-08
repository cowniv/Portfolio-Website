/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F4EFEB',
        bluePrimary: '#C7D9E5'
      },
      height: {
        page: '1024px'
      },
      width: {
        page: '1440px'
      }
    },
  },
  plugins: [],
}

