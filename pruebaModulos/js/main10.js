import Articulo from "./Articulo.js";
import Articulos from "./Articulos.js";


let finit=()=>{
    let art1=new Articulo(1,"Mesa",40);
    let art2=new Articulo(2,"Cargador",10);
    let art3=new Articulo(3,"Monitor",150);
    let dbArt=new Articulos([art1,art2,art3]);
    return dbArt;
}




(()=>{
    console.log("Bienvenido")
    
    let dbArt=finit();

    
    //Filtrar numeros mayores que 5
    //let mayores=[4,5,6].filter(num => num>=5);
    //console.log(mayores)

    
    //console.log(dbArt.filtra(art1=> art1.precio>25));


    dbArt.removeArticulo(1);
    console.log(dbArt)

})();