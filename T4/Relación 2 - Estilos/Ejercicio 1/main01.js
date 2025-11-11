function temaNormal() {
    const normal=document.getElementById("normal");
    const opciones=document.getElementById("opciones");
    normal.addEventListener("click",()=>{
        //Menu opciones estilos
        opciones.style.backgroundColor="#90d5FF";
        opciones.style.fontWeight="bold";
        normal.style.textDecoration="none";
        document.getElementById("minimalista").style.textDecoration='none';
        opciones.style.border="1px grey solid";

        //Estilo del body
        document.body.style.backgroundColor="#fdfd96";
        document.body.style.marginLeft="150px";
        document.body.style.width="60%";


        //Elementos de parrafos
        document.getElementById("hidden").style.display="block";
        document.getElementById("hidden").style.fontWeight="bold";


        document.getElementById("marco").style.border="1px solid black";
        document.getElementById("marco").style.backgroundColor="yellow";
    })
}


function temaMinimalista() {
    document.getElementById("minimalista").addEventListener("click",()=>{
        const opciones = document.getElementById("opciones");
        const hidden = document.getElementById("hidden");
        const marco = document.getElementById("marco");

        opciones.removeAttribute("style");
        document.body.removeAttribute("style");
        hidden.removeAttribute("style");
        hidden.style.display="none";
        marco.removeAttribute("style");
    })
}


const main= ()=>{
    temaNormal();
    temaMinimalista();
}


document.addEventListener("DOMContentLoaded",main)