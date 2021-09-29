const animals = [
	{ type: "Cat", name: "Fluffy", classification: 1 },
	{ type: "Dog", name: "Fido", classification: 1 },
	{ type: "Horse", name: "Mr. Ed", classification: 1 },
	{ type: "Cow", name: "Betsy", classification: 1 },
	{ type: "Coyote", name: "Wile E.", classification: 1 },
	{ type: "Road Runner", name: "Beep Beep", classification: 2 },
	{ type: "Dolphin", name: "Flipper", classification: 1 },
	{ type: "Whale", name: "Moby Dick", classification: 1 },
	{ type: "Lizard", name: "Larry", classification: 3 }
];

const nameLength = 10;
const typeLength = 11;
const classificationLength = 14;

const printAnimal = (animal) => {
	const { type, name, classification } = animal;
	const output = `${rightJustify(name, nameLength)}  ${leftJustify(type, typeLength)}  ${rightJustifyNumber(classification.toString(), classificationLength)}`;
	console.log(output);
}

const rightJustify = (text, fullLength) => {
	return `${' '.repeat(fullLength - text.length)}${text}`;
}

const leftJustify = (text, fullLength) => {
	return text.padEnd(fullLength);
}

const rightJustifyNumber = (text, fullLength) => {
	return `${'*'.repeat(fullLength - text.length)}${text}`;
}

console.log(`\n${rightJustify("Name", nameLength)}  ${leftJustify("Type", typeLength)}  ${rightJustify("Classification", classificationLength)}`);
console.log(`${"-".repeat(nameLength)}  ${"-".repeat(typeLength)}  ${"-".repeat(classificationLength)}`);
animals.forEach( (animal) => printAnimal(animal));