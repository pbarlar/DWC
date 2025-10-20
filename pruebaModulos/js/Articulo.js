export default class Articulo {
    constructor(cod,nombre,precio) {
        this.cod=cod;
        this.nombre=nombre;
        this.precio=precio;
    }
    mostrarInfo(){
        return `Articulo ${this.cod}, Nombre ${this.nombre}, Precio ${this.precio}`;
    }
}
