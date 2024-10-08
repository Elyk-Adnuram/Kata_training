/*Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the
flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

function lovefunc(flower1: number, flower2: number): boolean {
  //check if param 1 or 2 is odd or even
  const resFlower1 = flower1 % 2 === 0;
  const resFlower2 = flower2 % 2 === 0;
  //check if they are in love based on below conditional
  if ((resFlower1 && !resFlower2) || (!resFlower1 && resFlower2)) {
    return true;
  }
  return false;
}

//alternate solution
function lovefunc2(flower1: number, flower2: number): boolean {
  return flower1 % 2 != flower2 % 2;
}
