import React from "react";
import CardsProjects from "./CardsProjects/CardsProjects";
import proyectos from "./proyectos/proyectos";

function Projects() {
  return (
    <div
      className="flex flex-col content-center w-full relative min-h-screen mt-1 s:mt-10 s:pt-20"
      id="proyectos"
    >
      <h2 className="absolute text-textoAtras text-[400px] lg:right-0 pointer-events-none s:-rotate-90 s:text-[115px] s:-right-32 s:top-28 md:text-[150px] md:-right-28 md:top-36 lg:text-[200px] lg:rotate-0 lg:top-0">
        Projects
      </h2>
      <div className="md:ml-20 flex flex-col justify-center content-center z-10 w-1/4 s:w-3/4 s:ml-16">
        <h2
          className="w-full text-celeste py-14 text-7xl relative before:absolute before:content-['<h2>'] lg:before:text-3xl before:text-oculto before:top-0 before:left-0 after:bottom-0 after:left-0  after:absolute after:content-['</h2>'] lg:after:text-3xl after:text-oculto after:my-3 before:mb-3 font-bold after:font-normal before:font-normal after:-ml-5 before:-ml-5 h-52 italiano s:text-2xl s:after:text-xl s:before:text-xl s:before:mb-0 s:py-8 s:after:my-0 s:h-auto md:before:text-2xl md:after:text-2xl md:text-4xl lg:text-5xl lg:after:-bottom-2 customTitle"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Proyectos
        </h2>
        <p
          className="w-full italiano lg:text-xl text-white before:content-['<p>'] lg:before:text-3xl before:text-oculto flex flex-col after:content-['</p>'] lg:after:text-3xl after:text-oculto after:my-3 before:my-3 after:-ml-5 before:-ml-5 z-10 s:after:text-xl s:before:text-xl s:text-base md:before:text-2xl md:after:text-2xl md:text-lg"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Estos son los proyectos que hice para practicar lo que aprendia de
          forma autodidacta y mejorar mis habilidades.
        </p>
      </div>
      
      <div className="relative h-auto my-10">
        <div
          className="flex flex-col before:absolute before:content-['<section>'] lg:before:text-3xl before:text-oculto before:-top-10 before:left-20 after:-bottom-3 after:left-20 after:absolute after:content-['</section>'] lg:after:text-3xl after:text-oculto after:my-3 before:mb-3 after:font-normal before:font-normal after:-ml-5 before:-ml-5 italiano s:after:text-xl s:before:text-xl s:before:-ml-9 s:after:-ml-9 md:before:text-2xl md:after:text-2xl md:before:left-24 md:after:left-24"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="flex flex-row content-center justify-around mx-20 flex-wrap my-10 s:w-[95%] s:mx-auto md:ml-10">
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
