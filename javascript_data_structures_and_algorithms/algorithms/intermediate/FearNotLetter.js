const fearNotLetter = str => {
	const charCodes = str.split("").map(char => char.charCodeAt());

	// if the current char code !== the next one, thats the missing letter

	for (let i = 0; i < charCodes.length; i++) {
		if (charCodes[i + 1] === undefined) return undefined;

		const nextCode = charCodes[i] + 1;
		if (charCodes[i + 1] !== nextCode) {
			return String.fromCharCode(nextCode);
		}
	}
};

console.log(fearNotLetter("abce")); // should return d
