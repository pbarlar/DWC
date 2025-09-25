/**
 * Ejercicio 1
 * @param  {...any} argumentos Introducir numeros
 * @returns Devolvera la suma de los numeros introducidos
 */

function sum(... argumentos) {
    let sum=0;

    for (let index = 0; index < argumentos.length; index++) {
        sum+=argumentos[index];
    }

    return sum;
}


/**
 * 
 * @param  {...any} argumentos Introducir cualquier tipo de dato
 * @returns Devuelve la suma de los numeros introducidos
 */

function addOnlyNums(... argumentos) {
    let sum=0;

    for (let index = 0; index < argumentos.length; index++) {
        if (!isNaN(arguments[index])) {
            sum+=arguments[index];
        }    
    }
    return sum;
}



function countTheArgs(... argumentos) {
    let count=0;

    for (let index = 0; index < argumentos.length; index++) {
        count++;
    }

    return count;
}



function combineTwoArrays(array1, array2) {
    arrayCombined=new Array();

    for (let index = 0; index < array1.length; index++) {
        arrayCombined.push(array1[index]);
    }

    for (let index = 0; index < array2.length; index++) {
        arrayCombined.push(array2[index]);
    }

    return arrayCombined;
}


function divisiblePorTres(num1) {
    if (num1%3==0) {
        return true;
    }else{
        return false
    }
}