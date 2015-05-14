function sym(args) {
	var argArr = [];
	for (var i = 0; i < arguments.length; i++) {
		argArr.push(arguments[i]);
	}
}

console.log(sym([1,2,4], [5,2,1,3], [1,2,8,7]));
