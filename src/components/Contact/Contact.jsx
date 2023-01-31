import React from "react";

function Contact() {
  return (
    <div className="flex flex-row content-center w-full relative min-h-screen mt-36">
      <h2 className="absolute text-textoAtras text-[400px] right-0">Contact</h2>
      <div className="ml-20 flex flex-col justify-center content-center h-screen w-1/2">
        <h1 className="w-full text-celeste py-14 text-7xl relative before:absolute before:content-['<h2>'] before:text-3xl before:text-oculto before:top-0 before:left-0 after:bottom-0 after:left-0  after:absolute after:content-['</h2>'] after:text-3xl after:text-oculto after:my-3 before:mb-3 font-bold after:font-normal before:font-normal after:-ml-5 before:-ml-5 h-52 italiano z-10">
          Contactame!
        </h1>
        <p className="w-full italiano text-xl text-white before:content-['<p>'] before:text-3xl before:text-oculto flex flex-col after:content-['</p>'] after:text-3xl after:text-oculto after:my-3 before:my-3 after:-ml-5 before:-ml-5 z-10">
          Me interesan trabajos de Freelance y ofertas de trabajos mas grandes.
          <br />
          Podes enviarme una consulta o una oferta sobre cualquier trabajo y lo
          contestare a la brevedad.
        </p>
        <form
          action=""
          className="flex flex-col before:content-['<form>'] before:text-3xl before:text-oculto after:content-['</form>'] after:text-3xl after:text-oculto after:my-3 before:my-3 after:-ml-5 before:-ml-5 italiano mb-44"
        >
          <div className="flex flex-row justify-evenly">
            <input
              type="text"
              className="my-3 bg-textoAtras outline-none border-none p-3 w-full mr-2"
              placeholder="Nombre"
            />
            <input
              type="email"
              name=""
              id=""
              className="my-3 bg-textoAtras outline-none border-none p-3 w-full ml-2"
              placeholder="Mail"
            />
          </div>
          <input
            type="text"
            className="my-3 bg-textoAtras outline-none border-none p-3"
            placeholder="Asunto"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="my-3 bg-textoAtras outline-none border-none p-3"
            placeholder="Mensaje"
          ></textarea>
          <button
            type="submit"
            className="border border-celeste p-3 text-xl w-40 text-center mt-3 after:content-[''] after:block after:bg-celeste relative after:absolute after:w-1 after:h-1 after:right-0 after:bottom-0 before:content-[''] before:block before:bg-celeste before:absolute before:w-1 before:h-1 before:left-0 before:top-0 hover:bg-celeste text-celeste hover:text-black transition ease-in-out delay-75 self-end"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
      <span className="absolute text-oculto text-3xl before:content-['</body>'] flex flex-col ml-5 before:ml-5 mt-10 before:my-5 before:text-3xl italiano titulo bottom-1">
        {"</html>"}
      </span>
    </div>
  );
}

export default Contact;
