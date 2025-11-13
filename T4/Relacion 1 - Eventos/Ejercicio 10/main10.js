/**
 * Función que permite arrastrar la imagen mientras mantienes pulsado el botón del ratón
 */
function moverImagenes() {
  const imagenes = document.getElementsByClassName("imagen");

  Array.from(imagenes).forEach((imagen) => {
    imagen.style.position = "absolute";
    imagen.style.cursor = "grab";

    let moviendo = false;
    let offsetX = 0;
    let offsetY = 0;

    imagen.addEventListener("mousedown", (event) => {
      moviendo = true;
      imagen.style.cursor = "grabbing";

      // Calculamos la distancia entre el cursor y la posición actual de la imagen
      offsetX = event.clientX - imagen.offsetLeft;
      offsetY = event.clientY - imagen.offsetTop;
    });


    imagen.addEventListener("dragstart", (event) => event.preventDefault());

    
    document.addEventListener("mouseup", () => {
      moviendo = false;
      imagen.style.cursor = "grab";
    });

    document.addEventListener("mousemove", (event) => {
      if (moviendo) {
        imagen.style.left = event.clientX - offsetX + "px";
        imagen.style.top = event.clientY - offsetY + "px";
      }
    });
  });
}

(() => {
  moverImagenes();
})();
