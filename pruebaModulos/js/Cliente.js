export default class Cliente {
    constructor(id,nombre) {
        this.id=id;
        this.nombre=nombre;
    }
    mostrarInfo(){
        return `Cliente ${this.id}, Nombre ${this.nombre}`
    }
}

