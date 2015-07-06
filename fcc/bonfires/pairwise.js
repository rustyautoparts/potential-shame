//Pairwise
//Return the sum of all indices of elements of 'arr' that can be paired with one other element to form a sum that equals the value in the second argument 'arg'. If multiple sums are possible, return the smallest sum. Once an element has been used, it cannot be reused to pair with another.
//For example, pairwise([1,4,2,3,0,5], 5) should return 15 because every element can be paired with another element to equal 5.
//pairwise([1,3,2,4], 4) would only equal 1, becuase only the first two elements can be paired to equal 4, and the first element has an index of 0!

function pairwise(arr, arg) {
  var sum = 0;
  arr.forEach(function(a,b,c) {
    for (var i = b + 1; i < c.length; i++) {
      if (c[i] + c[b] === arg) {
        sum += i + b;
        c[i] = 'x';
        c[b] = 'x';
        break;
      }
    }
  });

  return sum;
}

pairwise([0,0,0,0,1,1], 1);
// > 10
pairwise([1,3,2,3,0,5], 5);
// > 15
pairwise([1,3,2,4],4);
// > 1
pairwise([1,1,1], 2);
// > 1
pairwise([], 100);
// > 0
