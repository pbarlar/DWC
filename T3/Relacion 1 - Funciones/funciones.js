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

/**Ejercicio 2 y 3
 * 
 * @returns Devuelve un número aleatorio entre 1 y 6
 */

function lanzamiento() {
    return Math.floor(Math.random()*6)+1;
}


/**
 * Ejercicio 4
 * @param {*} radio Radio de esfera
 * @returns Volumen de la esfera
 */
function volumenEsfera(radio) {
    return ((4/3)*Math.PI*Math.pow(radio,3));
}

/**
 * Ejercicio 5
 * @param {*} radio Radio del circulo
 * @returns Area del circulo
 */
function areaCirculo(radio) {
    return Math.PI*(radio*radio);
}


/**Ejercicio 6
 * Funcion para calcular la potencia de cualquier número
 * @param {*} num Base 
 * @param {*} exponente Exponente
 * @returns Potencia de la base elevado al exponente
 */
function potencia(base,exponente) {
    if (exponente==0) {
        return 1;
    }else{
        return potencia(base,exponente-1)*base;
    }
}


/**Ejercicio 7
 * Función que calcula factorial de un número
 * @param {*} num1 
 * @returns Devuelve el factorial del número introducido
 */
function factorial(num1) {
    if (num1<2) {
        return 1;
    }else{
        return factorial(num1-1)*num1;
    }
}