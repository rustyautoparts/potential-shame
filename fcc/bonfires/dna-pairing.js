//DNA Pairing

//The DNA strand is missing the pairing element. Match each character with the missing element and return the results as a 2d array.
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//Return the provided character as the first element in each array.

function pair(str) {
	var elements = ['A', 'T', 'C', 'G'];
	var halfStrand = str.split('');
	var strand = [];
	halfStrand.forEach(function(val) {
		strand.push(singlePair(val));
	});
	function singlePair(ele) {
		var arr = [];
		var match = '';
		if (ele === elements[0]) {
			match = elements[1];
		} else if (ele === elements[1]) {
			match = elements[0];
		} else if (ele === elements[2]) {
			match = elements[3];
		} else if (ele === elements[3]) {
			match = elements[2];
		}
		arr.push(ele, match);
		return arr;
	}
		return strand;
}

pair("GCG");
