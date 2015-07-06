// Symmetric Difference
//
// Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.
// The mathematical term symmetric difference refers to the elements in two sets that are in either the first or second set, but not in both.

function sym(args) {
  var argArr = [];
  var diff = [];
  for (var i = 0; i < arguments.length; i++) {
    argArr.push(arguments[i]);
  }
  argArr.forEach(function(argVal, argIdx, argArr) {
    console.log('checking argument ' + argVal);
    argVal.forEach(function(val, idx, arr) {
      console.log('checking value ' + val);
      for (var j=0; j < argArr.length; j++) {
        console.log('looking inside argument:');
              console.log(argArr[j]);
        if (notInArr(val, argArr[j])) {
          console.log(val);
          diff.push(val);
        }
      }
    });
  });
  function notInArr(num, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (num === arr[i]) {
        return false;
      }
    }
    return true;
  }
  return diff;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4], [1, 2, 8, 7]));
