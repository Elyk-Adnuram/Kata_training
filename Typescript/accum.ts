/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

function accum(s: string): string {
  //convert s to an array
  return s
    .split("")
    .map((letter, index) => {
      //set first char to uppercase then repeat char according to index and set to lowercase
      const upperCase: string = letter.toUpperCase();
      const lowerCase: string = letter.toLowerCase().repeat(index);
      return `${upperCase}${lowerCase}`;
    })
    .join("-");
}
