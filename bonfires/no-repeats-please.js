// No Repeats Please
//
// Return the number of total permutations of the provided string that don't have repeated consecutive letters.
// For example, 'aab' should return 2 because it has 6 total permutations, but only 2 of them don't have the same letter (in this case 'a') repeating.

function permAlone(str) {
	var array = str.split('');
	var result = [];
	function perm(arr, opts) {
		var holder = [];
		for(var i = 0; i < arr.length; i++) {
			holder.concat(arr.splice(i, 1));
		}
		return holder;
	}
	return perm(array);
}
function notSame(letter1, letter2) {
	if (letter1 === letter2) {
		return false;
	}
	return true;

}

console.log(permAlone('aab'));
