const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

let params = {animals: animals, fullCount: 0, cCount: 0, sixLetterCount: 0};

getFullCount(params)
	.then(getCCount)
	.then(getSixLetterCount)
	.then( params => console.log(params))
	.catch(whoopsies);
console.log('---Assigned all promises');

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








