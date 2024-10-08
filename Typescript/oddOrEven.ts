/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero). */

function oddOrEven(array: number[]) {
  // obtain sum of array, check if sum is even or add using ternary operator
  const result = array.reduce((acc, curr) => acc + curr, 0) % 2 === 0 ? "even" : "odd";
  return result;
}
