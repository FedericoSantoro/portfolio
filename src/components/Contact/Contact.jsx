import React, { useState } from "react";
import imagenContacto from "../../assets/imagenContacto.png";

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
    e.preventDefault();
    try {
      const emailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (data.name.length > 2) {
        if (emailRegex.test(data.mail)) {
          if (data.subject.length > 2) {
            if (data.message.length > 10) {
              const response = await fetch(`http://localhost:3000/sendMail`, {
                method: "POST",
                mode: "no-cors",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });
              console.log("Response: " + JSON.stringify(response));
              if (response == 204) {
                console.log("Mail enviado correctamente");
                e.reset();
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
    }
  };

  const controlarAlerta = (name) => {
    console.log("Antes: " + JSON.stringify(alert));
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
    console.log("Medio: " + JSON.stringify(newState));
    setAlert(newState);
    console.log("Despues: " + JSON.stringify(newState));
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
              className="w-full text-celeste py-14 text-7xl relative before:absolute before:content-['<h2>'] before:text-3xl before:text-oculto before:top-0 before:left-0 after:bottom-0 after:left-0  after:absolute after:content-['</h2>'] after:text-3xl after:text-oculto after:my-3 before:mb-3 font-bold after:font-normal before:font-normal after:-ml-5 before:-ml-5 h-52 italiano z-10 after:mt-10 "
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Contactame!
            </h1>
            <p
              className="italiano text-xl text-white before:content-['<p>'] before:text-3xl before:text-oculto flex flex-col after:content-['</p>'] after:text-3xl after:text-oculto after:my-1 before:my-1 after:-ml-5 before:-ml-5 z-10 w-full "
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
              className="flex flex-col before:content-['<form>'] before:text-3xl before:text-oculto after:content-['</form>'] after:text-3xl after:text-oculto after:my-3 before:my-3 after:-ml-5 before:-ml-5 italiano mb-0 z-30 text-white"
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
                  required
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
              <button
                type="submit"
                className="border border-celeste p-3 text-xl w-40 text-center mt-3 after:content-[''] after:block after:bg-celeste relative after:absolute after:w-2 after:h-2 after:right-0 after:bottom-0 animacion1 self-end"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="500"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
          <div
            className="w-1/2 flex justify-center content-end h-full relative mr-20"
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
      {alert.map((alerta, i) => {
        if (alerta.show) {
          return (
            <div
              key={i}
              className="z-40 bg-blurGris fixed top-0 left-0 h-screen w-screen flex flex-col justify-center content-center"
            >
              <div className="bg-textoAtras text-white flex flex-col justify-evenly content-center z-50 w-1/3 mx-auto h-1/3">
                <h2 className="font-bold text-4xl text-center">
                  {alerta.name === "MensajeEnviado" ? "¡Mail enviado!" : "¡Parece que hubo un problema!"}
                </h2>
                <h3 className="text-2xl text-center">{alerta.title}</h3>
                <p className="text-lg text-center">{alerta.problem}</p>
                <button
                  onClick={() => controlarAlerta(alerta.name)}
                  className="block text-2xl border border-celeste p-3 w-40 text-center mt-3 after:content-[''] after:block after:bg-celeste relative after:absolute after:w-1 after:h-1 after:right-0 after:bottom-0 before:content-[''] before:block before:bg-celeste before:absolute before:w-1 before:h-1 before:left-0 before:top-0 hover:bg-celeste text-celeste hover:text-black transition ease-in-out delay-75 mx-auto"
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
