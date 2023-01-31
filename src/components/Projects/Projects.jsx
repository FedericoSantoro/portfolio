import React from "react";
import CardsProjects from './CardsProjects/CardsProjects'

function Projects() {
  return (
    <div className="flex flex-col content-center w-full relative min-h-screen">
      <h2 className="absolute text-textoAtras text-[400px] right-0">
        Projects
      </h2>
      <div className="ml-20 flex flex-col justify-center content-center h-screen w-1/4">
        <h1 className="w-full text-celeste py-14 text-7xl relative before:absolute before:content-['<h2>'] before:text-3xl before:text-oculto before:top-0 before:left-0 after:bottom-0 after:left-0  after:absolute after:content-['</h2>'] after:text-3xl after:text-oculto after:my-3 before:mb-3 font-bold after:font-normal before:font-normal after:-ml-5 before:-ml-5 h-52 italiano">
          Proyectos
        </h1>
        <p className="w-full italiano text-xl text-white before:content-['<p>'] before:text-3xl before:text-oculto flex flex-col after:content-['</p>'] after:text-3xl after:text-oculto after:my-3 before:my-3 after:-ml-5 before:-ml-5">
          Estos son los proyectos que hice para practicar lo que aprendia de
          forma autodidacta y mejorar mis habilidades.
        </p>
      </div>
      <div>
        <CardsProjects />
      </div>
      <canvas className="w-3/4"></canvas>
    </div>
  );
}

export default Projects;
