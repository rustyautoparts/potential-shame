//Steamroller
//Flatten a nested array. You must account for varying levels of nesting.

function steamroller(arr) {
  // I'm a steamroller, baby
  arr = arr.toString().split(",");
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var parsed = parseInt(arr[i], 10);
    if (!isNaN(parsed)) {
      newArr.push(parsed);
    } else if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

steamroller([1, [2], [3, [[4]]]]);
// > [1,2,3,4]
