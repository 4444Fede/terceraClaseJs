function addToLimit(limitNumber) {
  let negative = false;
  let i = 0;
  let result = 0;
  if (limitNumber < 0) {
    negative = true;
    limitNumber *= -1;
  }
  while (result <= limitNumber) {
    i++;
    result += i;
  }
  return negative ? (result *= -1) : result;
}

function countEvens(limitNumber) {
  let i = 1;
  if (limitNumber < 0) {
    limitNumber *= -1;
  }
  let evens = 0;
  while (i < limitNumber) {
    i++;
    if (i % 2 === 0) {
      evens++;
    }
  }
  return `Hay ${evens} pares`;
}

function multiply(firstNumber, secondNumber) {
  let i = 0;
  let result = 0;
  let secondNegative = false;
  if (secondNumber < 0) {
    secondNegative = true;
    secondNumber *= -1;
  }
  while (i < secondNumber) {
    i++;
    result += firstNumber;
  }
  return secondNegative ? (result *= -1) : result;
}

function showOdd(limitNumber) {
  let i = 0;
  let negative = false;
  let negativeOddNumber = 0;
  if (limitNumber < 0) {
    limitNumber *= -1;
    negative = true;
  }
  let evens = 0;
  while (i < limitNumber) {
    i++;
    if (i % 2 !== 0) {
      if (negative) {
        negativeOddNumber = i * -1;
        console.log(negativeOddNumber);
      } else {
        console.log(i);
      }
    }
  }
  return;
}

function calculateFactorial(number) {
  if (number <= 0) {
    return `No se puede realizar factorial de un numero que no sea mayor o igual a 1`;
  }
  let result = 1;
  let i = 0;
  while (i < number) {
    result *= number - i;
    i++;
  }
  return result;
}

function countdown(number) {
  let i = 0;
  let count = 0;
  let negative = false;
  if (number < 0) {
    number *= -1;
    negative = true;
  }
  do {
    count = number - i;
    i++;
    if (negative) {
      console.log((count *= -1));
    } else {
      console.log(count);
    }
  } while (i < number);
  return;
}

function addDigits(number) {
  let negative = false;
  let result = 0;
  if (number < 0) {
    number *= -1;
    negative = true;
  }
  while (number > 1) {
    number = Math.floor(number);
    result = Math.floor(result);
    result += number % 10;
    number /= 10;
  }
  return negative ? (result *= -1) : result;
}

function findGreater(numberArray) {
  let i = 0;
  let greatestNumber = numberArray[0];
  while (i < numberArray.length) {
    if (numberArray[i] > greatestNumber) {
      greatestNumber = numberArray[i];
    }
    i++;
  }
  return greatestNumber;
}

function separateOddAndEvenFrom1to20() {
  let i = 1;
  let oddNumbers = [];
  let evenNumbers = [];
  let countOdds = 0;
  let countEvens = 0;
  do {
    if (i % 2 === 0) {
      evenNumbers.push(i);
      countEvens++;
    } else {
      oddNumbers.push(i);
      countOdds++;
    }
    i++;
  } while (i < 21);
  return `Hay ${countEvens} pares del 1 al 20 y son: ${evenNumbers} \nHay ${countOdds} impares del 1 al 20 y son: ${oddNumbers}`;
}

function calculatePromedio(grades) {
  let i = 0;
  let promedio = 0;
  while (i < grades.length) {
    promedio += grades[i];
    i++;
  }
  return promedio / i;
}

let usuarios = ["juan", "maria", "admin", "carlos"];
let usuarioBuscado = "admin";

function verificarUsuario(usernames, searchedUser) {
  let i = 0;
  let found = false;
  while (i < usernames.length) {
    if (searchedUser === usernames[i]) {
      found = true;
    }
    i++;
  }
  return found ? "Usuario encontrado" : "Usuario no encontrado";
}

let contraseñas = ["password", "1234567", "supersecret", "contraseña123"];
function verificarContrasenias(passwords) {
  let i = 0;
  let passwordsEigthLetters = 0;
  while (i < passwords.length) {
    if (passwords[i].length > 8) {
      passwordsEigthLetters++;
    }
    i++;
  }
  return `${passwordsEigthLetters} contraseñas que tienen 8 letras`;
}

let correos = ["correo1@example.com", "correo2@example", "correo3@example.com"];
function verificarCorreo(argument) {
  let validMails = 0;
  let i = 0;
  while (i < correos.length) {
    if (correos[i].includes("@") && correos[i].includes(".")) {
      validMails++;
    }
    i++;
  }
  return validMails === correos.length
    ? "Todos los correos son validos"
    : "Correo invalido encontrado";
}

function isNumberPrime(number) {
  let i = 1;
  let isPrime = true;
  if (number < 0) {
    return "Un numero negativo no puede ser primo";
  }
  do {
    i++;
    if (number % i === 0 && i !== number) {
      isPrime = false;
    }
  } while (i < number);
  return isPrime;
}