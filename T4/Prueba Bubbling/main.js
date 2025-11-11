function eventoBurbuja(){
    for (let elem of document.querySelectorAll("*")) {
        // elem.addEventListener("click",e=>alert(`Elemento: ${e.tagName}`),true)
        elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
    }

};




const main=()=>{
    document.getElementById("principal").addEventListener("click",function(event){
        console.log(`Event : ${event.type} en ${event.target.tagName} (click property) this ${this}`)
    })
}


document.addEventListener("DOMContentLoaded",main)