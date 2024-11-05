/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  //var to hold count of vowels
  let count = 0;
  //iterate str
  for (let char of str) {
    //check if str letters are included in vowels array
    if (vowels.includes(char)) {
      count++;
    }
  }
  //check if vowels are included in str
  return count;
}

//solution without built-in methods
function getCount2(str) {
  //var to hold count
  let count = 0;
  //arr of vowels
  const vowels = ["a", "e", "i", "o", "u"];

  //iterate str
  for (let i = 0; i < str.length; i++) {
    //iterate array
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}
