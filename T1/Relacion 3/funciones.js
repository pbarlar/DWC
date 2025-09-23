function ageCalculator(añoActual, añoNacimiento) {
    let edad = añoActual - añoNacimiento;


    años = `They are either ${edad} or ${edad - 1}`;
    return años;
}


//Funcion que calcula la cantidad de comida que comerias de un alimento el resto de tu vida poniendo
// (edad actual, edad max, cantidad alimento por dia)
function supplyCalculator(currentAge, maxAge, numDay) {
    let totalSupply = ((maxAge - currentAge) * 365) * numDay;
    let resultado = `You will need ${totalSupply} to last you until the ripe old age of ${maxAge - currentAge}`;

    return resultado;
}


//Calcula la circunferencia de un circulo, introduciendo de parametro el radio.
function circumference(radius) {
    let circumference=radius*2;
    return circumference;
}

/**
 * 
 * @param {*} radius Radio del circulo 
 * @returns Area de circulo
 */
function area(radius) {
    let area=3.14*(radius*2);
    return area;
}



function convertTemperature(value, unit) {
    
    if (unit === "C" || unit === "c") {
    let fahrenheit = (value * 9 / 5) + 32
    document.writeln(`${value}°C is ${fahrenheit}ºF`);
  } else if (unit === "F" || unit === "f") {
    let celsius = (value - 32) * 5 / 9;
    document.writeln(`${value}°F is ${celsius}ºC`);
  } else {
    document.writeln("Unidad no válida. Usa 'C' para Celsius o 'F' para Fahrenheit.");
  }
}




