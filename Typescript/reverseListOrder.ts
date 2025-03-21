/*
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]
*/

export function reverseList(list: number[]): number[] {
  if (list.length === 0) {
    console.log("List cannot be empty");
  }
  return list.reverse();
}

// solution without built-in method
export function reverseList2(list: number[]): number[] {
  // iterate array backwards
  const reversedArray: number[] = [];
  for (let i = list.length - 1; i >= 0; i--) {
    // push array elements into new array
    reversedArray.push(list[i]);
  }
  // return new array
  return reversedArray;
}
