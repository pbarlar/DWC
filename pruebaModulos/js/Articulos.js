import Articulo from "./Articulo.js"

export default class Articulos {
    constructor(arrArticulos) {
        this.arrArticulos=arrArticulos;
    }


    addArticulo(articulo){
        this.arrArticulos.push(articulo);
    }


    existeArticulo(codigo){
        return this.arrArticulos.some(({cod})=> cod==codigo);
    }

    /**Devuelve un array de los articulos superiores al precio mínimo
     * 
     * @param {Number} precioMinimo 
     * @returns {Array} 
     */
    filtraPorPrecio(precioMinimo){
        return this.arrArticulos.filter(({precio})=> precio>precioMinimo)
       
    }

    /**
     * Filtra los articulos según la función de callback proporcionada
     * @param {*} callback Función para filtrar
     */
    filtra(callback){
        return this.arrArticulos.filter(callback);
    }

    removeArticulo(codigo){
        let indice=this.arrArticulos.findIndex(({cod})=> cod==codigo);

        this.arrArticulos.splice(indice,1);
    }
}

