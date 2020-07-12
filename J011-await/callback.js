const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

let params = {animals: animals, fullCount: 0, cCount: 0, sixLetterCount: 0};

setTimeout (function () {
	params = getFullCount(params);
	setTimeout( function () {
		params = getCCount(params);
		setTimeout( function () {
			params = getSixLetterCount(params);
			setTimeout( function () {
				console.log(params);
			}, 500);
		}, 500);
	}, 500);
}, 500);
console.log('---Assigned all timeouts');

function getFullCount(params) {
	params.fullCount = params.animals.length;
	return params;
}

function getCCount (params) {
	params.cCount = 0;
	params.animals.forEach( (animal) => {
		if (animal.startsWith("C")) {
			params.cCount ++;
		}
	})
	return params;
}

function getSixLetterCount (params) {
	params.sixLetterCount = 0;
	params.animals.forEach( (animal) => {
		if (animal.length >= 6) {
			params.sixLetterCount ++;
		}
	});
	return params;
}
