// EXERCISE
/*
Return true if the string in the first element of the array contains the letters of the string in the second element of the array.
For example, ['hello', 'Hello'], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a 'y'.
Another example, ['Alien', 'line'], should return true because all of the letters in 'line' are present in 'Alien'.
Yet another example, ['zyxwvutsrqponmlkjihgfedcba', 'qrstu'], should return true.
*/

// ANDREW'S NOT TESTED BUT PROBABLY WORKS? VERSION
function mutation(yarr) {
	//fun fact: don't need split here, you can use array indexes on javascript strings. Not important.
	var firstStr = yarr[0].toUpperCase();
	var secondStr = yarr[1].toUpperCase();
	for (var i = 0; i < secondStr.length; i++) {
		if (!contains(secondStr[i], firstStr))
			//fun fact: if you didn't know, returning will break all loops, etc and return immediately
			return false;
	}
	
	//if we get here then every char in secondStr passed the contains test
	return true;
}

// Helper function for easy reading
// (it's possible to do this all in one function
// but you don't want to piss off the new guy 10 years from now.)
//
// returns true iff character c is in string str
function contains(c, str) {
	for (var i = 0; i < str.length; i++) {
		if (str[i] == c)
			return true;
	}
	
	return false;
}

// THIRD ATTEMPT (works)
// Accounted for the duplication by breaking the nested loop after the first time it matches. This works if there is duplication in the first string but not the second.
// Accounted for duplication for duplication in the second string by breaking the loop after matches equals the length of the second string.
function mutation(arr) {
  var firstStr = arr[0].toUpperCase().split("");
  var secStr = arr[1].toUpperCase().split("");
  var matches = [];
  for (i = 0; i < firstStr.length; i++) {
    for (j = 0; j < secStr.length; j++) {
      if (firstStr[i] === secStr[j]) {
        matches.push(firstStr[i]);
        break;
      }
    }
    if (matches.length === secStr.length) {
      break;
    }
  }
  
  matches = matches.sort().join("");
  secStr = secStr.sort().join("");
  if (matches === secStr) {
    return true;
  } else {
    return false;
  }
}

mutation(['ell', 'leloleloell']);

// SECOND ATTEMPT
// Getting closer here. Worked in all matching test cases except for strings with double letters. 
// Turned out that the loop would push both letters each time through the loop, pushing the square amount of the duplicated letter to matches.
function mutation(arr) {
  var firstStr = arr[0].toUpperCase().split("");
  var secStr = arr[1].toUpperCase().split("");
  var matches = [];
  for (i = 0; i < firstStr.length; i++) {
    for (j = 0; j < secStr.length; j++) {
      if (firstStr[i] === secStr[j]) {
        matches.push(firstStr[i]);
      }
    }
  }  
  matches = matches.sort().join("");
  secStr = secStr.sort().join("");
  if (matches === secStr) {
    return true;
  } else {
    return false;
  }
}

mutation(['Heeello', 'heeello']);

// FIRST ATTEMPT
// The idea was to take the string, convert to an array, sort alphabetically, reduce the size of the longer string to match the shorter string, and then compare.
// Two key problems. One: Overly complex. Two: Matching letters are sliced out if string starts with non matching numbers after sort.
function mutation(arr) {
  var firstStr = arr[0].toLowerCase().split("").sort();
  var secStr = arr[1].toLowerCase().split("").sort();
  var firstLength = firstStr.length;
  var secLength = secStr.length;
  if (firstLength > secLength) {
    firstStr = firstStr.slice(firstLength - secLength);
  } else if (firstLength < secLength) {
    secStr = secStr.slice(secLength - firstLength);
  }
    firstStr = firstStr.join("");
    secStr = secStr.join("");
  if (firstStr === secStr) {
    return true;
  } else {
      return false;
  }
}

mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']);