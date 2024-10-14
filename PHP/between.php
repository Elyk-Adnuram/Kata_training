<?php
/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:
a = 1
b = 4
--> [1, 2, 3, 4] 
*/

function between(int $a, int $b): array {
  $array = [];
  //create a loop that starts at $a and ends at $b
  for ($i = $a; $i <= $b; $i++ ) {
  //push int into an array 
    array_push($array, $i);
  }
  return $array;
}


//solution using range method
function between2(int $a, int $b): array {
  return range($a, $b);
}

?>