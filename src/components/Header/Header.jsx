import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";

function Header() {
  const [seccion, setSeccion] = useState(0);

  const colorNavbar = () => {
    const { scrollTop } = document.documentElement;
    if (scrollTop > window.innerHeight && scrollTop <= window.innerHeight * 2) {
      setSeccion(1);
    } else if (
      scrollTop > window.innerHeight * 2 &&
      scrollTop <= window.innerHeight * 3
    ) {
      setSeccion(2);
    } else if (
      scrollTop > window.innerHeight * 3 &&
      scrollTop <= window.innerHeight * 4
    ) {
      setSeccion(3);
    } else {
      setSeccion(0);
    }
  };

  window.addEventListener("scroll", colorNavbar);

  const [mostrarNavbar, setMostrarNavbar] = useState(false);

  const botonNavbar = () => {
    if (mostrarNavbar) {
      setMostrarNavbar(false);
    } else {
      setMostrarNavbar(true);
    }
  };

  return (
    <div className="bg-headerColor text-white md:h-[100vh] md:top-0 s:sticky md:w-40 flex md:flex-col text-center z-40 s:w-[100%] s:h-16 s:justify-center s:content-center s:top-0">
      <header className="h-3/4 w-full s:my-auto">
        <div className="text-8xl md:h-1/4 flex md:flex-col md:justify-center md:content-center titulo s:text-5xl s:flex-row s:justify-between s:content-center s:h-full s:w-[95%] md:text-7xl md:w-full">
          <h2 className="s:ml-4 md:ml-0 md:text-center">FS</h2>
          <button
            className="text-2xl s:h-full s:text-center md:hidden"
            onClick={botonNavbar}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <nav
          className={
            mostrarNavbar
              ? "md:h-1/2 flex flex-col justify-center content-center mt-24 s:mt-0 s:pt-4 s:bg-headerColor s:h-auto"
              : "md:h-1/2 justify-center content-center mt-24 hidden s:mt-0 s:pt-4 s:bg-headerColor s:h-auto md:block"
          }
        >
          <ul className="text-xl text-center h-full">
            <li className="md:h-14 s:h-auto">
              <span className="bg-lineaNavbar h-px w-full md:block mb-3 s:hidden"></span>
              <a
                className={
                  seccion === 1
                    ? "text-celeste"
                    : "hover:text-celeste transition ease delay-75"
                }
                href="#sobreMi"
                onClick={() => {
                  setSeccion(1);
                  botonNavbar();
                }}
              >
                Sobre mí
              </a>
            </li>
            <li className="md:h-14 s:h-auto">
              <span
                className={
                  seccion === 1
                    ? "md:bg-lineaNavbar h-px md:w-full block md:mb-3 s:mb-5 s:w-1/4 s:mx-auto s:bg-celeste"
                    : "md:bg-lineaNavbar h-px md:w-full block md:mb-3 s:mb-5 s:w-1/4 s:mx-auto s:h-0 md:h-px"
                }
              ></span>
              <a
                className={
                  seccion === 2
                    ? "text-celeste"
                    : "hover:text-celeste transition ease delay-75"
                }
                href="#proyectos"
                onClick={() => {
                  setSeccion(2);
                  botonNavbar();
                }}
              >
                Proyectos
              </a>
            </li>
            <li className="md:h-14 s:h-auto">
              <span
                className={
                  seccion === 2
                    ? "md:bg-lineaNavbar h-px md:w-full block md:mb-3 s:mb-5 s:w-1/4 s:mx-auto s:bg-celeste"
                    : "md:bg-lineaNavbar h-px md:w-full block md:mb-3 s:mb-5 s:w-1/4 s:mx-auto s:h-0 md:h-px"
                }
              ></span>
              <a
                className={
                  seccion === 3
                    ? "text-celeste"
                    : "hover:text-celeste transition ease delay-75"
                }
                href="#contacto"
                onClick={() => {
                  setSeccion(3);
                  botonNavbar();
                }}
              >
                Contacto
              </a>
              <span
                className={
                  seccion === 3
                    ? "md:bg-lineaNavbar h-px md:w-full block md:mb-3 s:mb-5 s:w-1/4 s:mx-auto s:bg-celeste md:mt-3"
                    : "md:bg-lineaNavbar h-px md:w-full block md:mb-3 s:mb-5 s:w-1/4 s:mx-auto s:h-0 md:h-px md:mt-3"
                }
              ></span>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row justify-evenly s:hidden lg:flex">
          <a
            target="_blank"
            href="https://github.com/FedericoSantoro"
            className="hover:text-celeste transition-all duration-500 ease-in-out"
          >
            <i className="fa-brands fa-github text-3xl"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/federico-gabriel-santoro/"
            className="hover:text-celeste transition-all duration-500 ease-in-out"
          >
            <i className="fa-brands fa-linkedin text-3xl"></i>
          </a>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default Header;
