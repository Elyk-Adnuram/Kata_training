// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// array_diff({1, 2}, 2, {1}, 1, *z) == {2} (z == 1)
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff({1, 2, 2, 2, 3}, 5, {2}, 1, *z) == {1, 3} (z == 2)

// Solution using a Set
function arrayDiff(a: number[], b: number[]): number[] {
  //convert array b to a Set
  const newSet = new Set(b);

  //filter elements that are in a and not in b
  const filteredArray = a.filter((element) => !newSet.has(element));

  return filteredArray;
}

//Solution 2
function arrayDiff2(a: number[], b: number[]): number[] {
  //new array to hold elements that are not included in b
  const filteredArray: number[] = [];
  //loop through array a
  for (let item of a) {
    //condition to check which of b are not included in a
    if (!b.includes(item)) {
      //push items that meet the above condition into new array.
      filteredArray.push(item);
    }
  }
  return filteredArray;
}
