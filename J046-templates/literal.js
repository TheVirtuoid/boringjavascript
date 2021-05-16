const animals = [
	"Cat", "Dog", "Horse", "Cow", "Coyote", "Road Runner", "Dolphin", "Whale", "Lizard"
];

const cat = animals[0];
const dog = animals[1];
const horse = animals[2];
let myAnimals;

myAnimals = "\nMy animals are a " + cat + ", a " + dog + ", and a " + horse + ".";
myAnimals = `\nMy animals are a ${cat}, a ${dog}, and a ${horse}.`;
console.log(myAnimals);













/*

myAnimals = `\nMy animals are a ${cat}, a ${dog}, and a ${horse}.`;
console.log(myAnimals);
*/


/*
myAnimals = `
My animals are:
 1. One ${cat},
 2. One ${dog}, 
 3. One ${horse}.
 `;
console.log(myAnimals);
*/


/*
function getRandomAnimals (animals) {
	let myAnimals = [];
	for (let i = 0; i < 3; i++) {
		myAnimals.push(animals[Math.floor(Math.random() * animals.length)]);
	}
	return myAnimals;
}

myAnimals = `
My animals are ${getRandomAnimals(animals).join(', ')}.`;
console.log(myAnimals);
*/
