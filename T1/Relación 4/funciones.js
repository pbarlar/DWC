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
// Ejercicio 2
function addOnlyNums(... argumentos) {
    let sum=0;

    for (let index = 0; index < argumentos.length; index++) {
        if (!isNaN(arguments[index])) {
            sum+=arguments[index];
        }    
    }
    return sum;
}


//Ejercicio 3
function countTheArgs(... argumentos) {
    let count=0;

    for (let index = 0; index < argumentos.length; index++) {
        count++;
    }

    return count;
}


//Ejercicio 4
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

//Ejercicio 6
function divisiblePorTres(num1) {
    if (num1%3==0) {
        return true;
    }else{
        return false
    }
}


//Ejercicio 7
function divisibleEntre(n1,n2) {
    if (n1%n2==0) {
        return true;
    }else{
        false;
    }
}


//Ejercicio 8
function rango(num1,rangoInf,rangoSup) {
    if (num1>rangoSup && num1<rangoSup) {
        return true;
    }else{
        return false;
    }
}

//Ejercicio 9
function tieneTresDigitos(n1) {
    if (n1>99) {
        return true;
    }else{
        return false;
    }
}

//Ejercicio 10
function areaRectangulo(lado1,lado2) {
    let area=lado1*lado2;
    return area;
}


//Ejercicio 11
function imc(peso,altura) {
    let imc=peso/(altura*2);
    return imc;
}


//Ejercicio 12
function precioFinal(precioInicial,descuento) {
    let precioFinal=precioInicial-(precioInicial*0,descuento);
    return precioFinal;
}