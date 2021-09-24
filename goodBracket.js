// ({[]}) => true
// ([][]{})=> true
// ({)(]){[} => false
// [)()] => false
// [{]} => false

const pair = {
  "}": "{",
  ")": "(",
  "]": "[",
};

function isGood(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (Object.values(pair).includes(str[i])) {
      stack.push(str[i]);
    } else {
      if (pair[str[i]] != stack.slice(-1)) return false;
      stack.pop();
    }
  }
  return stack.length == 0;
}

console.log(isGood("({[]})"));
console.log(isGood("([][]{})"));
console.log(isGood("({)(]){[}"));
console.log(isGood("[)()]"));
console.log(isGood("[{]}"));
