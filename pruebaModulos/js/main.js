import Articulo from "./Articulo.js"
import Cliente from "./Cliente.js"
import Albaran from "./Albaran.js"


function buscarAlbaran(arrAlbaranes, cliente) {
    arrAlbaranes.forEach(albaran => {
        if (albaran.cli == cliente) {
            console.log(albaran);
        }
    });
}

function buscaEnAlbaranClientePorCodigo(arrAlbaranes,cod) {
    let arrNum=[0,1,2,4,3,5]
    function predicate(num) {
        return num==25
    }
    let valor=arrNum.find(num => num==5)
    console.log(valor)

    let valor2=arrAlbaranes.find(albaran=> albaran.num==2)
    console.log(valor2)

    let valor3=arrAlbaranes.find(albaran=>albaran.cli.id==1)
    console.log(valor3)
}

(() => {
    let art1 = new Articulo(1, "Teclado", 80);
    let art2 = new Articulo(2, "Ratón", 60);
    console.log(art1.mostrarInfo());

    let cliente1 = new Cliente(1, "Manuel Gomez");
    let cliente2 = new Cliente(2, "Jose Ruiz");
    console.log(cliente1.mostrarInfo());

    let albaran1 = new Albaran(cliente1, 1, "10/8/2025", [art2]);
    let albaran2 = new Albaran(cliente2, 2, "07/08/2024", [art1]);
    let albaran3 = new Albaran(cliente1, 3, "20/20/2025", [art1, art2]);
    const albaranes = [albaran1, albaran2, albaran3];


    //buscarAlbaran(albaranes, cliente1);
    buscaEnAlbaranClientePorCodigo(albaranes)

})();