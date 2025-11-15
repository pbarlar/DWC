
/**
 * Funcion que comprueba si una cadena de caracteres tiene una mayuscula.
 * @param {String} cadena Cadena de caracteres
 * @returns Boolean (true en caso de que haya mayuscula, false en caso de que no)
 */
function validarMayuscula(cadena) {
    const exprRegular= /[A-Z]{1}/;

    if (exprRegular.test(cadena)) {
        return true;
    }else{
        return false;
    }
}


/**
 * Funcion que comprueba si hay algun caracter especial en la cadena de caracteres
 * @param {String} cadena 
 * @returns True en caso de que si, False en caso contrario
 */
function validarCaracteresEspeciales(cadena) {
    const exprRegular= /[!|@|$|%|^|&]{1}/

    if (exprRegular.test(cadena)) {
        return true;
    }else{
        return false;
    }
}

/**
 * Comprueba si tiene un formato valido para email.
 * @param {String} email Cadena de caracteres
 * @returns Boolean
 */
function validarCorreo(email) {
    const exprRegular=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (exprRegular.test(email)) {
        return true;
    }
    
    return false;
}

/**
 * Comprobar si una cadena de numeros tiene formato valido para tarjeta de credito
 * @param {Number} tarjeta 
 * @returns Boolean
 */
function validarTarjetaCredito(tarjeta) {
    const exprRegular= /^[0-9]{16}$/

    if (exprRegular.test(tarjeta)) {
        return true;
    }

    return false;
}

/**
 * Funcion que comprueba si una cadena tiene al menos 8 de longitud
 * @param {*} cadena 
 * @returns Boolean
 */
function validarLongitud(cadena) {
    const exprRegular=/^.{8,}$/

    if (exprRegular.test(cadena)) {
        return true;
    }

    return false;
}

/**
 * Función que comprueba si una cadena tiene al menos 1 numero
 * @param {*} cad 
 * @returns Boolean
 */
function validarNumero(cad) {
    const exprRegular=/[0-9]{1}/

    if (exprRegular.test(cad)) {
        return true;
    }

    return false;
}


const main = () => {
    console.log(`La cadena de caracteres '¿Hola, como estas?' tiene una mayuscula?: ${validarMayuscula('¿Hola, como estas?')}`)
    console.log(`La cadena de caracteres 'Hay un descuento de 10%' tiene caracteres especiales?: ${validarCaracteresEspeciales('Hay un descuento de 10%')}`)
    console.log(`El email 'pbarlar@gmail.com' tiene un formato valido?: ${validarCorreo('pbarlar@gmail.com')}`)
    console.log(`La tarjeta de credito '4356789032331980' tiene un formato valido?: ${validarTarjetaCredito(4356789032331980)}`)
    console.log(`La cadena 'hola$mundo3' tiene al menos 8 caracteres?: ${validarLongitud('hola$mundo3')}`)
    console.log(`La cadena 'main10' tiene al menos un número?: ${validarNumero('main10')}`)
}


document.addEventListener("DOMContentLoaded",main)