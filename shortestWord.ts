/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s: string): number {
  //convert s to arr. sort arr according to length of words and return first element in arr
  return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
}

//solution using Math.min
function findShort2(s: string): number {
  return Math.min(...s.split(" ").map((w) => w.length));
}
