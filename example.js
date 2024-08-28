function reverseWords(str) {
  // convert string to array
  const arrayOfStrings = str.split(" ");
  // loop through array and apply reverse method on each element
  const newArr = arrayOfStrings.map((element) => element.split("").reverse().join(""));
  //join back to a string and return this new string
  return newArr.join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
