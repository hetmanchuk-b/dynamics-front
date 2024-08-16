/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./about/*.{js,ts,jsx,tsx}",
    "./about/*.html",
    "./news/*.{js,ts,jsx,tsx}",
    "./news/*.html",
    "./portfolio/*.{js,ts,jsx,tsx}",
    "./portfolio/*.html",
    "./catalog/*.{js,ts,jsx,tsx}",
    "./catalog/*.html",
  ],
  theme: {
    screens: {
      'xsm': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1888px',
    },
    extend: {
      fontSize: {
        '15': '15px',
        '17': '17px',
        '25': '25px',
        '27': '27px',
        '31': '31px',
        '37': '37px',
        '50': '50px',
        '56': '56px',
        '75': '75px',
        '87': '87px',
        '115': '115px',
        '149': '143px',
        '160': '160px',
        '219': '219px',
      },
      colors: {
        primary: "#2C2C2C",
        pale: "#D3D3D3",
        "pale-bg": "#F3F3F3",
        ocean: "#1B81E7",
        borders: "#E7E7E7",
        danger: "#FF1717",
        metal: "#909BAD"
      },
    },
  },
  plugins: [],
}
