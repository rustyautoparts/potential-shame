// EXCERCISE
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
function chunk(arr, size) {
  // Break it up.
  var chunkArr = [arr.splice(0, size)];
  chunkArr.push(arr);
  return chunkArr;
}

chunk(['a', 'b', 'c', 'd'], 2);


//Solution with Ukraine partner
function chunk(arr, size) {
  // Break it up.
  var firstArr = [];
  var secondArr = [];
  var resultArray = [];
  for (i = 0; i < arr.length; i++) {
    if (firstArr.length == size) {
      secondArr.push(arr[i]);
    } else {
      firstArr.push(arr[i]);
    }
  }
  resultArray.push(firstArr);
  resultArray.push(secondArr);
  return resultArray;
}

chunk(['a', 'b', 'c', 'd'], 2);
