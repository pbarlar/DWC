import { arrArticulos } from "./modulos/articulos.mjs";

const imprimirArticulos = (arrArticulos) => {
  const contenedor=document.getElementById("articulos");

  arrArticulos.forEach(articulo =>{
    let art=document.createElement("p");

    let id=document.createElement("div");
    let title=document.createElement("div");
    let price=document.createElement("div");
    let description=document.createElement("div");
    let rating=document.createElement("div");



    id.textContent=`ID: ${articulo.id} `
    title.textContent=`Title: ${articulo.title} `
    price.textContent=`Price: ${articulo.price} `
    description.textContent=`Description: ${articulo.description} `
    rating.textContent=`Rating: ${articulo.rating.rate} `

    art.appendChild(id)
    art.appendChild(title)
    art.appendChild(price)
    art.appendChild(description)
    art.appendChild(rating)


    contenedor.appendChild(art)
  })
}


function cargarCSS() {
    // 1. Crear un nuevo elemento <link>
    const linkElement = document.createElement('link');
    
    // 2. Establecer sus atributos
    linkElement.rel = 'stylesheet';
    linkElement.href = 'style.css';
    
    // 3. Añadirlo al <head> del documento
    document.head.appendChild(linkElement);
    
    console.log("styles.css ha sido cargado dinámicamente.");
}



//Funcion Main
(function Main() {
  console.log("Mostrando artículos");
  console.log(arrArticulos);

  arrArticulos.forEach((articulo) => {
    console.log(articulo);
  });


  imprimirArticulos(arrArticulos);

  cargarCSS()

})();


