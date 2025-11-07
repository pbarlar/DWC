function saludo() {
    document.addEventListener("click",()=>{
        alert("Has hecho click en el documento.")
    })
}



(()=>{
    saludo();
})();