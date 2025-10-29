import { Casa } from "./Casa.js";





(()=>{
    //Inicializo 3 objetos de la clase Casa
    const casaA=new Casa("Garcia Prieto",58,15706)
    const casaB=new Casa("Camino Caneiro",29,32004)
    const casaC=new Casa("San Clemente","s/n",15705)

    //Muestro algunos atributos de los objetos
    console.log("El código postal de la casaA es: ",casaA.imprimeCodigoPostal());
    console.log("La calle de la casaC es: ",casaC.imprimeCalle())

})();