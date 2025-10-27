export class Telefono {
    constructor(nTelefono) {
        this.nTelefono=nTelefono;
        this.numLlamadas=0;
    }
    llamar(){
        this.numLlamadas++;
    }
}