/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

function solution(nums) {
  // handle null case
  if (nums === null) return [];

  // return sorted array
  return nums.sort((a, b) => a - b);
}

function solution1(nums) {
  // handle null case
  if (nums === null) return [];

  let sortedArray = [];
  const numLength = nums.length;
  for (let i = 0; i <= numLength; i++) {
    if (nums[i] - nums[i + 1]) {
      sortedArray.push(nums[i]);
    }
  }
  return sortedArray;
}

console.log(solution1([1, 2, 10, 50]));
