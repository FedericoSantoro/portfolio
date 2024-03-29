import React from "react";

function CardsProjects({ imagen, title, desc, tecnologias, link }) {
  return (
    <div className="relative md:w-[500px] h-[300px] mt-3 mb-20 imagenDescripcion s:w-full">
      <div className="w-full h-full overflow-hidden contenedorImagen rounded-2xl">
        <img
          src={imagen}
          alt="Imagen Portada"
          className="rounded-2xl w-full h-full imagen"
        />
      </div>
      <div className="descripcion">
        <span className='bg-blurGris z-20 absolute block content-[""] md:w-[500px] h-[300px] top-0 left-0 rounded-2xl s:w-full'></span>
        <div className="flex flex-col content-center justify-evenly w-full absolute top-0 h-[300px] rounded-2xl">
          <h3 className="text-gray-200 z-30 stroke-black stroke-2 font-extrabold text-center px-14 lg:text-3xl s:text-2xl">
            {title}
          </h3>
          <p className=" top-0 text-gray-200 z-30 stroke-black stroke-2 font-bold text-center px-14 lg:text-xl s:text-base">
            {desc}
          </p>
          <a
            target="_blank"
            href={link}
            className=" bottom-0 text-center z-30 rounded-full bg-celeste lg:text-xl text-black py-2 w-44 mx-auto hover:bg-celesteClaro shadow-celeste s:text-base s:font-medium"
          >
            Ver Proyecto
          </a>
        </div>
        <div className="bg-textoAtras rounded-b-2xl p-5 text-white text-center h-20 absolute -bottom-16 w-full z-20 flex justify-center descripcionTecnologias">
          <p className="pt-2 s:text-sm lg:text-base">Hecho con {tecnologias}</p>
        </div>
      </div>
    </div>
  );
}

export default CardsProjects;
