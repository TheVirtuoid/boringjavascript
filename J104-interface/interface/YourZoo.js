import IZoo from "./IZoo.js";

export default class YourZoo extends IZoo {

	#animals;

	constructor(args) {
		super();
		this.#animals = {};
	}

	get animals() {
		return Object.values(this.#animals);
	}

	addAnimal(animal) {
		this.#animals[animal.id] = animal;
	}

	removeAnimal(animal) {
		delete this.#animals[animal.id];
	}

	changeAnimal(animal) {
		if (this.#animals[animal.id]) {
			this.#animals[animal.id] = animal;
		}
	}
}