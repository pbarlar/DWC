let contadorElementos = 0; // Se mantiene fuera para que no se resetee
const elementos = [
    { nombre: "Jose", edad: 24 },
    { nombre: "Fran", edad: 18 },
    { nombre: "Miguel", edad: 60 }
];

const añadirElementos = () => {
    // 1. Buscamos los elementos *después* de que el DOM esté listo
    const contenedor = document.getElementById("contenedor");
    const btn = document.getElementById("add");

    // CRÍTICO: Si alguno es null, salimos de la función.
    if (!contenedor || !btn) {
        console.error("Error: Los elementos 'contenedor' o 'add' no se encontraron en el HTML.");
        return; 
    }

    btn.addEventListener("click", () => {
        // 2. Controlamos el límite del array
        if (contadorElementos >= elementos.length) {
            btn.textContent = "Lista Completa";
            btn.disabled = true; 
            return;
        }

        const elementoActual = elementos[contadorElementos];

        // 3. Crear elementos
        let fragment = document.createElement("p");
        let nombre = document.createElement("h3");
        let edad = document.createElement("p");
        
        // Asignar contenido
        nombre.textContent = "Nombre: " + elementoActual.nombre;
        edad.textContent = "Edad: " + elementoActual.edad;

        // Añadir al fragmento
        fragment.appendChild(nombre);
        fragment.appendChild(edad);

        // 4. AÑADIR AL CONTENEDOR (Ya sabemos que no es null)
        contenedor.appendChild(fragment)

        // 5. Actualizar el contador
        contadorElementos++;
        
        // Actualizar el texto del botón
        if (contadorElementos < elementos.length) {
             btn.textContent = `Añadir Siguiente Elemento (${contadorElementos + 1} de ${elementos.length})`;
        } else {
             btn.textContent = "Lista Completa";
        }
    });

}


const main = () => {
    añadirElementos();
}

document.addEventListener("DOMContentLoaded", main)