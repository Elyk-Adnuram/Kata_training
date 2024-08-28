//Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.

function reverseWords(str: string): string {
  //convert string to array
  const arrayOfWords: string[] = str.split(" ");
  //loop over array and reverse each word individually.
  const reversedArray: string[] = arrayOfWords.map((element) =>
    element.split("").reverse().join("")
  );
  //convert array back to a string
  return reversedArray.join(" ");
}
