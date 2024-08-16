/*
1. Imagina que sos parte del equipo de desarrollo de Boca, y tu tarea es gestionar el
presupuesto del club de fútbol. Cada categoría de gasto del club, como sueldos de
jugadores, mantenimiento del estadio, y costos de viajes, se representa como una
propiedad en un objeto. Tu tarea es crear una función que calcule el total de todos los
gastos del club utilizando un bucle for...in.
La función debe:
a. Recibir un objeto gastos donde cada propiedad representa una categoría de
gasto y su valor es el monto de gasto en esa categoría.
b. Utilizar un bucle for...in para recorrer las propiedades del objeto gastos y
sumar los valores de cada propiedad.
c. Mostrar el total de los gastos en la consola.
*/

let bills = {
  salarys: 55555,
  maintenance: 333,
  travelCost: 4444,
};

function manageBoca(bills) {
  let totalAmount = 0;
  for (let bill in bills) {
    totalAmount += bills[bill];
  }
  return totalAmount;
}

/*
2. Después de haber calculado el total de gastos , ahora necesitas saber cómo se
distribuyen esos gastos en diferentes categorías. Tienes un objeto que representa las
categorías de gastos del club, con cada propiedad indicando el tipo de gasto y su
monto.
Tu tarea es crear una función que:
a. Reciba un objeto gastos donde cada propiedad representa una categoría de
gasto y su valor es el monto gastado en esa categoría.
b. Utilice un bucle for...in para recorrer las categorías de gasto.
c. Imprima el monto gastado en cada categoría y calcule el total general de los
gastos.
d. Muestre en la consola cuánto se gastó en cada categoría y el total general, para
entender mejor cómo se distribuyen los gastos.
*/

function manageBoca2(bills) {
  let total = manageBoca(bills);
  for (let bill in bills) {
    console.log(`Se gasto ${bills[bill]} en ${bill}`);
  }
  return `En total se gasto ${total}`;
}

/*
3. Imagina que trabajás en el equipo de desarrollo de FIFA y necesitás actualizar las
estadísticas de los jugadores cada año después de la temporada. Tu tarea es crear una
función que tome un objeto con las estadísticas actuales del jugador y un objeto con los
nuevos valores a añadir. La función debe usar un bucle for...in para recorrer las
propiedades del objeto de estadísticas y actualizar los valores correspondientes.
La función debe:
a. Recibir un objeto jugador con las propiedades nombre, asistencias, y
goles, que contienen las estadísticas actuales del jugador.
b. Recibir un objeto nuevasEstadisticas con los valores de asistencias y
goles que deben añadirse.
c. Usar un bucle for...in para recorrer las propiedades de
nuevasEstadisticas y añadir los valores a las estadísticas del jugador.
d. Verificar que los nuevos valores sean números válidos (mayores o iguales a
cero) antes de realizar la actualización.
e. Devolver un objeto con las estadísticas actualizadas para el jugador.
*/

let messi = {
  name: "Lionel Messi",
  assists: 374,
  goals: 836,
};
let messiNewStats = {
  assists: 376,
  goals: 837,
};
function updatePlayerStats(player, newPlayerStats) {
  for (let stat in newPlayerStats) {
    if (stat < 0) {
      continue;
    }
    player[stat] = newPlayerStats[stat];
  }
  return player;
}

/*
4. Imaginá que trabajás en el equipo de análisis de datos del Mundial de la FIFA.
Necesitás saber cuántas veces aparece una letra específica en el nombre de un
jugador.
Tu tarea es escribir un programa que:
a. Reciba una cadena de texto cadena que contiene el nombre de un jugador y un
carácter caracter que deseas contar.
b. Utilice un bucle for...of para recorrer cada carácter en la cadena de texto.
c. Cuente cuántas veces aparece el carácter dado en el nombre del jugador.
d. Muestra el resultado indicando cuántas veces aparece el carácter en el nombre.
*/

function charInPlayerName(player, character) {
  let count = 0;
  for (let char of player) {
    if (character.toLowerCase() === char.toLowerCase()) {
      count++;
    }
  }
  return count;
}

/*
5. Imaginá que estás trabajando en el sistema de compras del Mundial de la FIFA y
necesitas calcular el costo total de todos los productos en el carrito de compras de un
fanático. Tienes un array que contiene objetos, donde cada objeto representa un
producto con propiedades como nombre y precio.
Tu tarea es crear un programa que:
a. Reciba un array de objetos productos, donde cada objeto tiene propiedades
nombre y precio.
b. Utilice un bucle for...of para recorrer cada objeto en el array.
c. Sume los precios de todos los productos en el carrito.
d. Muestra el costo total acumulado, que será el monto que debe pagar el cliente
por su compra.
*/

let shoppingCart = [
  { name: "aaa", price: 333 },
  { name: "elBichoSiuuu", price: 1000000 },
  { name: "bbb", price: 22 },
];
function totalShoppingCart(cart) {
  let total = 0;
  for (let product of cart) {
    total += product.price;
  }
  return total;
}

/*
6. estás trabajando en el sistema de ventas de tickets para la Copa América. Tienes un
array de objetos donde cada objeto representa un ticket disponible, con propiedades
nombre (del evento) y disponible (un booleano que indica si el ticket está disponible
o agotado).
Tu tarea es escribir un programa que:
a. Reciba un array de objetos tickets, donde cada objeto tiene propiedades
nombre y disponible.
b. Utilice un bucle for...of para recorrer cada objeto en el array.
c. Genere un informe que muestre, para cada ticket, si está disponible o agotado.
d. Presenta el nombre del evento seguido de su estado de disponibilidad.
*/

let tickets = [
  { name: "Final colombia Argentina", available: false },
  { name: "canada vs Argentina", available: true },
];
function ticketsAvailability(tickets) {
  for (let ticket of tickets) {
    console.log(`${ticket.name} tiene disponibilidad: ${ticket.available}`);
  }
  return;
}

/*
7. Han decidido ofrecer un descuento especial del 15% en todas las categorías de tickets.
Tenés un array de objetos donde cada objeto representa un ticket, con propiedades
nombre (del tipo de ticket) y precio (el precio actual del ticket).
Tu tarea es escribir una función que:
a. Reciba un array de objetos tickets, donde cada objeto tiene propiedades
nombre y precio.
b. Utilice el método forEach para recorrer cada ticket en el array.
c. Aplique un descuento del 15% al precio de cada ticket.
Devuelve el array con los precios actualizados pero necesitamos un backup de los
precios viejos
*/

const tickets2 = [
  { name: "vip", price: 123 },
  { name: "comun", price: 12 },
];
function discountTickets(tickets) {
  let discountedTickets = [];
  let newPrice = 0;
  tickets.forEach(function (ticket) {
    newPrice = ticket.price * 0.85;
    discountedTickets.push({ ...ticket, price: newPrice });
  });
  return discountedTickets;
}

/*
8. Como encargado de ajustar los precios de los videojuegos en Steam para una nueva
región, debes convertir los precios a dólares y realizar ajustes basados en la
popularidad de cada juego. Mantén una copia del precio original para referencia.
Escribe una función que reciba:
Un array de objetos juegos, donde cada objeto tiene propiedades nombre, precio, y
popularidad.
Una tasa de cambio a dólares.
La función debe:
a) Convertir los precios a dólares.
b) Aplicar un ajuste adicional:
i. $5 si la popularidad es 8 o más.
ii. $2 si la popularidad es menos de 8.
c) Calcular y mostrar el precio promedio de los juegos.
*/

let games = [
  { name: "elden ring", price: 60000, popularity: 92 },
  { name: "milk inside a bag of milk", price: 10000, popularity: 40 },
  { name: "terraria", price: 15000, popularity: 99 },
];
function updateGamesPrices(games, exchangeRateOfDollar) {
  let updatedGames = [];
  let promedy = 0;
  let dolarPrice = 0;
  let newPrice = 0;
  games.forEach(function (game) {
    dolarPrice = passageToDollar(game.price, exchangeRateOfDollar);
    if (isPopular(game.popularity)) {
      newPrice = dolarPrice + 5;
    } else {
      newPrice = dolarPrice + 2;
    }
    promedy += newPrice;
    updatedGames.push({ ...game, price: newPrice });
  });
  console.log(`${promedy / games.length}`);
  return updatedGames;
}
function isPopular(gamePopularity) {
  if (gamePopularity > 80) {
    return true;
  }
  return false;
}
function passageToDollar(amount, exchangeRate) {
  let dolarPrice = amount * exchangeRate;
  return dolarPrice;
}

/*
9.   Imaginá que sos el encargado de la tienda de merchandising de Argentina y necesitas
actualizar el inventario después de una gran venta celebrando un triunfo. Los hinchas
han estado comprando productos como locos, ¡y tu tarea es ajustar el stock!
Descripción del Problema:
Escribe una función en JavaScript que realice las siguientes tareas:
a) Recibe un Array de Productos: Cada objeto en el array representa un producto
y tiene las siguientes propiedades:
○ nombre: El nombre del producto (por ejemplo, "Camiseta del Campeón",
"Gorra del Dibu").
○ cantidad: La cantidad actual en stock del producto.
○ vendido: La cantidad del producto que se ha vendido.
b) Actualizar el Stock:
○ Utiliza el método forEach para recorrer el array de productos.
○ Calcula la cantidad restante de cada producto después de la venta
(restando la cantidad vendida de la cantidad en stock).
○ Actualiza la cantidad en stock del producto con el nuevo valor.
c) Mostrar Mensajes:
○ Crea un mensaje para cada producto que indique si el stock es suficiente
o está bajo:
■ Si la cantidad restante es mayor a 10, el mensaje debe ser: "La
[nombre del producto] está bien abastecida.
Cantidad restante en stock: [cantidad restante]".
■ Si la cantidad restante es 10 o menos, el mensaje debe ser: "¡La
[nombre del producto] está en bajo stock! Solo
quedan [cantidad restante] unidades.".
d) Mostrar los Mensajes en la Consola: Imprime cada mensaje en la consola.
e) Calcular el Porcentaje Restante: calcula el porcentaje de stock restante. El
porcentaje se calcula como: (cantidadRestante / cantidadOriginal)
* 100.

Salida esperada:
La Camiseta del Campeón está bien abastecida. Cantidad restante en stock: 70.
Porcentaje de stock restante: 70%.
La Gorra del Dibu está bien abastecida. Cantidad restante en stock: 30.
Porcentaje de stock restante: 60%.
¡La Bufanda de los Campeones del Mundo está en bajo stock! Solo quedan 50
unidades. Porcentaje de stock restante: 66.67%.
*/
const productos = [
  { nombre: "Camiseta del Campeón", cantidad: 100, vendido: 30 },
  { nombre: "Gorra del Dibu", cantidad: 50, vendido: 20 },
  {
    nombre: "La Bufanda de los Campeones del Mundo",
    cantidad: 40,
    vendido: 30,
  },
];
function manageStock(products) {
  let remainingAmount = 0;
  let originalAmount = 0;
  let porcentualStock = 0;
  products.forEach(function (product) {
    originalAmount = product.cantidad;
    product.cantidad -= product.vendido;
    remainingAmount = product.cantidad;
    porcentualStock = (remainingAmount / originalAmount) * 100;
    product.vendido = 0;
    product.cantidad > 10
      ? console.log(
          `La ${product.nombre} está bien abastecida. \nCantidad restante en stock: ${porcentualStock}%`
        )
      : console.log(
          `¡La ${product.nombre} está en bajo stock! \nSolo queda el ${porcentualStock}% unidades.`
        );
  });
  return products;
}

/*
10. Imaginá que sos parte del equipo de marketing de BOCA que acaba de lanzar una
nueva línea de productos oficiales. Necesitás enviar un correo electrónico a todos los
usuarios registrados en tu base de datos para informarles sobre esta novedad.
Tu tarea es escribir una función que:
Reciba dos parámetros:
○ Un array de objetos usuarios, donde cada objeto tiene las propiedades
nombre, email y preferencias.
○ Un objeto de promociones, donde las claves son los nombres de las categorías
de productos (por ejemplo, "Camisetas", "Gorras", "Bufandas"), y los valores son
las promociones asociadas a cada categoría (por ejemplo, "10% de descuento
adicional").
Utilice el método forEach para recorrer el array de usuarios.
Para cada usuario, la función debe:
○ Verificar si el usuario tiene alguna preferencia en el array preferencias.
○ Si el usuario tiene preferencias, recorrer ese array de preferencias y:
■ Verificar si existe una promoción en el objeto promociones para esa
preferencia.
■ Si existe una promoción, mostrar un mensaje en la consola que indique
que se ha enviado un correo a ese usuario con la promoción aplicada.
■ Si no existe una promoción para la preferencia, mostrar un mensaje en la
consola que indique que se ha enviado un correo sin promoción
específica.
○ Si el usuario no tiene preferencias, mostrar un mensaje en la consola que
indique que se ha enviado un correo genérico sin promoción.
La función debe llevar un conteo de cuántos correos se enviaron en total y
cuántas veces se aplicó cada promoción.
Al final de la función, mostrar en la consola el total de correos enviados y un resumen de
las promociones aplicadas, indicando cuántas veces se aplicó cada una.
Ejemplo de entrada:

Salida Esperada:
Enviando correo a Juan Pérez (juan.perez@example.com) sobre Camisetas -
Promoción: 10% de descuento adicional
Enviando correo a Juan Pérez (juan.perez@example.com) sobre Gorras -
Promoción: 15% de descuento adicional
Enviando correo a María García (maria.garcia@example.com) sobre Bufandas -
Promoción: 20% de descuento adicional
Enviando correo genérico a Carlos López (carlos.lopez@example.com)
Total de correos enviados: 4
Promociones aplicadas:
- Camisetas: 1
- Gorras: 1
- Bufandas: 1
*/
const usuarios = [
  {
    nombre: "Juan Pérez",
    email: "juan.perez@example.com",
    preferencias: ["Camisetas", "Gorras"],
  },
  {
    nombre: "María García",
    email: "maria.garcia@example.com",
    preferencias: ["Bufandas"],
  },
  {
    nombre: "Carlos López",
    email: "carlos.lopez@example.com",
    preferencias: [],
  },
];
const promociones = {
  Camisetas: "10% de descuento adicional",
  Gorras: "15% de descuento adicional",
  Bufandas: "20% de descuento adicional",
};

function sendPromos(users, promos) {
  let promosScarfs = 0;
  let totalMailsSend = 0;
  let appliedPromos = {};
  let appliedPromosKeys = [];
  let promosKeys = Object.keys(promos);
  users.forEach(function (user) {
    if (user.preferencias.length > 0) {
      user.preferencias.forEach(function (preference) {
        if (promosKeys.includes(preference)) {
          console.log(
            `Enviando correo a ${user.nombre} (${user.email}) sobre ${preference} \n-Promoción: ${promos[preference]}`
          );
          totalMailsSend++;
          if (appliedPromos[preference]) {
            appliedPromos += 1;
          } else {
            appliedPromos[preference] = 1;
          }
        } else {
          console.log(
            `Enviando correo genérico a ${user.nombre} (${user.email})`
          );
          totalMailsSend++;
        }
      });
    } else {
      console.log(`Enviando correo genérico a ${user.nombre} (${user.email})`);
      totalMailsSend++;
    }
  });
  console.log(
    `Total de correos enviados: ${totalMailsSend} \nPromociones aplicadas:`
  );
  appliedPromosKeys = Object.keys(appliedPromos);
  for (let i = 0; i < appliedPromosKeys.length; i++) {
    console.log(
      `- ${appliedPromosKeys[i]}: ${appliedPromos[appliedPromosKeys[i]]}`
    );
  }
  return;
}
