const pairElement = str => {
	const pairs = { A: "T", G: "C", T: "A", C: "G" };
	const splitStr = str.split("");

	const paired = splitStr.map(char => [char, pairs[char]]);

	return paired;
};

console.log(pairElement("GCG"));

// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
