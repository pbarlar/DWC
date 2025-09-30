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