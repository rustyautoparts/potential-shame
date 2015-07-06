// Symmetric Difference
//
// Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.
// The mathematical term symmetric difference refers to the elements in two sets that are in either the first or second set, but not in both.

function sym(args) {
	var argArr = [];
	for (var i = 0; i < arguments.length; i++) {
		argArr.push(arguments[i]);
	}
	var diff = [];
	argArr.forEach(function(val) {
		val.filter(function(num) {
			var result;
			argArr.forEach(function(innerVal) {
				result = notInArr(num, innerVal);
			});
			return result;
		});
	});
	return diff;
	
}

function notInArr(num, arr) {
	if(arr.indexOf(num) >=0) {
		return true;
	}
	return false;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4], [1, 2, 8, 7]));
