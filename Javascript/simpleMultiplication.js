// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  //use ternary operator to check if number is even
  const result = number % 2 === 0 ? number * 8 : number * 9;
  return result;
}

// alternative solution
function simpleMultiplication(number) {
  return number * (number % 2 ? 9 : 8);
}
