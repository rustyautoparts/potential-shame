//Binary Agents
//Return an English translated sentence of the passed binary string.
//The binary string will be space separated.

function binaryAgent(str) {
	var binArr = str.split(' ');
	for (var i=0; i < binArr.length; i++) {
		binArr[i] = parseInt(binArr[i], 2);
		binArr[i] = String.fromCharCode(binArr[i]);
	}
	return binArr.join('');
}
