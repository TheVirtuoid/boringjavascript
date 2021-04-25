const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

const cat = animals[0];
const dog = animals[1];
const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

const report = `I have a ${cat}, a ${dog}, and a ${randomAnimal == cat ? `duplicate ` : `unique `}${randomAnimal}`;
console.log(report);