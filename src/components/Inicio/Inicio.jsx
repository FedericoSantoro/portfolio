import React from "react";

function Inicio() {
  return (
    <div className="text-white relative w-full min-h-screen">
      <span className="absolute text-oculto text-3xl after:content-['<body>'] flex flex-col ml-5 after:ml-5 mt-10 after:mt-5 after:text-3xl italiano titulo">
        {"<html>"}
      </span>
      <div className="ml-20 flex flex-col justify-center content-center h-screen">
        <h1 className="py-14 text-7xl relative before:absolute before:content-['<h1>'] before:text-3xl before:text-oculto before:top-0 before:left-0 after:bottom-0 after:left-0  after:absolute after:content-['</h1>'] after:text-3xl after:text-oculto after:my-3 before:mb-3 font-bold w-1/2 after:font-normal before:font-normal after:-ml-5 before:-ml-5 h-96 italiano">
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
          <span className="tituloAnimado">r</span>
          <span className="tituloAnimado">o</span>
          <span className="tituloAnimado">n</span>
          <span className="tituloAnimado">t&nbsp;</span>
          <span className="tituloAnimado">E</span>
          <span className="tituloAnimado">n</span>
          <span className="tituloAnimado">d&nbsp;</span>
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
        <p className="italiano text-xl text-textoGris before:content-['<p>'] before:text-3xl before:text-oculto flex flex-col after:content-['</p>'] after:text-3xl after:text-oculto after:my-3 before:my-3 after:-ml-5 before:-ml-5">
          Estudiante de Ingeniería y desarrollador web
        </p>
        <a
          className="border border-celeste p-3 text-xl w-40 text-center mt-3 after:content-[''] after:block after:bg-celeste relative after:absolute after:w-1 after:h-1 after:right-0 after:bottom-0 before:content-[''] before:block before:bg-celeste before:absolute before:w-1 before:h-1 before:left-0 before:top-0 hover:bg-celeste text-celeste hover:text-black transition ease-in-out delay-75"
          href="#"
        >
          Contactame!
        </a>
      </div>
      <canvas className="absolute w-full top-0 max-h-screen -z-10"></canvas>
    </div>
  );
}

export default Inicio;
