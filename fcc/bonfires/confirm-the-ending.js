function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  function stringReverse (str) {
    var stringReversed = str.split('').reverse();
    return stringReversed;
  }
  var strReverse = stringReverse(str);
  var targetReverse = stringReverse(target);
  var matched = true;
  for (var i = 0; i < target.length; i++) {
    if (strReverse[i] === targetReverse[i]) {
      matched = true;
    } else {
      matched = false;
    }
  }

  return matched;
}

end('Bastian', 'n');
