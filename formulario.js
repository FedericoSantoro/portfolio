const nombre = document.getElementById("nombre"),
    telefono = document.getElementById("telefono"),
    mail = document.getElementById("mail"),
    consulta = document.getElementById("consulta"),
    boton = document.getElementById("botonContacto");

let comprobarNombre = () => {
    if ( !(nombre.value.length > 3 && nombre.value.length < 20) ) {
        console.log("Error con el nombre");
        nombre.className = "errorDato nombre";
        return false;
    }
    nombre.className = "nombre";
    return true;
}

let comprobarMail = () => {
    if ( !(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/.test(mail.value)) ) {
        console.log("Error con el mail");
        mail.className = "mail errorDato";
        return false;
    }
    mail.className = "mail";
    return true;
}

let comprobarConsulta = () => {
    if ( !(consulta.value.length > 10) ) {
        console.log("Error con la consulta");
        consulta.className = "consulta errorDato";
        return false;
    }
    consulta.className = "consulta";
    return true;
}

nombre.addEventListener("focusout", comprobarNombre);
mail.addEventListener("focusout", comprobarMail);
consulta.addEventListener("focusout", comprobarConsulta);

boton.addEventListener("click", () => {
    if ( !( comprobarNombre() === true && comprobarMail() === true && comprobarConsulta() === true ) ) {
        console.log("Error con dato");
        event.preventDefault();
    }
    else {
        alert("Consulta enviada");
    }
})