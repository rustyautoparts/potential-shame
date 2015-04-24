// EXERCISE
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
  arr.sort(function(a,b) {
    return a-b;
  });
  var sum = 0;
  for (i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}

sumAll([10, 5]);