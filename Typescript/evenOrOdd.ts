/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */
function evenOrOdd(n: number): string {
  const result = n % 2 === 0 ? "Even" : "Odd";
  return result;
}
