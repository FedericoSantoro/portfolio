import React, { useState } from "react";
import imagenContacto from "../../assets/imagenContacto.png";
import axios from 'axios';

function Contact() {
  const [alert, setAlert] = useState([
    {
      name: "Nombre",
      title: "Revise el campo Nombre por favor",
      problem: "El nombre es corto",
      show: false,
      button: "Revisar",
    },
    {
      name: "Mail",
      title: "Revise el campo Mail por favor",
      problem: "Tiene un formato incorrecto",
      show: false,
      button: "Revisar",
    },
    {
      name: "Asunto",
      title: "Revise el campo Asunto por favor",
      problem: "El asunto es muy corto",
      show: false,
      button: "Revisar",
    },
    {
      name: "Mensaje",
      title: "Revise el campo Mensaje por favor",
      problem: "El mensaje debe tener mas de 10 caracteres",
      show: false,
      button: "Revisar",
    },
    {
      name: "ErrorMensaje",
      title: "El Mensaje no pudo ser enviado",
      problem: "Intente nuevamente",
      show: false,
      button: "Volver",
    },
    {
      name: "MensajeEnviado",
      title: "El Mensaje fue enviado",
      problem: "Gracias por la consulta",
      show: false,
      button: "Volver",
    },
  ]);
  const [data, setData] = useState({
    name : "Fernanda Lorenza",
    mail : "josefinarita@gmail.com",
    subject : "Trabajos grupales",
    message : "Holan como estas?"
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
    e.preventDefault();
    try {
      const emailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (data.name.length > 2) {
        if (emailRegex.test(data.mail)) {
          if (data.subject.length > 2) {
            if (data.message.length > 10) {
              const response = await axios.post(`https://portfolio-backend-federico-santoro.vercel.app/sendMail`, { name: data.name, mail: data.mail, subject: data.subject, message: data.message });
              if (response.status == 204) {
                console.log("Mail enviado correctamente");
                document.getElementById('formulario').reset();
                setData({
                  name: "",
                  mail: "",
                  subject: "",
                  message: "",
                });
                controlarAlerta("MensajeEnviado");
              } else {
                controlarAlerta("ErrorMensaje");
              }
            } else {
              controlarAlerta("Mensaje");
            }
          } else {
            controlarAlerta("Asunto");
          }
        } else {
          controlarAlerta("Mail");
        }
      } else {
        controlarAlerta("Nombre");
      }
    } catch (error) {
      console.log(error);
      controlarAlerta("ErrorMensaje");
    }
  };

  const controlarAlerta = (name) => {
    const newState = alert.map((alerta) => {
      if (alerta.name === name) {
        if (alerta.show) {
          alerta.show = false;
        } else {
          alerta.show = true;
        }
      }
      return alerta;
    });
    setAlert(newState);
  };

  return (
    <div
      className="flex flex-row content-center w-full relative pt-0 mt-16 min-h-screen s:pt-20"
      id="contacto"
    >
      <h2 className="absolute text-textoAtras text-[400px] right-0 pointer-events-none z-10 s:-rotate-90 s:text-[115px] s:-right-32 s:top-28 md:text-[150px] md:-right-28 lg:rotate-0 lg:text-[200px] lg:top-0 lg:right-0">
        Contact
      </h2>
      <div className="mx-20 flex flex-col justify-center content-center w-full z-30 mb-28 s:ml-0 s:mr-0 md:ml-5">
        <div className="flex flex-row justify-center content-center s:justify-start s:content-start">
          <div className="flex flex-col w-7/12 s:w-full">
            <h2
              className="w-full text-celeste py-14 text-7xl relative before:absolute before:content-['<h2>'] lg:before:text-3xl before:text-oculto before:top-0 before:left-0 after:bottom-0 after:left-0  after:absolute after:content-['</h2>'] lg:after:text-3xl after:text-oculto after:my-3 before:mb-3 font-bold after:font-normal before:font-normal after:-ml-5 before:-ml-5 h-52 italiano z-10 after:mt-10 s:text-2xl s:after:text-xl s:before:text-xl s:before:mb-0 s:py-8 s:after:my-0 s:h-auto s:ml-16 s:w-3/4 md:before:text-2xl md:after:text-2xl md:text-4xl lg:text-5xl lg:after:-bottom-2 customTitle"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Contactame!
            </h2>
            <p
              className="italiano lg:text-xl text-white before:content-['<p>'] lg:before:text-3xl before:text-oculto flex flex-col after:content-['</p>'] lg:after:text-3xl after:text-oculto after:my-1 before:my-1 after:-ml-5 before:-ml-5 z-10 w-full s:after:text-xl s:before:text-xl s:text-base s:ml-16 s:w-3/4 md:before:text-2xl md:after:text-2xl md:text-lg"
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
              id="formulario"
              className="flex flex-col before:content-['<form>'] lg:before:text-3xl before:text-oculto after:content-['</form>'] lg:after:text-3xl after:text-oculto after:my-3 before:my-3 after:-ml-5 before:-ml-5 italiano mb-0 z-30 text-white s:after:text-xl s:before:text-xl s:text-base s:after:ml-9 s:before:ml-9 s:w-[95%] s:mx-auto md:before:text-2xl md:after:text-2xl lg:before:-ml-5 lg:after:-ml-5 lg:ml-[4rem] lg:w-[85%]"
            >
              <div className="flex lg:flex-row justify-evenly s:flex-col">
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
                  required
                />
                <input
                  type="email"
                  id=""
                  className="my-3 bg-textoAtras outline-none border-none p-3 w-full ml-2 autofill:bg-yellow-200 s:ml-0"
                  placeholder="Mail"
                  name="mail"
                  onChange={handleChange}
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  data-aos-delay="500"
                  required
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
                required
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
                required
              ></textarea>
              <div className="flex flex-row justify-between content-center lg:justify-end">
                <div className="flex flex-row justify-evenly w-1/2 content-center text-center lg:hidden">
                  <a
                    target="_blank"
                    href="https://github.com/FedericoSantoro"
                    className="hover:text-celeste transition-all duration-500 ease-in-out mt-1 md:mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="1000"
                  >
                    <i className="fa-brands fa-github text-3xl"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/federico-gabriel-santoro/"
                    className="hover:text-celeste transition-all duration-500 ease-in-out mt-1 md:mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="1500"
                  >
                    <i className="fa-brands fa-linkedin text-3xl"></i>
                  </a>
                </div>
                <button
                  type="submit"
                  className="border border-celeste p-3 text-xl md:w-40 text-center mt-3 after:content-[''] after:block after:bg-celeste relative after:absolute after:w-2 after:h-2 after:right-0 after:bottom-0 animacion1 self-end s:text-sm s:w-32 s:mt-0 md:text-base lg:text-lg"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="500"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
          <div
            className="w-1/2 xl:flex justify-center content-end h-full relative mr-20 s:hidden"
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
      <span className="absolute text-oculto lg:text-3xl before:content-['</body>'] flex flex-col md:ml-5 md:before:ml-5 mt-10 before:my-5 lg:before:text-3xl italiano titulo bottom-1 pointer-events-none s:text-xl s:before:text-xl s:mt-2 s:ml-3 s:before:ml-3 md:text-2xl md:before:text-2xl">
        {"</html>"}
      </span>
      {alert.map((alerta, i) => {
        if (alerta.show) {
          return (
            <div
              key={i}
              className="z-40 bg-blurGris fixed top-0 left-0 h-screen w-screen flex flex-col justify-center content-center"
            >
              <div className="bg-textoAtras text-white flex flex-col justify-evenly content-center z-50 w-1/3 mx-auto h-1/3 s:w-[95%] s:h-auto s:p-6 md:w-1/2 lg:w-[45%] xl:w-[30%]">
                <h2 className="font-bold text-4xl text-center s:text-2xl md:text-3xl">
                  {alerta.name === "MensajeEnviado"
                    ? "¡Mail enviado!"
                    : "¡Parece que hubo un problema!"}
                </h2>
                <h3 className="text-2xl text-center s:text-lg s:my-5 md:text-xl">{alerta.title}</h3>
                <p className="text-lg text-center s:text-sm s:mb-5 md:text-base">{alerta.problem}</p>
                <button
                  onClick={() => controlarAlerta(alerta.name)}
                  className="block text-2xl border border-celeste p-3 w-40 text-center mt-3 after:content-[''] after:block after:bg-celeste relative after:absolute after:w-1 after:h-1 after:right-0 after:bottom-0 animacion1 mx-auto s:text-lg s:w-1/2 md:text-xl"
                >
                  {alerta.button}
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Contact;
