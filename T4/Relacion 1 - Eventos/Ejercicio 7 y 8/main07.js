function informacion() {
    document.getElementById("name").addEventListener("focus",()=>{
        let parrafo=document.createElement("p");

        parrafo.innerHTML="En este campo debes introducir tu nombre";

        parrafo.id="info"
        
        document.getElementById("name").insertAdjacentElement("afterend",parrafo)
    })

    document.getElementById("email").addEventListener("focus",()=>{
        let parrafo=document.createElement("p");

        parrafo.innerHTML="En este campo debes introducir tu email";

        parrafo.id="info"
        
        document.getElementById("email").insertAdjacentElement("afterend",parrafo)
    })


    document.getElementById("comment").addEventListener("focus",()=>{
        let parrafo=document.createElement("p");

        parrafo.innerHTML="En este campo debes introducir un comentario";

        parrafo.id="info"
        
        document.getElementById("comment").insertAdjacentElement("afterend",parrafo)
    })


    document.getElementById("name").addEventListener("blur",()=>{
        const p=document.getElementById("info")
        if (p) {
            p.remove();
        }
    })

    document.getElementById("email").addEventListener("blur",()=>{
        const p=document.getElementById("info")
        if (p) {
            p.remove();
        }
    })

    document.getElementById("comment").addEventListener("blur",()=>{
        const p=document.getElementById("info")
        if (p) {
            p.remove();
        }
    })
}



function cambioAmpersan() {
    const form=document.querySelectorAll(".form")

    form.forEach(campo=>{
        campo.addEventListener("blur",()=>{
            campo.value=campo.value.replaceAll("&","and")
        })
    })
}


(()=>{
    informacion()
    cambioAmpersan();
})();