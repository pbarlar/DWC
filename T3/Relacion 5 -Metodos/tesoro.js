/**
 * 
 * @param {Number} rows Filas que tendra el array
 * @param {Number} cols Columnas que tendra
 * @returns Devuelve un array bidimensional del tamaño que le hayamos dicho
 */

function tablero(rows,cols) {
    let tablero=new Array(rows);
    
    for (let index = 0; index < tablero.length; index++) {
        tablero[index]=new Array(cols);
    }

    return tablero;
}


/**
 * 
 * @returns Devuelve número entre 11 y 55
 */
function numerosTesoro() {
    return Math.floor(Math.random() * 45) + 11;
}

/**
 * Coge un array de 5 filas y 5 columnas y le coloca un número que coincida con la posicion en el array
 * @param {Array} tablero 
 * @returns Devuelve ese array pero con el número del tesoro introducido
 */
function colocarTesoro(tablero) {
    let nTesoro = numerosTesoro().toString(); // ✅ llamada correcta

    for (let index = 0; index < tablero.length; index++) {
        for (let f = 0; f < tablero[index].length; f++) {
            let posicion = index.toString() + f.toString();
            if (nTesoro === posicion) {
                tablero[index][f] = '💎'; // o nTesoro si quieres ver el número
            }
        }
    }

    return tablero;
}



