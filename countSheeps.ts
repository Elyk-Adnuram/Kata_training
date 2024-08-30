/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.
 */

function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  const amountOfSheep: boolean[] = [];
  //loop through array
  for (let instances of arrayOfSheep) {
    if (instances) {
      //push all instances of true to new array
      amountOfSheep.push(instances);
    }
  }
  //return length of new array
  return amountOfSheep.length;
}

// solution 2
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}
