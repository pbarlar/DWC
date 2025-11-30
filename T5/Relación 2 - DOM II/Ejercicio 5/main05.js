const añadirArchivos = () => {
    const container=document.getElementById("container")
    const btn=document.getElementById("add");

    btn.addEventListener("click", ()=>{
        let archivo=document.createElement("input");
        archivo.setAttribute("type","file")

        container.appendChild(archivo)
    })
}


const main = () => {
    añadirArchivos();
}


document.addEventListener("DOMContentLoaded",main)