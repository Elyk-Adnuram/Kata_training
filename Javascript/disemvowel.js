/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, 
neutralizing the threat.Your task is to write a function that takes a string and return a new 
string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowe
*/

function disemvowel(str) {
  // create an array with vowels
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newStr = "";
  for (let letter of str) {
    // add all letters that are not in vowels arr to newStr
    if (!vowels.includes(letter)) {
      newStr += letter;
    }
  }
  return newStr;
}

// second solution using built-in methods
function disemvowel(str) {
  return str.replaceAll(/[aeiouAEUIOU]/g, "");
}
