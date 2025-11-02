export class Alumno {
    static contadorId=0;
    constructor(notaMed=5) {
        this.id=Alumno.contadorId;
        this.nombre=`alumno${this.id}`;
        this.notaMed=notaMed;
        Alumno.contadorId++;
    }
}