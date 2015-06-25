// No Repeats Please
//
// Return the number of total permutations of the provided string that don't have repeated consecutive letters.
// For example, 'aab' should return 2 because it has 6 total permutations, but only 2 of them don't have the same letter (in this case 'a') repeating.

function permAlone(str) {
  var count = 0;
  if (str.length >= 1) {
    permCounter(str, []);
  }
  return count;
  
  function permCounter(remain, used) {
    if (typeof remain == 'string') remain = remain.split('');
    if (remain.length == 0) count++;
    for (var i = 0; i < remain.length; i++) {
      var letter = remain.splice(i, 1).toString();
      if (used.lastIndexOf(letter) !== used.length - 1 ||
          used.length === 0) {
        used.push(letter);
        permCounter(remain, used);
        used.pop();
      }
      remain.splice(i, 0, letter);
    }
  }
}

console.log(permAlone('aab'));
