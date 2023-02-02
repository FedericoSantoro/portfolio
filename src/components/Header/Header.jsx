import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";

function Header() {
  const [seccion, setSeccion] = useState(0);

  const colorNavbar = () => {
    const { scrollTop } = document.documentElement;
    console.log("Scroll: " + scrollTop);
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

  return (
    <div className="bg-headerColor text-white h-[100vh] top-0 sticky w-40 flex flex-col text-center z-30">
      <header className="h-3/4">
        <div className="text-8xl h-1/4 flex flex-col justify-center content-center titulo">
          FS
        </div>
        <nav className="h-1/2 flex flex-col justify-center content-center mt-24">
          <ul className="text-xl text-center h-full">
            <li className="h-14">
              <span className="bg-lineaNavbar h-px w-full block mb-3"></span>
              <a
                className={
                  seccion === 1
                    ? "text-celeste"
                    : "hover:text-celeste transition ease delay-75"
                }
                href="#sobreMi"
                onClick={() => setSeccion(1)}
              >
                Sobre mí
              </a>
            </li>
            <li className="h-14">
              <span className="bg-lineaNavbar h-px w-full block mb-3"></span>
              <a
                className={
                  seccion === 2
                    ? "text-celeste"
                    : "hover:text-celeste transition ease delay-75"
                }
                href="#proyectos"
                onClick={() => setSeccion(2)}
              >
                Proyectos
              </a>
            </li>
            <li className="h-14">
              <span className="bg-lineaNavbar h-px w-full block mb-3"></span>
              <a
                className={
                  seccion === 3
                    ? "text-celeste"
                    : "hover:text-celeste transition ease delay-75"
                }
                href="#contacto"
                onClick={() => setSeccion(3)}
              >
                Contacto
              </a>
              <span className="bg-lineaNavbar h-px w-full block mt-3"></span>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row justify-evenly">
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
