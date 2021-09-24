function designerPdfViewer(h, word) {
  let highest = 0;
  const len = word.length;
  for (let i = 0; i < len; i++) {
    if (h[word.charCodeAt(i) - 97] > highest)
      highest = h[word.charCodeAt(i) - 97];
  }
  return highest * len;
  //a = 97
}

const result = (testStudent, testCase) => testStudent === testCase;

//prettier-ignore
console.log(result(designerPdfViewer([
      1, 3, 1, 3, 1, 4, 1, 3,
      2, 5, 5, 5, 5, 5, 5, 5,
      5, 5, 5, 5, 5, 5, 5, 5,
      5, 7]
    , "zaba",), 28))

//prettier-ignore
console.log(result(designerPdfViewer([
      5, 1, 2, 7, 1, 3, 1, 3,
      2, 5, 5, 5, 5, 5, 5, 5,
      5, 5, 5, 5, 5, 5, 5, 5,
      5, 7]
    , "daga",), 28))
//prettier-ignore
console.log(result(designerPdfViewer([
      5, 1, 2, 7, 1, 3, 1, 100,
      2, 33, 5, 20, 119, 5, 5, 5,
      20, 1, 17, 5, 12, 5, 13, 88,
      15, 77]
    , "xhy",), 300))
