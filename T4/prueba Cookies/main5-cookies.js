const fDevuelveCookie = (nombre) => {
    let name= nombre + "=";
    let decodedCookie=decodeURIComponent(document.cookie)
    let ca=decodedCookie.split(";");

    //Usamos find() para obtener el primer match
    const cookieEncontrada = ca.find(item => {
        //Limpiamos los espacios iniciales de la cookie
        const cookieLimpia = item.trim();
        
        return cookieLimpia.startsWith(name);
    });

    return cookieEncontrada
}


const fCrearCookie=()=>{
    document.cookie="usuario=Juan";
    document.cookie="tema=oscuro";
    
    let valor=fDevuelveCookie("apellido");

    alert(valor)
}

const mostrarCookie= () =>{
    alert(`Cookies: ${document.cookie}`);
    console.log(document.cookie)
}

const setCookies =(nombre,valor,diasExpiracion) =>{
    let d= new Date();
    d.setTime(d.getTime+(diasExpiracion*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";
}






const main = () =>{
    

    document.getElementById("btnCrearCookie").addEventListener("click",fCrearCookie)
    document.getElementById("btnMostrarCookie").addEventListener("click",mostrarCookie)
}


document.addEventListener("DOMContentLoaded",main)