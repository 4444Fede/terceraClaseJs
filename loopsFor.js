/*
1. En una clase, tienes un array con las notas de los alumnos. Escribe una función
contarAprobados que reciba este array y cuente cuántos alumnos aprobaron (nota
mayor o igual a 6). Usa un bucle for para recorrer el array, continúe para saltar las
notas menores a 6 y break para detener el conteo si encuentras una nota igual a 10
(porque es la nota máxima). Muestra el resultado en la consola.
*/

let grades = [4, 3, 1, 3, 2, 5, 6, 7, 8, 1, 9, 10, 6, 6, 7];
function contarAprobados(grades) {
  let contadorAprobados = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 6) {
      continue;
    }
    contadorAprobados++;
    if (grades[i] === 10) {
      break;
    }
  }
  return contadorAprobados;
}

/*
2. Un canal de TV quiere saber si un programa específico está en la programación del día.
Escribe una función buscarPrograma que reciba un array con la lista de programas
del día y un nombre de programa para buscar. Usa un bucle for para recorrer el array y
break para detener la búsqueda una vez que encuentres el programa. Muestra en la
consola si el programa fue encontrado o no.
*/

let programs = ["aa", "vv", "cc", "rr"];
function buscarPrograma(programas, searchedProgram) {
  let found = false;
  for (let i = 0; i < programas.length; i++) {
    if (programas[i] === searchedProgram) {
      found = true;
      break;
    }
  }
  return found ? "Programa encontrado" : "Programa no encontrado";
}

/*
3. En una clase, un profesor quiere saber cuántos alumnos obtuvieron notas menores a 4
para ofrecerles clases de apoyo. Escribe una función contarNotasBajas que reciba
un array con las notas y cuente cuántas son menores a 4. Usa for para recorrer el
array y continue para saltar las notas que no sean menores a 4.
*/

function contarNotasBajas(grades) {
  let contadorBajos = 0;
  for (let i = grades.length - 1; i >= 0; i--) {
    if (grades[i] > 4) {
      continue;
    }
    contadorBajos++;
  }
  return contadorBajos;
}

/*
4. Tienes una lista de programas en un canal de televisión, y quieres seleccionar tus
favoritos, pero solo los primeros tres que te gustan. Escribe una función
seleccionarFavoritos que reciba un array con la lista de programas y un array con
tus programas favoritos. Usa for para recorrer la lista, continue para saltar los que no
están en tus favoritos, y break para detenerte una vez que hayas encontrado tres
programas favoritos.
*/

function seleccionarFavoritos(programs, favoritePrograms) {
  let contadorFavoritos = 0;
  for (let i = 0; i < programs.length; i++) {
    if (!favoritePrograms.includes(programs[i])) {
      continue;
    }
    contadorFavoritos++;
    if (contadorFavoritos === 3) {
      break;
    }
  }
  return contadorFavoritos === 3 ? "Encontre 3 programas favoritos" : "No";
}

/*
5. En una escuela, el profesor quiere evaluar el desempeño de los alumnos. Escribe una
función evaluarDesempeño que reciba un array con las notas de los alumnos y
muestre en la consola si cada uno tiene un "Desempeño Excelente" (nota mayor o igual
a 9). Usa for para recorrer el array y continue para saltar los que no cumplan con el
criterio.
*/

function evaluatePerfomance(grades) {
  for (let i = grades.length - 1; i >= 0; i--) {
    if (grades[i] < 9) {
      console.log(`El alumno ${i} tiene un desempeño bajo`);
      continue;
    }
    console.log(`El alumno ${i} tiene un desempeño alto`);
  }
  return;
}

/*
6. Tienes un objeto alumno que contiene un array de materias, donde cada materia es un
objeto con el nombre y la nota. Escribe una función filtrarAprobadas que recorra el
array de materias, filtre aquellas con nota mayor o igual a 6 y las guarde en un nuevo
array aprobadas. Usa for para recorrer las materias, continue para saltar las
materias desaprobadas, y break si el alumno ya ha aprobado 5 materias. Muestra el
array aprobadas en la consola.
*/

let student = {
  subjects: [
    { name: "geografia", grade: 6 },
    { name: "lengua", grade: 1 },
    { name: "matematica", grade: 9 },
    { name: "economia", grade: 9 },
    { name: "administracion base de datos", grade: 10 },
    { name: "redes", grade: 5 },
    { name: "historia", grade: 6 },
  ],
};
function filtrarAprobadas(student) {
  let { subjects } = student;
  let approved = [];
  for (let i = 0; i < subjects.length; i++) {
    if (subjects[i].grade < 6) {
      continue;
    }
    approved.push(`${subjects[i].name}: ${subjects[i].grade}`);
    if (approved.length === 5) {
      break;
    }
  }
  return approved;
}

/*
7. Un canal de TV tiene una programación donde cada programa tiene una calificación.
Escribe una función buscarMejorPrograma que reciba un array de objetos
programas, cada uno con el nombre y la calificación, y encuentre el programa con la
mejor calificación. Usa for para recorrer el array, continue para saltar los programas
con calificaciones bajas (menos de 7), y break si encuentras un programa con una
calificación perfecta de 10. Muestra el nombre del mejor programa en la consola.
*/
let qualifiedPrograms = [
  { 'AAAAA': 2 },
  { 'ZZZZZ': 1 },
  { 'mmmmmmmh': 8 },
  { 'rrrrr': 9 },
  { 'qweqeqweq': 9 },
];
function searchBestProgram(programasCalificados) {
  let program = [];
  let bestCalification = 0;
  let bestProgram = [];
  for (let i = 0; i < programasCalificados.length; i++) {
    program = Object.entries(programasCalificados[i]);
    if (program[0][1] < 7) {
      continue;
    } else if (program[0][1] >= 10) {
      bestProgram = program;
      break;
    } else if (program[0][1] > bestCalification) {
      bestProgram = program;
    }
  }
  return `El mejor programa es ${bestProgram[0][0]} con ${bestProgram[0][1]} de calificacion`;
}

/*
8. En una escuela, algunas materias incluyen clases prácticas. Escribe una función que
reciba un objeto alumno con un array de materias, donde cada materia tiene un nombre
y un booleano tienePracticas que indica si incluye prácticas. Usa for para recorrer
las materias, continue para saltar las materias sin prácticas, y break si encuentras 3
materias con prácticas. Muestra en la consola cuántas materias con prácticas encontró.
*/

let alumno = {
  subjects: [
    { name: "geografia", hasPractices: false },
    { name: "lengua", hasPractices: false },
    { name: "matematica", hasPractices: true },
    { name: "economia", hasPractices: false },
    { name: "base de datos", hasPractices: true },
    { name: "redes", hasPractices: true },
    { name: "historia", hasPractices: false },
  ],
};
function practicas(alumno) {
  let { subjects } = alumno;
  let practicas = [];
  for (let i = 0; i < subjects.length; i++) {
    if (subjects[i].hasPractices === false) {
      continue;
    }
    practicas.push(`${subjects[i].name}`);
    if (practicas.length === 3) {
      break;
    }
  }
  return practicas;
}

/*
9. Tienes una lista de canales de TV argentinos, y quieres saber si uno de tus canales
favoritos está en esa lista. Escribe una función buscarCanalFavorito que reciba un
array de canales y un array de favoritos. Usa for para recorrer los canales,
continue para saltar los que no están en la lista de favoritos, y break si encuentras
uno de tus canales favoritos. Muestra en la consola el nombre del canal encontrado o
un mensaje indicando que no está en la lista.
*/

let programasArgentina = [
  "Masterchef",
  "Okupas",
  "Los simuladores",
  "Casados con hijos",
];
let programasArgentosFavoritos = ["Casados con hijos", "Los simuladores"];
function seleccionarFavoritosArgento(programs, favoritePrograms) {
  let founded = false;
  let favoriteFound = "";
  for (let i = 0; i < programs.length; i++) {
    if (!favoritePrograms.includes(programs[i])) {
      continue;
    }
    founded = true;
    if (founded) {
      favoriteFound = programs[i];
      break;
    }
  }
  return founded ? `Encontre ${favoriteFound} como programa favorito` : "No";
}
