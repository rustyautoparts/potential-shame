// EXERCISE
// Write a function that takes two or more arrays and returns a new array of
// unique values in the order of the original provided arrays.
//
// In other words, all values present from all arrays should be included in
// their original order, but with no duplicates in the final array.
//
// The unique numbers should be sorted by their original order, but the final
// array should not be sorted in numerical order.



// First attempt
function unite(arr1, arr2, arr3) {
  var newArr = [];
  for (i=0; i<arguments.length; i++) {
    var thisArr = arguments[i];
    for (j=0; j<thisArr.length; j++) {
      if (newArr.indexOf(thisArr[j]) === -1) {
        newArr.push(thisArr[j]);
      }
    }
  }
  return newArr;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);
