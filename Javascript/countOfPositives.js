/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
  // if input is empty or null
  if (input === null || input.length === 0) {
    return [];
  }
  // obtain count of positive numbers
  const positives = input.filter((num) => num > 0).length;
  const negatives = input.filter((num) => num < 0);
  // obtain sum of negative integers
  const sumOfNegatives = negatives.reduce((acc, curr) => acc + curr, 0);
  return [positives, sumOfNegatives];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
