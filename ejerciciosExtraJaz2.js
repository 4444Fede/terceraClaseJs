/*
Desafío: Generación de Pirámides Numéricas
Instrucciones:
Solicitar un número: Define un número n que determine la altura de la pirámide.
Construir la pirámide:
Escribe una función generarPiramide(n) que genere una pirámide de n niveles.
La pirámide debe estar formada por secuencias de números. Comenzamos a contar desde 1, no desde 0. La función debe imprimir cada fila de la pirámide en la consola.
Importante: Solo podes usar el bucle for, de lo contrario, el ejercicio está mal.
Ejemplo:
Si n = 5, la salida debe ser:
1
1 2 1
1 2 3 2 1
1 2 3 4 3 2 1
1 2 3 4 5 4 3 2 1
*/

function generarPiramide(n) {
	let piramidString = ''
	for (let i = 1; i <= n; i++) {
        for (let x = 1; x <= i; x++) {
            piramidString += x
        }
        for (let z = i - 1; z >= 1; z--) {
            piramidString += z
        }
	console.log(piramidString)
	piramidString = ''xw
	}
	return
}