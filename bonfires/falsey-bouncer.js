function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var bouncedArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      bouncedArr.push(arr[i]);
    }
  }
  return bouncedArr;
}

bouncer([7, 'ate', '', false, 9]);
