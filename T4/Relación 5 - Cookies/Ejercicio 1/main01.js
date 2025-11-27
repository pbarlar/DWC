function fDevuelveCookie(nombre){
    let name = nombre + "=";
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(";");

    //Usamos find() para obtener el primer match
    const cookieEncontrada = ca.find(item => {
        //Limpiamos los espacios iniciales de la cookie
        const cookieLimpia = item.trim();

        return cookieLimpia.startsWith(name);
    });
    
    // Si se encuentra la cookie, extraemos solo el valor
    if (cookieEncontrada) {
        // Obtenemos la parte de la cadena después del "nombre="
        return cookieEncontrada.trim().substring(name.length);
    }
    
    // Si no se encuentra, devolvemos undefined
    return undefined;
}



const main = () => {
    const nombreCookie="nombre"


    let d= new Date();
    d.setTime(d.getTime()+(5*60*1000));
    let expires = "expires="+ d.toUTCString();

    if (fDevuelveCookie(nombreCookie)==undefined) {
        let name = prompt("Dime tu nombre");
        document.cookie="nombre="+name+ ";" + expires + ";path=/"
    }else{
        console.log(`Hola de nuevo ${fDevuelveCookie(nombreCookie)}`)
    }
}


document.addEventListener("DOMContentLoaded", main)