//Ejercicio 1
/**
 * Funcion que devuelve el valor máximo de un array
 * @param {Array} arr Array
 * @returns Valor máximo del array
 */

function maxVal(arr) {
    arr.sort();
    return arr[arr.length-1];
}

/**
 * Funcion que devuelve el valor mínimo de todo el Array
 * @param {Array} arr Array
 * @returns Valor mínimo del array
 */

function minVal(arr) {
    arr.sort();
    let minValue=arr[0]


    return minValue;
}

/**
 * Devuelve el valor medio de un array
 * @param {Array} arr Array
 * @returns Numero
 */
function medVal(arr) {
   let suma=0;
   for (let index = 0; index < arr.length; index++) {
    suma+=arr[index]; 
   }
   let valorMedio=Math.floor(suma/arr.length);
   return valorMedio;
}




//Ejercicio 2
/**
 * Introduce un array y un valor y te dice true si ese valor está en el array y false si no lo esta
 * @param {Array} arr Array
 * @param {Number} value 
 * @returns boolean
 */
function inArray(arr,value) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]==value) {
            return true
        }
    }
    return false;
}


/**Ejercicio 4
 * Función que devuelve los distintos elementos que tienen un array y otro
 * @param {Array} arr1 Array 
 * @param {Array} arr2 Array
 * @returns Array
 */
function diferencia(arr1,arr2) {
    let diferentes=new Array();

    for (let index = 0; index < arr2.length; index++) {
        if (!arr2.includes(arr1[index])) {
            diferentes.push(arr1[index]);
        }
    }
    
    return diferentes;
}


/**Ejercicio 4
 * Función que devuelve los elementos que estan en los dos array 
 * @param {Array} arr1 Array 
 * @param {Array} arr2 Array
 * @returns Array
 */
function interseccion(arr1,arr2) {
    let iguales=new Array();

    for (let index = 0; index < arr2.length; index++) {
        if (arr2.includes(arr1[index])) {
            iguales.push(arr1[index]);
        }
    }
    
    return iguales;
}


