/* Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/

function greet(name = "Bob", owner = "Jimbo") {
  //return message based on check done with ternary
  return name === owner ? "Hello boss" : "Hello guest";
}

// alternate solution
const greet2 = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");
