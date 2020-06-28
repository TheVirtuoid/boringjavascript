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

/*const myCatObject = animals["Cat"];
const myCatMap = animalsMap.get("Cat");

console.log(myCatObject);
console.log(myCatMap);*/

const haveCatObject = animals["Cat"] !== undefined;
const haveCatMap = animalsMap.has("Cat");
const havePonyObject = !!animals["Pony"];
const havePonyMap = animalsMap.has("Pony");

console.log(`Do I have a Cat Object?  ${haveCatObject? 'Yes' : 'No'}`);
console.log(`Do I have a Cat Map?     ${haveCatMap? 'Yes' : 'No'}`);
console.log(`Do I have a Pony Object? ${havePonyObject? 'Yes' : 'No'}`);
console.log(`Do I have a Pony Map?    ${havePonyMap? 'Yes' : 'No'}`);
