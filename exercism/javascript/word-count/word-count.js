var wordCount = function(str) {
  var arr = str.split(/\s+/);
  var input = {};
  console.log(arr);
  arr.forEach(function(val) {
    if (!input[val]) {
      input[val] = 1;
    } else {
      input[val] += 1;
    }
  });
  console.log(input);
  return input;
};

module.exports = wordCount;
