/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr: number[]): number {
  let total: number = 0;
  //loop through arr and add positive numbers to total variable
  for (let num of arr) {
    if (num > 0) total += num;
  }
  return total;
}

///alternative solution
function positiveSum2(arr: number[]): number {
  return arr.filter((e) => e >= 0).reduce((acc, e) => acc + e, 0);
}

//alternative solution
function positiveSum3(arr: number[]): number {
  return arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0);
}
