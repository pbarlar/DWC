/**
 * Funcion que va arrastrando una imagen por el documento
 */
function moverImagen() {
    const imagen = document.getElementById("imagen");
    let siguiendo = false;

    imagen.style.position = "absolute";

    imagen.addEventListener("mousedown", () => {
        siguiendo = true; 
    });

    imagen,addEventListener("mouseup",()=>{
        siguiendo=false;
    })

    document.addEventListener("mousemove", (event) => {
        if (siguiendo) {
            imagen.style.left = event.clientX + "px";
            imagen.style.top = event.clientY + "px";
        }
    });
}



(()=>{
    moverImagen();
})();