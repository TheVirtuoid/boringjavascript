const animals = [
	{ type: "Cat", name: "Fluffy" },
	{ type: "Dog", name: "Fido" },
	{ type: "Horse", name: "Mr. Ed" },
	{ type: "Cow", name: "Betsy" },
	{ type: "Coyote", name: "Wile E." },
	{ type: "Road Runner", name: "Beep Beep" },
	{ type: "Dolphin", name: "Flipper" },
	{ type: "Whale", name: "Moby Dick" },
	{ type: "Lizard", name: "Larry" }
];

let animalsMap = new Map();

animals.forEach( (animal) => animalsMap.set(animal.type, animal.name));

const haveCat = animalsMap.has("Cat");
const havePony = animalsMap.has("Pony");
const myCatName = animalsMap.get("Cat");

console.log(`Do I have a cat?  ${haveCat ? "Yes": "No"}`);
console.log(`Do I have a pony? ${havePony ? "Yes": "No"}`);
console.log(`My cat's name is ${myCatName}`);
