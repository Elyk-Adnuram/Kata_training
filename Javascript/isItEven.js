/* In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata.

*/

function testEven(n) {
  //if n modulus 2 equals zero, n is an even number
  const result = n % 2 === 0 ? true : false;
  return result;
}

function testEven2(n) {
  // refactored by removing the result variable
  return n % 2 === 0;
}

function testEven3(n) {
  // using not ! operator
  return !(n % 2);
}
