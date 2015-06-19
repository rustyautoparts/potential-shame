// No Repeats Please
//
// Return the number of total permutations of the provided string that don't have repeated consecutive letters.
// For example, 'aab' should return 2 because it has 6 total permutations, but only 2 of them don't have the same letter (in this case 'a') repeating.

function permAlone(str) {
  var word = str.split('');
  var count = 0;
  var iteration = 0;
  permutate(word);
  function permutate(remain, used) {
    if (!used) 
      used = [];
    if (used.length > 0 && remain.length === 0) {
      count++;
    } else {
      var remaining = remain.map(function(letter) {
        return letter;
      });
      var done = used.map(function(letter) {
        return letter;
      });
      remain.forEach(function(letter, order) {
        iteration++;
        console.log(iteration + ":: ");
        console.log("Current letter: " + letter)
        console.log("Count: " + count);
        console.log("Used: " + done.join(''));
        console.log("Remaining: " + remaining.join(''));
        console.log("Index: " + order);
        done.push(remaining.splice(order, 1));
        console.log("Result: " + done.join(''));
        console.log("------");
        permutate(remaining, done);
      });
    }
  }
  return count;
}

permAlone('ab');
