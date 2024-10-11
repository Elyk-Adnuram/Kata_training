/* You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.
Note: only positive integers will be tested.
https://en.wikipedia.org/wiki/Triangle

*/

function otherAngle(a, b) {
  const result = 180 - (a + b);
  return result;
}

// alternate solution
const otherAngle = (a, b) => 180 - a - b;
