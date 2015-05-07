// Roman Numeral Converter
//
// Convert the number to be a roman numeral
// All roman numerals answers should be provided in upper-case

function convert(num) {
	var arr = num.toString().split('').map(function(val) {
		return parseInt(val, 10);
	});
	var numerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
	var oneVal = 0;
	var fiveVal = 1;
	var romNum = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		romNum.splice(0, 0, romanDigit(arr[i]));
	}
	function romanDigit(digit) {
		var roman = [];
		if (digit <= 3) {
			addOne(digit);
		} else if (digit === 4) {
			roman.push(numerals[oneVal], numerals[fiveVal]);
		} else if (digit < 9) {
			digit = num % 5;
			roman.push(numerals[fiveVal]);
			addOne(digit);
		} else {
			roman.push(numerals[oneVal], numerals[oneVal + 2]);
		}
		roman = roman.join('').toString();
		function addOne(val) {
			for (var j = val; j > 0; j--) {
				roman.push(numerals[oneVal]);
			}
		}
		oneVal += 2;
		fiveVal += 2;
		return roman;
	}
	return romNum.join('');
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
convert(492);
// >> CDXCII
convert(1986);
// >> MCMLXVI
