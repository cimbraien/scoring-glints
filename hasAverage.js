// averagePair([-1, 0, , 3, 4, 5, 6], 4.1) => false
// averagePair([1, 2, 3], 2.5) => true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) => true

function averagePair(arr, avg) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(avg * 2 - arr[i])) return true;
  }
  return false;
}

console.log(averagePair([-1, 0, , 3, 4, 5, 6], 4.1));
console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
