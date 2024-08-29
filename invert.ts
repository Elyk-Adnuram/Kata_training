//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//Example
//[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
//[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
//[] --> []

function invert(array: number[]): number[] {
  //map over array and use conditional statements to check if number is negative or positive
  return array.map((number) => {
    //if positive, multiply by -1
    if (number >= 0) {
      return -Math.abs(number);
    }
    //if negative use Math.abs
    else {
      return Math.abs(number);
    }
  });
}

//alternative solution
export const invert = (array: number[]) => array.map((n) => -n);
