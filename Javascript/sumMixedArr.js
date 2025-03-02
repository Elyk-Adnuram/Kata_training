/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
 */

function sumMix(arr) {
  for (let element of arr) {
    result += parseInt(element);
  }
  return result;
}

const sumMix2 = (arr) => {
  // convert each ele in arr to a number and obtain sum of elements
  return arr.map((element) => parseInt(element)).reduce((acc, curr) => acc + curr, 0);
};
