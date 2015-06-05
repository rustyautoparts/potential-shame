var hamming = function(origin, mutation) {
  if (origin.length !== mutation.length) {
    throw new Error( "DNA strands must be of equal length.");
  }
  var differences = origin.split('').reduce(function(prev, cur, idx) {
    if (cur !== mutation[idx]) {
      prev++;
    }
    return prev;
  }, 0);
  return differences;
};

module.exports = hamming;
