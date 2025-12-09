
const fetchPersonajes = async () => {
    const AI_API_URL= await fetch("https://futuramaapi.com/api/characters");

    const characters= await AI_API_URL.json();

    mostrarCards(characters);

    console.log(characters)

    comprobarSesionIniciada()
}

const fetchUsers = async () => {
    const AI_API_URL= await fetch("https://futuramaapi.com/api/users");

    const users = await  AI_API_URL.json()

    validarLogin(users);

    console.log(users)
}


const validarLogin = (arrUsuarios) => {
    const btnLogin = document.getElementById("login");

    if (!btnLogin) {
        return
    };

    btnLogin.addEventListener("click", () => {
        let user= document.getElementById("name").value;
        let email = document.getElementById("email").value;

        let usuarioEncontrado= arrUsuarios.items.find(usuario => usuario.name == user && usuario.surname == email);

        if (usuarioEncontrado) {
            alert(`Bienvenido ${usuarioEncontrado.name}`)
            window.location.href="http://127.0.0.1:5500/index.html";
            sessionStorage.setItem("name",usuarioEncontrado.name)
            sessionStorage.setItem("Surname",usuarioEncontrado.surname)
        }else{
            alert("Inicio de sesion fallido")
        }
    })
}


function comprobarSesionIniciada() {
    const usuario=sessionStorage.getItem("name");

    if (!usuario) {
        window.location.href="http://127.0.0.1:5500/login.html"
    }
}


function mostrarCards(arrObjetos) {
    let contenedor=document.getElementById("contenedor");

    contenedor.innerHTML="";

    arrObjetos.items.forEach(personaje => {
        let fragment = card(personaje);

        contenedor.appendChild(fragment);
    });



}


function card(personaje) {
    let fragment=document.createElement("div");

    let img=document.createElement("img");
    let name=document.createElement("h3");

    img.src=personaje.image;
    name.textContent=personaje.name;

    fragment.appendChild(img);
    fragment.appendChild(name);

    return fragment;
}



function carritoShow(arrCarrito) {
    
}




const main = () => {
    fetchUsers();
    fetchPersonajes();
}


document.addEventListener("DOMContentLoaded",main);