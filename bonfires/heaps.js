function heap(number, arr) {
  if (number === 1) {
    console.log(arr);
  } else {
    arr.forEach(function(val, idx) {
      heap(number - 1, arr);
      if (number % 2 === 0) {
        arr.splice(idx, 2, arr[number - 1], arr[idx]);
      } else {
        console.log(arr.splice(0, 2, arr[number - 1], arr[0]));
      }
    });
  }
}

heap(3, ["a","b","c"]);
