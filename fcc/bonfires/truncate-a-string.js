//EXERCISE
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.
//Note that the three dots at the end add to the string length.
function truncate(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    var strTrunc = "";
    for (var i=0; i < num - 3; i++) {
      strTrunc += str[i];
    }
    return strTrunc += "...";
  } else {
  return str;
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
