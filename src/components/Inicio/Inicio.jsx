import React from "react";
import Canva1 from '../Canvas/Canva1'
import Canva2 from '../Canvas/Canva2'

function Inicio() {

  return (
    <div className="text-white relative w-full min-h-screen">
      <span className="absolute text-oculto lg:text-3xl after:content-['<body>'] flex flex-col md:ml-5 md:after:ml-5 mt-10 after:mt-5 lg:after:text-3xl italiano titulo z-20 pointer-events-none s:text-xl s:after:text-xl s:mt-2 s:ml-3 s:after:ml-3 md:after:text-2xl md:text-2xl lg:after:mt-0 lg:mt-0">
        {"<html>"}
      </span>
      <div className="md:ml-20 flex flex-col justify-center content-center h-screen pointer-events-auto s:mt-8 s:ml-16 lg:mt-0">
        <h1 className="py-14 xl:text-7xl relative before:absolute before:content-['<h1>'] lg:before:text-3xl before:text-oculto before:top-0 before:left-0 after:bottom-0 after:left-0  after:absolute after:content-['</h1>'] lg:after:text-3xl after:text-oculto after:my-3 before:mb-3 font-bold w-1/2 after:font-normal before:font-normal after:-ml-5 before:-ml-5 h-96 italiano z-20 pointer-events-auto s:text-2xl s:after:text-xl s:before:text-xl s:before:mb-0 s:py-8 s:after:my-0 s:h-auto md:text-4xl lg:text-5xl lg:after:-bottom-2 customTitle" data-aos="fade-right" data-aos-duration="1000">
          <span className="tituloAnimado">H</span>
          <span className="tituloAnimado">o</span>
          <span className="tituloAnimado">l</span>
          <span className="tituloAnimado">a</span>
          <span className="tituloAnimado">,&nbsp;</span>
          <br />
          <span className="tituloAnimado">S</span>
          <span className="tituloAnimado">o</span>
          <span className="tituloAnimado">y&nbsp;</span>
          <span className="tituloAnimado">F</span>
          <span className="tituloAnimado">e</span>
          <span className="tituloAnimado">d</span>
          <span className="tituloAnimado">e</span>
          <span className="tituloAnimado">r</span>
          <span className="tituloAnimado">i</span>
          <span className="tituloAnimado">c</span>
          <span className="tituloAnimado">o</span>
          <span className="tituloAnimado">,&nbsp;</span>
          <br />
          <span className="tituloAnimado">F</span>
          <span className="tituloAnimado">u</span>
          <span className="tituloAnimado">l</span>
          <span className="tituloAnimado">l&nbsp;</span>
          <span className="tituloAnimado">S</span>
          <span className="tituloAnimado">t</span>
          <span className="tituloAnimado">a</span>
          <span className="tituloAnimado">c</span>
          <span className="tituloAnimado">k&nbsp;</span>
          <span className="tituloAnimado">D</span>
          <span className="tituloAnimado">e</span>
          <span className="tituloAnimado">v</span>
          <span className="tituloAnimado">e</span>
          <span className="tituloAnimado">l</span>
          <span className="tituloAnimado">o</span>
          <span className="tituloAnimado">p</span>
          <span className="tituloAnimado">e</span>
          <span className="tituloAnimado">r</span>
        </h1>
        <p className="italiano lg:text-xl text-textoGris before:content-['<p>'] lg:before:text-3xl before:text-oculto flex flex-col after:content-['</p>'] lg:after:text-3xl after:text-oculto after:my-3 before:my-3 after:-ml-5 before:-ml-5 z-20 s:after:text-xl s:before:text-xl s:text-base md:before:text-2xl md:after:text-2xl md:text-text-lg" data-aos="fade-right" data-aos-duration="2000">
          Estudiante de Ingeniería y desarrollador web
        </p>
        <a
          className="border border-celeste p-3 lg:text-xl lg:w-40 text-center mt-3 relative after:content-[''] after:block after:bg-celeste  after:absolute after:w-2 after:h-2 after:right-0 after:bottom-0  z-20 animacion1 s:mt-0 s:text-base s:w-32 md:text-lg" data-aos="fade-up" data-aos-duration="3000"
          href="#contacto"
        >
          Contactame!
        </a>
      </div>
      <Canva1 />
      <Canva2 />
    </div>
  );
}

export default Inicio;
