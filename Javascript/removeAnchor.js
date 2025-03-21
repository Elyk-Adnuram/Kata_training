/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/

const removeUrlAnchor = (url) => {
  // check if url contains anchor
  if (url.includes("#") && url != " ") {
    // if yes determine location of hash in url
    const hashIndex = url.indexOf("#");
    // use substring to remove all characters from anchor onwards
    return url.substring(0, hashIndex);
  }
  // if no anchor, return url
  else {
    return url;
  }
};
