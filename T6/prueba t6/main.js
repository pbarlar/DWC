


function cards(arrElementos) {
    let contenedor= document.getElementById("container");
    let fragmento
    for (let index = 0; index < arrElementos.items.length; index++) {
        fragmento=card(arrElementos.items[index])

        fragmento.className="card"
        fragmento.id=`card${index}`
        contenedor.appendChild(fragmento)
        
    }
}





function card(element) {
    let fragmento = document.createElement("div");
    fragmento.className = "card";


    let id = document.createElement("h3");
    let name = document.createElement("p");
    let img = document.createElement("img");

    img.src = element.image;
    id.textContent = element.id;
    name.textContent = element.name;

    fragmento.appendChild(id);
    fragmento.appendChild(name);
    fragmento.appendChild(img);

    // Evento al hacer clic
    fragmento.addEventListener("click", () => {
        mostrarPersonajeCompleto(element);
    });

    return fragmento;
}


function mostrarPersonajeCompleto(personaje) {
    const info = document.getElementById("info");

    info.innerHTML = `
        <h2>${personaje.name}</h2>
        <img src="${personaje.image}" width="200">
        <p>Id: ${personaje.id}</p>
        <p>Status: ${personaje.status}</p>
        <p>Gender: ${personaje.gender}</p>
        <p>Species: ${personaje.species}</p>
    `;
}


function get(url) {
    return fetch(url)
            .then(result => result.json())
}


function getFetch3(url){
    get(url)
        .then (json => cards(json))
}


const main = () => {
   getFetch3("https://futuramaapi.com/api/characters");


}

document.addEventListener("DOMContentLoaded",main)


