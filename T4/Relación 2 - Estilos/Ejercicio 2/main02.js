function tamañoTexto() {
    const parrafos=document.getElementById("parrafos")
    let tamaño=16;

    document.getElementById("aumentar").addEventListener("click",()=>{
        tamaño++;
        parrafos.style.fontSize=tamaño+"px";
    })

    document.getElementById("disminuir").addEventListener("click",()=>{
        tamaño--;
        parrafos.style.fontSize=tamaño+"px";
    })

    document.getElementById("reset").addEventListener("click",()=>{
        tamaño=16;
        parrafos.style.fontSize=tamaño+"px";
    })

}


function alineacion() {
    const parrafos=document.getElementById("parrafos");

    document.getElementById("right").addEventListener("click",()=>{
        parrafos.style.textAlign="right";
    })

    document.getElementById("center").addEventListener("click",()=>{
        parrafos.style.textAlign="center";
    })

    document.getElementById("left").addEventListener("click",()=>{
        parrafos.style.textAlign="left";
    })
}



const main= ()=>{
    tamañoTexto();
    alineacion();
};


document.addEventListener("DOMContentLoaded",main);