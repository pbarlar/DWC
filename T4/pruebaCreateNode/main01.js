import db from "./db/db.json" with {type: "json"}

function crearDivs(nodoPadre, numDiv) {
    // const newDiv1=document.createElement("div");
    // const newDiv2=document.createElement("div");
    // const newDiv3=document.createElement("div");


    // const txt1=document.createTextNode("1");
    // const txt2=document.createTextNode("2");
    // const txt3=document.createTextNode("3");


    // newDiv1.appendChild(txt1);
    // newDiv2.appendChild(txt2);
    // newDiv3.appendChild(txt3);


    // document.body.appendChild(newDiv1);
    // document.body.appendChild(newDiv2);
    // document.body.appendChild(newDiv3);


    for (let index = 0; index < numDiv; index++) {
        const newDiv = document.createElement("div");
        const txt = document.createTextNode(index + 1)
        newDiv.appendChild(txt);
        nodoPadre.appendChild(newDiv)
    }
}


function creacionEstudiantes(padre) {
    for (let index = 0; index < db.students.length; index++) {
        const div = document.createElement("div");
        div.id = `Estudiante${db.students[index].id}`;


        const nombre = document.createElement("p");
        nombre.textContent = db.students[index].name;

        const level = document.createElement("p");
        level.textContent = db.students[index].level;

        div.appendChild(nombre);
        div.appendChild(level);

        div.style.border = "1px solid black"
        div.style.margin = "15px"
        div.style.padding = "10px"


        padre.appendChild(div);
    }

    padre.style.display = "flex"

    document.getElementById("activos").addEventListener("change", () => {
        padre.innerHTML = "";

        for (let index = 0; index < db.students.length; index++) {
            if (db.students[index].active==true) {
                const div = document.createElement("div");
                div.id = `Estudiante${db.students[index].id}`;


                const nombre = document.createElement("p");
                nombre.textContent = db.students[index].name;

                const level = document.createElement("p");
                level.textContent = db.students[index].level;

                div.appendChild(nombre);
                div.appendChild(level);

                div.style.border = "1px solid black"
                div.style.margin = "15px"
                div.style.padding = "10px"


                padre.appendChild(div);
            }

        }
    })
}





(() => {
    // crearDivs(document.getElementById("contenedor"),6);
    creacionEstudiantes(document.getElementById("contenedor"));
})();


