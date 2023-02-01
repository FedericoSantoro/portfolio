import React from "react";
import CardsProjects from "./CardsProjects/CardsProjects";
import proyectos from "./proyectos/proyectos";

function Projects() {
  return (
    <div
      className="flex flex-col content-center w-full relative min-h-screen"
      id="proyectos"
    >
      <h2 className="absolute text-textoAtras text-[400px] right-0 pointer-events-none">
        Projects
      </h2>
      <div className="ml-20 flex flex-col justify-center content-center z-10 w-1/4 animacion1">
        <h1
          className="w-full text-celeste py-14 text-7xl relative before:absolute before:content-['<h2>'] before:text-3xl before:text-oculto before:top-0 before:left-0 after:bottom-0 after:left-0  after:absolute after:content-['</h2>'] after:text-3xl after:text-oculto after:my-3 before:mb-3 font-bold after:font-normal before:font-normal after:-ml-5 before:-ml-5 h-52 italiano "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Proyectos
        </h1>
        <p
          className="w-full italiano text-xl text-white before:content-['<p>'] before:text-3xl before:text-oculto flex flex-col after:content-['</p>'] after:text-3xl after:text-oculto after:my-3 before:my-3 after:-ml-5 before:-ml-5 z-10 animacion2"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Estos son los proyectos que hice para practicar lo que aprendia de
          forma autodidacta y mejorar mis habilidades.
        </p>
      </div>
      <div className="relative h-auto">
        <div
          className="flex flex-col before:absolute before:content-['<section>'] before:text-3xl before:text-oculto before:-top-10 before:left-20 after:-bottom-3 after:left-20 after:absolute after:content-['</section>'] after:text-3xl after:text-oculto after:my-3 before:mb-3 after:font-normal before:font-normal after:-ml-5 before:-ml-5 italiano animacion3"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-row content-center justify-around mx-20 flex-wrap my-10">
            {proyectos.map((proyecto, i) => {
              return (
                <CardsProjects
                  key={i}
                  imagen={proyecto.imagen}
                  title={proyecto.title}
                  desc={proyecto.desc}
                  tecnologias={proyecto.tecnologias}
                  link={proyecto.link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
