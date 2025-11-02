import { Alumno } from "./Alumno.js";
import { Colegio } from "./Colegio.js";

(()=>{
    // Inicialización de los 5 alumnos
    const alumno1 = new Alumno();        
    const alumno2 = new Alumno(7);      
    const alumno3 = new Alumno();         
    const alumno4 = new Alumno(8.5);   
    const alumno5 = new Alumno(9);

    //Creo un array de los 5 alumnos creados.
    const alumnos=[alumno1,alumno2,alumno3,alumno4,alumno5];

    console.log(alumnos)

    //Creamos un objeto de la Clase Colegio
    const colegioSol = new Colegio("Colegio Sol",5,alumnos.length,alumnos);

    //Ponemos a prueba los metodos que tiene la clase Colegio
    console.log(colegioSol.consultarNotaMedia(3));

    console.log(colegioSol.modificarNotaMedia(2,6.3))

    //Mostramos lod datos del colegio para que se compruebe que los metodos han funcionado correctamente
    console.log(colegioSol)

})();