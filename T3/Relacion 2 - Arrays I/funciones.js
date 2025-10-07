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
 * Devuelve el valor medio de un array de 5 valores
 * @param {Array} arr Array
 * @returns Valor medio del array
 */
function medVal(arr) {
   return arr[2];
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