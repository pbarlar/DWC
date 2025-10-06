//Ejercicio 1
/**
 * Funcion que devuelve el valor máximo de un array
 * @param {*} arr Array
 * @returns Valor máximo del array
 */

function maxVal(arr) {
    arr.sort();
    return arr[arr.length-1];
}

/**
 * Funcion que devuelve el valor mínimo de todo el Array
 * @param {*} arr Array
 * @returns Valor mínimo del array
 */

function minVal(arr) {
    arr.sort();
    let minValue=arr[0]


    return minValue;
}

/**
 * Devuelve el valor medio de un array de 5 valores
 * @param {*} arr Array
 * @returns Valor medio del array
 */
function medVal(arr) {
   return arr[2];
}