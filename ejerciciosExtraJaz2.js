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
    piramidString = ''
    }
    return
}

/*
Desafío: Encuentra el Elemento Único
Objetivo:
Identificar el elemento único en un array donde todos los elementos, excepto uno, aparecen en pares.
Instrucciones:
Definir un array: El array numeros contiene enteros donde todos los elementos aparecen en pares, excepto uno que aparece solo una vez.
Encontrar el elemento único:
Escribe una función encontrarElementoUnico(numeros) que encuentre y devuelva el elemento que no tiene pareja.
Importante: Solo pueden usar el bucle for y max 2 if, de lo contrario, el ejercicio esta mal
Ejemplo:
Si el array es [2, 3, 2, 5, 5, 6, 6], el número único es 3, porque es el único que no aparece en pares.
*/

let numeros = [2, 3, 2, 5, 5, 6, 6]
function encontrarElementoUnico(numbers){
    let quantity = 0
    for(i = 0; i < numbers.length; i++){
        for(z = 0; z < numbers.length; z++){
            if (numbers[i] === numbers[z]){
                quantity++
            }
        }
        if (quantity === 1){
            return numbers[i]
        }
        quantity = 0
    }
    return "no se encontro"
}

/*
Desafío: Crear un Array de Números en Escalera
Objetivo:
Crear un array de números en escalera donde cada fila contiene un número incrementado con respecto a la fila anterior.
Imprimir el array en formato escalera.
Instrucciones:
Definir un número de filas: Por ejemplo, 5.
Crear el array en escalera:
Escribe una función crearArrayEscalera(n) que genere un array de n filas, donde cada fila contiene un número repetido incrementando en cada fila.
Imprimir cada fila del array.
Ejemplo:
Si n = 4, el array en escalera debería ser:
  [1]
  [2, 2]
  [3, 3, 3]
  [4, 4, 4, 4]
*/

function crearArrayEscalera(rows){
    let stairArray = ``
    let array = []
    for (i = 1; i <= rows; i++){
        for (z = 0; z < i; z++){
            array.push(i)
        }
        console.log(array)
        array = []
    }
    return stairArray
}

/*
Inventario de Tienda con Filtrado y Agrupación por Categoría
Descripción:
Además de calcular el valor total de cada producto, la tienda ahora quiere agrupar los productos por categoría y obtener un informe detallado que incluya:
El valor total del inventario por categoría.
Los productos con un valor total mayor a un valor especificado (por ejemplo, 500 USD).
Debes escribir un código que:
Agrupe los productos por categoría.
Calcule el valor total del inventario por cada categoría.
Filtre los productos con un valor total mayor al valor especificado.
Cree un objeto con el siguiente formato:


{
    categoria: 'Electrónica',
    productos: [
        { nombre: 'Laptop', cantidad: 4, valorTotal: 4000 },
        // ...otros productos
    ],
    valorTotalCategoria: X
}

Finalmente, imprima el objeto resultante.
Salida esperada: 

[
    {
        categoria: 'Electrónica',
        productos: [
            { nombre: 'Laptop', cantidad: 4, valorTotal: 4000 },
            { nombre: 'Monitor', cantidad: 5, valorTotal: 1000 }
        ],
        valorTotalCategoria: 6000
    },
    {
        categoria: 'Muebles',
        productos: [
            { nombre: 'Escritorio', cantidad: 5, valorTotal: 1500 }
        ],
        valorTotalCategoria: 1500
    }
]
*/
const products = [
    { nombre: 'Laptop', cantidad: 4, precioPorUnidad: 1000, categoria: 'Electrónica' },
    { nombre: 'Teclado', cantidad: 10, precioPorUnidad: 50, categoria: 'Electrónica' },
    { nombre: 'Mouse', cantidad: 20, precioPorUnidad: 25, categoria: 'Electrónica' },
    { nombre: 'Monitor', cantidad: 5, precioPorUnidad: 200, categoria: 'Electrónica' },
    { nombre: 'Escritorio', cantidad: 5, precioPorUnidad: 300, categoria: 'Muebles' }
];

function storeInventory(products, minTotalValue){
    let separatedByCategory = []
    let pushed = 0
    let productInventaryValue = 0
    products.forEach(function (product){
        if (separatedByCategory.length === 0){
            separatedByCategory.push({categoria : product.categoria, productos : [], valorTotalCategoria : 0})
        }
        for (let category in separatedByCategory){
            if (product.categoria === separatedByCategory[category].categoria){
                productInventaryValue = product.cantidad * product.precioPorUnidad
                if(productInventaryValue > 500){
                    separatedByCategory[category].productos.push({nombre : product.nombre, cantidad : product.cantidad, valorTotal : productInventaryValue })
                }
                separatedByCategory[category].valorTotalCategoria += productInventaryValue
                continue
            }
            pushed++
        }
        if (pushed === separatedByCategory.length){
            separatedByCategory.push({categoria : product.categoria, productos : [], valorTotalCategoria : 0})
            productInventaryValue = product.cantidad * product.precioPorUnidad
            if(productInventaryValue > 500){
                separatedByCategory[pushed].productos.push({nombre : product.nombre, cantidad : product.cantidad, valorTotal : productInventaryValue })
            }
            separatedByCategory[pushed].valorTotalCategoria += productInventaryValue
        }
        pushed = 0
    })
    return separatedByCategory
}