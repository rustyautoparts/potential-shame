// EXERCISE
// Remove all values (last argument(s)) from an array (first argument) and return as a new array.

function destroyer(arr) {
  // Remove all the values
  var arrDestroyed = [];
  for (i=0; i<arguments.length; i++) {
    for (j=0; j<arr.length; j++) {
      if (arguments[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);