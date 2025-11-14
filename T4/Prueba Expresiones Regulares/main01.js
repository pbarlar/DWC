

const main=()=>{
    // const numeros=12
    // const exprRegular=/^[0-9]{2}$/

    // if (exprRegular.test(numeros)) {
    //     console.log("Cumple esa condicion")
    // }else{
    //     console.log("No cumple esa condicion")
    // }



    const str="fot1h hola h8r";
    const exprRegular=/[0-9]{1}/g
    let array;

    while ((array = exprRegular.exec(str)) !== null) {
        console.log(`Found ${array[0]}. Next starts at ${exprRegular.lastIndex}`)
    }

    console.log(exprRegular.exec(str));
}


document.addEventListener("DOMContentLoaded",main)