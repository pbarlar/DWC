function validarFormulario() {
    const exprName=/^[A-Z]{1}[a-z]{1,}$/  //Solo una mayuscula y que sea la primera
    const expTel=/^[0-9]{9}$/ // 9 números obligatoriamente
    const expEmail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ //Expresion para comprobar email
    const expPassword=/^[a-zA-z]{8,}/



    const fname=document.getElementById("fname");
    const lname=document.getElementById("lname");
    const phone=document.getElementById("phone");
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    const repeatPassword=document.getElementById("repeat_password")



    fname.addEventListener("blur",()=>{
        if (!exprName.test(fname.value)) {
            alert("Debe contener la primera mayuscula")
        }
    })

    lname.addEventListener("blur",()=>{
        if (!exprName.test(lname.value)) {
            alert("Debe contener la primera mayuscula")
        }
    })

    phone.addEventListener("blur",()=>{
        if (!expTel.test(phone.value)) {
            alert("Debe contener 9 números obligatoriamente")
        }
    })

    email.addEventListener("blur",()=>{
        if (!expEmail.test(email.value)) {
            alert("Formato de email invalido")
        }
    })

    password.addEventListener("blur",()=>{
        if (!expPassword.test(password.value)) {
            alert("Debe tener al menos 8 caracteres")
        }
    })


    repeatPassword.addEventListener("blur",()=>{
        if (repeatPassword.value!=password.value) {
            alert("Las dos contraseñas deben ser iguales")
        }
    })


}

const main = () => {
    validarFormulario();
}


document.addEventListener("DOMContentLoaded",main)