

let db = [];

let enrollments = [];

// --------------------------------------
// FETCH
// --------------------------------------
async function fetchStudents() {
    const datos = await fetch("http://localhost:3000/students")
    db = await datos.json();
    return db;
}


async function fetchEnrollments() {
    const datos = await fetch("http://localhost:3000/enrollments");
    enrollments = await datos.json();
    return enrollments;
}



// --------------------------------------
// MOSTRAR ENROLLMENTS
// --------------------------------------
function cards(padre) {

    padre.innerHTML = "";
    padre.style.display = "flex";

    enrollments.forEach(enr => {

        let fragment = card(enr)


        padre.appendChild(fragment);
    });

}


function card(enrollment) {
    const div = document.createElement("div");
    div.id = `Enrollment${enrollment.id}`;
    div.style.cssText = "border:1px solid black; margin:15px; padding:10px";

    div.innerHTML = `
                <h3>Enrollment ${enrollment.id} </h3>
                <p>Course id:${enrollment.courseId}</p>
                <p>Student id:${enrollment.studentId}</p>
            `;
    return div
}

// --------------------------------------
// LOGIN + LOCAL STORAGE
// --------------------------------------

function guardarCredenciales(alumno) {
    localStorage.setItem("nombre", alumno.name);
    localStorage.setItem("email", alumno.email);
}

function validarInicioSesion() {
    const btn = document.getElementById("login");

    if (!btn) return; // si no hay login en esta página, no hace nada

    btn.addEventListener("click", () => {
        let nameStudent = document.getElementById("name").value;
        let emailStudent = document.getElementById("email").value;

        let usuario = db.find(alumno =>
            alumno.name === nameStudent &&
            alumno.email === emailStudent
        );

        if (usuario) {
            guardarCredenciales(usuario);
            window.location.href = "index.html";
        } else {
            alert("Usuario no encontrado");
        }
    });
}

// --------------------------------------
// CARGAR INICIO
// --------------------------------------
function cargarInicio() {
    if (window.location.pathname.includes("login.html")) return;

    if (!localStorage.getItem("nombre") || !localStorage.getItem("email")) {
        window.location.href = "login.html";
    }
}

// --------------------------------------
// MAIN
// --------------------------------------

document.addEventListener("DOMContentLoaded", async () => {

    await fetchStudents(); // <-- MUY IMPORTANTE
    await fetchEnrollments()


    // mostrar estudiantes solo si existe el contenedor
    const contenedor = document.getElementById("contenedor");
    if (contenedor) {
        cards(contenedor);
    }

    validarInicioSesion();
    cargarInicio();
});


