/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        //'3xl': '2560px',
        //'3xl': {'max': '2560px'},
        // => @media (max-width: 1535px) { ... }

        'xl': '1440px',
        //'2xl': {'max': '1440px'},
        // => @media (max-width: 1535px) { ... }
  
        'lg': '1024px',
        //'xl': {'max': '1024px'},
        // => @media (max-width: 1279px) { ... }
  
        'md': '768px',
        //'lg': {'max': '768px'},
        // => @media (max-width: 1023px) { ... }
  
        //'md': {'max': '425px'},
        // => @media (max-width: 767px) { ... }
  
        //'sm': {'max': '375px'},
        // => @media (max-width: 639px) { ... }

        's': '320px',
        //'s': {'max': '425px'},
        // => @media (max-width: 639px) { ... }
      },
      colors:{
        'headerColor' : 'rgba(24, 24, 24, 1)',
        'cuerpo' : 'rgba(40, 40, 40, 1)',
        'lineaNavbar' : 'rgba(50, 50, 50, 1)',
        'celeste' : 'rgba(8, 253, 216, 1)',
        'celesteClaro' : 'rgba(107, 255, 233, 1)',
        'oculto' : 'rgba(72, 72, 72, 1)',
        'textoGris' : 'rgba(124, 124, 124, 1)',
        'textoAtras' : 'rgba(56, 56, 56, 1)',
        'blurGris' : 'rgba(0, 0, 0, 0.5)',
      },
      height: {
        '0.1': '1px',
        '0.2': '2px',
      }
    },
  },
  plugins: [],
};
