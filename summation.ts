/* Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. 
Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result 
and it's not part of it, see the sample tests.
For example (Input -> Output):
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)*/

const summation = (num: number) => {
  let result: number = 0;
  //create loop with an ending condition of num
  for (let i = 1; i <= num; i++) {
    //concatenate all the numbers from 1 to num
    result += i;
  }
  return result;
};
console.log(summation(8)); //Output 36

////////////////////////////////////////////////
////////////////////////////////////////////////
//solution 2
/**
 * Returns the sum of the numbers from 1 to `max`.
 *
 * This is simply calculating the nth triangular number, whose value is given by
 * the closed-form formula `(n * (n+1)) / 2`.
 *
 * @param max - The largest number to be summed.
 * @returns The sum of the numbers from 1 to `max`.
 */
const summation2 = (max: number) => {
  return (max * (max + 1)) / 2;
};
