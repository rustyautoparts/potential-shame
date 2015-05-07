//Pig Latin
//
//Translate the provided string to pig latin.
//Pig Latin take the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//If a word begins with a vowel you just add "way" to the end.

function translate(str) {
	var firstVowel = str.search(/[a|e|i|o|u]/);
	if (firstVowel === 0) {
		return str + 'way';
	} else {
		var firstCluster = str.slice(0, firstVowel);
		return str.substr(firstVowel) + firstCluster + 'ay';
	}
}

translate("consonant");
// >> onsonantcay
translate("eight");
// >> eightway
translate("algorithm");
// >> algorithmway
translate("glove");
// >> oveglay
translate("paragraphs");
// >> arapgraphspay
translate("california");
// >> aliforniacay
