/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix  is shown below:
1 2 3
4 5 6
9 8 9  
*/

function diagonalDifference(arr) {
  const arrSize = arr.length
  // Initialize variables to hold the sum of diagonals
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  // Iterate array to calculate the diagonals 
  // leftDiagonal is from top-left to bottom-right
  // rightDiagonal is from top-right to bottom-left
    for (let i = 0; i < arrSize; i++) {
      leftDiagonal += arr[i][i];
      rightDiagonal += arr[i][arrSize - 1 - i];
      console.log(i)
      
  }
    const result = leftDiagonal - rightDiagonal;
    return Math.abs(result);
}  

console.log(diagonalDifference([[1,2,3],[4,5,6],[9,8,9]])); 