/*Given two integers a and b, which can be positive or negative, find the sum of all 
the integers between and including them and return it. 
If the two numbers are equal return a or b. Note: a and b are not ordered! 
Your function should only return a number, not the explanation about how you get that number.*/

function getSum(a, b) {
  //determine max and min integers
  const maximum = Math.max(a, b);
  const minimum = Math.min(a, b);

  let total = 0;
  //loop from max to min and return total
  for (let i = minimum; i <= maximum; i++) {
    total += i;
  }
  // check if numbers are equal
  if (a === b) {
    return a;
  }
  return total;
}

// alternative solution
function getSum2(a, b) {
  const minimum = Math.min(a, b);
  const maximum = Math.max(a, b);

  // add 1 to account for start and end values
  const numberOfTerms = maximum - minimum + 1;
  // use arithmetic series formula
  const total = (numberOfTerms * (minimum + maximum)) / 2;

  // check if two numbers are equal
  if (a === b) {
    return a;
  } else {
    return total;
  }
}
