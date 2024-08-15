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

/*

--------- SEGUNDA PARTE ----------

*/

/*
1. Crea una función que reciba un número como parámetro y genere la tabla de multiplicar
para ese número, desde 1 hasta 10. La función debe imprimir los resultados en la
consola en el formato adecuado.
*/

function makeMultiplicationTable(number) {
  let result = 0
  console.log(`La tabla del ${number}`)
  for (let i = 1; i <= 10; i++){
    result = number * i
    console.log(`${number} x ${i}: ${result}`)
  }
  return
}

/*
2. Estás desarrollando el nuevo instagram. Decidiste agregar una función que invierte los
mensajes, para que los usuarios puedan mandar mensajes ‘cifrados’, y así estar en la
onda.
Entrada:
Crea una función que reciba un mensaje de texto como parámetro. El mensaje puede
contener letras, números, espacios y otros caracteres.
Proceso:
1. Recorrer el mensaje de texto desde el último carácter hasta el primero’
2. Utilizar un bucle for para armar la nueva cadena invertida.
3. Asegurarte de que la función maneje bien todos los caracteres del mensaje
Salida:
La salida debe ser una nueva cadena de texto que representa el mensaje original
invertido, lista para confundir a tus amigos en un asado o en la previa del partido.
Ejemplo de salida para la entrada "Che, ¿vamos a la cancha?": "?ahcnac al
a somav¿ ,ehC".
*/

function paraEstarEnLaOndaComoDijoJose(message){
  let invertedMessage = ''
  for (let i = message.length - 1; i >= 0; i--) {
    invertedMessage += message[i]
  }
  return invertedMessage
}

/*
3. En una noche de Clash Royale con tus amigos, cada uno puntúa las jugadas más
épicas. Usa una función para encontrar el puntaje más alto y coronar al “Genio
Montapuercos” de la noche. La función debe aceptar un array de números, que pueden
ser enteros o decimales.
a) Proceso:
○ Recorrer el array de números para identificar el valor máximo.
○ Utilizar un bucle for para comparar cada número con el valor máximo
encontrado hasta el momento.
○ Asegurarse de que la función maneje adecuadamente los números
dentro del array, incluso si hay valores negativos o decimales.
b) Salida:
La salida debe ser el valor máximo encontrado en el array.
Ejemplo de salida para la entrada [3, 5, 7, 2, 8]: 8.
*/

let clashRoyalePlays = [3, 5, 7, 8, 2]
function findGenioMontapuercos(plays){
  if (plays.length = 0) {
    return `Ha pasado un array vacio`
  }
  let bestPlayer = 0
  let bestPlay = plays[0]
  for(i = 1; i < plays.length; i++){
    if (bestPlay > plays[i]) {
      continue
    }
    bestPlayer = i
    bestPlay = plays[i]
  }
  return `${bestPlayer} se ha coronado como el nuevo genio montapuercos de los pibardos`
}

/*
4. Como desarrollador del juego FIFA, estás añadiendo una funcionalidad para mostrar el
promedio de calificaciones de los jugadores usando estrellas (*) en la página web. Cada
estrella representará una unidad del promedio redondeado al entero más cercano, con
un máximo de 5 estrellas.
Requisitos:
a) Entrada:
○ La función debe recibir un array de calificaciones, donde cada calificación
es un número entre 1 y 5. Algunos valores pueden ser null o mayores a
5, y deben ser ignorados.
b) Proceso:
○ Recorre el array de calificaciones y calcula el promedio de las
calificaciones válidas.
○ Redondea el promedio al número entero más cercano.
○ Usa un bucle for para construir una cadena de estrellas (*). La cantidad
de estrellas debe coincidir con el promedio redondeado, hasta un máximo
de 5 estrellas.
c) Salida:
○ La salida debe ser una cadena de asteriscos (*) que representa el
promedio redondeado.
○ Ejemplo de salida para la entrada [3, 1, 4, 5, 2]: *** (3 estrellas).
○ Ejemplo de salida para la entrada [4, 3, 5, 2, 4]:**** (4
estrellas).
○ Ejemplo de salida para la entrada [4, 6, null, 2, 4]: *** (3
estrellas).
*/

let playerCalifications = [1,5,5,5,null,4,3,4,2,1,1,null,6,7,4,5,5,5,5,5,5]
function ratePlayer(player) {
  if (player.length === 0) {
    return `Ha pasado un array vacio`
  }
  let countableRatings = 0
  let promedy = 0
  let promedyAproximate
  let stars = ''
  for (let i = player.length - 1; i >= 0; i--) {
    if (player[i] === null || player[i] === undefined || player[i] > 5 || player[i] < 0) {
      continue
    }
    countableRatings++
    promedy += player[i]
  }
  promedy /= countableRatings
  promedyAproximate = Math.floor(promedy) + 0.5
  if (promedy > promedyAproximate) {
    promedyAproximate += 0.5
    for (let i = 0; i < promedyAproximate; i++) {
      stars += '*'
    }
  }else{
    promedyAproximate -= 0.5
    for (let i = 0; i < promedyAproximate; i++) {
      stars += '*'
    }
  }
  return `El jugador tiene un promedio de ${stars} estrellas`
}






