const animals = {
	"Cat": "Fluffy",
	"Dog": "Fido",
	"Horse": "Mr. Ed",
	"Cow": "Betsy",
	"Coyote": "Wile E.",
	"Road Runner": "Beep Beep",
	"Dolphin": "Flipper",
	"Whale": "Moby Dick",
	"Lizard": "Larry"
}

let animalsMap = new Map();
animalsMap.set("Cat", "Fluffy");
animalsMap.set("Dog", "Fido");
animalsMap.set("Horse", "Mr. Ed");
animalsMap.set("Cow", "Betsy");
animalsMap.set("Coyote", "Wile E.");
animalsMap.set("Road Runner", "Beep Beep");
animalsMap.set("Dolphin", "Flipper");
animalsMap.set("Whale", "Moby Dick");
animalsMap.set("Lizard", "Larry");


/* ------------------------------------------------------- */

/* Maps keys can be any value - even an object */
/*
const animalObject = { "Bunny": ["Flopsy", "Mopsy", "Cottontail", "Peter"]};
animalsMap.set(animalObject, "Strange Object Key");
console.log(animalsMap.get(animalObject));
*/


/* Maps have easy iteration */
/*
console.log('Using MAP');
animalsMap.forEach( function (animalName, animalType) {
	console.log(`Type: ${animalType}, Name: ${animalName}`);
});
console.log("\n\nUsing OBJECT");
const animalKeys = Object.keys(animals);
animalKeys.forEach( function (animalKey) {
	console.log(`Type: ${animalKey}, Name: ${animals[animalKey]}`);
});
*/
/* Maps can tell you how big they are */
/*
console.log(`I have ${animalsMap.size} MAP animals.`);
const animalKeys = Object.keys(animals);
console.log(`I have ${animalKeys.length} OBJECT animals.`);
*/
