const boton1 = document.getElementById("expandir1"),
boton2 = document.getElementById("expandir2"),
boton3 = document.getElementById("expandir3"),
    informacion1 = document.getElementById("informacionProyecto1"),
    informacion2 = document.getElementById("informacionProyecto2"),
    informacion3 = document.getElementById("informacionProyecto3");

let mostrado = [0, 0, 0]; 

let expandir = ( element ) => {
    if ( element === boton1 ) {
        informacion1.textContent = "Proyecto realizado con HTML, CSS y Javascript que utiliza la fecha del dispositivo para mostrarla por pantalla";
        mostrado[0] = 1;
        contraer(boton2);
        contraer(boton3);
        boton1.textContent = "Contraer";
    }
    if ( element === boton2 ) {
        informacion2.textContent = "Calculadora hecha con HTML, CSS y Javascript, realiza las operaciones basicas y admite ingreso de valores con el teclado";
        mostrado[1] = 1;
        contraer(boton1);
        contraer(boton3);
        boton2.textContent = "Contraer";
    }
    if ( element === boton3 ) {
        informacion3.textContent = "Primer proyecto hecho al finalizar el curso de HTML y CSS para probar algo sencillo, no tiene Javascript implementado y el diseño es basico y sencillo";
        mostrado[2] = 1;
        contraer(boton1);
        contraer(boton2);
        boton3.textContent = "Contraer";
    }
}

let contraer = ( element ) => {
    if ( element === boton1 ) {
        informacion1.textContent = "";
        mostrado[0] = 0;
        boton1.textContent = "Expandir";
    }
    if ( element === boton2 ) {
        informacion2.textContent = "";
        mostrado[1] = 0;
        boton2.textContent = "Expandir";
    }
    if ( element === boton3 ) {
        informacion3.textContent = "";
        mostrado[2] = 0;
        boton3.textContent = "Expandir";
    }
}

boton1.addEventListener("click", ()=>{
    if ( mostrado[0] === 0 ) {
        expandir(boton1);
    }
    else {
        contraer (boton1);
    }
})

boton2.addEventListener("click", ()=>{
    if ( mostrado[1] === 0 ) {
        expandir(boton2);
    }
    else {
        contraer (boton2);
    }
})

boton3.addEventListener("click", ()=>{
    if ( mostrado[2] === 0 ) {
        expandir(boton3);
    }
    else {
        contraer (boton3);
    }
})

