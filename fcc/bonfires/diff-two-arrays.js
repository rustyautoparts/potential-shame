// EXERCISE
// Compare two arrays and return a new array with any items not found in both of
// the original arrays.

function diff(arr1, arr2) {
  var newArr = [];
  for (i=0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
    }
  }
  for (i=0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }

  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
