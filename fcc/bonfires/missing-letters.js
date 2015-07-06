// EXERCISE
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  for (i=0; i<str.length-1; i++) {
    var thisCharCode = str.charCodeAt(i);
    var nextCharCode = str.charCodeAt(i+1);
    if (thisCharCode +1 != nextCharCode) {
      return String.fromCharCode(thisCharCode+1);
    }
  }
  return undefined;
}

fearNotLetter('abce');
