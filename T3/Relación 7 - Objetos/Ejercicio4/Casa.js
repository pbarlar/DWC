export class Casa {
    constructor(calle,numero,cod_postal) {
        this.calle=calle;
        this.numero=numero;
        this.cod_postal=cod_postal;
        console.log(`Nueva casa en calle: ${calle}, nº: ${numero}, CP:${cod_postal}`)
    }
    setNumero(numero){
        this.numero=numero;
    }

    setCalle(calle){
        this.calle=calle;
    }

    setCodigoPostal(cod_postal){
        this.cod_postal=cod_postal;
    }

    imprimeNumero(){
        return this.numero;
    }

    imprimeCalle(){
        return this.calle;
    }

    imprimeCodigoPostal(){
        return this.cod_postal;
    }

}