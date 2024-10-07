/*Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890" */

function createPhoneNumber(numbers: number[]): string {
  const arrToString: string = numbers.join("");
  const firstThree = arrToString.slice(0, 3);
  const middleThree = arrToString.slice(3, 6);
  const lastThree = arrToString.slice(6);
  return `(${firstThree}) ${middleThree}-${lastThree}`;
}

//alternate solution
function createPhoneNumber2(numbers: number[]): string {
  let phoneNumber: string = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    phoneNumber = phoneNumber.replace("x", numbers[i].toString());
  }

  return phoneNumber;
}