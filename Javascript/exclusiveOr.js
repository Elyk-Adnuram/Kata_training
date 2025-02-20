/*
Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b 
are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions
evaluate to true, false otherwise.
*/

function xor(a, b) {
  // if a is true and b is false return true
  if ((a && !b) || (!a && b)) {
    return true;
    // if a is false and b is true return true
  } else {
    return false;
  }
}

//more concise

const xor1 = (a, b) => a != b;
