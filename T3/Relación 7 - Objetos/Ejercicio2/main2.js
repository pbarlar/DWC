import { Telefono } from "./Telefono.js";

(()=>{
    //Creo tres instancias de la clase Telefono
    const t1=new Telefono(654321245);
    const t2=new Telefono(678320842);
    const t3=new Telefono(722678911);

    //Utilizo el metodo llamar de la clase Telefono unas cuantas veces en cada uno
    t1.llamar();
    t2.llamar();
    t2.llamar();
    t2.llamar();
    t3.llamar();
    t3.llamar();

    //Imprimo por concola los tres telefonos y el número de llamadas de cada telefono
    console.log(t1,t2,t3)
    console.log("Número de llamadas del telefono 1: ",t1.numLlamadas);
    console.log("Número de llamadas del telefono 2: ",t2.numLlamadas);
    console.log("Número de llamadas del telefono 3: ",t3.numLlamadas);
})();