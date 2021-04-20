const myAnimals = {
	"Cat": "Fluffy",
	"Dog": "Fido",
	"Horse": "Mr. Ed",
	"Cow": "Betsy"
};
const yourAnimals = {
	"Coyote": "Wile E.",
	"Cat": "Mr. Jingles"
};

Object.assign(yourAnimals, myAnimals);

console.log(myAnimals);
console.log(yourAnimals);
