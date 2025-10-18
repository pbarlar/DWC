/**
 * Indica true si hay asientos disponibles segun el tipo de asiento elegido
 * @param {Array} asientos Array de asientos
 * @param {String} tipoAsiento Tipo de asiento (Turista|First)
 * @returns Boolean
 */
function comprobarAsientos(asientos, tipoAsiento) {
    let libres = false;
    if (tipoAsiento == "First") {
        for (let index = 0; index < 5; index++) {
            if (asientos[index] == null) {
                libres = true
                break;
            }
        }
    } else if (tipoAsiento == "Turista") {
        for (let index = 5; index < asientos.length; index++) {
            if (asientos[index] == null) {
                libres = true
                break;
            }
        }
    }

    return libres;
}







/**
 * Reserva un asiento con tu nombre y tipo de Asiento si hay disponibles y los muestra en una nueva ventana
 * @param {Array} asientos 
 */
function reservarAsiento(asientos) {
    let tipoAsiento=prompt("Eliga tipo de asiento (First o Turista): ");
    let nombre=""
    if (comprobarAsientos(asientos, tipoAsiento) && tipoAsiento == "First") {
        
        for (let index = 0; index < 5; index++) {
            if (asientos[index]==null) {
                nombre=prompt("Indique su nombre: ")
                asientos[index]=nombre;
                nuevaVentana=window.open("","",`width=500, height=400`);
                nuevaVentana.document.write(`Tarjeta embarque: <br>`);
                nuevaVentana.document.write(`Nombre: ${nombre} <br>`);
                nuevaVentana.document.write(`Num asiento: ${index+1} <br>`);
                nuevaVentana.document.write(`Tipo Asiento: ${tipoAsiento}`);
                break;
            };
        }

    }else if (comprobarAsientos(asientos, tipoAsiento) && tipoAsiento == "Turista") {
        for (let index = 5; index < asientos.length; index++) {
            if (asientos[index]==null) {
                nombre=prompt("Indique su nombre: ");
                asientos[index]=nombre;
                nuevaVentana=window.open("","",`width=500, height=400`);
                nuevaVentana.document.write(`Tarjeta embarque: <br>`);
                nuevaVentana.document.write(`Nombre: ${nombre} <br>`);
                nuevaVentana.document.write(`Num asiento: ${index+1} <br>`);
                nuevaVentana.document.write(`Tipo Asiento: ${tipoAsiento}`);
                break;
            }
        }
    }else{
        alert("No hay asientos disponibles.");
        
    }

}