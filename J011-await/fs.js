const fs = require('fs').promises;
const path = require('path');

let getCoyoteStats = true;
lookUpAnimals(getCoyoteStats)
	.catch( (err) => {
		console.log('------ERROR: Below is the error:');
		console.log(err);
	})


























async function lookUpAnimals(getCoyoteStats) {
	let animalDataPath = path.join(process.cwd(), "./animals.json");
	let animalData = await fs.readFile(animalDataPath);
	let animals = JSON.parse(animalData.toString());
	printAnimals(animals);
	if (getCoyoteStats) {
		let coyoteDataPath = path.join(process.cwd(), "./coyote.json");
		let coyoteStats = await fs.readFile(coyoteDataPath);
		let coyote = JSON.parse(coyoteStats.toString());
		printAnimal("Coyote", coyote);
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
