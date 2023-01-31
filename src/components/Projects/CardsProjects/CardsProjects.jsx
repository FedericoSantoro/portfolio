import React from "react";

function CardsProjects() {
  return (
    <div className="relative w-[500px] h-[300px] my-3">
      <img
        src="https://parentesis.com/imagesPosts/Pokemon_favorito.jpg"
        alt="Imagen Portada"
        className="rounded-2xl z-10 w-full h-full"
      />
      <div className="">
        <span className='bg-blurGris z-20 absolute block content-[""] w-[500px] h-[300px] top-0 left-0 rounded-2xl '></span>
        <div className="flex flex-col content-center justify-evenly w-full absolute top-0 h-[300px] rounded-2xl">
          <p className=" top-0 text-gray-200 z-30 stroke-black stroke-2 font-bold text-center px-14 text-xl">
            Proyecto hecho con HTML, CSS y JS utilizando APIs para buscar al
            pokemon con un ID o el nombre
          </p>
          <a href="" className=" bottom-0 text-center z-30 rounded-full bg-celeste text-xl text-black py-2 w-44 mx-auto hover:bg-celesteClaro shadow-celeste">Ver Proyecto</a>
        </div>
      </div>
    </div>
  );
}

export default CardsProjects;
