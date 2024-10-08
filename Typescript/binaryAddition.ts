/*Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary) */

function addBinary(a: number, b: number): string {
  //obtain sum of params
  const sum: number = a + b;
  //use unsigned right shift operator to convert params to an unsigned 32 bit integer
  //toString method with argument 2 specifies that output should be in base 2 i.e. binary.
  return (sum >>> 0).toString(2);
}
