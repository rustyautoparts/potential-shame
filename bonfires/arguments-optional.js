// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, return a function that expects one additional argument and will return the sum.
// For example, add(2,3) should return 5, and add(2) should return a function that is waiting for an argument so that:
// 
// var sum2And = add(2);
// return sum2And(2);
// >> 5
//
// If either argument isn't a valid number, return undefined.

function add() {
	var arg1 = arguments[0];
	var arg2 = arguments[1];
	if (arg1 && arg2) {
		if (typeof arg1 == 'number' && typeof arg2 == 'number') {
			return arg1 + arg2;
		}
	} else if (typeof arg1 == 'number') {
		return function (x) {
			return add(x, arg1);
		};
	} else {
		return undefined;
	}
}

console.log(add(2)([3]));
