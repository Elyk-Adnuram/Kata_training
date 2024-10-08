/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.
Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321 */

function descendingOrder(n: number): number {
  // convert n to string and then array of numbers
  let array = String(n)
    .split("")
    .map((n) => Number(n));
  //sort array in descending order and join to string
  let result = array.sort((a, b) => b - a).join("");
  return Number(result);
}

//optimized solution
function descendingOrder2(n: number): number {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}
