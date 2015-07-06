//BONFIRE Return Largest Numbers in Arrays

//Answer with Ukrainian buddy
function largestOfFour(arr) {
  // You can do this!
  var largestNum = 0;
  var solutionArr = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }
    solutionArr.push(largestNum);
  }

  return solutionArr;
}

////My answer

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function largestOfFour(arr) {
  function compareNumbers(a,b) {
    return b-a;
  }
  var largestNum = [];
  for (var i = 0; i < arr.length; i++) {
    arr[i].sort(compareNumbers);
    largestNum.push(arr[i][0]);
  }
  return largestNum;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Answer to wrong question: Return the largest sum of arrays

function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
function largestOfFour(arr) {
  // You can do this!
  var arrSum = [];
  for (var i = 0; i < arr.length; i++) {
    var thisSum = sumArray(arr[i]);
    arrSum.push(thisSum);
  }
  function compareNumbers(a,b) {
    return b-a;
  }
  arrSum.sort(compareNumbers);
  return arrSum[0];
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
