function inicializaEventos() {
    const btn = document.querySelector("button");

    function random(num) {
        return Math.floor(Math.random() * num) + 1;
    }


    btn.addEventListener("click",()=>{
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        document.body.style.backgroundColor = rndCol;
    });

}

function mouseOverDiv() {
    document.getElementById("div1").addEventListener("mouseover",(event)=>{
        document.getElementById("div1").style.backgroundColor="red"
        document.getElementById("div1").textContent = (`${event.pageX},${event.pageY}`)
        if (event.ctrlKey) {
            alert("Has entrado con el CTRL pulsado")
        }
        
        console.log(`Evento ${event.type} en  ${event.target.tagName}`)
    })
}


function mouseOutDiv() {
    document.getElementById("div1").addEventListener("mouseout",(event)=>{
        document.getElementById("div1").style.backgroundColor="aquamarine"
        document.getElementById("div1").textContent = (`Div1`)
    })
}





(()=>{
    mouseOverDiv();

    mouseOutDiv();
})();