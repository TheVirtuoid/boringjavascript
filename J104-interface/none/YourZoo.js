export default class YourZoo {

	#animals;

	constructor(args) {
		this.#animals = {};
	}

	get animals() {
		return Object.values(this.#animals);
	}

	placeANewAnimalsIntoTheZoo(animal) {
		this.#animals[animal.id] = animal;
	}

	removeAnAnimalFromTheZoo(animal) {
		delete this.#animals[animal.id];
	}

	changeSomethingAboutTheAnimal(animal) {
		if (this.#animals[animal.id]) {
			this.#animals[animal.id] = animal;
		}
	}
}