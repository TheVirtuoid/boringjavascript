const animals = {
	1: { "type": "Cat", "name": "Fluffy", "classification": "Mammalia" },
	2: { single: { "type": "Dog", "name": "Fido", "classification": "Mammalia" }},
	3: { "type": "Horse", "name": "Mr. Ed", "classification": "Mammalia" },
	4: { single: { double: { "type": "Cow", "name": "Betsy", "classification": "Mammalia" }}},
	5: { single: { double: { "type": "Coyote", "name": "Wile E.", "classification": "Mammalia" }}},
	6: { single: { double: { triple: { "type": "Road Runner", "name": "Beep Beep", "classification": "Aves" }}}},
	7: { "type": "Dolphin", "name": "Flipper",  "classification": "Mammalia" },
	8: { single: { "type": "Whale", "name": "Moby Dick", "classification": "Mammalia" }},
	9: { single: { double: { "type": "Lizard", "name": "Larry", "classification": "Reptilia" }}}
};

const processData = function* () {
	const keys = Object.keys(animals);
	for (let i = 0, l = keys.length; i < l; i++) {
		const animal = animals[keys[i]];
		let type, name, classification;
		switch(keys[i]) {
			case '1':
			case '3':
			case '7':
				({ type, name, classification } = animal);
				break;
			case '2':
			case '8':
				({ type, name, classification } = animal.single);
				break;
			case '4':
			case '5':
			case '9':
				({ type, name, classification } = animal.single.double);
				break;
			case '6':
				({ type, name, classification } = animal.single.double.triple);
				break;
		}
		yield { type, name, classification };
	};
}

const ul = document.getElementById('animal-list-one');
const animalList = processData();
let animal = animalList.next();
while (!animal.done) {
	const { type, name, classification } = animal.value;
	ul.insertAdjacentHTML('beforeend', `<li>${type}, ${name}, ${classification}</li>`);
	animal = animalList.next();
}

