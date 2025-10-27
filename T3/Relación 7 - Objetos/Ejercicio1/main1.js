import { Persona } from "./Persona.js";

function mediaEdad(arrPersonas) {
    let mediaEdad=0;

    arrPersonas.forEach(({edad}) => {
        mediaEdad+=edad;
    });

    return mediaEdad/arrPersonas.length;
}

(()=>{
    const p1=new Persona("Miguel Ruiz",18)
    const p2=new Persona("Pedro Gonazlez",22)
    const p3=new Persona("Alejandro Balde",17)

    const personas=[p1,p2,p3];
    
    console.log(personas)
    console.log(`La persona p1 es mayor de edad ${p3.mayorEdad()}`)
    console.log("La media de edad de las personas es: ",mediaEdad(personas))

})();
