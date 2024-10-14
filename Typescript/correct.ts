/* Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

*/

function correct(s: string): string {
  let newString: string = "";
  // loop through string
  for (let i = 0; i < s.length; i++) {
    //replace 5 with S
    if (s[i] === "5") {
      newString += "S";
    }
    //replace 0 with O
    else if (s[i] === "0") {
      newString += "O";
    }
    // replace 1 with I
    else if (s[i] === "1") {
      newString += "I";
    } else {
      newString += s[i];
    }
  }
  return newString;
}

// solution using replace method
function correct1(s: string): string {
  return s.replaceAll("5", "S").replaceAll("0", "O").replaceAll("1", "I");
}

//solution using switch statement
function correct2(s: string): string {
  // regexp /[501]/g matches the characters "5", "0", and "1" globally
  return s.replace(/[501]/g, (m) => {
    switch (m) {
      case "5":
        return "S";
      case "0":
        return "O";
      case "1":
        return "I";
      default:
        return "";
    }
  });
}
