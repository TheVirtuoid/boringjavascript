const fs = require('fs').promises;
const params = {
	animals: [ "Coyote", "Cat"],
	results: {}
}
readAnimalFiles(params)
	.then(printResults)
	.catch(whoopsies);


async function readAnimalFiles (params) {
	let allAnimals = [];
	params.animals.forEach( (animal) => {
		allAnimals.push(fs.readFile(`./${animal.toLowerCase()}.json`));
	});
	params.results = await Promise.all(allAnimals);
	return params;
}

function printResults (params) {
	console.log(`
+-----------------------------------+
| Low Elevation Reading for Zone 1A |
+-----------------------------------|
| Animal | Reading                  |
+--------+--------------------------+`)
	params.results.forEach( (result, animalIndex, animalArray) => {
		const data = JSON.parse(result.toString());
		const animalName = params.animals[animalIndex];
		let reading = data?.habitat?.zone?.A1?.elevations?.low;
		reading = reading === undefined ? "n/a" : reading.toString();
		console.log(`| ${animalName}${' '.repeat(6 - animalName.length)} | ${reading}${' '.repeat(24 - reading.length)} |`);
	});
	console.log('+--------+--------------------------+');
	return Promise.resolve(true);
}

function whoopsies (err) {
	console.log(err);
}





/*
let reading = undefined;
if (data  && data.habitat && data.habitat.zone && data.habitat.zone.A1 && data.habitat.zone.A1.elevations) {
	reading = data.habitat.zone.A1.elevations.low;
}
*/


/*
let reading = data ? data.habitat ? data.habitat.zone ? data.habitat.zone.A1 ? data.habitat.zone.A1.elevations ? data.habitat.zone.A1.elevations.low : undefined : undefined : undefined : undefined : undefined;
*/

