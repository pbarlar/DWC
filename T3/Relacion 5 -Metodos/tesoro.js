/**
 * * @param {Number} rows Filas que tendra el array
 * @param {Number} cols Columnas que tendra
 * @returns Devuelve un array bidimensional del tamaño que le hayamos dicho
 */
function tablero(rows,cols) {
    let tablero=new Array(rows);
    
    for (let index = 0; index < tablero.length; index++) {
        // Inicializa cada fila con el número de columnas y rellena con 'null'
        tablero[index]=new Array(cols).fill(null); 
    }

    return tablero;
}


/**
 * * @returns Devuelve string de un número entre 11 y 55
 */
function numerosTesoro() {
    let n1=String(Math.floor(Math.random()*5)+1); // Dígito 1 (1-5)
    let n2=String(Math.floor(Math.random()*5)+1); // Dígito 2 (1-5)
    return n1.concat(n2);
}


/**
 * Genera el tesoro y la ruta aleatoria desde (1, 1) en el tablero vacío proporcionado.
 * * @param {Array<Array<null>>} tablero Un array 5x5 lleno de 'null' (creado por la función tablero()).
 * @returns {Array<Array<string|null>>} El tablero modificado con la ruta ("R") y el tesoro (su coordenada).
 */
function generarTableroRutaTesoro(tablero) {
    const ROWS = 5;
    const COLS = 5;
    
    // 1. Determinar y colocar el Tesoro (ej: "34")
    let posTesoro = numerosTesoro();
    // Convertir coordenadas 1-based a 0-based para JavaScript
    let destinoFila = parseInt(posTesoro[0]) - 1; 
    let destinoColumna = parseInt(posTesoro[1]) - 1; 
    
    // **CORRECCIÓN ROBUSTA:** Verificar que la fila destino exista antes de intentar acceder a la columna.
    // Si la fila no existe (es undefined), la inicializamos.
    if (!Array.isArray(tablero[destinoFila])) {
        tablero[destinoFila] = new Array(COLS).fill(null);
    }
    
    // Colocar el valor del tesoro
    tablero[destinoFila][destinoColumna] = posTesoro;

    // 2. Generar la Ruta Aleatoria desde (1, 1) -> (0, 0)
    let currentFila = 0;
    let currentColumna = 0;
    
    // Marcar la celda inicial (0,0) si no es el tesoro (caso posTesoro="11").
    if (posTesoro !== "11") {
         tablero[0][0] = "R";
    }

    // Bucle de movimiento hasta alcanzar el destino
    while (currentFila !== destinoFila || currentColumna !== destinoColumna) {
        let movimientosHaciaDestino = [];
        
        // Movimientos verticales (acercándose al destino)
        if (currentFila < destinoFila) movimientosHaciaDestino.push({f: currentFila + 1, c: currentColumna}); 
        else if (currentFila > destinoFila) movimientosHaciaDestino.push({f: currentFila - 1, c: currentColumna}); 

        // Movimientos horizontales (acercándose al destino)
        if (currentColumna < destinoColumna) movimientosHaciaDestino.push({f: currentFila, c: currentColumna + 1}); 
        else if (currentColumna > destinoColumna) movimientosHaciaDestino.push({f: currentFila, c: currentColumna - 1}); 

        // Si no hay movimientos posibles, salir.
        if (movimientosHaciaDestino.length === 0) break;

        // Elegir y aplicar el movimiento aleatorio
        const movimientoElegido = movimientosHaciaDestino[Math.floor(Math.random() * movimientosHaciaDestino.length)];
        currentFila = movimientoElegido.f;
        currentColumna = movimientoElegido.c;
        
        // 3. Registrar el paso en el tablero si no es la celda del tesoro final
        if (currentFila !== destinoFila || currentColumna !== destinoColumna) {
            tablero[currentFila][currentColumna] = "R";
        }
    }
    
    return tablero;
}