function existe(par1, array1) {
    for (let index = 0; index < array1.length; index++) {
        if (par1 == array1[index]) {
            return true;
        }
    }
    return false;

}


function onlyUniques(...argumentos) {
    let nuevoArray = [];

    for (let index = 0; index < argumentos.length; index++) {
        if (!existe(arguments[index], nuevoArray)) {
            nuevoArray.push(arguments[index]);
        }

    }

    return nuevoArray;
}

function sumAndSquare(... argumentos) {
    let nuevoArray=[];
    let suma=0;

    for (let index = 0; index < argumentos.length; index++) {
        nuevoArray[index]=argumentos[index]*argumentos[index];
    }

    for (let index = 0; index < nuevoArray.length; index++) {
        suma+=nuevoArray[index];
    }

    return suma;
}