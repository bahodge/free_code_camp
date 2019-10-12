const translatePigLatin = str => {
	const splitStr = str.split("");

	const isVowel = char => /[aeiou]/.test(char);

	// if first char is vowel add way
	if (splitStr[0].match(/[aeiou]/)) {
		return `${str}way`;
	}

	let cluster = "";
	for (let i = 0; i < splitStr.length; i++) {
		const char = splitStr[i];

		if (isVowel(char)) {
			break;
		} else {
			cluster += splitStr.shift();
			i--;
		}
	}
	splitStr.push(cluster);
	splitStr.push("ay");

	return splitStr.join("");
};

console.log(translatePigLatin("alifornia"));
console.log(translatePigLatin("california"));
