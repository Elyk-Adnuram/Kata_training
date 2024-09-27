/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
*/

function squareSum(numbers: number[]): number {
  //map array and square each number
  //reduce array to obtain sum
  return numbers.map((ele) => ele ** 2).reduce((acc, curr) => acc + curr, 0);
}
