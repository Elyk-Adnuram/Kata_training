/*Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

function grow(array) {
  //variable to store the result
  let result = 1;
  //loop array using for of loop
  for (let element of array) {
    result = result * element;
  }
  return result;
}

//solution using reduce method
function grow(array) {
  return array.reduce((accum, current) => accum * current);
}
