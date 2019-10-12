const myReplace = (str, before, after) => {
	const splitBefore = before.split("");
	const splitAfter = after.split("");
	if (splitBefore[0].match(/[A-Z]/)) {
		splitAfter[0] = splitAfter[0].toUpperCase();
	}
	const fixedAfter = splitAfter.join("");
	const splitStr = str.split(" ");

	const replacedStr = splitStr
		.map(word => {
			return (word = word === before ? fixedAfter : word);
		})
		.join(" ");

	return replacedStr;
};

console.log(
	myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);
console.log(myReplace("Let us go to the store", "store", "mall"));
// myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
