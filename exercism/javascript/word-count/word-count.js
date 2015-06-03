var wordCount = function(str) {
  var arr = str.split(/\s+/);
  var obj = {};
  arr.forEach(function(val) {
    if (typeof obj[val] !== 'number') {
      obj[val] = 1;
    } else {
      obj[val] += 1;
    }
  });
  return obj;
};

module.exports = wordCount;
