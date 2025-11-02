export class Colegio {
    constructor(nombre,num_aulas,num_alumnos,alumnos) {
        this.nombre=nombre;
        this.num_aulas=num_aulas;
        this.num_alumnos=num_alumnos;
        this.alumnos=alumnos;
    }

    /**
     * Busca un alumno por su ID en la lista 'this.alumnos'.
     * @param {number} idAlumno - El ID del alumno a buscar.
     * @returns {number|string} La nota media del alumno o un mensaje de error.
     */
    consultarNotaMedia(idAlumno){
        const alumnoEncontrado=this.alumnos.find(a=>a.id==idAlumno);

        if (alumnoEncontrado) {
            return alumnoEncontrado.notaMed
        }else{
            console.log(`El alumno con id ${idAlumno} no ha sido encontrado`)
        }
    }

    /**
     * Busca un alumno por su ID y actualiza su nota media.
     * @param {number} idAlumno - El ID del alumno cuya nota se va a modificar.
     * @param {number} nuevaNota - El nuevo valor de la nota media.
     * @returns {string} Mensaje de éxito o error.
     */
    modificarNotaMedia(idAlumno, nuevaNota) {
        const alumnoEncontrado = this.alumnos.find(alumno => alumno.id === idAlumno);

        if (alumnoEncontrado) {
            alumnoEncontrado.notaMed = nuevaNota;
            return `Éxito: La nota media del alumno ${alumnoEncontrado.nombre} (ID ${idAlumno}) ha sido actualizada a ${nuevaNota}.`;
        } else {
            return `Error: No se puede modificar. No se encontró ningún alumno con el ID ${idAlumno} en ${this.nombre}.`;
        }
    }
}
