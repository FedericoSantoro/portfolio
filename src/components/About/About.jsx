import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

function About() {
  return (
    <div
      className="flex flex-row content-center justify-center w-full relative min-h-screen"
      id="sobreMi"
    >
      <h2 className="absolute text-textoAtras text-[400px] right-28 z-0 pointer-events-none">
        About
      </h2>
      <div className="ml-20 flex flex-col justify-center content-center h-screen w-1/3">
        <h1 className="w-full text-celeste py-14 text-7xl relative before:absolute before:content-['<h2>'] before:text-3xl before:text-oculto before:top-0 before:left-0 after:bottom-0 after:left-0  after:absolute after:content-['</h2>'] after:text-3xl after:text-oculto after:my-3 before:mb-3 font-bold after:font-normal before:font-normal after:-ml-5 before:-ml-5 h-52 italiano z-10">
          Sobre mí
        </h1>
        <p className="w-full italiano text-xl text-white before:content-['<p>'] before:text-3xl before:text-oculto flex flex-col after:content-['</p>'] after:text-3xl after:text-oculto after:my-3 before:my-3 after:-ml-5 before:-ml-5 z-10">
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
      <div className="w-2/3 flex flex-col justify-center content-center">
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
          ]}
        </TagCloud>
      </div>
    </div>
  );
}

export default About;
