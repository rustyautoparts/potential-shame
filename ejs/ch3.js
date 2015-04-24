//Chapter 3 - Functions
//Minimum
//The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselved now. Write a function min that takes two arguments and returns their minimum.

var min = function(x, y) {
	if (x < y) {
		return x;
	} else {
		return y;
	}
}
console.log(min(0,10);
console.log(min(0,-10);

//Recursion
/*
I've seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it's divisible by two. Here's another way to define whether a positive whole number is even or odd:
- Zero is even.
- One is odd.
- For any other number N, its evenness is the same as N - 2.
Define a recursive funtion isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

function isEven(number) {
	if (number < 0) {
		return isEven(number * (-1));
	}
	if (number === 0) {
		return true;
	} else if (number === 1 {
		return false;
	} else {
		return isEven(number - 2);
	}
}

//Bean Counting
/*
You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
Write a function coundBs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters are in the string.
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase "B" characters). Rewrite countBs to make use of this new function.
*/

function countBs(string) {
	var count = 0;
	for (i=0; i<string.length; i++) {
		if (string.charAt(i) === "B") {
			count += 1;
		}
	}
	return count;
}

function countChar(string, char) {
	var count = 0;
	for (i=0; i<string.length; i++) {
		if (string.charAt(i) === char) {
			count += 1;
		}
	}
	return count;
}
var countBs = function(string) {
	return countChar(string, "B");
}
