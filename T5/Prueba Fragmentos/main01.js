


const mostrarProductos = (arrProductos) => {
    let container = document.getElementById("container");

    //Limpia el contenedor antes de añadir nuevos elementos
    container.innerHTML = "";
    
    
    for (let index = 0; index < arrProductos.length; index++) {
        
        let fragment=document.createElement("div")
        //Creo los campos
        let img = document.createElement("img");
        let title = document.createElement("h3");
        let price = document.createElement("p");
        let description = document.createElement("p");
        let btnInfo= document.createElement("button");

        btnInfo.textContent="Mostrar toda la informacion"
        img.src = arrProductos[index].image;
        title.textContent = arrProductos[index].title;
        price.textContent = `Precio: $${arrProductos[index].price}`;
        description.textContent = `Descripción: ${arrProductos[index].description}`;



        //Añado los elementos al fragment
        fragment.appendChild(img);
        fragment.appendChild(title);
        fragment.appendChild(price);
        fragment.appendChild(description);
        fragment.appendChild(btnInfo)


        // Añado el fragment al contenedor principal
        container.appendChild(fragment);
    }
}





const filtrarCategorias = () => {
    const select = document.getElementById("category");

    select.addEventListener("change", () => {
        const categoria = select.value;

        let productos;

        if (categoria == "todas") {
            productos = db;
        } else {
            productos = db.filter(producto => producto.category == categoria)
        }
        let container = document.getElementById("container");

        //Limpia el contenedor antes de añadir nuevos elementos
        container.innerHTML = "";


        for (let index = 0; index < productos.length; index++) {
            let fragment = document.createElement("div");

            //Creo los campos
            let img = document.createElement("img");
            let title = document.createElement("h3");
            let price = document.createElement("p");
            let description = document.createElement("p");

            //Les añado su valor a cada elemento
            img.src = productos[index].image;
            img.alt = productos[index].title;
            title.textContent = productos[index].title;
            price.textContent = `Precio: $${productos[index].price}`;
            description.textContent = `Descripción: ${productos[index].description}`;

            //Añado los elementos al fragment
            fragment.appendChild(img);
            fragment.appendChild(title);
            fragment.appendChild(price);
            fragment.appendChild(description);

            // Añado el fragment al contenedor principal
            container.appendChild(fragment);
        }
    })
}

function getFetch(){
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then (json => mostrarProductos(json))
}

function getProductById(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then (json => mostrarProductos(json))
}





const main = () => {
    //mostrarProductos();

    //filtrarCategorias();

    getFetch()

}

document.addEventListener("DOMContentLoaded", main)