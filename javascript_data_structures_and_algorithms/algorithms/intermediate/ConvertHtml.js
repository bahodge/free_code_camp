const convertHTML = str => {
	const values = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&apos;"
	};

	const splitStr = str.split("");

	const replacedStr = splitStr.map(char => {
		if (char.match(/[a-zA-Z0-9\s+]/)) {
			return char;
		} else {
			return values[char];
		}
	});

	return replacedStr.join("");
};

console.log(convertHTML("Schindler's List"));
