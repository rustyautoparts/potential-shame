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
	for (var i = 0; i < argArr.length; i++) {
		diff = diffTwoArr(diff, argArr[i]);
	}
	
	function diffTwoArr(arr1, arr2) {
		var diff = [];
		if (!arr2) {
			arr2 = [];
		}
		arr1.forEach(function(val) {
			if (arr2.indexOf(val) === -1 && diff.indexOf(val) === -1) {
				diff.push(val);
			}
		});
		arr2.forEach(function(val) {
			if (arr1.indexOf(val) === -1 && diff.indexOf(val) === -1) {
				diff.push(val);
			}
		});
		return diff;
	}
	return diff;
}


console.log(sym([1, 2, 3], [5, 2, 1, 4, 4], [1, 2, 8, 7]));
console.log(sym([1, 1]));
