import IZoo from "./IZoo.js";

export default class MyZoo extends IZoo {

	#animals;

	constructor(args) {
		super();
		this.#animals = new Map();
	}

	get animals() {
		return [...this.#animals.values()];
	}

	addAnimal(animal) {
		this.#animals.set(animal.id, animal);
	}

	removeAnimal(animal) {
		this.#animals.delete(animal.id);
	}

	changeAnimal(animal) {
		if (this.#animals.has(animal.id)) {
			this.#animals.set(animal.id, animal);
		}
	}
}