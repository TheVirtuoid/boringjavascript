const animals = [
	{ type: "Cat", name: "Fluffy", size: "small" },
	{ type: "Dog", name: "Fido", size: "medium" },
	{ type: "Horse", name: "Mr. Ed", size: "big" },
	{ type: "Cow", name: "Betsy", size: "big" },
	{ type: "Coyote", name: "Wile E.", size: "medium" },
	{ type: "Road Runner", name: "Beep Beep", size: "small" },
	{ type: "Dolphin", name: "Flipper", size: "big" },
	{ type: "Whale", name: "Moby Dick", size: "huge" },
	{ type: "Lizard", name: "Larry", size: "tiny" }
];

function getReport(strings, animal) {
	if (animal) {
		return `
REPORT:
Animal collected: ${animal.type}
Animal name:      ${animal.name}
Animal size:      ${animal.size}
Comments:
	${strings.join(' ')}
`} else {
		return `
REPORT:
No animals to report upon.
Comments:
  ${strings.join(' ')}		
`
	}
}

const collectedAnimal = animals[Math.floor(Math.random() * animals.length)];
let report = getReport`We collected this animal in an alley behind the hospital. ${collectedAnimal}`;
console.log(report);

report = getReport`We found nothing.`;
console.log(report);

