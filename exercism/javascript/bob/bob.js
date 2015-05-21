var Bob = function() {};

Bob.prototype.hey = function(input) {
	var responses = ['Fine. Be that way!', 'Whatever.', 'Sure.', 'Whoa, chill out!'];
	// The following logic checks the input for the appropriate response:
	//
	// Check if there are any non white characters
	if (input.search(/\S/g) === -1) {
		return responses[0];
	// Check to see if there are any upper case letters AND
	// Check if all of the characters are uppercase
	} else if (input.toUpperCase() === input && input.search(/[A-Z]/) > -1) {
		return responses[3];
	// Check if statement ends with a question mark
	} else if (input.search(/\?/) === input.length - 1) {
		return responses[2];
	}
	// Otherwise, respond with default response
	return responses[1];
};

module.exports = Bob;
