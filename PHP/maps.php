<?php
/* 
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]


*/
function maps($arr) {
  $result = [];
  for($i = 0; $i < sizeof($arr); $i++) {
    array_push($result, $arr[$i] * 2);
 }
  return $result;
}

//alternative solution
function maps2($x) {
  return array_map(fn($i) => $i * 2, $x);
}
?>