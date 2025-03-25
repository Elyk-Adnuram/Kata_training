/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers) {
  // convert str to arr
  const newArr = numbers.split(" ");
  // cast each element of arr to a number
  const numArr = newArr.map((item) => parseInt(item));
  // obtain max and min values
  const max = Math.max(...numArr);
  const min = Math.min(...numArr);
  // return max and min as a string
  return `${max} ${min}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // output "42 -9"

// refactored version, eliminating additional variables.
function highAndLow2(numbers) {
  // convert str to arr and each element to a number
  const numArr = numbers.split(" ").map((item) => parseInt(item));
  // return max and min as a string
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}
