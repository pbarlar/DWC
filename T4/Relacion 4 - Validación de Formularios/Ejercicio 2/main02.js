function comprobacionRegistro() {
    const expNombre=/^[A-Z]{1}[a-z]{1,}$/  //Solo una mayuscula y que sea la primera
    const expDni=/^[0-9]{8}[A-Z]{1}$/  //8 Numeros y 1 Letra mayuscula
    const expTel=/^[0-9]{9}$/ // 9 números obligatoriamente
    const expEmail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ //Expresion para comprobar email


    //Creo las variables de los campos del formulario
    const name=document.getElementById("name");
    const dni=document.getElementById("dni");
    const tel=document.getElementById("tel");
    const email=document.getElementById("email");

    name.addEventListener("blur",()=>{
      if (!expNombre.test(name.value)) {
        document.getElementById("nombre").innerHTML+="<br>(Debe empezar por mayuscula)"
        document.getElementById("nombre").style.color="red";
      }else{
        document.getElementById("nombre").innerHTML+="<br>(Debe empezar por mayuscula)"
        document.getElementById("nombre").style.color="red";
      }  
    })

    dni.addEventListener("blur",()=>{
      if (!expDni.test(dni.value)) {
        document.getElementById("lbl_dni").innerHTML+="<br>(8 numeros y letra mayuscula)"
        document.getElementById("lbl_dni").style.color="red";
      }  
    })

    tel.addEventListener("blur",()=>{
      if (!expTel.test(tel.value)) {
        document.getElementById("lbl_tel").innerHTML+="<br>(9 numeros)"
        document.getElementById("lbl_tel").style.color="red";
      }  
    })

    email.addEventListener("blur",()=>{
      if (!expEmail.test(email.value)) {
        document.getElementById("lbl_email").innerHTML+="(Formato invalido)"
        document.getElementById("lbl_email").style.color="red";
      }  
    })
}



const main = () => {
    comprobacionRegistro();
}



document.addEventListener("DOMContentLoaded",main)