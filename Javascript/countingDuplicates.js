function duplicateCount(text) {
  // Validate input type
  if (text === null || text === undefined) {
    throw new Error("Input cannot be null or undefined");
  }
  if (typeof text !== "string") {
    throw new Error("Input must be a string");
  }
  const charCountMap = new Map();
  const textLower = text.toLowerCase();
  // Count occurrences of each character
  for (let i = 0; i < textLower.length; i++) {
    if (charCountMap.has(textLower[i])) {
      charCountMap.set(textLower[i], charCountMap.get(textLower[i]) + 1);
    } else {
      charCountMap.set(textLower[i], 1);
    }
  }
  const duplicateChars = new Map();
  // Filter characters that appear more than once
  for (let [key, value] of charCountMap) {
    if (value > 1) {
      duplicateChars.set(key, value);
    }
  }
  return duplicateChars.size;
}
console.log(duplicateCount("aaaabbbe"));
