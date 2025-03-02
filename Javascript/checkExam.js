function checkExam(array1, array2) {
  // variable to store the score
  let score = 0;
  // iterate array1
  for (let i = 0; i < array1.length; i++) {
    //check if elements of array1 are present in array2
    if (array1[i] === array2[i]) {
      score += 4;
    } else if (array2[i] === "") {
      score += 0;
    } else {
      score -= 1;
    }
  }
  const finalScore = score < 0 ? 0 : score;

  return finalScore;
}
