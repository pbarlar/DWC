
/**
 * 
 * @param {Number} celdas Numero de celdas que quieres que tenga el tablero
 */
function crearTablero(celdas) {

    //Creamos el div padre que es el espacio del tablero
    const padre=document.createElement("div");
    padre.classList.add("padre");
    document.body.appendChild(padre)


    //Hacemos un for para colocar todos los divs dentro del tablero
    for (let index = 0; index < celdas; index++) {
        const celda=document.createElement("div")
        padre.appendChild(celda)        
    }
}




/**
 * Funcion para pintar en azul si tienes el SHIFT pulsado y en rojo si tienes el CTRL
 * en un tablero de divs
 */
function pintar() {
    let celdas = document.querySelectorAll(".padre div");

    celdas.forEach(celda => {
        celda.addEventListener("mousemove", (event) => {
            // si el usuario tiene presionada la tecla Shift
            if (event.shiftKey) {
                celda.style.backgroundColor = "blue";
            }
            

            if (event.ctrlKey) {
                celda.style.backgroundColor="red"
            }
        });
    });
}


/**
 * Funcion para ir borrando cada celda si mantienes pulsada la tecla b
 */
function borrarCelda() {
    let celdas = document.querySelectorAll(".padre div");
    let teclaSuprPresionada=false

    celdas.forEach(celda => {
        celda.addEventListener("mousemove", ()=>{
            if (teclaSuprPresionada) {
                celda.style.backgroundColor="lightgray"
            }
        })
    });


    window.addEventListener("keydown",(event)=>{
        if (event.key==="b") {
            teclaSuprPresionada=true;
        }
    })

    window.addEventListener("keyup",(event)=>{
        if (event.key==="b") {
            teclaSuprPresionada=false;
        }
    })
}

function limpiarTablero() {
    const celdas= document.querySelectorAll(".padre div")
    const limpiar=document.getElementById("limpiar")

    limpiar.addEventListener("click",(event)=>{
        celdas.forEach(celda=>{
            celda.style.backgroundColor="lightgray";
        })
    })
}





(()=>{
    crearTablero(1024);
    pintar();
    borrarCelda();
    limpiarTablero();
})();