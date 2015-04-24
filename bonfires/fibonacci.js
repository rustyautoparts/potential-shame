function sumFibs(num) {
	var sum = 0;
	var fibArr = fibSeq(num);
	for (var i = 0; i < fibArr.length; i++) {
		if (fibArr[i] % 2 === 1) {
			sum += fibArr[i];
		}
	}
	return sum;
}
function fibSeq(limit) {
	var arr = [0,1];
	var count = 1;
	for (var i = 1; arr[i] + arr[i-1] <= limit; i++) {
		arr.push(arr[i] + arr [i-1]);
	}
	return arr;
}

//First take
function sumFibs(num) {
  var fibArr = fibSeq(num);
  var sum = 0;
  for (var i = 0; i < fibArr.length; i++) {
    if (fibArr[i] % 2 == 1) {
      sum += fibArr[i];
    }
  }
  return sum;
}
//Creates an array with the fibonacci sequence up to and including the limit param
function fibSeq(limit) {
  var arr = [0, 1];
  for (var i = 1; arr[i] <= limit; i++) {
    if (arr[i] + arr[i-1] > limit) {
      return arr;
    }
    arr.push(arr[i] + arr[i-1]);
  }
}
fibSeq(1);
