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
  while (i <= number) {
    count = number - i;
    i++;
    if (negative) {
      console.log((count *= -1));
    } else {
      console.log(count);
    }
  }
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
  let greatestNumber = 0;
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
console.log(separateOddAndEvenFrom1to20());
