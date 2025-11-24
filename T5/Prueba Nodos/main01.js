const informacionNodo = (nodo) => {
    console.log(`Información del nodo ${nodo}`)
    console.log("Tipo del nodo: ", nodo.nodeType)
    console.log('Nombre del nodo ', nodo.nodeName)
    console.log('Valor del nodo ',nodo.nodeValue)
    console.log('Numero de hijos ',nodo.childNodes.length)
    console.log('Contenido del nodo ', nodo.textContent)



    console.log('Primer hijo ', nodo.firstChild)
    console.log("Ultimo hijo", nodo.lastChild)

}

/**Muestra el nodo y todos sus hijos
 * 
 * @param {Node} nodo 
 */
const recorreNodo = (node) => {
    // node.childNodes.forEach(hijo =>{
    //     console.log(hijo)
    // })


    for (let hijo of node.children) {
        console.log(hijo)
    }
}



const recorreNodoRecursivo = (node) => {
    console.log(node)
    for (let hijo of node.children) {
        recorreNodoRecursivo(hijo)
    }
}


const main = ()=>{
    const nodo=document.getElementById("lista");

    informacionNodo(nodo);
    // recorreNodo(nodo);
    recorreNodoRecursivo(nodo)
}


document.addEventListener("DOMContentLoaded",main)