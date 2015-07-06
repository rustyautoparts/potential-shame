//Smallest Common Multiple
//Find the smallest number that evenly divides all numbers in the provided range.
//The range will be an array of two numbers that will not necessarily be in numerical order.

function smallestCommons(arr) {
	//Make sure two numbers are in numerical order, create whole range of numbers.
	arr.sort();
	var range = [];
	for (var i = arr[0]; i <= arr[1]; i++) {
		range.push(i);
	}
	//Calculates LCM of the range using the associative law: lcm(a,b,c) = lcm(lcm(a,b),c)
	var lcmRange = range[0];
	for (var j = range[1]; j <= range.length; j++) {
		lcmRange = lcm(j, lcmRange);
	}
	return lcmRange;
}

//Calculates LCM using the GCD
function lcm(a, b) {
	return (a*b)/gcd(a,b);
}

//Calculates GCD using Euclid's algorithm (Thanks, Euclid!)
function gcd(a,b) {
	var modulo = a % b;
	if (modulo !== 0) {
		return gcd(b, modulo);
	} else {
		return b;
	}
}

console.log(smallestCommons([1, 5]));
// > 60
console.log(smallestCommons([1, 13]));
// > 360360
