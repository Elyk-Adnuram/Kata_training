
<?php
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.
function countsheep($num){
    $string = "";
  // create loop up to length of num
  for ($i = 1; $i <= $num; $i++) {
  // print string for each iteration of loop
    $string .= $i . " sheep...";
  }
   return  $string;
 
}

?>