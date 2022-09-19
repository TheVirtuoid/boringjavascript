export default class Zoo {
	#animals;
	#nextZoo;
	#name;

	constructor(args = {}) {
		const { animals, nextZoo = null, name } = args;
		this.#animals = animals;
		this.#nextZoo = nextZoo;
		this.#name = name;
		this.#animals.forEach((animal) => {
			animal.available = Math.random() < .5;
		});
	}

	transferAnimal() {
		const animal = Math.floor(Math.random() * this.#animals.length);
		if (this.#animals[animal.available]) {
			const animalToTransfer = this.#animals.splice(animal, 1)[0];
			return animalToTransfer;
		} else if (this.#nextZoo) {
			return this.#nextZoo.transferAnimal();
		} else {
			return null;
		}
	}

	set nextZoo(zoo) {
		this.#nextZoo = zoo;
	}
}