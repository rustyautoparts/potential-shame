// Search and Replace
// 
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// If the second argument is in title case, the replacement must also be title case. E.g. replace('John is stupid', 'John', 'tom') should return 'Tom is stupid'.
//

function replace(str, before, after) {
	if (before.search(/[A-Z]/) != -1) {
		after = after.replace(/^\w/, titleCase);
		console.log(after);
	}
	function titleCase(match) {
		return match.toUpperCase();
	}
	return str.replace(before, after);
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// >> "A quick brown fox leaped over the lazy dog"
replace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
