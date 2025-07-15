/*
In this kata you are required to, given a string, replace every letter with its position
in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
*/

function alphabetPosition(text) {
  // create array of the alphabet
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const result = [];
  // compare the text to the array of alphabet
  for (let char of text.toLowerCase()) {
    if (alphabet.includes(char)) {
      result.push(alphabet.indexOf(char) + 1);
    }
  }
  // index positions + 1 of the matching text characters
  return result.join(" ");
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
