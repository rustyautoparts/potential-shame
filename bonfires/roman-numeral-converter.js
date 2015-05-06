// Roman Numeral Converter
//
// Convert the number to be a roman numeral
// All roman numerals answers should be provided in upper-case

function convert(num) {
	var digitArr = num.toString().split('');
	var roman = [];
	var digit = 0;
	var numeral1 = '';
	var numeral5 = '';
	for (var i = digitArr.length - 1; i >= 0; i--) {
		if (digit === 0) {
			numeral1 = 'I';
			numeral5 = 'V';
		} else if (digit === 1) {
			numeral1 = 'X';
			numeral5 = 'L';
		} else if (digit === 2) {
			numeral1 = 'C';
			numeral5 = 'D';
		} else if (digit === 3) {
			numeral1 = 'M';
		} else {
			console.log('Something went wrong')
			return error;
		}
		for (var j = 0; j < digitArr[i]; j++) {
			if (digitArr[i] <= 3) {
				roman.splice(0, 0, numeral1);
			}
		}
		digit++;
	}
	console.log(roman.join(''));
}

convert(36);
// >> XXXVI
convert(12);
// >> XXI
convert(5);
// >> V
convert(9);
// >> IX
convert(29);
// >> XXIX
convert(16);
// >> XVI
