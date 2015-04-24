function repeat(str, num) {
  // repeat after me
  var newStr = "";
  for (var i = num; i > 0; i-- ) {
    newStr += str;
  }
  return newStr;
}

repeat('abc', 3);
