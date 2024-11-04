/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram.
 Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str) {
  const strSet = new Set();
  // iterate str and check for duplicates
  for (let char of str.toLowerCase()) {
    // return false if char already exists indicating it is not an isogram
    if (strSet.has(char)) {
      return false;
    }
    strSet.add(char);
  }
  return true;
}
