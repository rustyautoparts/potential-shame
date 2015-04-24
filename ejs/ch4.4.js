function deepEqual(val1, val2) {
	if (val1 === val2) {
		return true
	}
	if (val1 === null || val2 === null || typeof val1 != 'object' || typeof val2 != 'object') {
		return false;
	} 
	for (var prop in val2) {
		if (!(prop in val1) || !deepEqual(val1[prop], val2[prop])) {
			return false;
		}
	}
}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// > true
console.log(deepEqual(obj, {here:1, object: 2}));
// > false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// > true
