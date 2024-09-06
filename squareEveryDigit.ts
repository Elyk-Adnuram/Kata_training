export class Kata {
  static squareDigits(num: number): number {
    // may the code be with you
    //split each numbear into an array
    const splitNum = num.split();
    //square each element in the array
    const newArr: number[] = splitNum.map((number) => number ** 2);
    //join array back to a string an convert to an integer
    return parseFloat(newArr.join(""));
  }
}
