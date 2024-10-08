<!-- In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative? -->

function makeNegative($num) {
  if ($num >= 0) {
    return -($num);
  } else {
    return $num;
  }   
}

<!--alternative solution using ternary operator  -->
function makeNegative($num) {
  return $num >= 0 ? -$num : $num;  
}

<!-- alternative solution using abs method -->
function makeNegative($num){
  return -abs($num);
}