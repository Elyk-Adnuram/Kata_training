/*
Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/

const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;
  const firstYear = 15;
  const secondYear = 9;

  if (humanYears === 1) {
    catYears = firstYear;
    dogYears = firstYear;
  } else if (humanYears === 2) {
    catYears = firstYear + secondYear;
    dogYears = firstYear + secondYear;
  } else if (humanYears >= 3) {
    catYears = firstYear + secondYear + (humanYears - 2) * 4;
    dogYears = firstYear + secondYear + (humanYears - 2) * 5;
  }
  // handle all other scenarios
  else {
    catYears = 0;
    dogYears = 0;
  }
  return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(1)); // Output should be [1,15,15]
