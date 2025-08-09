/*
Given an array of integers, calculate the ratios of its elements that are positive, 
negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
though answers with absolute error of up to  are acceptable.

*/

function plusMinus(arr, n) {
    let positive = 0;
    let negative = 0;
    let zero = 0
  // Iterate array and identify pos, neg, and zero
  arr.map((ele) => {
    if (ele > 0) {
        positive += 1;
    } else if (ele < 0) {
        negative +=1
    } else {
        zero +=1
    }
  })
  // Determine the ratio of pos, neg and zero using the n param  
  positive = (positive / n).toFixed(6)
  negative = (negative / n).toFixed(6)
  zero = (zero / n).toFixed(6)
  console.log(positive)
  console.log(negative)
  console.log(zero)     
}
