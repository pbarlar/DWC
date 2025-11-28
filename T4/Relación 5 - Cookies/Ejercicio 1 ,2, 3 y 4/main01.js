function fDevuelveCookie(nombre) {
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


const crearCookies = (nombre, valor, diasExpiracion) => {
    let d = new Date();
    d.setTime(d.getTime + (diasExpiracion * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";
}

function eliminarCookie(nombre) {
    document.cookie = nombre + "=; Max-Age=0; path=/";
}



const main = () => {
    const nombreCookie = "nombre"


    let d = new Date();
    d.setTime(d.getTime() + (5 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();

    if (fDevuelveCookie(nombreCookie) == undefined) {
        let name = prompt("Dime tu nombre");
        document.cookie = "nombre=" + name + ";" + expires + ";path=/"
    } else {
        console.log(`Hola de nuevo ${fDevuelveCookie(nombreCookie)}`)
    }


    if (fDevuelveCookie("tema") == undefined) {
        let tema = prompt("Dime el tema de la pagina:")
        document.cookie = "tema=" + tema + ";path=/"
        document.body.style.backgroundColor = fDevuelveCookie("tema");
    } else {
        document.body.style.backgroundColor = fDevuelveCookie("tema");
    }


    if (fDevuelveCookie("tamaño") === undefined) {
        let tamaño = prompt("Dime el tamaño de la letra:")
        document.cookie = "tamaño=" + tamaño + ";" + expires + ";path=/"
        document.body.style.fontSize = fDevuelveCookie("tamaño") + "px";
    } else {
        document.body.style.fontSize = fDevuelveCookie("tamaño") + "px";
    }



    if (fDevuelveCookie("parrafo") == undefined) {
        let parrafo = prompt("Dime el color de los parrafos: ")
        document.cookie = "parrafo=" + parrafo + ";" + expires + ";path=/"
        document.body.style.color = fDevuelveCookie("parrafo");
    } else {
        document.body.style.color = fDevuelveCookie("parrafo");
    }
}


document.addEventListener("DOMContentLoaded", main)