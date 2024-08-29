function grow(arr) {
  return arr.reduce((accumulator, current) => {
    return current * accumulator;
  }, 0);
}
