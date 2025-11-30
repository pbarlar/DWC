const infoPersona= (persona) =>{
    const estado=document.getElementById("persona1");

    let nombre=document.createElement("h3");
    nombre.textContent="Nombre: "+persona.nombre;

    let dni=document.createElement("p");
    dni.textContent="DNI: "+persona.dni;

    let edad=document.createElement("p");
    edad.textContent="Edad: "+persona.edad;

    let peso=document.createElement("p");
    peso.textContent="Peso: "+persona.peso;

    let altura=document.createElement("p");
    altura.textContent="Altura: "+persona.altura;

    const contenedor=document.getElementById("info");
    contenedor.appendChild(nombre)


    estado.addEventListener("click",()=>{
        if (estado.textContent=="Ver Información Completa") {
            contenedor.appendChild(dni)
            contenedor.appendChild(edad)
            contenedor.appendChild(peso)
            contenedor.appendChild(altura)

            estado.textContent="Ocultar Información";
        }else{
            contenedor.textContent="";
            contenedor.appendChild(nombre);
            estado.textContent="Ver Información Completa"
        }
    })
}


const main = () => {
    const p1={
        nombre: "Jose Maria",
        dni: "77836212O",
        edad: 35,
        altura: 1.78,
        peso: 75
    }


    infoPersona(p1)
}

document.addEventListener("DOMContentLoaded",main)