function isNumberPalindrome(number) {
  let numberString = number.toString();
  for (let i = 0; i < numberString.length; i++) {
    if (numberString[i] !== numberString[numberString.length - i - 1]) {
      return false;
    }
  }
  return true;
}

let array = ["a", "b", "c", "d", "e"];
let array2 = ["f", "g", "h", "i", "j"];
function usingForToPushArrays(originalArray, pusheableArray) {
  for (let i = 0; i < pusheableArray.length; i++) {
    originalArray[originalArray.length] = pusheableArray[i];
  }
  return originalArray.length;
}
