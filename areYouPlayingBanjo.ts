/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.*/

//solution using startWith method
function areYouPlayingBanjo(name: string): string {
  //check if name starts with "R" or "r" using startWith function
  if (name.startsWith("R") || name.startsWith("r")) {
    return `${name} plays banjo`;
  }
  return `${name} does not play banjo`;
}

//solution using regular expression
function areYouPlayingBanjo(name: string): string {
  return name + (/^r/i.test(name) ? " plays banjo" : " does not play banjo");
}
