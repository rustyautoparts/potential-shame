//Everything Be True
//
//Check if the predicate (second argument) returns truthy (defined) for all elements of a collection (first argument).
//For this, check to see if the property defined in the second argument is present on every element of the collection.
//Remember, you can access object properties through either dot notation or [] notation.

function every(collection, pre) {
	if (typeof pre == 'string') {
		for (var i = 0; i < collection.length; i++) {
			if (!collection[i].hasOwnProperty(pre)) {
				return false;
			}
		}
	} else if (typeof pre == 'object') {
		var prop = Object.getOwnPropertyNames(pre).join('');
		for (var i = 0; i < collection.length; i++) {
			if (pre[prop] != collection[i][prop]) {
				return false;
			}
		}
	} else {
		console.log('Error: second argument must be object or string');
		return false;
	}
	return true;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'ballons');
every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], {'sex': 'male'});
