function esPalindroma(scad) {
    let cadenaNueva = "";

    for (let index = 0; index < scad.length; index++) {
        cadenaNueva += scad.charAt(scad.length - index - 1)
    }

    if (scad==cadenaNueva) {
        return true;
    }else{
        return false;
    }
}


function containsCad(scad,subcad) {
    let ncad;
    let contiene=false;
    for (let index = 0; index < scad.length; index++) {
        ncad="";
        for (let f = 0; f < subcad.length; f++) {
            ncad+=scad[index+f];
        }

        if (ncad==subcad) {
            return true;
        }
    }

    return contiene;

}