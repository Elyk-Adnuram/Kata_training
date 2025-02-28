/*
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word)
as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
*/

const capitals = (word) => {
  const wordLength = word.length;
  const sortedArray = [];

  for (let i = 0; i < wordLength; i++) {
    // check for uppercase letters
    if (word[i] === word[i].toUpperCase()) {
      // place indices of uppercase letters in array
      sortedArray.push(i);
    }
  }
  return sortedArray;
};

// version two including checks for empty strings and non alphabetical characters
const capitals2 = (word) => {
  const wordLength = word.length;
  const sortedArray = [];
  // check for empty string
  if (word === "") return "Word must contain at least one character";

  for (let i = 0; i < wordLength; i++) {
    const startRange = word.charCodeAt(word[i]) > 64 && charCodeAt(word[i]) < 91;
    const endRange = word.charCodeAt(word[i]) > 96 && charCodeAt(word[i]) < 123;
    // check for non alphabet letters using ascii codes
    if (startRange || endRange) {
      if (word[i] === word[i].toUpperCase()) {
        // place indices of uppercase letters in array
        sortedArray.push(i);
      }
    } else {
      return "Word must contain only letters";
    }
  }
  return sortedArray;
};
