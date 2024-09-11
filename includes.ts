/*You will be given an array a and a value x. All you need to do is check whether the provided array 
contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not. */

//solution using includes method
function check(a: (number | string)[], x: number | string): boolean {
  //check if the below evaluates to true or not
  return a.includes(x);
}

//solution using for loop
function check2(a: (number | string)[], x: number | string): boolean {
  let result = false;
  //loop over array
  for (let item of a) {
    //check if param x exists in array
    if (item === x) {
      result = true;
    }
  }
  return result;
}
