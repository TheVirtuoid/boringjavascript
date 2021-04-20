const myAnimals = {
	Cat: "Fluffy",
	Dog: "Fido",
	Horse: {
		name: "Mr. Ed",
		trait: "Talks a lot"
	}
}

const yourAnimals = {
	Coyote: "Wile E.",
	Whale: "Moby Dick"
}

Object.assign(yourAnimals, myAnimals);

console.log('\nBEFORE NAME CHANGE');
console.log(yourAnimals);

myAnimals.Horse.name = "Wild Fire";

console.log('\nAFTER NAME CHANGE');
console.log(yourAnimals);

