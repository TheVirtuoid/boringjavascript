const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

let params = {animals: animals, fullCount: 0, cCount: 0, sixLetterCount: 0};
doAsyncFunction(params)
	.catch(whoopsies);
console.log('---Assigned doAsyncFunction');

async function doAsyncFunction(params) {
	params = await getFullCount(params);
	params = await getCCount(params);
	params = await getSixLetterCount(params);
	console.log(params);
}

function getFullCount(params) {
	return new Promise( (resolve, reject) => {
		setTimeout(function () {
			params.fullCount = params.animals.length;
			resolve(params);
		}, 500);
	})
}

function getCCount (params) {
	return new Promise( (resolve, reject) => {
		setTimeout( function () {
			params.cCount = 0;
			params.animals.forEach( (animal) => {
				if (animal.startsWith("C")) {
					params.cCount ++;
				}
			})
			resolve(params);
		}, 500);
	})
}

function getSixLetterCount (params) {
	return new Promise( (resolve, reject) => {
		setTimeout( function () {
			params.sixLetterCount = 0;
			params.animals.forEach( (animal) => {
				if (animal.length >= 6) {
					params.sixLetterCount ++;
				}
			});
			resolve(params);
		}, 500);
	})
}

function whoopsies (err) {
	console.log('----------GOT ERROR');
	console.log(err);
}
