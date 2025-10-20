import Cliente from "./Cliente.js";
import Articulo from "./Articulo.js"

export default class Albaran {
    constructor(cli,num, fecha,lineas) {
        this.cli=cli;
        this.num=num;
        this.fecha=fecha;
        this.lineas=lineas;
    }
    showAlbaran(){
        return `Cliente ${this.cli.id} ${this.cli.nombre}, Numero de albaran ${this.num}, Fecha ${this.fecha}, Lineas ${this.lineas}`;
    }
    
}