function tiempoCarga() {
    let inicio=new Date();

    console.log(inicio);

    window.addEventListener("load",()=>{
        let final=new Date();
        let tiempo = final - inicio;
        console.log(`Tiempo de carga: ${tiempo} ms`);
    })

    
}




(()=>{
    tiempoCarga();
})();