const SLOTS = [
	{ name: "ONE HUNDRED", value: 100.0 },
	{ name: "TWENTY", value: 20.0 },
	{ name: "TEN", value: 10.0 },
	{ name: "FIVE", value: 5.0 },
	{ name: "ONE", value: 1.0 },
	{ name: "QUARTER", value: 0.25 },
	{ name: "DIME", value: 0.1 },
	{ name: "NICKEL", value: 0.05 },
	{ name: "PENNY", value: 0.01 }
];

const checkCashRegister = (price, cash, cid) => {
	let finalOutput = { status: null, change: [] };
	let changeRequired = cash - price;

	let drawer = { total: 0 };
	cid.forEach(slot => {
		drawer.total += slot[1];
		return (drawer[slot[0]] = slot[1]);
	});

	drawer.total = Math.round(drawer.total * 100) / 100;

	// console.log("Change Required", changeRequired);
	// console.log("Drawer Total", drawer.total);
	if (drawer.total === changeRequired) {
		finalOutput.status = "CLOSED";
		finalOutput.change = cid;
		return finalOutput;
	}

	if (drawer.total < changeRequired) {
		finalOutput.status = "INSUFFICIENT_FUNDS";
		return finalOutput;
	}

	// Loop through the denomination array
	const changeArray = SLOTS.reduce((newChangeArray, current) => {
		let value = 0;
		while (drawer[current.name] > 0 && changeRequired >= current.value) {
			// reduce money // fucking rounding error!
			changeRequired = Math.round((changeRequired - current.value) * 100) / 100;
			// take money out of drawer
			drawer[current.name] -= current.value;
			// put money in hand
			value += current.value;
		}

		changeRequired = Math.round(changeRequired * 100) / 100;

		if (value > 0) {
			// add the type and value quantity to change
			newChangeArray.push([current.name, value]);
		}
		return newChangeArray;
	}, []);

	console.log(changeRequired);
	// figure out if had enough
	if (changeArray.length === 0 || changeRequired > 0) {
		finalOutput.status = "INSUFFICIENT_FUNDS";
		return finalOutput;
	}

	finalOutput.status = "OPEN";
	finalOutput.change = changeArray;
	return finalOutput;
};
console.log(
	checkCashRegister(3.26, 100, [
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.1],
		["QUARTER", 4.25],
		["ONE", 90],
		["FIVE", 55],
		["TEN", 20],
		["TWENTY", 60],
		["ONE HUNDRED", 100]
	])
);
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
