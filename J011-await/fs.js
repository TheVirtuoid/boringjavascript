const fs = require('fs').promises;
const path = require('path');

let whichAnimal = "Coyote"
lookUpAnimals(whichAnimal)
	.catch( (err) => {
		console.log('------ERROR: Below is the error:');
		console.log(err);
	})


























async function lookUpAnimals(whichAnimal) {
	let animalsDataPath = path.join(process.cwd(), "./animals1.json");
	let animalsData = await fs.readFile(animalsDataPath);
	let animals = JSON.parse(animalsData.toString());
	printAnimals(animals);
	if (animals.includes(whichAnimal)) {
		let animalDataPath = path.join(process.cwd(), `./${whichAnimal.toLowerCase()}.json`);
		let animalStats = await fs.readFile(animalDataPath);
		let animal = JSON.parse(animalStats.toString());
		printAnimal(whichAnimal, animal);
	}
}


















function printAnimals (animals) {
	const maxLength = animals.reduce( (accumulate, animal) => Math.max(accumulate, animal.length), 0);
	console.log(`+-${"-".repeat(maxLength)}-+`);
	console.log(`| My Animals${" ".repeat(maxLength - "My Animals".length)} |`);
	console.log(`+-${"-".repeat(maxLength)}-+`);
	animals.forEach( (animal) => {
		console.log(`| ${animal}${" ".repeat(maxLength - animal.length)} |`);
	});
	console.log(`+-${"-".repeat(maxLength)}-+`);
}

function printAnimal (name, animal) {
	let statLength = 0;
	let valueLength = 0;
	for (let i in animal) {
		statLength = Math.max(statLength, i.length);
		valueLength = Math.max(valueLength, animal[i].length);
	}
	console.log(`+-${"-".repeat(statLength + valueLength + 3)}-+`);
	console.log(`| ${name}${" ".repeat(statLength + valueLength + 3 - name.length)} |`);
	console.log(`+-${"-".repeat(statLength)}-+-${"-".repeat(valueLength)}-+`);
	console.log(`| Stat${" ".repeat(statLength - "Stat".length)} | Value${" ".repeat(valueLength - "Value".length)} |`);
	console.log(`+-${"-".repeat(statLength)}-+-${"-".repeat(valueLength)}-+`);
	for (let i in animal) {
		console.log(`| ${i}${" ".repeat(statLength - i.length)} | ${animal[i]}${" ".repeat(valueLength - animal[i].length)} |`);
	}
	console.log(`+-${"-".repeat(statLength)}-+-${"-".repeat(valueLength)}-+`);
}
