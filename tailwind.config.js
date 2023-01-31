/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'headerColor' : 'rgba(24, 24, 24, 1)',
        'cuerpo' : 'rgba(40, 40, 40, 1)',
        'lineaNavbar' : 'rgba(50, 50, 50, 1)',
        'celeste' : 'rgba(8, 253, 216, 1)',
        'oculto' : 'rgba(72, 72, 72, 1)',
        'textoGris' : 'rgba(124, 124, 124, 1)',
        'textoAtras' : 'rgba(56, 56, 56, 1)',
      },
      height: {
        '0.1': '1px',
        '0.2': '2px',
      }
    },
  },
  plugins: [],
};
