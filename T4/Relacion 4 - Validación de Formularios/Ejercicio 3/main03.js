function comprobacionUsuario() {
    const input=document.getElementById("user");
    const expUpper=/[A-Z]{1}/
    const expLower=/[a-z]{1}/
    const expLong=/^.{6,}$/


    input.addEventListener("input",()=>{
        if (expUpper.test(input.value)) {
            document.getElementById("upper").style.fontWeight="bold";
        }else{
            document.getElementById("upper").style.fontWeight="normal";
        }

        if (expLower.test(input.value)) {
            document.getElementById("lower").style.fontWeight="bold";
        }else{
            document.getElementById("lower").style.fontWeight="normal";
        }

        if (expLong.test(input.value)) {
            document.getElementById("min").style.fontWeight="bold";
        }else{
            document.getElementById("min").style.fontWeight="normal";
        }
    })
}


const main = ()=>{
    comprobacionUsuario();
}


document.addEventListener("DOMContentLoaded",main)