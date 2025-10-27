import db from '../json/db.json' with {type: "json"};

function combinaEstudiantesyCursos(db) {
    let combina=db.students;
    combina=db.students.concat(db.courses)
    return combina;
}

function combinaEstudiantesyCursos2(db) {
    return [...db.students, ...db.courses];
}

function devuelveCursosdeAlumno(db,id) {
   const arrCursos=db.enrollments.filter(({studentId})=> studentId==id).map(({ courseId, enrollmentDate, completed }) => ({ courseId, enrollmentDate, completed }));

   return arrCursos.sort((fecha1,fecha2)=> new Date(fecha2.enrollmentDate) - new Date(fecha1.enrollmentDate));
        
}




(()=> {
    

    console.log(combinaEstudiantesyCursos2(db))


    console.log(devuelveCursosdeAlumno(db,2))
})();