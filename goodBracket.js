function isGood(str) {
  const occurence = [0, 0, 0]; // index 0 = (, index 1 = [, index 2 = {
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "(":
        occurence[0]++;
        break;
      case "[":
        occurence[1]++;
        break;
      case "{":
        occurence[2]++;
        break;
      case ")":
        occurence[0]--;
        if (occurence[0] < 0) return false;
        break;
      case "]":
        occurence[1]--;
        if (occurence[1] < 0) return false;
        break;
      case "}":
        occurence[2]--;
        if (occurence[2] < 0) return false;
        break;
    }
  }
  return occurence[0] == 0 && occurence[1] == 0 && occurence[2] == 0;
}

// ({[]}) => true
// ([][]{})=> true
// ({)(]){[} => false
// [)()] => false

console.log(isGood("({[]})"));
console.log(isGood("([][]{})"));
console.log(isGood("({)(]){[}"));
console.log(isGood("[)()]"));
