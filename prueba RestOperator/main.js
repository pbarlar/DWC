


let expandeArray=()=>{
    const numeros=[1,2,3,4,5];
    console.log(`Array normal ${numeros}`)
    console.log('Array expandido', ... numeros)
}

let pruebaSpreenOperator=()=>{
    let persona1={nombre:"Ana", edad:25}
    let persona2={... persona1}

    persona2.nombre="Antonio";
    console.log(persona1);
    console.log(persona2);
}


let combinaObjeto=()=>{
    let persona1={nombre:"Ana", edad:25}
    let persona2={... persona1}

    persona2.nombre="Antonio";

    let persona3={...persona1,...persona2,pais:"España"}
    console.log(persona1);
    console.log(persona2);
    console.log(persona3)
}



(()=> {
    console.log("Bienvenido")
    let letras=["a","b","c","d","e"];
    expandeArray();

    let arrDestino=[];
    
    arrDestino=[... letras]

    arrDestino.push("f");

    console.log(letras);
    console.log(arrDestino);
    


    pruebaSpreenOperator();

    combinaObjeto();
})();