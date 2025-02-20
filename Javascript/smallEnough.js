/*You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. 
If they are, return true. Else, return false.
You can assume all values in the array are numbers.
*/

function smallEnough(a, limit) {
  // if length of filtered array matches original arr, return value evaluates to true
  return a.filter((num) => num <= limit).length === a.length;
}
