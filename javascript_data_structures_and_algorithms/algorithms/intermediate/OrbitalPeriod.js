const orbitalPeriod = arr => {
	const GM = 398600.4418;
	const earthRadius = 6367.4447;
	let a = 2 * Math.PI;
	let newArr = [];
	let getOrbPeriod = obj => {
		const c = Math.pow(earthRadius + obj.avgAlt, 3);
		const b = Math.sqrt(c / GM);
		const orbPeriod = Math.round(a * b);
		delete obj.avgAlt;
		obj.orbitalPeriod = orbPeriod;
		return obj;
	};

	for (let elem in arr) {
		newArr.push(getOrbPeriod(arr[elem]));
	}

	return newArr;
};

// test here
console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
