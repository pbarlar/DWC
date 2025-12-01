const mostrarProductos = (arrProductos) => {
    const contenedor= document.getElementById("container");
    const btn = document.getElementById("show");

    btn.addEventListener("click", () => {
        for (let index = 0; index < arrProductos.length; index++) {
            let fragment= document.createElement("div");
            let title = document.createElement("h3");
            let price = document.createElement ("p");
            let img = document.createElement("img");

            title.textContent=arrProductos[index].title
            price.textContent=arrProductos[index].price
            img.src=arrProductos[index].image

            fragment.appendChild(title);
            fragment.appendChild()

        }
    })
}





async function getFetch() {
    let response = await fetch("https://fakestoreapi.com/products");

    console.log("response: " + response);

    // console.log("Data sin await: " + response.json())

    console.log("Data con await: " + await response.json())
}


function getFetch2() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(json => mostrarProductos(json))
        .catch(error => console.log("error: "+error))
}


const main = () => {
    getFetch2()
}

document.addEventListener("DOMContentLoaded", main)