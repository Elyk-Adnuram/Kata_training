<?php

// Write a function which takes a number as input and returns the sum of the absolute
//  value of each of the number's decimal digits.

//For example: (Input --> Output)

//10 --> 1
//99 --> 18
//-32 --> 5
//Let's assume that all numbers in the input will be integer values.
  
function sumDigits(int $number): int{
  // cast number to a string and obtain absolute value
  $converted_num = (string) abs($number);
  $sum = 0;
  // iterate string and obtain sum
  for ($i = 0; $i < strlen($converted_num); $i++) {
    $sum += (int)$converted_num[$i];

  }

  return $sum;

  

}
 

?>