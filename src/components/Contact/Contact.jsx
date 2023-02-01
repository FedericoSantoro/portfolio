import React, { useState } from "react";
import imagenContacto from "../../assets/imagenContacto.png";

function Contact() {
  const [data, setData] = useState({
    name: "",
    mail: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setData((prevState) => {
      const newState = {
        ...prevState,
        [e.target.name]: e.target.value,
      };
      return newState;
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(data);
      const response = await fetch(
        `https://portfolio-backend-taupe-iota.vercel.app/sendMail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response == 204) {
        console.log("Mail enviado correctamente");
        e.reset();
        setData({
          name: "",
          mail: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex flex-row content-center w-full relative pt-0 mt-16 min-h-screen"
      id="contacto"
    >
      <h2 className="absolute text-textoAtras text-[400px] right-0 pointer-events-none z-10">
        Contact
      </h2>
      <div className="mx-20 flex flex-col justify-center content-center w-full z-30 mb-28">
        <div className="flex flex-row justify-center content-center">
          <div className="flex flex-col w-7/12">
            <h1
              className="w-full text-celeste py-14 text-7xl relative before:absolute before:content-['<h2>'] before:text-3xl before:text-oculto before:top-0 before:left-0 after:bottom-0 after:left-0  after:absolute after:content-['</h2>'] after:text-3xl after:text-oculto after:my-3 before:mb-3 font-bold after:font-normal before:font-normal after:-ml-5 before:-ml-5 h-52 italiano z-10 after:mt-10 animacion1"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Contactame!
            </h1>
            <p
              className="italiano text-xl text-white before:content-['<p>'] before:text-3xl before:text-oculto flex flex-col after:content-['</p>'] after:text-3xl after:text-oculto after:my-1 before:my-1 after:-ml-5 before:-ml-5 z-10 w-full animacion2"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Me interesan trabajos de Freelance y ofertas de trabajos mas
              grandes.
              <br />
              Podes enviarme una consulta o una oferta sobre cualquier trabajo y
              lo contestare a la brevedad.
            </p>
            <form
              onSubmit={handleSubmit}
              action=""
              className="flex flex-col before:content-['<form>'] before:text-3xl before:text-oculto after:content-['</form>'] after:text-3xl after:text-oculto after:my-3 before:my-3 after:-ml-5 before:-ml-5 italiano mb-0 z-30 text-white animacion3"
            >
              <div className="flex flex-row justify-evenly">
                <input
                  type="text"
                  className="my-3 bg-textoAtras outline-none border-none p-3 w-full mr-2"
                  placeholder="Nombre"
                  name="name"
                  onChange={handleChange}
                  autoComplete="off"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-delay="500"
                />
                <input
                  type="email"
                  id=""
                  className="my-3 bg-textoAtras outline-none border-none p-3 w-full ml-2 autofill:bg-yellow-200"
                  placeholder="Mail"
                  name="mail"
                  onChange={handleChange}
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  data-aos-delay="500"
                />
              </div>
              <input
                type="text"
                className="my-3 bg-textoAtras outline-none border-none p-3"
                placeholder="Asunto"
                name="subject"
                onChange={handleChange}
                autoComplete="off"
                data-aos="flip-up"
                data-aos-duration="1500"
                data-aos-delay="500"
              />
              <textarea
                name="message"
                onChange={handleChange}
                id=""
                cols="30"
                rows="10"
                className="my-3 bg-textoAtras outline-none border-none p-3 resize-none"
                placeholder="Mensaje"
                data-aos="flip-down"
                data-aos-duration="1500"
                data-aos-delay="500"
              ></textarea>
              <button
                type="submit"
                className="border border-celeste p-3 text-xl w-40 text-center mt-3 after:content-[''] after:block after:bg-celeste relative after:absolute after:w-1 after:h-1 after:right-0 after:bottom-0 before:content-[''] before:block before:bg-celeste before:absolute before:w-1 before:h-1 before:left-0 before:top-0 hover:bg-celeste text-celeste hover:text-black transition ease-in-out delay-75 self-end"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="500"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
          <div
            className="w-1/2 flex justify-center content-end h-full relative animacion4 mr-20"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <img
              src={imagenContacto}
              alt="imagen"
              className="z-30 h-3/4 absolute bottom-10"
            />
          </div>
        </div>
      </div>
      <span className="absolute text-oculto text-3xl before:content-['</body>'] flex flex-col ml-5 before:ml-5 mt-10 before:my-5 before:text-3xl italiano titulo bottom-1 pointer-events-none">
        {"</html>"}
      </span>
    </div>
  );
}

export default Contact;
