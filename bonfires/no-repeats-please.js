// No Repeats Please
//
// Return the number of total permutations of the provided string that don't have repeated consecutive letters.
// For example, 'aab' should return 2 because it has 6 total permutations, but only 2 of them don't have the same letter (in this case 'a') repeating.

function permAlone(str) {
	var array = str.split('');
	array.forEach(function(val) {
		var options = array.slice(0);
		options.splice(options.indexOf(val), 1);
		console.log(options);

	});
	return str;
}

permAlone('aab');
