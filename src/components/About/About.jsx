import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

function About() {
  return (
    <div
      className="flex xl:flex-row content-center justify-center w-full relative min-h-screen md:mt-1 s:mt-10 s:flex-col"
      id="sobreMi"
    >
      <h2 className="absolute text-textoAtras text-[400px] lg:right-28 z-0 pointer-events-none s:-rotate-90 s:text-[115px] s:-right-20 s:top-44 md:-right-14 md:text-[150px] lg:text-[200px] lg:rotate-0 lg:top-0">
        About
      </h2>
      <div className="md:ml-20 flex flex-col justify-center content-center h-screen w-1/3 s:w-3/4 s:ml-16">
        <h2 className="w-full text-celeste py-14 xl:text-7xl relative before:absolute before:content-['<h2>'] lg:before:text-3xl before:text-oculto before:top-0 before:left-0 after:bottom-0 after:left-0  after:absolute after:content-['</h2>'] lg:after:text-3xl after:text-oculto after:my-3 before:mb-3 font-bold after:font-normal before:font-normal after:-ml-5 before:-ml-5 h-52 italiano z-10 s:text-2xl s:after:text-xl s:before:text-xl s:before:mb-0 s:py-8 s:after:my-0 s:h-auto md:before:text-2xl md:after:text-2xl md:text-4xl lg:text-5xl lg:after:-bottom-2 customTitle" data-aos="fade-right" data-aos-duration="1000">
          Sobre mí
        </h2>
        <p className="w-full italiano lg:text-xl text-white before:content-['<p>'] lg:before:text-3xl before:text-oculto flex flex-col after:content-['</p>'] lg:after:text-3xl after:text-oculto after:my-3 before:my-3 after:-ml-5 before:-ml-5 z-10 s:after:text-xl s:before:text-xl s:text-base md:before:text-2xl md:after:text-2xl md:text-lg" data-aos="fade-right" data-aos-duration="2000">
          Me interesé en la programación desde la secundaria aprendiendo C y
          C++.
          <br />
          <br />
          Actualmente estoy buscando aprender mas lenguajes para expandir mis
          conocimientos.
          <br />
          <br />
          Soy autodidacta, responsable y dedicado para hacer lo que me propongo
          y lograr los objetivos.
        </p>
      </div>
      <div className="w-2/3 md:flex flex-col justify-center content-center z-30 md:w-full md:h-auto s:hidden lg:hidden" data-aos="zoom-in" data-aos-duration="2000">
        <TagCloud
          options={(TagCloudOptions) => ({
            radius: 200,
            maxSpeed: "fast",
            initSpeed: "normal",
            keep: false,
          })}
        >
          {[
            "C",
            "C++",
            "React.js",
            "Javascript",
            "HTML",
            "CSS",
            "Node.js",
            "Express",
            "Tailwind",
            "MongoDB",
            "Python"
          ]}
        </TagCloud>
      </div>
      <div className="w-2/3 flex flex-col justify-center content-center z-30 s:w-full s:h-auto md:hidden" data-aos="zoom-in" data-aos-duration="2000">
        <TagCloud
          options={(TagCloudOptions) => ({
            radius: 125,
            maxSpeed: "normal",
            initSpeed: "normal",
            keep: false,
          })}
        >
          {[
            "C",
            "C++",
            "React",
            "Javascript",
            "HTML",
            "CSS",
            "Nodejs",
            "Express",
            "Tailwind",
            "MongoDB",
            "Python"
          ]}
        </TagCloud>
      </div>
      <div className="w-2/3 flex-col justify-center content-center z-30 s:hidden lg:flex lg:w-full" data-aos="zoom-in" data-aos-duration="2000">
        <TagCloud
          options={(TagCloudOptions) => ({
            radius: 300,
            maxSpeed: "fast",
            initSpeed: "normal",
            keep: false,
          })}
        >
          {[
            "C",
            "C++",
            "React",
            "Javascript",
            "HTML",
            "CSS",
            "Node.js",
            "Express",
            "Tailwind",
            "MongoDB",
            "Python"
          ]}
        </TagCloud>
      </div>
      
    </div>
  );
}

export default About;
