function mostrarPersonas(personas) {
    const contenedor=document.getElementById("container");

    for (let index = 0; index < personas.length; index++) {
        const p=document.createElement("p");
        p.innerHTML=`Código: ${personas[index].codigo} <br>DNI: ${personas[index].dni} <br>Nombre: ${personas[index].nombre}<br> Edad: ${personas[index].edad}`
        p.className="personas";
        contenedor.appendChild(p)
    }
}

const main = () => {
    const personas = [
        { codigo: 1, dni: "4455544X", Nombre: "Juan López López", edad: 18 },
        { codigo: 2, dni: "7778888X", Nombre: "Luis Mateo López", edad: 25 },
        { codigo: 3, dni: "6654545M", Nombre: "Pedro Guitierrez López", edad: 41 },
        { codigo: 4, dni: "9998897X", Nombre: "María Guitierrez López", edad: 32 },
    ];

    mostrarPersonas(personas);
    
}

document.addEventListener("DOMContentLoaded", main)