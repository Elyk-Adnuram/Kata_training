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
