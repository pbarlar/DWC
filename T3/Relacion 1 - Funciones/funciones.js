/** Ejercicio 1
 * Introduce 4 numeros y devuelve el mayor de ellos.
 * @param {number} num1 - Numero 1 
 * @param {number} num2 - Numero 2 
 * @param {number} num3 - Numero 3 
 * @param {number} num4 - Numero 4 
 */

function maxValue(num1, num2, num3, num4) {
    return Math.max(num1, num2, num3, num4);
}

/**
 * 
 * @returns Devuelve un número aleatorio entre 1 y 6
 */

function lanzamiento() {
    return Math.floor(Math.random()*6)+1;
}