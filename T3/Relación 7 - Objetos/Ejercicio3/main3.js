import { Linea } from "./Linea.js";
import { Punto } from "./Punto.js"


(()=>{
    //Creo dos objetos de la clase Punto y uno de la Clase Linea formada por los objetos punto
    const punto1=new Punto(12.8,7.6);
    const punto2=new Punto(8.3,16.1);

    const linea1=new Linea(punto1,punto2);

    //Muestro por consola la información de los puntos y la línea creados
    console.log("Punto 1: ",punto1);
    console.log("Punto 2: ",punto1);
    console.log("Linea 1",linea1);

})()