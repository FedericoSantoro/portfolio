import React from "react";

function CardsProjects({ imagen, title, desc, tecnologias, link }) {

  function mostrar (estado) {
    console.log("Hola es " + estado + " con " +  Math.floor(Math.random() * 10));
  }

  return (
    <div className="relative w-[500px] h-[300px] mt-3 mb-20 imagenDescripcion">
      <img
        src={imagen}
        alt="Imagen Portada"
        className="rounded-2xl w-full h-full"
      />
      <div className="descripcion">
        <span className='bg-blurGris z-20 absolute block content-[""] w-[500px] h-[300px] top-0 left-0 rounded-2xl '></span>
        <div className="flex flex-col content-center justify-evenly w-full absolute top-0 h-[300px] rounded-2xl">
          <h3 className="text-gray-200 z-30 stroke-black stroke-2 font-extrabold text-center px-14 text-3xl">
            {title}
          </h3>
          <p className=" top-0 text-gray-200 z-30 stroke-black stroke-2 font-bold text-center px-14 text-xl">
            {desc}
          </p>
          <a
            target="_blank"
            href={link}
            className=" bottom-0 text-center z-30 rounded-full bg-celeste text-xl text-black py-2 w-44 mx-auto hover:bg-celesteClaro shadow-celeste"
          >
            Ver Proyecto
          </a>
        </div>
        <div className="bg-textoAtras rounded-b-2xl p-5 text-white text-center h-20 absolute -bottom-16 w-full z-20 flex justify-center descripcionTecnologias">
          <p className="pt-2">Hecho con {tecnologias}</p>
        </div>
      </div>
    </div>
  );
}

export default CardsProjects;
